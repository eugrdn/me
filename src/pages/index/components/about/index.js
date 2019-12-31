import React from 'react';
import {isMobile} from 'react-device-detect';
import Emoji from '../../../../components/emoji';
import {Container, Greeting, HeyEmoji, Info, JobTitle, LocationEmoji} from './atoms';

const name = "I'm Evgeny";
const jobTitle = 'Software Engineer';

const RU = <LocationEmoji symbol="🇷🇺" label="russia" fallback=" Russia." />;
const World = <Emoji symbol="🌎" label="world" fallback=" world." />;
const Developer = <Emoji symbol="👨🏼‍💻" label="developer" fallback="." />;
const Wave = <HeyEmoji symbol="👋🏼" label="waving hand" />;

export default ({className}) => (
  <Container className={className}>
    {isMobile ? (
      <>
        <Greeting>Hey{Wave}</Greeting>
        <Greeting>{name}</Greeting>
        <JobTitle>{jobTitle}</JobTitle>
        <Info>Currently in{RU}</Info>
        <Info>Travelling the{World}</Info>
        <Info>Work globally{Developer}</Info>
      </>
    ) : (
      <>
        <Greeting>
          Hey{Wave}, {name}
        </Greeting>
        <JobTitle>{jobTitle}</JobTitle>
        <Info>
          Currently in{RU} Travelling the{World} Work globally{Developer}
        </Info>
      </>
    )}
  </Container>
);
