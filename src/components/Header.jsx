import React, { useState } from 'react';
import '../styles/header.css';
import OrderButton from './OrderButton';
import Logotype from './Logotype';
import Hamburger from './Hamburger';
import Phone from './Phone';
import Dropdown from './Dropdown';
import OutsideClickHandler from 'react-outside-click-handler';

export default function Header() {
  const [isHamburgerActive, setHamburgerActive] = useState(false);

  const handleHamburgerClick = () => {
    setHamburgerActive((prevState) => prevState = !prevState);
  };

  const handleOutsideNavClick = (target) => {
    !target.srcElement.parentElement.classList.contains('hamburger') && setHamburgerActive(false);
  }

  return (
    <>
      <header className="header">
        <div className="container header__container">
          <Logotype />
          <div className="header__right">
            <OrderButton />
            <Phone />
            <Hamburger isHamburgerActive={isHamburgerActive} setHamburgerActive={setHamburgerActive} handleHamburgerClick={handleHamburgerClick} />
          </div>
        </div>
      </header>
      {isHamburgerActive && <OutsideClickHandler onOutsideClick={handleOutsideNavClick}><Dropdown /></OutsideClickHandler>}
    </>
  )
}
