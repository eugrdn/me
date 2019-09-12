import React from 'react';
import {graphql} from 'gatsby';
import styled from 'styled-components';
import Article from '../components/article';
import Link from '../components/nav-link';
import SEO from '../components/seo';
import Layout from '../layouts/default';

export default ({
  data: {
    markdownRemark: {frontmatter, html},
  },
  pageContext: {next, prev},
}) => (
  <Layout>
    <SEO title={frontmatter.title} />
    <Article title={frontmatter.title} date={frontmatter.date} html={html} />
    <PageNavigation>
      {prev && <Link to={prev.fields.slug}>&lt;&lt;</Link>}
      <span>&middot;</span>
      <Link to="/">Home</Link>
      <span>&middot;</span>
      {next && <Link to={next.fields.slug}>&gt;&gt;</Link>}
    </PageNavigation>
  </Layout>
);

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`;

const PageNavigation = styled.div`
  text-align: center;
  max-width: 500px;
  margin: 50px auto 0;
  font-size: 0.8rem;
  a {
    display: inline-block;
    text-decoration: none;
    border-bottom: none;
  }
  span {
    display: inline-block;
  }
`;
