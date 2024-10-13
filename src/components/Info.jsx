import React from 'react'
import '../styles/info.css';

export default function Info() {
  return (
    <section className="info">
      <div className="container padding">
        <div className="info__container">
          <div className="info__content">
            <h2 className="title">Химчистка мебели и ковров в сыктывкаре</h2>
            <div className="info__text">Когда вы ищете компанию, которая позаботится о вашей мягкой мебели, вы не можете позволить себе упускать из виду людей, которые будут выполнять эту работу.
              В нашем агентстве «Лысва» мы верим, что качество — это больше, чем просто слово — это образ жизни. Мы знаем, что нужно для качественного выполнения работы.</div>
          </div>
          <div className="info__contact">
            <div className="info__block">
              <h3>Телефон</h3>
              <a href="tel:+79042310474">+7 (904) 231-04-74</a>
            </div>
            <div className="info__block">
              <h3>Почта</h3>
              <a href="mailto:agentstvo-lysva@mail.ru">agentstvo-lysva@mail.ru</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
