module.exports = {
  title: 'yoonho\'s dev notes',
  tagline: 'Information Security, Python, Node.js, Typescript, AWS, Serverless, Container(Docker, Kubernetes), GraphQL, OAuth2.0. @witherion @AUSG @awskrug @boostbrothers',
  url: 'https://yoonhogo.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon/favicon.ico',
  organizationName: 'yoonhoGo', // Usually your GitHub org/user name.
  projectName: 'yoonhoGo.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'yoonho\'s dev notes',
      logo: {
        alt: 'yoonho\'s dev notes',
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
      apiKey: '874daa2e71429e82826f0665dc0066ff',
      indexName: 'MXR3ZTJM2F',
      searchParameters: {}, // Optional (if provided by Algolia)
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
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    '@docusaurus/plugin-ideal-image',
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: ['appInstalled', 'queryString', 'mobile'],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/favicon/apple-icon.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json', // your PWA manifest
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(53, 120, 229)',
          },
        ],
      },
    ]
  ],
};
