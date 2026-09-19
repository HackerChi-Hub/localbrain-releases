import { useCallback, useEffect, useRef, useState } from 'react'
import { invoke, isTauri } from '@tauri-apps/api/core'
import { listen, type UnlistenFn } from '@tauri-apps/api/event'

export type Lang = 'zh-CN' | 'zh-TW' | 'en'
export type Model = { id: string; name?: string }

function ModelCard({ model, lang }: { model: Model; lang: Lang }) {
  const [downloading, setDownloading] = useState(false)
  const [downloadProgress, setDownloadProgress] = useState(0)
  const [imported, setImported] = useState(false)
  const lastProgressRef = useRef(0)
  const onDownloadEvent = useCallback((payload: any) => {
    const percent = Number(payload?.percent ?? 0)
    const normalized = Math.min(100, Math.max(0, Number.isFinite(percent) ? percent : 0))
    if (payload?.done) {
      lastProgressRef.current = 0
      setDownloading(false)
      setDownloadProgress(100)
      setImported(true)
      return
    }
    setDownloading(true)
    lastProgressRef.current = Math.max(lastProgressRef.current, normalized)
    setDownloadProgress(lastProgressRef.current)
  }, [])
  const onImportEvent = useCallback((payload: any) => {
    if (payload?.done) {
      lastProgressRef.current = 0
      setDownloading(false)
      setDownloadProgress(100)
      setImported(true)
    }
  }, [])
  const startDownload = () => {
    if (downloading || imported) return
    setDownloading(true)
    setDownloadProgress(0)
    invoke('download_and_import', { modelId: model.id, modelDir: null, proxy: null })
      .catch((err) => {
        lastProgressRef.current = 0
        setDownloading(false)
        setDownloadProgress(0)
        console.error(err)
      })
  }
  useEffect(() => {
    if (!isTauri) return
    let cancelled = false
    const unlisten: UnlistenFn[] = []
    const off1 = listen('model-download-progress', (e) => {
      const p = (e.payload ?? {}) as any
      if (p.modelId !== model.id) return
      onDownloadEvent(p)
    })
    const off2 = listen('model-import-complete', (e) => {
      const p = (e.payload ?? {}) as any
      if (p.modelId !== model.id) return
      onImportEvent(p)
    })
    off1.then((fn) => { if (!cancelled) unlisten.push(fn) })
    off2.then((fn) => { if (!cancelled) unlisten.push(fn) })
    return () => {
      cancelled = true
      unlisten.forEach((fn) => fn())
    }
  }, [model.id, onDownloadEvent, onImportEvent])
  return (
    <div data-lang={lang} style={{ padding: 12, border: '1px solid #ddd', borderRadius: 8 }}>
      <div>{model.name ?? model.id}</div>
      <div>{downloadProgress}%</div>
      {!downloading && !imported && <button onClick={startDownload}>Download</button>}
      {imported && <div>Imported</div>}
    </div>
  )
}

export default function DiscoverPanel({ lang = 'zh-CN', models = [] }: { lang?: Lang; models?: Model[] }) {
  return <div>{models.map((m) => <ModelCard key={m.id} model={m} lang={lang} />)}</div>
}
