import styled from 'styled-components';
import Footer from '../footer';

export const FullScreen = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  position: relative;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  flex-grow: 1;
  padding: 0 20px;
`;

export const HPWContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
`;

export const HPWFooter = styled(Footer)`
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -150px;
`;

export const PageNavigation = styled.div`
  text-align: center;
  max-width: 500px;
  margin: 50px auto 0;

  a {
    display: inline-block;
    text-decoration: none;
    border-bottom: none;
  }

  span {
    display: inline-block;
  }
`;
