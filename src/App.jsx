import React, { useState } from 'react'
import Header from './components/Header'
import PreferencesForm from './components/PreferencesForm'
import Suggestions from './components/Suggestions'

function App() {
  const [suggestions, setSuggestions] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const onGenerate = async (payload) => {
    setLoading(true)
    setError('')
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) {
        throw new Error(`Request failed: ${res.status}`)
      }
      const data = await res.json()
      setSuggestions(data.suggestions || [])
    } catch (e) {
      setError(e.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.06),transparent_55%)]"></div>

      <div className="relative max-w-5xl mx-auto px-6 py-12">
        <Header />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6 shadow-xl">
            <PreferencesForm onGenerate={onGenerate} loading={loading} />
            {error && <p className="mt-4 text-red-300 text-sm">{error}</p>}
          </div>

          <div className="lg:col-span-1 bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6 shadow-xl">
            <h2 className="text-white font-semibold mb-3">Suggestions</h2>
            <Suggestions suggestions={suggestions} />
          </div>
        </div>

        <p className="text-center text-blue-300/60 text-xs mt-8">Tip: separate multiple values with commas.</p>
      </div>
    </div>
  )
}

export default App
