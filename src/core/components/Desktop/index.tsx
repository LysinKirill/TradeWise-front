import { useState } from 'react';
import * as UI from './styles';
import { DesktopWelcome } from './WelcomeWrapper';
import GetStartedModal from './modals/GetStartedModal';

export const DesktopWrapper = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleGetStartedClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <UI.Container>
      <DesktopWelcome onGetStartedClick={handleGetStartedClick} />
      {isModalOpen && <GetStartedModal onClose={handleCloseModal} />}
    </UI.Container>
  );
};

export default DesktopWrapper;


