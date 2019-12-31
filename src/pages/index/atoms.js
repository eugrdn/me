import styled from 'styled-components';
import About from './components/about';
import Contacts from './components/contacts';

export const Container = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex: 1 1 0;
`;

export const HPWAbout = styled(About)`
  align-items: flex-start;
  text-align: left;
  margin: 0;
`;

export const HPWContacts = styled(Contacts)`
  align-items: flex-start;
  margin: 50px 0 0 0;
`;

export const Side = styled.div`
  flex: 1 1 0;
  flex-grow: 1;
`;

export const InfoSide = styled(Side)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin-left: 100px;
  margin-right: -100px;
`;

export const AvatarSide = styled(Side)`
  flex-grow: 0.6;
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
`;

export const AvatarContainer = styled.div`
  position: absolute;
  height: 110vh;
  width: 110vh;
  top: -5vh;
`;

// gatsby build fix =\
export default null;
