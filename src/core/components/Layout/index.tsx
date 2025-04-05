import { Suspense } from 'react';

import { Loading } from '../Loading';


import * as UI from './Layout.styles';
import { IPropsWithChildren } from '../../utils/types';
import GetStartedModal from '../DesktopWrapper/modals/GetStartedModal';
import { RegistrationForm } from '../DesktopWrapper/modals/RegistrationModal';

const Layout = (props: IPropsWithChildren) => {
  const { children } = props;

  return (
    <Suspense fallback={<Loading />}>
      <UI.Layout>
        <GetStartedModal/>
        <RegistrationForm/>
        <UI.Container>
          <UI.Header>
          </UI.Header>
          <UI.Wrapper>
            {children}
          </UI.Wrapper>
        </UI.Container>
      </UI.Layout>
    </Suspense>
  );
};

export default Layout;
