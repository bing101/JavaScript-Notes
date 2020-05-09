import React from "react"
import "../css/Navbar.css"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCoffee } from "@fortawesome/free-solid-svg-icons"

const Navbar = () => {
  return (
    <div className="Navbar">
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/">
              <FontAwesomeIcon className="nav-icon" icon={faCoffee} />
              <span className="link-text"> About </span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/">
              <FontAwesomeIcon className="nav-icon" icon={faCoffee} />
              <span className="link-text"> Blog </span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/">
              <FontAwesomeIcon className="nav-icon" icon={faCoffee} />
              <span className="link-text"> Projects </span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/">
              <FontAwesomeIcon className="nav-icon" icon={faCoffee} />
              <span className="link-text"> Home </span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
