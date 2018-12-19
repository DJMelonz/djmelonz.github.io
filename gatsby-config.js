const author = 'Damian Mullins';
const title = `Blog for ${author}`;

module.exports = {
  siteMetadata: {
    title,
    siteUrl: 'https://www.damianmullins.com',
    author,
    authorEmail: 'hello@damianmullins.com',
    authorBio: `Hi, I'm ${author}, a Senior Web UI Engineer working at Just Eat.`,
    authorBio: `Hi, I'm ${author}, a Senior Web UI Engineer working at Just Eat.`,
    disqusShortname: 'damianmullins',
    githubUsername: 'DamianMullins',
    twitterUsername: 'DamianMullins',
    linkedInUsername: 'damianmullins'
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: title,
        short_name: 'DamianMullins.com',
        start_url: '/',
        background_color: '#222020',
        theme_color: '#222020',
        display: 'minimal-ui',
        icon: 'src/assets/images/profile-pic--large.png'
      }
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-1425869-12',
        head: false,
        anonymize: true,
        respectDNT: true
      }
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
        {
          site {
            siteMetadata {
              title
              siteUrl
              site_url: siteUrl
            }
          }
        }
      `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                const { slug, title, date, tags } = edge.node.frontmatter;
                return Object.assign({}, edge.node.frontmatter, {
                  title,
                  description: edge.node.excerpt,
                  url: site.siteMetadata.siteUrl + slug,
                  guid: site.siteMetadata.siteUrl + slug,
                  pubDate: date,
                  categories: tags
                });
              });
            },
            query: `
            {
              allMarkdownRemark(
                filter: { frontmatter: { published: { eq: true } } }
                sort: { fields: [frontmatter___date], order: DESC }
              ) {
                edges {
                  node {
                    excerpt(pruneLength: 250)
                    frontmatter {
                      slug
                      title
                      date
                      tags
                    }
                  }
                }
              }
            }
          `,
            output: '/rss.xml'
          }
        ]
      }
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-prismjs',
          {
            resolve: 'gatsby-remark-copy-linked-files'
          }
        ]
      }
    }
  ]
};
