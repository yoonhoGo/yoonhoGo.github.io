import { graphql, useStaticQuery } from "gatsby"
import { Site, SiteSiteMetadata } from "../graphqlTypes"

export function useSiteMetadata() {
  return useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author
          bio
          defaultImage
          description
          siteUrl
          title
          socialUsernames {
            email
            github
            instagram
            twitter
          }
        }
      }
    }
  `) as {
    site: Site & {
      siteMetadata: SiteSiteMetadata
    }
  }
}
