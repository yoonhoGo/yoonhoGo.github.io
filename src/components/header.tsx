import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useRef, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { SiteTitleQueryQuery } from "../graphqlTypes"
import BodyClassName from "react-body-classname"

function getSiteTitle() {
  const {
    site: {
      siteMetadata: { title },
    },
  }: SiteTitleQueryQuery = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `) || {
    site: {
      siteMetadata: {
        title: `Gatsby Site`,
      },
    },
  }
  return title
}

export interface IHeaderProps {
  tagType?: "a" | "Link"
  menu?: Array<{
    to: string
    name: string
  }>
}

const Header = ({ menu, tagType }: IHeaderProps) => {
  const navbar = useRef<HTMLElement>(null)
  const navMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== "undefined") window.onscroll = onScroll(navbar)
    return () => {}
  }, [])

  function toggle(event: React.MouseEvent) {
    event.currentTarget.classList.toggle("is-active")

    const navMenu = navMenuRef.current
    if (navMenu) {
      navMenu.classList.toggle("is-active")
    } else {
      console.error("navMenuRef is null")
    }
  }

  return (
    <nav
      ref={navbar}
      className="navbar is-fixed-top is-spaced is-desktop"
      role="navigation"
      aria-label="main navigation"
      style={{
        transition: "0.4s",
      }}
    >
      <BodyClassName className="has-navbar-fixed-top" />
      <NavBrand toggle={toggle} />
      <div className="navbar-menu" id="navMenu" ref={navMenuRef}>
        <div className="navbar-start">
          <Link className="navbar-item" to="blog">
            <span className="icon">
              <i className="fas fa-rss"></i>
            </span>
            <span>blog</span>
          </Link>
        </div>
        <div className="navbar-end">
          {menu &&
            menu.map(item => {
              switch (tagType) {
                case "a": {
                  return (
                    <a
                      className="navbar-item"
                      href={item.to}
                      key={"navbar-item-" + item.name}
                    >
                      {item.name}
                    </a>
                  )
                }
                case "Link":
                default: {
                  return (
                    <Link
                      className="navbar-item"
                      to={item.to}
                      key={"navbar-item-" + item.name}
                    >
                      {item.name}
                    </Link>
                  )
                }
              }
            })}
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

function onScroll(navbar: React.RefObject<HTMLElement>) {
  return () => {
    const scrollLimit = 24
    if (!navbar || !navbar.current) return
    if (
      document.body.scrollTop > scrollLimit ||
      document.documentElement.scrollTop > scrollLimit
    ) {
      navbar.current.classList.contains("is-spaced") &&
        navbar.current.classList.remove("is-spaced")
    } else {
      !navbar.current.classList.contains("is-spaced") &&
        navbar.current.classList.add("is-spaced")
    }
  }
}

function NavBrand({ toggle }: { toggle: (event: React.MouseEvent) => void }) {
  return (
    <div className="navbar-brand">
      <Link className="navbar-item" to="/">
        {getSiteTitle()}
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
  )
}
