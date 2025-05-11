import styled from 'styled-components';

export const Toast = ({
  type,
  message,
  onClose
}: {
  type: 'success' | 'error';
  message: string;
  onClose: () => void;
}) => {
  return (
    <ToastWrapper $type={type}>
      <span>{message}</span>
      <button onClick={onClose}>×</button>
    </ToastWrapper>
  );
};

const ToastWrapper = styled.div<{ $type: 'success' | 'error' }>`
  position: fixed;
  top: 20px;
  right: 20px;
  background: ${({ $type }) => ($type === 'error' ? '#f44336' : '#4CAF50')};
  color: white;
  padding: 12px 16px;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    background: transparent;
    border: none;
    color: white;
    font-size: 20px;
    margin-left: 12px;
    cursor: pointer;
  }
`;
