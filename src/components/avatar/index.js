import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import Img from 'gatsby-image';
import styled, {css} from 'styled-components';
import Link from '../nav-link';

const avatarQuery = graphql`
  query {
    avatar: file(relativePath: {eq: "avatar.png"}) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default ({alt, size}) => {
  const {
    avatar: {
      childImageSharp: {fluid},
    },
  } = useStaticQuery(avatarQuery);

  return (
    <Avatar size={size}>
      <Link to="/">
        <Img fluid={fluid} alt={alt} />
      </Link>
    </Avatar>
  );
};

const Avatar = styled.div`
  width: 100%;
  height: 100%;

  a {
    background: #ddd;
    text-decoration: none;
    font-weight: 700;
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

  a,
  img,
  .gatsby-image-wrapper {
    & > div {
      padding: 0 !important;
    }
    ${({size}) =>
      size
        ? css`
            min-width: ${size}px;
            min-height: ${size}px;
          `
        : css`
            width: 100%;
            height: 100%;
          `};
    border-radius: 50%;
    border: 0;
  }
`;
