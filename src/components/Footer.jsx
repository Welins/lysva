import React, { useState } from 'react'
import '../styles/footer.css';
import Logotype from './Logotype';

export default function Footer() {
  const year = new Date().getFullYear();
  const [isFooterOpen, setFooterOpen] = useState(false);

  const handleFooterClick = () => {
    setFooterOpen((prevState) => prevState = !prevState);
  };

  const about = document.querySelector('.about');
  const services = document.querySelector('.services');
  const tools = document.querySelector('.tools');
  const results = document.querySelector('.results');
  const faq = document.querySelector('.faq');
  const contacts = document.querySelector('.contacts');

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__container">
          <div className="footer__content">
            <div className="footer__block">
              <Logotype />
              <span>{year}</span>
            </div>
            <div className="footer-navigation">
              <div className="footer-navigation-top" onClick={handleFooterClick}>
                <span>Навигация</span>
                <svg className={isFooterOpen ? "active" : ""} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.99997 4.99997C8.12784 4.99997 8.25584 5.04884 8.35347 5.14647L13.3535 10.1465C13.5488 10.3418 13.5488 10.6582 13.3535 10.8535C13.1581 11.0487 12.8417 11.0488 12.6465 10.8535L7.99997 6.20697L3.35347 10.8535C3.15809 11.0488 2.84172 11.0488 2.64647 10.8535C2.45122 10.6581 2.45109 10.3417 2.64647 10.1465L7.64647 5.14647C7.74409 5.04884 7.87209 4.99997 7.99997 4.99997Z" fill="#181A18" />
                </svg>
              </div>
              {isFooterOpen && <ul className="footer-navigation-dropdown">
                <li onClick={() => about.scrollIntoView({ behavior: "smooth", block: 'center' })}>Информация</li>
                <li onClick={() => services.scrollIntoView({ behavior: "smooth", block: 'center' })}>Услуги</li>
                <li onClick={() => tools.scrollIntoView({ behavior: "smooth", block: 'center' })}>Оборудование</li>
                <li onClick={() => results.scrollIntoView({ behavior: "smooth", block: 'center' })}>Результаты</li>
                <li onClick={() => faq.scrollIntoView({ behavior: "smooth", block: 'center' })}>Часто задаваемые вопросы</li>
                <li onClick={() => contacts.scrollIntoView({ behavior: "smooth", block: 'center' })}>Связь</li>
                <li>Политика конфиденциальности</li>
              </ul>}
            </div>
          </div>
          <div className="footer__contacts">
            <div className="footer__info">
              <a href="tel:+79042310474">+7 (904) 231-04-74</a>
              <a href="mailto:agentstvo-lysva@mail.ru">agentstvo-lysva@mail.ru</a>
            </div>
            <div className="footer__social">
              <a target="_blank" rel="noreferrer" href="https://vk.com/agentstvolysva">
                <img src="/assets/icons/icon-social.svg" alt="VK Social Page" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer >
  )
}
