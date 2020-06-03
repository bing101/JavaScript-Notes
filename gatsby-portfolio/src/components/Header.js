import React from "react"
import "../css/Header.css"

const Header = props => {
  return (
    <div className="Header">
      <h1 id="header-title">{props.content}</h1>
      <p id="subheader-text"> Web Developer </p>
    </div>
  )
}

export default Header
