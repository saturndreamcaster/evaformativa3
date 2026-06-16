import React from 'react'

const STATUS_COLORS = {
  'ya la tengo': '#28a745', // verde
  'repetido': '#ffc107',    // amarillo
  'me falta': '#dc3545'     // rojo
}

export default function StickerCard({ number, name, group, status, img }) {
  const color = STATUS_COLORS[(status || '').toLowerCase()] || '#6c757d'

  return (
    <article className="sticker-card">
      <div className="sticker-thumb">
        <img src={img} alt={name} />
      </div>
      <div className="sticker-info">
        <div className="sticker-number">{number}</div>
        <div className="sticker-name">{name}</div>
        <div className="sticker-group">{group}</div>
      </div>
      <div className="sticker-status" style={{ backgroundColor: color }}>
        {status}
      </div>
    </article>
  )
}
