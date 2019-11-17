import React from 'react';
import {BrowserView, MobileView} from 'react-device-detect';
import styled from 'styled-components';
import Emoji from '../emoji';
import Section from '../section';

const name = "I'm Evgeny";
const jobTitle = 'Software Engineer';

const RU = <Emoji symbol="🇷🇺" label="russia" fallback=" Russia." />;
const Airplane = <Emoji symbol="🛫" label="airplane" fallback="." />;
const Developer = <Emoji symbol="👨‍💻" label="developer" fallback="." />;

export default () => (
  <Container>
    <MobileView>
      <Greeting>Hey{Wave}</Greeting>
      <Greeting>{name}</Greeting>
      <JobTitle>{jobTitle}</JobTitle>
      <Info>Based in{RU}</Info>
      <Info>Travelling the world{Airplane}</Info>
      <Info>Work globally{Developer}</Info>
    </MobileView>
    <BrowserView>
      <Greeting>
        Hey{Wave}, {name}
      </Greeting>
      <JobTitle>{jobTitle}</JobTitle>
      <Info>
        Based in{RU} Travelling the world{Airplane} Work globally{Developer}
      </Info>
    </BrowserView>
  </Container>
);

const Container = styled(Section)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  flex-direction: column;
`;

const Greeting = styled.h2`
  font-size: 2em;
  letter-spacing: 0.1em;
  font-weight: 800;
  margin-bottom: 1em;
`;

const JobTitle = styled.h4`
  font-size: 1.3em;
  letter-spacing: 0.1em;
  font-weight: 800;
  margin-bottom: 1em;
`;

const Info = styled.h4`
  color: #777;
  font-size: 1em;
  font-weight: normal;
`;

const HeyEmoji = styled(Emoji)`
  display: inline-block;
  width: 40px;
  animation-iteration-count: 2;
  animation-duration: 0s;
  animation-name: wave-hand;
  animation-duration: 0.4s;
  animation-timing-function: linear;
  animation-delay: 0.1s;
  animation-iteration-count: 2;
  animation-direction: normal;
  animation-fill-mode: forwards;

  @keyframes wave-hand {
    0% {
      -webkit-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    50% {
      -webkit-transform: rotate(40deg);
      -ms-transform: rotate(40deg);
      transform: rotate(40deg);
    }
  }
`;

const Wave = <HeyEmoji symbol="👋🏼" label="waving hand" />;
