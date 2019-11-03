import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div class="header">
      <div class="logo">
        <Link>
          Logo
          {
            // siteTitle
          }
        </Link>
      </div>

      <div class="site-nav">
        <ul class="nav justify-content-end">
          <li class="nav-item">
            <span class="nav-link">
              <Link to="/page-2/">Page 2</Link>
            </span>
          </li>
          <li class="nav-item">
            <span class="nav-link">
              <Link to="/third-party/">Third party</Link>
            </span>
          </li>
        </ul>
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
