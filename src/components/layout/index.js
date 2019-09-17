import React from 'react';
import styled from 'styled-components';
import GlobalStyle from '../../styles/global';
import Footer from '../footer';
import Header from '../header';

export default ({children}) => (
  <>
    <GlobalStyle />
    <Container>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Container>
  </>
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
