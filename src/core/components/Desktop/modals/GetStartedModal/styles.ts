import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  max-width: 90%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5em;
  cursor: pointer;
`;

export const Description = styled.p`
  font-size: 1em;
  margin: 10px 0;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const PrimaryButton = styled.button`
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
`;

export const SecondaryButton = styled.button`
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
  background: #6c757d;
  color: white;
  border: none;
  border-radius: 4px;
`;
