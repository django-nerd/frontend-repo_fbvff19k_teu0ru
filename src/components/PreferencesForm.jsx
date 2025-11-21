import React, { useState } from 'react'

export default function PreferencesForm({ onGenerate, loading }) {
  const [form, setForm] = useState({
    surname: '',
    cultures: '',
    languages: '',
    beliefs: '',
    family_origins: '',
    parent_names: '',
    sibling_names: '',
    gender: '',
    style: '',
    starts_with: '',
    max_length: '',
    uniqueness: 'balanced',
    quantity: 12,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const toList = (v) => v.split(',').map((s) => s.trim()).filter(Boolean)

  const submit = (e) => {
    e.preventDefault()
    const payload = {
      surname: form.surname,
      cultures: toList(form.cultures),
      languages: toList(form.languages),
      beliefs: toList(form.beliefs),
      family_origins: toList(form.family_origins),
      parent_names: toList(form.parent_names),
      sibling_names: toList(form.sibling_names),
      gender: form.gender || null,
      style: form.style || null,
      starts_with: form.starts_with || null,
      max_length: form.max_length ? Number(form.max_length) : null,
      uniqueness: form.uniqueness || null,
      quantity: form.quantity ? Number(form.quantity) : 12,
    }
    onGenerate(payload)
  }

  const input = "block w-full bg-slate-900/40 border border-slate-700 text-white placeholder:text-slate-400 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
  const label = "text-sm text-blue-200"

  return (
    <form onSubmit={submit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className={label}>Surname</label>
        <input name="surname" value={form.surname} onChange={handleChange} className={input} placeholder="e.g., Johnson" />
      </div>

      <div>
        <label className={label}>Cultures (comma separated)</label>
        <input name="cultures" value={form.cultures} onChange={handleChange} className={input} placeholder="e.g., Irish, Indian" />
      </div>

      <div>
        <label className={label}>Languages (comma separated)</label>
        <input name="languages" value={form.languages} onChange={handleChange} className={input} placeholder="e.g., English, Hindi" />
      </div>

      <div>
        <label className={label}>Beliefs/Themes (comma separated)</label>
        <input name="beliefs" value={form.beliefs} onChange={handleChange} className={input} placeholder="e.g., biblical, nature" />
      </div>

      <div>
        <label className={label}>Family Origins (comma separated)</label>
        <input name="family_origins" value={form.family_origins} onChange={handleChange} className={input} placeholder="e.g., Spain, Nigeria" />
      </div>

      <div>
        <label className={label}>Parents' Names (comma separated)</label>
        <input name="parent_names" value={form.parent_names} onChange={handleChange} className={input} placeholder="e.g., Maria, David" />
      </div>

      <div>
        <label className={label}>Siblings' Names (comma separated)</label>
        <input name="sibling_names" value={form.sibling_names} onChange={handleChange} className={input} placeholder="e.g., Noah, Mia" />
      </div>

      <div>
        <label className={label}>Gender</label>
        <select name="gender" value={form.gender} onChange={handleChange} className={input}>
          <option value="">Any</option>
          <option value="boy">Boy</option>
          <option value="girl">Girl</option>
          <option value="unisex">Unisex</option>
        </select>
      </div>

      <div>
        <label className={label}>Style</label>
        <select name="style" value={form.style} onChange={handleChange} className={input}>
          <option value="">Any</option>
          <option value="classic">Classic</option>
          <option value="modern">Modern</option>
          <option value="nature">Nature</option>
          <option value="virtue">Virtue</option>
          <option value="myth">Myth</option>
          <option value="religious">Religious</option>
        </select>
      </div>

      <div>
        <label className={label}>Starts With</label>
        <input name="starts_with" value={form.starts_with} onChange={handleChange} className={input} placeholder="e.g., A" />
      </div>

      <div>
        <label className={label}>Max Length</label>
        <input name="max_length" value={form.max_length} onChange={handleChange} className={input} placeholder="e.g., 5" />
      </div>

      <div>
        <label className={label}>Uniqueness</label>
        <select name="uniqueness" value={form.uniqueness} onChange={handleChange} className={input}>
          <option value="common">Common</option>
          <option value="balanced">Balanced</option>
          <option value="unique">Unique</option>
        </select>
      </div>

      <div>
        <label className={label}>Quantity</label>
        <input name="quantity" type="number" value={form.quantity} onChange={handleChange} className={input} min={1} max={24} />
      </div>

      <div className="md:col-span-2 flex gap-3 pt-2">
        <button type="submit" disabled={loading} className="flex-1 bg-blue-500 hover:bg-blue-600 disabled:opacity-60 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
          {loading ? 'Generating...' : 'Generate Names'}
        </button>
        <a href="/test" className="px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-blue-200 hover:bg-slate-700 transition">Check Backend</a>
      </div>
    </form>
  )
}
