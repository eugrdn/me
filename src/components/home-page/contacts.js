import React from 'react';
import {isMobile} from 'react-device-detect';
import styled from 'styled-components';
import Link from '../nav-link';
import Section from '../section';
import SocialLink, {icons} from '../social-link';

export default () => (
  <Contacts>
    <p>
      Here is my <Link to="/blog">Blog</Link>
      {!isMobile && ' where I occasionally write'}
    </p>
    <p>Find and contact me via</p>
    <LinkList>
      <ul>
        {icons.map((name, i) => (
          <li key={i}>
            <SocialLink name={name} />
          </li>
        ))}
      </ul>
    </LinkList>
  </Contacts>
);

const Contacts = styled(Section)`
  text-align: center;
  color: #777;
  a {
    color: #000;
  }
  @media (prefers-color-scheme: dark) {
    a {
      color: #ddd;
    }
  }
`;

const LinkList = styled.div`
  display: flex;
  justify-content: center;
  ul {
    flex-grow: 1;
    display: flex;
    justify-content: space-around;
    max-width: 300px;
    li {
      margin: 0;
      a {
        border-bottom: none;
        img {
          margin: 0;
        }
      }
    }
  }
`;
