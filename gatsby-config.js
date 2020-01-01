module.exports = {
  siteMetadata: {
    title: 'Evgeny Rodin',
    description: 'Software Engineer. Portfolio, blog, contacts.',
    author: 'Evgeny Rodin',
    social: '@eugrdn',
    avatar: 'https://eugrdn.me/icons/icon-512x512.png',
    siteUrl: 'https://eugrdn.me',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
        ],
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images/`,
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({query: {site, allMarkdownRemark}}) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  author: 'Evgeny Rodin',
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  categories: edge.node.tags,
                  custom_elements: [{'content:encoded': edge.node.html}],
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: "Software Engineer Evgeny Rodin's site RSS Feed",
          },
        ],
      },
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown-pages',
        path: `${__dirname}/src/pages/blog`,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['B612 Mono'],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /icons/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Evgeny Rodin',
        short_name: 'Evgeny R.',
        start_url: '/',
        background_color: '#eec597',
        theme_color: '#eec597',
        display: 'standalone',
        icon: `${__dirname}/src/assets/images/avatar.png`,
      },
    },
    'gatsby-plugin-offline',
  ],
};
