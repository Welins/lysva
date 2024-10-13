import React from 'react'

export default function OrderButton() {
  return (
    <button onClick={() => document.querySelector('.contacts').scrollIntoView({ behavior: "smooth", block: 'center' })} className="order-button">
      Заказать химчистку
    </button>
  )
}
