import React from 'react'

export default function AlbumSummary({ stickers, statuses }) {
  const total = stickers.length
  const values = Object.values(statuses || {})
  const tengo = values.filter((s) => s === 'Tengo').length
  const repetidas = values.filter((s) => s === 'Repetida').length
  const faltan = values.filter((s) => s === 'Falta').length
  const completitud = total > 0 ? Math.round((tengo / total) * 100) : 0

  return (
    <section className="album-summary">
      <div className="summary-row">
        <div className="summary-item">
          <div className="label">Total</div>
          <div className="value">{total}</div>
        </div>
        <div className="summary-item">
          <div className="label">Tengo</div>
          <div className="value">{tengo}</div>
        </div>
        <div className="summary-item">
          <div className="label">Repetidas</div>
          <div className="value">{repetidas}</div>
        </div>
        <div className="summary-item">
          <div className="label">Faltan</div>
          <div className="value">{faltan}</div>
        </div>
      </div>

      <div className="progress-row">
        <div className="progress-label">Completitud: {completitud}%</div>
        <div className="progress">
          <div className="progress-fill" style={{ width: `${completitud}%` }} />
        </div>
      </div>
    </section>
  )
}
