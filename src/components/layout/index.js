import React from 'react';
import {graphql, StaticQuery} from 'gatsby';
import styled from 'styled-components';
import GlobalStyle from '../../styles/global';
import Footer from '../footer';
import Header from '../header';

export default ({children}) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            avatar
            author
          }
        }
      }
    `}
    render={data => (
      <>
        <GlobalStyle />
        <Container>
          <Header avatar={data.site.siteMetadata.avatar} />
          <Content>{children}</Content>
          <Footer author={data.site.siteMetadata.author} />
        </Container>
      </>
    )}
  />
);

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;
