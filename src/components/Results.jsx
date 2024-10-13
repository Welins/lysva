import React from 'react'
import '../styles/results.css';
import SwiperBlock from "../components/SwiperBlock";
import OrderButton from './OrderButton';

export default function Results() {
  return (
    <section className="results blue">
      <div className="container padding">
        <h2 className="title">Результаты нашей работы</h2>
        <div className="result">
          <div className="result__container">
            <SwiperBlock />
          </div>
        </div>
        <div className="results__button">
          <OrderButton />
        </div>
      </div>
    </section>
  )
}
