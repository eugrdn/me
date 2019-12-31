import React from 'react';
import {isMobile} from 'react-device-detect';
import Avatar from '../../components/avatar';
import {HPWLayout, PageLayout} from '../../components/layout';
import SEO from '../../components/seo';
import About from './components/about';
import Contacts from './components/contacts';
import * as Atoms from './atoms';

export default () => (
  <>
    <SEO title="Home" />
    {isMobile ? (
      <PageLayout>
        <Atoms.Container>
          <About />
          <Contacts />
        </Atoms.Container>
      </PageLayout>
    ) : (
      <HPWLayout>
        <Atoms.InfoSide>
          <Atoms.HPWAbout />
          <Atoms.HPWContacts />
        </Atoms.InfoSide>
        <Atoms.AvatarSide>
          <Atoms.AvatarContainer>
            <Avatar />
          </Atoms.AvatarContainer>
        </Atoms.AvatarSide>
      </HPWLayout>
    )}
  </>
);
