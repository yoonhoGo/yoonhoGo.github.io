module.exports = {
  title: "yoonho's dev notes",
  tagline:
    'Information Security, Python, Node.js, Typescript, AWS, Serverless, Container(Docker, Kubernetes), GraphQL, OAuth2.0. @witherion @AUSG @awskrug @boostbrothers',
  url: 'https://yoonhogo.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon/favicon.ico',
  organizationName: 'yoonhoGo', // Usually your GitHub org/user name.
  projectName: 'yoonhoGo.github.io', // Usually your repo name.
  deploymentBranch: 'master',
  trailingSlash: true,
  customFields: {
    avatarUrl:
      'https://avatars3.githubusercontent.com/u/6959851?s=460&u=766f888f7a79cdf2e1371f630a321967d7846552&v=4',
  },
  themeConfig: {
    navbar: {
      title: "yoonho's dev notes",
      logo: {
        alt: "yoonho's dev notes",
        src: 'img/favicon/apple-icon.png',
      },
      items: [
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/yoonhoGo',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Instagram',
              href: 'https://instagram.com/ynh_g',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/yoonho_go',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/yoonhoGo/yoonhoGo.github.io',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      additionalLanguages: ['rust'],
    },
    algolia: {
      appId: 'MXR3ZTJM2F',
      apiKey: '874daa2e71429e82826f0665dc0066ff',
      indexName: 'MXR3ZTJM2F',
      searchParameters: {}, // Optional (if provided by Algolia)
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/yoonhoGo/yoonhogo.github.io/edit/develop/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/yoonhoGo/yoonhogo.github.io/edit/documentation/',
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} Yoonho Ko.`,
            language: 'ko'
          }
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        googleAnalytics: {
          trackingID: 'UA-148849742-1',
          // Optional fields.
          anonymizeIP: true, // Should IPs be anonymized?
        },
        gtag: {
          trackingID: 'GTM-KC9W7B4',
          // Optional fields.
          anonymizeIP: true, // Should IPs be anonymized?
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
      },
    ],
  ],
  plugins: ['@docusaurus/plugin-ideal-image'
],
};
