import React from 'react';
import styled from 'styled-components';
import About from '../components/home-page/about';
import Contacts from '../components/home-page/contacts';
import Layout from '../components/layout';
import SEO from '../components/seo';

export default () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <About />
      <Contacts />
    </Container>
  </Layout>
);

const Container = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
