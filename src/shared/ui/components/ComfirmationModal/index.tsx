import { FC } from 'react';
import styled from 'styled-components';
import { colors } from '@/shared/constants/colors';

interface ConfirmationModalProps {
  isOpen: boolean;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export const ConfirmationModal: FC<ConfirmationModalProps> = ({
  isOpen,
  title,
  message,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  onConfirm,
  onCancel,
}) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onCancel}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <h3>{title}</h3>
        </ModalHeader>
        
        <ModalBody>
          <Message>{message}</Message>
          <ButtonGroup>
            <CancelButton onClick={onCancel}>{cancelText}</CancelButton>
            <ConfirmButton onClick={onConfirm}>{confirmText}</ConfirmButton>
          </ButtonGroup>
        </ModalBody>
      </ModalContainer>
    </ModalOverlay>
  );
};

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.774);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background: ${colors.backgroundDark};
  box-shadow: 0 0 40px rgba(138, 43, 226, 0.4);
  border-radius: 12px;
  padding: 2rem;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
`;

const ModalHeader = styled.div`
  margin-bottom: 1.5rem;
  h3 {
    color: ${colors.white};
    margin: 0;
    font-size: 1.5rem;
  }
`;

const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Message = styled.p`
  color: ${colors.textPrimary};
  margin: 0;
  line-height: 1.5;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 1rem;
`;

export const BaseButton = styled.button`
  padding: 0.8rem 1.8rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  backdrop-filter: blur(4px);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

const ConfirmButton = styled(BaseButton)`
  background: ${colors.red}20;
  color: ${colors.red};
  border: 1px solid ${colors.red}80;

  &:hover {
    background: ${colors.red}30;
  }
`;

const CancelButton = styled(BaseButton)`
  background: ${colors.accentBlack};
  color: ${colors.textPrimary};
  border: 1px solid ${colors.borderColor};
`;