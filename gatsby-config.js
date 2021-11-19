import 'dotenv';

export const siteMetadata = {
  siteUrl: 'https://www.yourdomain.tld',
  title: 'Gatsby Blog',
};
export const plugins = [
  'gatsby-plugin-styled-components',
  'gatsby-plugin-image',
  'gatsby-plugin-sharp',
  'gatsby-transformer-sharp',
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'images',
      path: './src/images/',
    },
    __key: 'images',
  },
  {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: `x4nvm4g34swg`,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    },
  },
  {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: `x4nvm4g34swg`,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      host: `preview.contentful.com`,
    },
  },
  'gatsby-plugin-gatsby-cloud',
];
