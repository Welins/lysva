import React from 'react'

export default function Logotype() {
  const handleLogotypeClick = () => {
    const heroes = document.querySelector('.heroes');
    heroes.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <img onClick={handleLogotypeClick} className="logotype" src="./assets/logotype.svg" alt="logotype" />
  )
}
