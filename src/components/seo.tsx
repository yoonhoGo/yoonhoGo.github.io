/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import _get from "lodash/get"
import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import {
  SeoQuery,
  SiteSiteMetadata,
  Site,
  SiteSiteMetadataSocialUsernames,
} from "../graphqlTypes"

interface ISEOProps {
  title: string
  description?: string
  image?: string
  pathname?: string
  article?: boolean
  lang?: string
  meta?: any[]
}

function SEO({ description, lang, meta, title }: ISEOProps) {
  const { site }: SeoQuery = useStaticQuery(
    graphql`
      query SEO {
        site {
          siteMetadata {
            title
            description
            author
            defaultImage
            socialUsernames {
              twitter
            }
          }
        }
      }
    `
  )
  const siteMeta = (site as Site).siteMetadata as SiteSiteMetadata
  const metaDescription = description || siteMeta.description || ""

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${siteMeta.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        { property: "og:image", content: siteMeta.defaultImage },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: _get(siteMeta, "socialUsernames.twitter", `yoonho_go`),
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta || [])}
    />
  )
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
}
SEO.defaultProps = {
  lang: `kr`,
  meta: [],
  title: ``,
  description: null,
  image: null,
  pathname: null,
  article: false,
}

export default SEO
