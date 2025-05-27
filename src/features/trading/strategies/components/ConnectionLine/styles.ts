import styled from 'styled-components';

export const GearButton = styled.button`
  background: white;
  border: 2px solid #7F56D9;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  transition: all 0.2s;
  
  &:hover {
    background: #7F56D9;
    color: white;
    transform: rotate(90deg);
  }
`;