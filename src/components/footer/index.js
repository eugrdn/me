import React from 'react';
import {StaticQuery, graphql} from 'gatsby';
import styled from 'styled-components';

export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            author
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: {author},
      },
    }) => (
      <Footer>
        <div>
          &copy; {new Date().getFullYear()} <b>{author}</b>
        </div>
        <div>
          <small>
            Powered by <a href="https://www.gatsbyjs.org">Gatsby</a>
          </small>
        </div>
      </Footer>
    )}
  />
);

const Footer = styled.div`
  font-size: 0.8em;
  text-align: center;
  max-width: 500px;
  margin: 50px auto 5px;
  color: #777;
  a {
    border: none;
    font-weight: bold;
  }
`;
