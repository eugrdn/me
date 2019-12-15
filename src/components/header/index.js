import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import styled from 'styled-components';
import Avatar from '../avatar';

const authorQuery = graphql`
  query {
    site {
      siteMetadata {
        author
      }
    }
  }
`;

export default () => {
  const {
    site: {
      siteMetadata: {author},
    },
  } = useStaticQuery(authorQuery);

  return (
    <Header>
      <Avatar alt={author} size={200} />
    </Header>
  );
};

const Header = styled.header`
  margin: 35px auto 0;
  text-align: center;
`;
