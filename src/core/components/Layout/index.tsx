import { Suspense } from 'react';

import { Loading } from '../Loading';


import * as UI from './Layout.styles';
import { IPropsWithChildren } from '../../utils/types';
import GetStartedModal from '../DesktopWrapper/modals/GetStartedModal';
import { RegistrationForm } from '../DesktopWrapper/modals/RegistrationModal';
import { ThemeProvider } from 'styled-components';
import { AuthModal } from '../DesktopWrapper/modals/AuthModal';

const Layout = (props: IPropsWithChildren) => {
  const { children } = props;

  return (
    <Suspense fallback={<Loading />}>
      <ThemeProvider theme={UI.darkTheme}>
      <UI.Layout>
        <GetStartedModal/>
        <RegistrationForm/>
        <AuthModal/>
        <UI.Container>
          <UI.Header>
          </UI.Header>
          <UI.Wrapper>
            {children}
          </UI.Wrapper>
        </UI.Container>
      </UI.Layout>
      </ThemeProvider>
    </Suspense>
  );
};

export default Layout;
