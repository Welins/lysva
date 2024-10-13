import React from 'react'
import OrderButton from "./OrderButton";
import '../styles/heroes.css'

export default function Heroes() {
  return (
    <section className="heroes">
      <div className="container">
        <div className="heroes__content">
          <h1 className="main-title animate__animated animate__fadeInDown">
            Выездная химчистка мягкой мебели и ковров <span>в Сыктывкаре</span>
          </h1>
          <div className="heroes__button">
            <OrderButton />
          </div>
        </div>
      </div>
    </section >
  )
}
