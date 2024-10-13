import React from 'react'
import OrderButton from "../components/OrderButton";
import '../styles/about.css'
import { useInView } from 'react-intersection-observer';

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true
  });
  return (
    <section ref={ref} className="about">
      <div className="container padding">
        <div className="about__items">
          <div className={"about__item animate__animated animate__slow" + (inView ? " animate__fadeIn" : "")}>
            <div className="about__block">
              <div className="about__text-block">
                <h3 className="about__title">
                  Чем мы занимаемся
                </h3>
                <div className="about__text">
                  Агентство «Лысва» предлагает услуги выездной химчистки диванов, ковров и другой мебели в Сыктывкаре с возможностью выезда в близлежащие районы.
                </div>
              </div>
            </div>
            <div className="about__block">
              <img src="/assets/icons/icon-info.svg" alt="Info icon" className="about__icon" />
            </div>
          </div>
          <div className={"about__item animate__animated animate__slow" + (inView ? " animate__fadeIn" : "")}>
            <div className="about__block">
              <div className="about__text-block">
                <h3 className="about__title">
                  Химчистка мебели и обивки
                </h3>
                <div className="about__text">
                  Мы стремимся обеспечить более глубокую чистоту с нашими услугами по химчистке мебели и обивки. Мы сможем удалить с мебели въевшиеся пятна, шерсть домашних животных и грязь. Результат — более глубокая чистота и более здоровый дом. Свяжитесь с нами для услуг по химчистке вашей мягкой мебели.
                </div>
              </div>
            </div>
            <div className="about__block">
              <img src="/assets/icons/icon-carpet.svg" alt="Carpet icon" className="about__icon" />
            </div>
          </div>
        </div>
        <div className="about__button">
          <OrderButton />
        </div>
      </div>
    </section>
  )
}
