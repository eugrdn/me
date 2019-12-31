import styled from 'styled-components';
import Emoji from '../../../../components/emoji';
import Section from '../../../../components/section';

export const Container = styled(Section)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  flex-direction: column;
`;

export const Greeting = styled.h2`
  font-size: 2em;
  letter-spacing: 0.1em;
  font-weight: 800;
  margin-bottom: 0;
`;

export const JobTitle = styled.h4`
  font-size: 1.3em;
  letter-spacing: 0.1em;
  font-weight: 800;
  margin-top: 1.5em;
  margin-bottom: 1em;
`;

export const Info = styled.h4`
  color: #777;
  font-size: 1em;
  margin-top: 0;
  font-weight: normal;
`;

export const HeyEmoji = styled(Emoji)`
  display: inline-block;
  min-width: 40px;
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

// gatsby build fix =\
export default null;
