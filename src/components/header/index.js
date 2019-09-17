import React from 'react';
import {graphql, StaticQuery} from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Link from '../nav-link';

export default ({author}) => (
  <StaticQuery
    query={graphql`
      query {
        avatar: file(relativePath: {eq: "avatar.png"}) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `}
    render={({avatar}) => (
      <Header>
        <Link to="/">
          <Img fluid={avatar.childImageSharp.fluid} alt={author} />
        </Link>
      </Header>
    )}
  />
);

const Header = styled.header`
  margin: 35px auto 0;
  text-align: center;

  .gatsby-image-wrapper {
    height: 17vh;
    width: 17vh;
    border-radius: 50%;
  }

  a {
    background: #ddd;
    color: #000;
    text-decoration: none;
    font-weight: 700;
    border-radius: 50%;
    display: inline-block;
    text-align: center;
    line-height: 100px;
    border: 5px solid #fff;
    box-sizing: border-box;
    &:hover,
    &:focus {
      background: #f14e32;
    }
  }
`;
