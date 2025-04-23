import { Suspense } from 'react';

import { Loading } from '../Loading';

import * as UI from './Layout.styles';

import { ThemeProvider } from 'styled-components';
import { Outlet } from 'react-router-dom';
import Header from '../Header';
import { AuthModal } from '@shared/ui/components/Modals/AuthModal';
import GetStartedModal from '@shared/ui/components/Modals/GetStartedModal';
import { RegistrationForm } from '@shared/ui/components/Modals/RegistrationModal';

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
