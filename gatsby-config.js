module.exports = {
  siteMetadata: {
    title: `Frontcode by Temitope`,
    name: `Temitope`,
    siteUrl: `https://frontcode.netlify.app`,
    description: `Useful Frontend articles`,
    hero: {
      heading: `Welcome to Frontcode, a blog that emphasizes on frontend articles and useful frontend hacks`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/temmmie_`,
      },
      {
        name: `github`,
        url: `https://github.com/temmietope`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/temmie_tope`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/temitope-ayodele/`,
      },
      {
        name: `dribbble`,
        url: `https://dribbble.com/TemitopeA`,
      },
    ],
  },
  plugins: [
    {
      resolve: '@narative/gatsby-theme-novela',
      options: {
        contentPosts: 'content/posts',
        contentAuthors: 'content/authors',
        basePath: '/',
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {},
    },
  ],
}
