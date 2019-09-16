import React from 'react';
import styled from 'styled-components';

export default ({name, size = 20}) => {
  const Icon = files[name];
  return (
    <Link href={meta[name].to} target="_blank" rel="noopener noreferrer" size={size}>
      <Icon />
    </Link>
  );
};

const Link = styled.a`
  text-decoration: none;
  border-bottom: none;
  display: flex;

  svg {
    display: inline-block;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
    path {
      fill: #777;
    }
  }

  &:hover svg path {
    fill: black;
  }
`;

const meta = {
  email: {to: 'mailto:hey@eugrdn.me'},
  cv: {to: '/cv.pdf'},
  linkedin: {to: 'https://www.linkedin.com/in/eugrdn'},
  github: {to: 'https://github.com/eugrdn'},
  telegram: {to: 'https://t.me/eugrdn'},
  instagram: {to: 'https://www.instagram.com/eugrdn'},
  twitter: {to: 'https://twitter.com/eugrdn'},
  medium: {to: 'https://medium.com/@eugrdn'},
  goodreads: {to: 'https://goodreads.com/eugrdn'},
};

export const icons = Object.keys(meta);

const files = {};
(requireContext => {
  requireContext.keys().forEach(path => {
    const nameStart = path.lastIndexOf('/') + 1;
    const extensionStart = path.lastIndexOf('.');
    const key = path.slice(nameStart, extensionStart);
    files[key] = requireContext(path);
  });
})(require.context('../../assets/images/icons', false, /\.svg/));
