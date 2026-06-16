import React from 'react'

const STATUS_COLORS = {
  'ya la tengo': '#28a745',
  'tengo': '#28a745',
  'repetido': '#ffc107',
  'me falta': '#dc3545',
  'falta': '#dc3545'
}

export default function StickerCard({ id, number, name, group, status, img, handleStatusChange }) {
  const color = STATUS_COLORS[(status || '').toLowerCase()] || '#6c757d'

  return (
    <article
      className="sticker-card"
      onClick={() => handleStatusChange && handleStatusChange(id)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') handleStatusChange && handleStatusChange(id)
      }}
    >
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
