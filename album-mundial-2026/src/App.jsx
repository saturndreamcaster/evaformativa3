import React from 'react'
import './App.css'
import StickerCard from './components/StickerCard'
import { stickers } from './data/stickers'

function App() {
  // Selecciono 5 figuritas de ejemplo desde los datos
  const sample = stickers.slice(12, 17)
  const statuses = ['ya la tengo', 'repetido', 'me falta', 'ya la tengo', 'repetido']

  return (
    <div className="app-root">
      <header>
        <h1>Álbum Mundial 2026 — Ejemplo</h1>
        <p>Estado de las figuritas: verde = ya la tengo, amarillo = repetido, rojo = me falta</p>
      </header>

      <main>
        <section className="sticker-grid">
          {sample.map((s, i) => (
            <StickerCard
              key={s.code}
              number={s.code}
              name={s.name}
              group={s.section}
              status={statuses[i]}
              img={`https://via.placeholder.com/160x200?text=${encodeURIComponent(s.code)}`}
            />
          ))}
        </section>
      </main>
    </div>
  )
}

export default App
