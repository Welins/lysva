import React from 'react';
import { useInView } from 'react-intersection-observer';

import '../styles/advantage.css';

export default function Advantages() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <section ref={ref} className="advantages" >
      <div className="container">
        <div className="advantages__items">
          <div className={"advantage animate__animated" + (inView ? " animate__fadeInLeftBig" : "")}>
            <img src="/assets/icons/icon-advantage-1.svg" alt="Advantage icon" />
            <div className="advantage-text">Договоримся и приедем в удобное время</div>
          </div>
          <div className={"advantage animate__animated" + (inView ? " animate__fadeInLeftBig" : "")}>
            <img src="/assets/icons/icon-advantage-2.svg" alt="Advantage icon" />
            <div className="advantage-text">Безопасные чистящие средства и пятновыводители</div>
          </div>
          <div className={"advantage animate__animated" + (inView ? " animate__fadeInLeftBig" : "")}>
            <img src="/assets/icons/icon-advantage-3.svg" alt="Advantage icon" />
            <div className="advantage-text">Быстро и эффективно отчистим мебель от загрязнений</div>
          </div>
        </div>
      </div>
    </section >
  )
}
