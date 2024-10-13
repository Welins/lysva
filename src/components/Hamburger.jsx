import React from 'react'

export default function Hamburger({ ...props }) {
  return (
    <div className={"hamburger" + (props.isHamburgerActive ? " open" : "")} onClick={props.handleHamburgerClick}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}
