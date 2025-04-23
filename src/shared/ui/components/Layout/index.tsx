import { Suspense } from 'react';

import { Loading } from '../Loading';

import * as UI from './Layout.styles';

import GetStartedModal from '../Modals/GetStartedModal';
import { RegistrationForm } from '../Modals/RegistrationModal';
import { ThemeProvider } from 'styled-components';
import { AuthModal } from '../Modals/AuthModal';
import { Outlet } from 'react-router-dom';
import Header from '../Header';

const Layout = () => {

  return (
    <Suspense fallback={<Loading />}>
      <ThemeProvider theme={UI.darkTheme}>
        <UI.Layout>
          <GetStartedModal />
          <RegistrationForm />
          <AuthModal />
          <UI.Container>
            <Header />
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
