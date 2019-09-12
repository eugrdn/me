import React from 'react';
import {graphql} from 'gatsby';
import styled from 'styled-components';
import Article from '../../components/article';
import Link from '../../components/nav-link';
import Section from '../../components/section';
import SEO from '../../components/seo';
import Layout from '../../layouts/default';
import {getDateDay, getDateYear, groupBy} from '../../utils';

export const query = graphql`
  query {
    allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`;

export default ({data}) => {
  const posts = data.allMarkdownRemark.edges.filter(p => p.node.frontmatter.date !== null);
  const postsJSX = (
    <ul>
      {groupBy(posts, getDateYear)
        .map(({year, posts}, i) => (
          <div key={i}>
            <h4>{year}</h4>
            {posts.map(post => (
              <Post key={post.node.id} post={post} />
            ))}
          </div>
        ))
        .reverse()}
    </ul>
  );

  return (
    <Layout>
      <SEO title="Blog" />
      <Article title="Blog" />
      <Section>{postsJSX}</Section>
    </Layout>
  );
};

const Post = ({post}) => (
  <li>
    <PostDate>
      <small>{getDateDay(post)}</small>
    </PostDate>
    <div>
      <Link to={post.node.fields.slug}>{post.node.frontmatter.title}</Link>
    </div>
  </li>
);

const PostDate = styled.div`
  float: right;
  margin: 0 0 0 20px;
`;
