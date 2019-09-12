import React from 'react';
import styled from 'styled-components';

const Link = styled.a`
  text-decoration: none;
  border-bottom: none;
  display: inline-block;
  height: ${props => props.size}px;
  width: ${props => props.size}px;
`;

export default ({src, to, alt, size = 20}) => (
  <Link href={to} target="_blank" rel="noopener noreferrer" size={size}>
    <img src={src} alt={alt} />
  </Link>
);
