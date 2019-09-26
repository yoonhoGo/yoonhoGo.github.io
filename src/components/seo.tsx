/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import _get from "lodash/get"
import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { SeoQuery, SiteSiteMetadata, Site } from "../graphqlTypes"

interface ISEOProps {
  title: string
  description?: string
  image?: string
  lang?: string
  meta?: any[]
  url?: string
}

function SEO({ description, lang, meta, title, image, url }: ISEOProps) {
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
          name: `title`,
          content: title
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: "og:site_name",
          content: title
        },
        {
          property: "og:url",
          content: url || (siteMeta.siteUrl as string)
        },
        {
          property: "og:image",
          content: image || (siteMeta.defaultImage as string),
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
      ].concat(meta || [])}
    />
  )
}

SEO.defaultProps = {
  lang: `kr`,
  meta: [],
  title: ``,
  description: null,
  image: null,
}

export default SEO
