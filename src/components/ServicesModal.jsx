import React from 'react'
import OrderButton from './OrderButton'
import OutsideClickHandler from 'react-outside-click-handler';

import '../styles/services-item.css';

export default function ServicesModal({ setServiceActive, title, id }) {

  const sofaPrices = [
    {
      title: 'Двухместный диван',
      price: 'от 600₽'
    },
    {
      title: 'Трехместный диван',
      price: 'от 1250₽'
    },
    {
      title: 'Угловой диван',
      price: 'от 1250₽'
    },
    {
      title: 'Детский диван',
      price: 'от 650₽'
    }
  ]

  const carpetPrices = [
    {
      title: 'Ковер',
      price: 'от 200₽ за кв. м.'
    },
    {
      title: 'Ковровое покрытие',
      price: 'от 200₽ за кв. м.'
    }
  ]

  const chairPrices = [
    {
      title: 'Не раскладное кресло',
      price: 'от 600₽'
    },
    {
      title: 'Раскладное кресло',
      price: 'от 800₽'
    },
    {
      title: 'Компьютерное кресло со спинкой',
      price: 'от 300₽'
    },
    {
      title: 'Компьютерное кресло без спинки  ',
      price: 'от 200₽'
    }
  ]

  const mattressPrices = [
    {
      title: 'Односпальный матрас',
      price: 'от 700₽'
    },
    {
      title: 'Полуторный матрас',
      price: 'от 1000₽'
    },
    {
      title: 'Двуспальный матрас',
      price: 'от 1300₽'
    }
  ]

  const handleCloseClick = () => {
    setServiceActive(false);
  }

  switch (id) {
    case 'sofa':
      return (
        <div className="services-item">
          <OutsideClickHandler onOutsideClick={handleCloseClick}>
            <div className="services-item__container animate__animated animate__faster animate__zoomIn">
              <h2 className="title">Химчистка диванов</h2>
              <div className="services-item__text">
                Стоимость работы индивидуальна и зависит от размера мебели и загрязненности. Оценить цену работы можно будет после осмотра.
              </div>
              <div className="services-item__prices">
                {
                  sofaPrices.map((element) => {
                    return (
                      <div key={element.title} className="services-item__price">
                        <span className="services-item__name">{element.title}</span>
                        <span className="services-item__rub">{element.price}</span>
                      </div>
                    )
                  })
                }
              </div>
              <OrderButton />
              <svg onClick={handleCloseClick} className="services-item__close" version="1.1"
                xmlns="http://www.w3.org/2000/svg">
                <line x1="1" y1="11"
                  x2="11" y2="1"
                  stroke="black"
                  strokeWidth="2" />
                <line x1="1" y1="1"
                  x2="11" y2="11"
                  stroke="black"
                  strokeWidth="2" />
              </svg>
            </div>
          </OutsideClickHandler>
        </div>
      )
    case 'carpet':
      return (
        <div className="services-item">
          <OutsideClickHandler onOutsideClick={handleCloseClick}>
            <div className="services-item__container animate__animated animate__faster animate__zoomIn">
              <h2 className="title">Химчистка ковра</h2>
              <div className="services-item__text">
                Стоимость работы индивидуальна и зависит от размера мебели и загрязненности. Оценить цену работы можно будет после осмотра.
              </div>
              <div className="services-item__prices">
                {
                  carpetPrices.map((element) => {
                    return (
                      <div key={element.title} className="services-item__price">
                        <span className="services-item__name">{element.title}</span>
                        <span className="services-item__rub">{element.price}</span>
                      </div>
                    )
                  })
                }
              </div>
              <OrderButton />
              <svg onClick={handleCloseClick} className="services-item__close" version="1.1"
                xmlns="http://www.w3.org/2000/svg">
                <line x1="1" y1="11"
                  x2="11" y2="1"
                  stroke="black"
                  strokeWidth="2" />
                <line x1="1" y1="1"
                  x2="11" y2="11"
                  stroke="black"
                  strokeWidth="2" />
              </svg>
            </div>
          </OutsideClickHandler>
        </div>
      )
    case 'chair':
      return (
        <div className="services-item">
          <OutsideClickHandler onOutsideClick={handleCloseClick}>
            <div className="services-item__container animate__animated animate__faster animate__zoomIn">
              <h2 className="title">Химчистка кресла</h2>
              <div className="services-item__text">
                Стоимость работы индивидуальна и зависит от размера мебели и загрязненности. Оценить цену работы можно будет после осмотра.
              </div>
              <div className="services-item__prices">
                {
                  chairPrices.map((element) => {
                    return (
                      <div key={element.title} className="services-item__price">
                        <span className="services-item__name">{element.title}</span>
                        <span className="services-item__rub">{element.price}</span>
                      </div>
                    )
                  })
                }
              </div>
              <OrderButton />
              <svg onClick={handleCloseClick} className="services-item__close" version="1.1"
                xmlns="http://www.w3.org/2000/svg">
                <line x1="1" y1="11"
                  x2="11" y2="1"
                  stroke="black"
                  strokeWidth="2" />
                <line x1="1" y1="1"
                  x2="11" y2="11"
                  stroke="black"
                  strokeWidth="2" />
              </svg>
            </div>
          </OutsideClickHandler>
        </div>
      )
    case 'mattress':
      return (
        <div className="services-item">
          <OutsideClickHandler onOutsideClick={handleCloseClick}>
            <div className="services-item__container animate__animated animate__faster animate__zoomIn">
              <h2 className="title">Химчистка матраса</h2>
              <div className="services-item__text">
                Стоимость работы индивидуальна и зависит от размера мебели и загрязненности. Оценить цену работы можно будет после осмотра.
              </div>
              <div className="services-item__prices">
                {
                  mattressPrices.map((element) => {
                    return (
                      <div key={element.title} className="services-item__price">
                        <span className="services-item__name">{element.title}</span>
                        <span className="services-item__rub">{element.price}</span>
                      </div>
                    )
                  })
                }
              </div>
              <OrderButton />
              <svg onClick={handleCloseClick} className="services-item__close" version="1.1"
                xmlns="http://www.w3.org/2000/svg">
                <line x1="1" y1="11"
                  x2="11" y2="1"
                  stroke="black"
                  strokeWidth="2" />
                <line x1="1" y1="1"
                  x2="11" y2="11"
                  stroke="black"
                  strokeWidth="2" />
              </svg>
            </div>
          </OutsideClickHandler>
        </div>
      )
    default:
      break;
  }
}
