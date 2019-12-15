import React from 'react';
import {Link} from './atoms';

export default ({name}) => {
  const Icon = files[name];

  return (
    <Link href={meta[name].to} target="_blank" rel="noopener noreferrer">
      <Icon />
    </Link>
  );
};

const meta = {
  email: {to: 'mailto:hey@eugrdn.me'},
  cv: {to: '/cv.pdf'},
  linkedin: {to: 'https://www.linkedin.com/in/eugrdn'},
  github: {to: 'https://github.com/eugrdn'},
  twitter: {to: 'https://twitter.com/eugrdn'},
  telegram: {to: 'https://t.me/eugrdn'},
  instagram: {to: 'https://www.instagram.com/eugrdn'},
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
})(require.context('../../assets/icons', false, /\.svg/));
