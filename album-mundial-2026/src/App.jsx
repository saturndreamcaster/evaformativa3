import React, { useState } from 'react'
import './App.css'
import StickerCard from './components/StickerCard'
import { stickers } from './data/stickers'

function App() {
  // Estado inicial: todas las figuritas en 'Falta'
  const initialStatuses = Object.fromEntries(stickers.map((s) => [s.id, 'Falta']))
  const [statuses, setStatuses] = useState(initialStatuses)

  // Controles de búsqueda y filtro
  const [query, setQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('Todas')

  // Mostrar todas las figuritas por defecto
  const sample = stickers

  function handleStatusChange(id) {
    setStatuses((prev) => {
      const order = ['Falta', 'Tengo', 'Repetida']
      const current = prev[id] || 'Falta'
      const next = order[(order.indexOf(current) + 1) % order.length]
      return { ...prev, [id]: next }
    })
  }

  function handleFilterClick(value) {
    setStatusFilter(value)
  }

  const normalizedQuery = query.trim().toLowerCase()

  const filtered = sample.filter((s) => {
    // Filtrar por búsqueda: nombre o código/numero
    const matchesQuery = !normalizedQuery ||
      s.name.toLowerCase().includes(normalizedQuery) ||
      (s.code && s.code.toLowerCase().includes(normalizedQuery)) ||
      String(s.id).includes(normalizedQuery)

    // Filtrar por estado
    const currentStatus = statuses[s.id] || 'Falta'
    const matchesStatus =
      statusFilter === 'Todas' ||
      (statusFilter === 'Tengo' && currentStatus === 'Tengo') ||
      (statusFilter === 'Repetida' && currentStatus === 'Repetida') ||
      (statusFilter === 'Falta' && currentStatus === 'Falta')

    return matchesQuery && matchesStatus
  })

  return (
    <div className="app-root">
      <header>
        <h1>Álbum Mundial 2026 — Índice</h1>
        <p>Haz click en una tarjeta para alternar: Falta → Tengo → Repetida</p>
      </header>

      <div className="controls">
        <input
          type="search"
          placeholder="Buscar por nombre o número..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Buscar figuritas"
        />

        <div className="filters">
          {['Todas', 'Tengo', 'Repetida', 'Falta'].map((f) => (
            <button
              key={f}
              className={"filter-btn " + (statusFilter === f ? 'active' : '')}
              onClick={() => handleFilterClick(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="result-count">Mostrando {filtered.length} de {sample.length}</div>
      </div>

      <main>
        <section className="sticker-grid">
          {filtered.map((s) => (
            <StickerCard
              key={s.id}
              id={s.id}
              number={s.code}
              name={s.name}
              group={s.section}
              status={statuses[s.id]}
              img={`https://via.placeholder.com/160x200?text=${encodeURIComponent(s.code)}`}
              handleStatusChange={handleStatusChange}
            />
          ))}
        </section>
      </main>
    </div>
  )
}

export default App
