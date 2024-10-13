import React, { useState } from 'react'
import OrderButton from './OrderButton'
import '../styles/services.css';
import { useInView } from 'react-intersection-observer';
import ServicesModal from './ServicesModal';

export default function Services() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const [isServiceActive, setServiceActive] = useState(false);
  const [id, setId] = useState();

  const handleServiceClick = (event) => {
    setServiceActive(true);
    setId(event.currentTarget.id);
  };

  return (
    <>
      <section ref={ref} className="services blue">
        <div className="container padding">
          <h2 className={"title animate__animated" + (inView ? " animate__fadeInDown" : "")}>Наши услуги химчистки</h2>
          <div className="services__items">
            <div id="sofa" onClick={handleServiceClick} className={"services__item item-services animate__animated animate_slow" + (inView ? " animate__fadeInLeft" : "")}>
              <div className="item-services__image">
                <img src="/assets/services-item-1.png" alt="Диван" />
              </div>
              <div className="item-services__text-block">
                <div className="item-services__name">Диваны</div>
                <div className="item-services__price">от 1000 руб.</div>
              </div>
            </div>
            <div id="carpet" onClick={handleServiceClick} className={"services__item item-services animate__animated animate_slow" + (inView ? " animate__fadeInRight" : "")}>
              <div className="item-services__image">
                <img src="/assets/services-item-2.png" alt="Ковер" />
              </div>
              <div className="item-services__text-block">
                <div className="item-services__name">Ковры</div>
                <div className="item-services__price">от 200 руб.</div>
              </div>
            </div>
            <div id="chair" onClick={handleServiceClick} className={"services__item item-services animate__animated animate_slow" + (inView ? " animate__fadeInLeft" : "")}>
              <div className="item-services__image">
                <img src="/assets/services-item-3.png" alt="Кресло" />
              </div>
              <div className="item-services__text-block">
                <div className="item-services__name">Кресла</div>
                <div className="item-services__price">от 300 руб.</div>
              </div>
            </div>
            <div id="mattress" onClick={handleServiceClick} className={"services__item item-services animate__animated animate_slow" + (inView ? " animate__fadeInRight" : "")}>
              <div className="item-services__image">
                <img src="/assets/services-item-4.png" alt="Матрас" />
              </div>
              <div className="item-services__text-block">
                <div className="item-services__name">Матрасы</div>
                <div className="item-services__price">от 700 руб.</div>
              </div>
            </div>
          </div>
          <div className="services__button">
            <OrderButton />
          </div>
        </div>
      </section>
      {isServiceActive && <ServicesModal setServiceActive={setServiceActive} id={id} />}
    </>
  )
}
