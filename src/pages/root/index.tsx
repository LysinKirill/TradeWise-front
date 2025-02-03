import * as UI from './styles';
import { useMediaQuery } from '../../core/hooks/useMediaQuery';
import { DesktopWelcome } from '../../core/components/Desktop/WelcomeWrapper/DesktopWelcome';
import { MobileWelcome } from '../../core/components/Mobile/WelcomePage/MobileWelcome';
import { useState } from 'react';
import GetStartedModal from '../../core/components/Desktop/modals/GetStartedModal/GetStartedModal';

const Root = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [isModalOpen, setModalOpen] = useState(false);

  const handleGetStartedClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <UI.Container>
      {isMobile ? (
        <UI.MobileWrapper>
          <MobileWelcome onGetStartedClick={handleGetStartedClick} /> 
        </UI.MobileWrapper>
      ) : (
        <UI.DesktopWrapper>
          <DesktopWelcome onGetStartedClick={handleGetStartedClick} />
        </UI.DesktopWrapper>
      )}
      {isModalOpen && <GetStartedModal onClose={handleCloseModal} />}
    </UI.Container>
  );
};

export default Root;
