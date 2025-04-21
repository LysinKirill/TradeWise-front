import { Suspense } from 'react';

import { Loading } from '../Loading';

import * as UI from './Layout.styles';

import GetStartedModal from '../modals/GetStartedModal';
import { RegistrationForm } from '../modals/RegistrationModal';
import { ThemeProvider } from 'styled-components';
import { AuthModal } from '../modals/AuthModal';
import { Outlet } from 'react-router-dom';

const Layout = () => {

  return (
    <Suspense fallback={<Loading />}>
      <ThemeProvider theme={UI.darkTheme}>
        <UI.Layout>
          <GetStartedModal />
          <RegistrationForm />
          <AuthModal />
          <UI.Container>
            <UI.Header>
            </UI.Header>
            <UI.Wrapper>
              <Outlet />
            </UI.Wrapper>
          </UI.Container>
        </UI.Layout>
      </ThemeProvider>
    </Suspense>
  );
};

export default Layout;
