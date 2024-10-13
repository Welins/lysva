import React from 'react'

export default function Dropdown() {
  const about = document.querySelector('.about');
  const services = document.querySelector('.services');
  const tools = document.querySelector('.tools');
  const results = document.querySelector('.results');
  const faq = document.querySelector('.faq');
  const contacts = document.querySelector('.contacts');

  return (
    <nav className="dropdown animate__animated animate__faster animate__slideInRight">
      <ul>
        <li onClick={() => about.scrollIntoView({ behavior: "smooth", block: 'center' })}>Информация</li>
        <li onClick={() => services.scrollIntoView({ behavior: "smooth", block: 'center' })}>Услуги</li>
        <li onClick={() => tools.scrollIntoView({ behavior: "smooth", block: 'center' })}>Оборудование</li>
        <li onClick={() => results.scrollIntoView({ behavior: "smooth", block: 'center' })}>Результаты</li>
        <li onClick={() => faq.scrollIntoView({ behavior: "smooth", block: 'center' })}>Часто задаваемые вопросы</li>
        <li onClick={() => contacts.scrollIntoView({ behavior: "smooth", block: 'center' })}>Связь</li>
      </ul>
    </nav >
  )
}
