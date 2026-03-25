'use client'

import { useState, useEffect, useCallback } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

type Tab = 'messages' | 'contenu' | 'horaires'

type Message = {
  id: string
  name: string
  email: string
  message: string
  read: boolean
  created_at: string
}

type ContentRow = {
  id: string
  value: string
}

export default function AdminPage() {
  const [tab, setTab] = useState<Tab>('messages')
  const [messages, setMessages] = useState<Message[]>([])
  const [content, setContent] = useState<ContentRow[]>([])
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [loading, setLoading] = useState(true)

  const loadMessages = useCallback(async () => {
    const { data } = await supabase
      .from('contact_messages')
      .select('*')
      .order('created_at', { ascending: false })
    if (data) setMessages(data)
  }, [])

  const loadContent = useCallback(async () => {
    const { data } = await supabase.from('site_content').select('*')
    if (data) setContent(data)
  }, [])

  useEffect(() => {
    const load = async () => {
      setLoading(true)
      await Promise.all([loadMessages(), loadContent()])
      setLoading(false)
    }
    load()
  }, [loadMessages, loadContent])

  const markRead = async (id: string) => {
    await supabase.from('contact_messages').update({ read: true }).eq('id', id)
    setMessages(messages.map(m => m.id === id ? { ...m, read: true } : m))
  }

  const updateContent = (id: string, value: string) => {
    setContent(content.map(c => c.id === id ? { ...c, value } : c))
  }

  const saveContent = async () => {
    setSaving(true)
    for (const row of content) {
      await supabase.from('site_content').upsert({ id: row.id, value: row.value, updated_at: new Date().toISOString() })
    }
    setSaving(false)
    setSaved(true)
    setTimeout(() => setSaved(false), 2500)
  }

  const unread = messages.filter(m => !m.read).length

  return (
    <div className="min-h-screen bg-[#F5F5F4]" style={{ fontFamily: 'var(--font-dm-sans)' }}>
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <div>
          <p className="text-xs text-gray-400 tracking-widest uppercase">Administration</p>
          <h1 className="text-lg font-medium text-gray-900" style={{ fontFamily: 'var(--font-cormorant)' }}>
            TERRE DE FEMMES
          </h1>
        </div>
        <a href="/" className="text-xs text-[#C8A050] hover:underline tracking-widest uppercase">
          ← Voir le site
        </a>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-52 bg-white border-r border-gray-200 min-h-[calc(100vh-61px)] p-4">
          <nav className="flex flex-col gap-1">
            {([
              { id: 'messages', label: 'Messages', badge: unread },
              { id: 'contenu', label: 'Textes du site', badge: 0 },
              { id: 'horaires', label: 'Horaires', badge: 0 },
            ] as { id: Tab; label: string; badge: number }[]).map(item => (
              <button
                key={item.id}
                onClick={() => setTab(item.id)}
                className={`flex items-center justify-between px-3 py-2.5 text-sm rounded-md text-left transition-colors ${
                  tab === item.id
                    ? 'bg-[#C8A050]/10 text-[#C8A050] font-medium'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {item.label}
                {item.badge > 0 && (
                  <span className="bg-[#C8A050] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </aside>

        {/* Contenu principal */}
        <main className="flex-1 p-8 max-w-4xl">
          {loading ? (
            <div className="text-gray-400 text-sm">Chargement...</div>
          ) : (
            <>
              {/* Messages */}
              {tab === 'messages' && (
                <div>
                  <h2 className="text-xl font-medium text-gray-900 mb-6">Messages de contact</h2>
                  {messages.length === 0 ? (
                    <p className="text-gray-400 text-sm">Aucun message pour le moment.</p>
                  ) : (
                    <div className="flex flex-col gap-3">
                      {messages.map(m => (
                        <div
                          key={m.id}
                          className={`bg-white border rounded-lg p-5 ${m.read ? 'border-gray-200 opacity-60' : 'border-[#C8A050]/40'}`}
                        >
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <p className="font-medium text-gray-900 text-sm">{m.name}</p>
                              <a href={`mailto:${m.email}`} className="text-[#C8A050] text-xs hover:underline">{m.email}</a>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="text-gray-400 text-xs">
                                {new Date(m.created_at).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' })}
                              </span>
                              {!m.read && (
                                <button
                                  onClick={() => markRead(m.id)}
                                  className="text-xs text-gray-400 hover:text-gray-600 border border-gray-200 rounded px-2 py-1"
                                >
                                  Marquer lu
                                </button>
                              )}
                            </div>
                          </div>
                          <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-wrap">{m.message}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Contenu site */}
              {tab === 'contenu' && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-medium text-gray-900">Textes du site</h2>
                    <button
                      onClick={saveContent}
                      disabled={saving}
                      className="bg-[#C8A050] text-white text-xs tracking-widest uppercase px-5 py-2.5 hover:bg-[#B05030] transition-colors disabled:opacity-50"
                    >
                      {saved ? '✓ Sauvegardé' : saving ? 'Sauvegarde...' : 'Sauvegarder'}
                    </button>
                  </div>
                  <div className="flex flex-col gap-5">
                    {content.filter(c => c.id !== 'horaires').map(c => (
                      <div key={c.id} className="bg-white border border-gray-200 rounded-lg p-5">
                        <label className="block text-xs text-gray-400 tracking-widest uppercase mb-2">{c.id}</label>
                        <textarea
                          value={c.value}
                          onChange={e => updateContent(c.id, e.target.value)}
                          rows={3}
                          className="w-full border border-gray-200 rounded p-3 text-sm text-gray-700 focus:outline-none focus:border-[#C8A050] resize-y"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Horaires */}
              {tab === 'horaires' && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-medium text-gray-900">Horaires d&apos;ouverture</h2>
                    <button
                      onClick={saveContent}
                      disabled={saving}
                      className="bg-[#C8A050] text-white text-xs tracking-widest uppercase px-5 py-2.5 hover:bg-[#B05030] transition-colors disabled:opacity-50"
                    >
                      {saved ? '✓ Sauvegardé' : saving ? 'Sauvegarde...' : 'Sauvegarder'}
                    </button>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-5">
                    <p className="text-xs text-gray-400 mb-3">Format : Jour : HHhXX | Jour2 : HHhXX</p>
                    {content.filter(c => c.id === 'horaires').map(c => (
                      <textarea
                        key={c.id}
                        value={c.value}
                        onChange={e => updateContent(c.id, e.target.value)}
                        rows={4}
                        className="w-full border border-gray-200 rounded p-3 text-sm text-gray-700 focus:outline-none focus:border-[#C8A050] resize-y"
                      />
                    ))}
                  </div>
                  <p className="text-xs text-gray-400 mt-4">
                    Note : La mise à jour ici modifie la base de données. Pour refléter les changements sur le site, un redéploiement sera nécessaire si les horaires sont statiques.
                  </p>
                </div>
              )}
            </>
          )}
        </main>
      </div>
    </div>
  )
}
