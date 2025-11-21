import React from 'react'

export default function Header() {
  return (
    <header className="text-center mb-10">
      <div className="inline-flex items-center justify-center mb-6">
        <img
          src="/flame-icon.svg"
          alt="Flames"
          className="w-16 h-16 drop-shadow-[0_0_25px_rgba(59,130,246,0.5)]"
        />
      </div>
      <h1 className="text-4xl font-bold text-white tracking-tight">Baby Name Generator</h1>
      <p className="text-blue-200 mt-2 max-w-2xl mx-auto">
        Generate meaningful baby names tailored to your culture, languages, beliefs, family origins, and surname.
      </p>
    </header>
  )
}
