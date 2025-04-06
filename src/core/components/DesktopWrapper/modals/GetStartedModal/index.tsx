import { useTypedDispatch } from './../../../../store';
import { useSelector } from 'react-redux';
import * as UI from './styles';
import { selectGetStartedModalState } from './../../../../store/modules/modals/selectors';
import { closeGetStartedModal, openRegistrationModal } from './../../../../store/modules/modals/slice';

const GetStartedModal = () => {
  const dispatch = useTypedDispatch();
  const { isOpen } = useSelector(selectGetStartedModalState);

  if (!isOpen) return null;

  const handleClose = () => {
    dispatch(closeGetStartedModal());
  };

  const handleOpenRegistrationModal = () => {
      dispatch(openRegistrationModal());
      dispatch(closeGetStartedModal());
    };

  return (
    <UI.ModalOverlay>
      <UI.ModalContent>
        <UI.CloseButton onClick={handleClose}>×</UI.CloseButton>
        <UI.InnerContentWrapper>
        <UI.Title>Get Started with TradeWise</UI.Title>
        <UI.Description>
          Create an account to start using TradeWise and take advantage of all our features.
        </UI.Description>
        <UI.ButtonGroup>
          <UI.PrimaryButton onClick={handleOpenRegistrationModal}>Sign Up</UI.PrimaryButton>
          <UI.SecondaryButton onClick={handleClose}>Cancel</UI.SecondaryButton>
        </UI.ButtonGroup>
        </UI.InnerContentWrapper>
      </UI.ModalContent>
    </UI.ModalOverlay>
  );
};

export default GetStartedModal;
