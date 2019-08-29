import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useRef, forwardRef } from "react"

const Header = ({ siteTitle }: { siteTitle: string }) => {
  const navMenuRef = useRef<HTMLDivElement>(null)
  function toggle(event: React.MouseEvent) {
    event.currentTarget.classList.toggle('is-active')
    
    const navMenu = navMenuRef.current
    if (navMenu) {
      navMenu.classList.toggle('is-active')
    } else {
      console.error('navMenuRef is null')
    }
  }
  return (
    <nav
      className="navbar is-fixed-top is-transparent"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          {siteTitle}
        </Link>

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navMenu"
          onClick={toggle}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div className="navbar-menu" id="navMenu" ref={navMenuRef}>
        <div className="navbar-end">
          <Link className="navbar-item" to="#about">
            About
          </Link>
          <Link className="navbar-item" to="#projects">
            Projects
          </Link>
        </div>
      </div>
    </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
