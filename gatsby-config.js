module.exports = {
  siteMetadata: {
    title: 'Flock',
    description: 'Cover',
    keywords: 'insurance, drones, pay-as-you-go'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images`,
        name: 'images'
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'images' // Must match the source name ^
            }
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1200
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`
      }
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-netlify-cms',
    {
      resolve: `gatsby-plugin-segment-js`,
      options: {
        prodKey: `J5p8puLW0RzI5J7x74TQioRNwBkoRei3`,
        devKey: `hjQsqleIuNWqPzITXoC5ptb00148l3nN`,
        trackPage: true
      }
    }
  ]
}
