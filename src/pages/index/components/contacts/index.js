import React from 'react';
import SocialLink, {icons} from '../../../../components/social-link';
import * as Atoms from './atoms';

export default ({className}) => (
  <Atoms.Contacts className={className}>
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
