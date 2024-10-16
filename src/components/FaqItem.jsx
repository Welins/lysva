import React, { useState } from 'react'

export default function FaqItem({ title, children }) {
  const [isFaqOpened, setFaqOpened] = useState(false);
  const handleFaqClick = () => {
    setFaqOpened((prevState) => prevState = !prevState);
  }
  return (
    <div className="faq-item">
      <div className="faq-item-visible" onClick={handleFaqClick}>
        <div className="faq-item-text">
          {title}
        </div>
        <svg className={"faq-item-arrow" + (isFaqOpened ? " active" : "")} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.0001 22.0001C15.7443 22.0001 15.4883 21.9023 15.2931 21.7071L5.29306 11.7071C4.90231 11.3163 4.90231 10.6836 5.29306 10.2931C5.68381 9.90256 6.31656 9.90231 6.70706 10.2931L16.0001 19.5861L25.2931 10.2931C25.6838 9.90231 26.3166 9.90231 26.7071 10.2931C27.0976 10.6838 27.0978 11.3166 26.7071 11.7071L16.7071 21.7071C16.5118 21.9023 16.2558 22.0001 16.0001 22.0001Z" fill="white" />
        </svg>
      </div>
      {isFaqOpened && <div className="faq-item-subtext">
        {children}
      </div>}
    </div>
  )
}
