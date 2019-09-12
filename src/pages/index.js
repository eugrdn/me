import React from 'react';
import styled from 'styled-components';
import Bio from '../components/bio';
import Link from '../components/nav-link';
import Section from '../components/section';
import SEO from '../components/seo';
import SocialLink from '../components/social-link';
import Layout from '../layouts/default';

import Github from '../../static/images/social/github.svg';
import Goodreads from '../../static/images/social/goodreads.svg';
import Instagram from '../../static/images/social/instagram.svg';
import Linkedin from '../../static/images/social/linkedin.svg';
import Medium from '../../static/images/social/medium.svg';
import Telegram from '../../static/images/social/telegram.svg';
import Twitter from '../../static/images/social/twitter.svg';

const links = [
  {src: Linkedin, to: 'https://www.linkedin.com/in/eugrdn', alt: 'linkedin'},
  {src: Github, to: 'https://github.com/eugrdn', alt: 'github'},
  {src: Twitter, to: 'https://twitter.com/eugrdn', alt: 'twitter'},
  {src: Telegram, to: 'https://t.me/eugrdn', alt: 'telegram'},
  {src: Instagram, to: 'https://www.instagram.com/eugrdn', alt: 'instagram'},
  {src: Medium, to: 'https://medium.com/@eugrdn', alt: 'medium'},
  {src: Goodreads, to: 'https://goodreads.com/eugrdn', alt: 'goodreads'},
];

export default () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <Bio />
      <ContactInfo>
        <p>
          Here is my <a href="mailto">CV</a>
        </p>
        <p>
          Also you could check my <Link to="/blog">Blog</Link> where I occasionally write
        </p>
        <p>
          Contact me via <a href="mailto:hey@eugrdn.me">e-mail</a> or find me in social networks
        </p>
        <LinkList>
          <ul>
            {links.map((l, i) => (
              <li key={i}>
                <SocialLink {...l} />
              </li>
            ))}
          </ul>
        </LinkList>
      </ContactInfo>
    </Container>
  </Layout>
);

const Container = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ContactInfo = styled(Section)`
  text-align: center;
`;

const LinkList = styled.div`
  display: flex;
  justify-content: center;
  ul {
    margin-top: 10px;
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
