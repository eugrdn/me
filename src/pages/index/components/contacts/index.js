import React from 'react';
import {isMobile} from 'react-device-detect';
import Link from '../../../../components/nav-link';
import SocialLink, {icons} from '../../../../components/social-link';
import * as Atoms from './atoms';

export default ({className}) => (
  <Atoms.Contacts className={className}>
    <p>
      Here is my{' '}
      <Link to="/blog" style={{textDecoration: 'line-through'}}>
        Blog
      </Link>
      {!isMobile && ' where I occasionally write'}
    </p>
    <Atoms.FindMe>Find and contact me via</Atoms.FindMe>
    <Atoms.LinkList>
      <ul>
        {icons.map((name, i) => (
          <li key={i}>
            <SocialLink name={name} />
          </li>
        ))}
      </ul>
    </Atoms.LinkList>
  </Atoms.Contacts>
);
