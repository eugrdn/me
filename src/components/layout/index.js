import React from 'react';
import GlobalStyle from '../../styles/global';
import {useForceRepaint} from '../../styles/repaint';
import Footer from '../footer';
import Header from '../header';
import * as Atoms from './atoms';

const Root = ({children}) => {
  useForceRepaint();

  return (
    <>
      <GlobalStyle />
      <Atoms.FullScreen>{children}</Atoms.FullScreen>
    </>
  );
};

export const PageLayout = ({children}) => (
  <Root>
    <Header />
    <Atoms.Content>{children}</Atoms.Content>
    <Footer />
  </Root>
);

// home page widescreen
export const HPWLayout = ({children}) => (
  <Root>
    <Atoms.HPWContent>{children}</Atoms.HPWContent>
    <Atoms.HPWFooter />
  </Root>
);
