import React from 'react';
import {graphql} from 'gatsby';
import styled from 'styled-components';
import Article from '../../components/article';
import {PageLayout} from '../../components/layout';
import Link from '../../components/nav-link';
import Section from '../../components/section';
import SEO from '../../components/seo';
import {getBlogRelPath} from '../../utils/blog-path';

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
            tags
          }
        }
      }
    }
  }
`;

export default ({
  data: {
    allMarkdownRemark: {edges},
  },
}) => (
  <PageLayout>
    <SEO title="Blog" />
    <Article title="Blog" />
    <Section>{createPostList(edges)}</Section>
  </PageLayout>
);

const createPostList = posts => (
  <ul>
    {Object.entries(
      posts.reduce((acc, item) => {
        const date = item.node.frontmatter.date;
        if (date === null) {
          return acc;
        }

        const year = getDateYear(date);
        if (!acc[year]) {
          acc[year] = [];
        }
        acc[year].push(item);

        return acc;
      }, {}),
    )
      .map(([year, posts], i) => (
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

const Post = ({
  post: {
    node: {
      frontmatter: {date, title},
      fields: {slug},
    },
  },
}) => (
  <li>
    <PostDate>
      <small>{getDateDay(date)}</small>
    </PostDate>
    <div>
      <Link to={getBlogRelPath(slug)}>{title}</Link>
    </div>
  </li>
);

const getDateYear = dateStr => new Date(dateStr).getFullYear();

const getDateDay = dateStr => {
  const date = new Date(dateStr);
  return `${date.toLocaleString('default', {month: 'long'})}, ${date.getDate()}`;
};

const PostDate = styled.div`
  float: right;
  margin: 0 0 0 20px;
`;
