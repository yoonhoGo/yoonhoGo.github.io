const fs = require(`fs`)
const fetch = require(`node-fetch`)
const { buildClientSchema } = require(`graphql`)
const { createHttpLink } = require(`apollo-link-http`)

module.exports = {
  siteMetadata: {
    title: `yoonho's dev note`,
    description: `Yoonho's dev note`,
    siteUrl: `https://yoonho.ga`,
    author: `@yoonhoGo`,
    bio: `정보보안을 기초로하여 인프라 및 운용 시스템 보안을 개발하고
    싶다는 비전을 가지고 있습니다. 특히, 지난 세대의 서버 운용에서
    벗어나 현대의 트렌드에 발맞춘 모던 서버 개발에 관심이
    많습니다. 빠른 개발, 안정적인 운영, 지속적이고 유연한
    유지관리를 개발 철학으로 생각하고 있습니다.`,
    defaultImage: `https://avatars0.githubusercontent.com/u/6959851?s=460&v=4`,
    socialUsernames: {
      email: `rhdbsgh0629@naver.com`,
      instagram: `ynh_g`,
      github: `yoonhoGo`,
      twitter: `yoonho_go`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `yoonhoGo's calling card`,
        short_name: `yoonhoGo`,
        start_url: `/calling-card`,
        background_color: `#FFDD57`,
        theme_color: `#FFDD57`,
        display: `standalone`,
        icon: `src/images/favicon.ico/apple-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`, `/calling-card`],
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-graphql`,
      options: {
        fieldName: `github`,
        typeName: `GitHub`,
        createLink: () =>
          createHttpLink({
            uri: `https://api.github.com/graphql`,
            headers: {
              Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
            },
            fetch,
          }),
        createSchema: async () => {
          const json = JSON.parse(fs.readFileSync(`${__dirname}/github.json`))
          return buildClientSchema(json.data)
        },
      },
    },
    `gatsby-plugin-netlify-cms`,
    // `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: process.env.GATSBY_DISQUS_NAME,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-prismjs`,
          `gatsby-remark-images`,
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-148849742-1",
      },
    },
  ],
}
