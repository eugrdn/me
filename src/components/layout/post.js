import React from 'react';
import {graphql} from 'gatsby';
import Article from '../article';
import Link from '../nav-link';
import SEO from '../seo';
import {PageLayout} from './';
import {PageNavigation} from './atoms';

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

export default ({
  data: {
    markdownRemark: {frontmatter, html},
  },
  pageContext: {next, prev},
}) => (
  <PageLayout>
    <SEO title={frontmatter.title} />
    <Article title={frontmatter.title} date={frontmatter.date} html={html} />
    <PageNavigation>
      {prev && <Link to={`/blog/${prev.fields.slug}`}>&lt;&lt;</Link>}
      <span>&nbsp;&middot;&nbsp;</span>
      <Link to="/">Home</Link>
      <span>&nbsp;&middot;&nbsp;</span>
      {next && <Link to={`/blog/${next.fields.slug}`}>&gt;&gt;</Link>}
    </PageNavigation>
  </PageLayout>
);
