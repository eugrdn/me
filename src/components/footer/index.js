import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import styled from 'styled-components';

const authorQuery = graphql`
  query {
    site {
      siteMetadata {
        author
      }
    }
  }
`;

export default ({className}) => {
  const {
    site: {
      siteMetadata: {author},
    },
  } = useStaticQuery(authorQuery);

  return (
    <Footer className={className}>
      <div>
        &copy; 2019-{new Date().getFullYear()} <b>{author}</b>
      </div>
      <div>
        <small>
          Powered by <a href="https://www.gatsbyjs.org">Gatsby</a>
        </small>
      </div>
    </Footer>
  );
};

const Footer = styled.div`
  font-size: 0.8em;
  text-align: center;
  width: 300px;
  margin: 50px auto 5px;
  color: #777;

  a {
    border: none;
    font-weight: bold;
  }

  @media (min-width: 1900px) {
    width: 400px;
  }
`;
