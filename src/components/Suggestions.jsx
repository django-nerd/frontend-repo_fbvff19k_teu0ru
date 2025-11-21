import React from 'react'

export default function Suggestions({ suggestions = [] }) {
  if (!suggestions.length) {
    return (
      <div className="text-center text-blue-200/80 text-sm">
        Your suggestions will appear here.
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {suggestions.map((s, idx) => (
        <div key={idx} className="bg-slate-800/60 border border-slate-700 rounded-xl p-4">
          <div className="flex items-baseline justify-between">
            <h3 className="text-lg font-semibold text-white">{s.name}</h3>
            <span className="text-xs text-blue-300/70">Score {s.score?.toFixed?.(2) ?? s.score}</span>
          </div>
          <p className="text-blue-200/90 text-sm mt-1">
            {s.gender ? `${s.gender} • ` : ''}{s.origin || '—'}
          </p>
          {s.meaning && (
            <p className="text-blue-200/80 text-sm mt-2 italic">“{s.meaning}”</p>
          )}
          {s.themes?.length ? (
            <div className="flex flex-wrap gap-1 mt-3">
              {s.themes.map((t, i) => (
                <span key={i} className="text-xs bg-blue-500/10 border border-blue-500/20 text-blue-200 rounded px-2 py-0.5">{t}</span>
              ))}
            </div>
          ) : null}
        </div>
      ))}
    </div>
  )
}
