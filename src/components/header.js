
import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import logo from "./../images/logo.svg"

const Header = ({ siteTitle }) => (
  <header>
    <div className="container">
      <div className="header">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
            {
              // siteTitle
            }
          </Link>
        </div>

        <div className="site-nav">
          {/*
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <span className="nav-link">
                <Link to="/page-2/">Page 2</Link>
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link">
                <Link to="/third-party/">Third party</Link>
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link">
                <Link to="/random-users/">Random Users</Link>
              </span>
            </li>
          </ul>
          */}
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
