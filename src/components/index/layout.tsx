/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header, { IHeaderProps } from "../header"
import DefaultLayout from "../defaultLayout"

const Layout = ({
  children,
  menu,
}: {
  children: Children
  menu?: IHeaderProps["menu"]
}) => {
  return (
    <DefaultLayout>
      <Header menu={menu} />
      <main>{children}</main>
    </DefaultLayout>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
