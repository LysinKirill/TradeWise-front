import * as UI from './styles';

export const ValidationModal = ({
  error,
  onClose
}: {
  error: string | null;
  onClose: () => void;
}) => {
  if (!error) return null;
  
  return (
    <UI.ModalOverlay>
      <UI.ModalContainer>
        <UI.ModalHeader>
          <UI.ModalTitle>Validation Error</UI.ModalTitle>
          <UI.CloseButton onClick={onClose}>&times;</UI.CloseButton>
        </UI.ModalHeader>
        
        <UI.ModalBody>
          <UI.ErrorMessage>{error}</UI.ErrorMessage>
        </UI.ModalBody>

        <UI.ModalFooter>
          <UI.ActionButton onClick={onClose}>Close</UI.ActionButton>
        </UI.ModalFooter>
      </UI.ModalContainer>
    </UI.ModalOverlay>
  );
}