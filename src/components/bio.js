import React from 'react';
import {isMobile} from 'react-device-detect';
import {graphql, StaticQuery} from 'gatsby';
import styled from 'styled-components';

const greeting = "Hey 👋🏼, I'm Evgeny";
const about = 'Based in 🇷🇺. Travelling the world ✈️. Work globally 👨‍💻';

export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            author
            social
          }
        }
      }
    `}
    render={() => {
      const heyStrings = isMobile ? greeting.split(',') : [greeting];
      const tagStrings = isMobile ? about.split('.') : [about];
      return (
        <Container>
          {heyStrings.map(s => (
            <Name key={s}>{s}</Name>
          ))}
          <Title>Senior Software Engineer</Title>
          {tagStrings.map(s => (
            <TagLine key={s}>{s}</TagLine>
          ))}
        </Container>
      );
    }}
  />
);

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5rem 0;
  height: 100%;
  text-align: center;
  flex-direction: column;
`;

const Name = styled.h2`
  font-size: 2rem;
  letter-spacing: 0.1rem;
  font-weight: 800;
  margin-bottom: 1rem;
`;

const Title = styled.h4`
  letter-spacing: 0.1rem;
  font-weight: 800;
  margin-bottom: 1rem;
`;

const TagLine = styled.h4`
  font-size: 0.9rem;
  color: #777;
  font-weight: normal;
`;
