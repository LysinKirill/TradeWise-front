import * as UI from './styles';
import { Title } from '../../../../ui/atoms';

interface GetStartedModalProps {
  onClose: () => void;
}

const GetStartedModal = ({ onClose }: GetStartedModalProps) => {
  return (
    <UI.ModalOverlay>
      <UI.ModalContent>
        <UI.CloseButton onClick={onClose}>×</UI.CloseButton>
        <Title>Get Started with TradeWise</Title>
        <UI.Description>
          Create an account to start using TradeWise and take advantage of all our features.
        </UI.Description>
        <UI.ButtonGroup>
          <UI.PrimaryButton>Sign Up</UI.PrimaryButton>
          <UI.SecondaryButton onClick={onClose}>Cancel</UI.SecondaryButton>
        </UI.ButtonGroup>
      </UI.ModalContent>
    </UI.ModalOverlay>
  );
};

export default GetStartedModal;
