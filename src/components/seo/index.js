import React from 'react';
import Helmet from 'react-helmet';
import {graphql, useStaticQuery} from 'gatsby';

const metaQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        social
        avatar
      }
    }
  }
`;

export default ({description = '', lang = 'en', meta = [], title}) => {
  const {
    site: {siteMetadata},
  } = useStaticQuery(metaQuery);
  const metaDescription = description || siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${siteMetadata.title}`}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          name: 'image',
          content: siteMetadata.avatar,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:image',
          content: siteMetadata.avatar,
        },
        {
          property: 'og:image:secure_url',
          content: siteMetadata.avatar,
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: siteMetadata.social,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
        {
          name: 'twitter:image',
          content: siteMetadata.avatar,
        },
      ].concat(meta)}
    />
  );
};
