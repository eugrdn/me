import React from 'react';
import {graphql} from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import {PageLayout} from '../../components/layout';
import Section from '../../components/section';
import SEO from '../../components/seo';

export const query = graphql`
  query {
    file: file(relativePath: {eq: "404.png"}) {
      childImageSharp {
        fluid(maxWidth: 1280, maxHeight: 720) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default ({data}) => (
  <PageLayout>
    <SEO title="404: Not found" />
    <Container>
      <p>You just hit a route that doesn't exist... the sadness.</p>
      <Img fluid={data.file.childImageSharp.fluid} />
    </Container>
  </PageLayout>
);

const Container = styled(Section)`
  text-align: center;
  margin-top: 50px;
`;
