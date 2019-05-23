import React from 'react'
import { Link } from 'gatsby'
import Logo from '../img/logo.svg'

const Navbar = class extends React.Component {
  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={Logo} alt="logo" width="100" />
            </Link>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
