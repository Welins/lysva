import React from 'react'
import '../styles/tools.css';
import { useInView } from 'react-intersection-observer';

export default function Tools() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '-200px 0px',
  });
  return (
    <section ref={ref} className="tools">
      <div className="container padding">
        <h2 className="title">
          Наше оборудование
        </h2>
        <div className="tools__content">
          <div className={"tools__block animate__animated" + (inView ? " animate__zoomIn" : "")}>
            <div id="tools-1" className="tools__text">Мы используем профессиональный моющий пылесос от производителя Ghibli, предназначенный для химчистки текстильных поверхностей и мягкой мебели.</div>
            <div className="tools__image">
              <img src="/assets/tools-cleaner.png" alt="Cleaner" />
            </div>
          </div>
          <div className={"tools__block animate__animated" + (inView ? " animate__zoomIn" : "")}>
            <div id="tools-2" className="tools__text">Мы применяем специальные чистящие средства для выведения пятен с ковров и мягкой мебели.</div>
            <div className="tools__image">
              <img src="/assets/tools-cleaning.png" alt="Cleaning" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
