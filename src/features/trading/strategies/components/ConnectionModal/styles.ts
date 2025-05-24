import { chartColors, colors } from "@/shared/constants/colors";
import styled, { css } from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(4px);
`;

export const ModalContainer = styled.div`
  background: ${colors.accentBlack};
  border: 1px solid ${colors.greyText}50;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  width: 90%;
  max-width: 900px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
`;

export const ModalHeader = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid ${colors.greyText}30;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ModalTitle = styled.h3`
  margin: 0;
  font-size: 1.25rem;
  color: ${colors.white};
  font-weight: 600;
  background: linear-gradient(
    135deg,
    ${chartColors.primary} 0%,
    ${chartColors.secondary} 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const ModalBody = styled.div`
  padding: 1.5rem;
  overflow-y: auto;
  flex-grow: 1;
`;

export const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  label {
    display: block;
    margin-bottom: 0.75rem;
    font-weight: 500;
    color: ${colors.white};
    font-size: 0.9rem;
  }

  select, input {
    width: 100%;
    padding: 0.75rem;
    background: ${colors.darkPurpleButton};
    border: 1px solid ${colors.greyText}50;
    border-radius: 8px;
    color: ${colors.white};
    font-size: 1rem;
    transition: all 0.2s ease;

    &:focus {
      outline: none;
      border-color: ${chartColors.primary};
      box-shadow: 0 0 0 2px ${chartColors.primary}30;
    }
  }
`;

export const ConditionsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0 1rem;
  padding-top: 1.5rem;
  border-top: 1px solid ${colors.greyText}30;

  h4 {
    margin: 0;
    font-size: 1rem;
    color: ${colors.white};
    font-weight: 500;
  }
`;

export const AddButton = styled.button`
  background: linear-gradient(
    135deg,
    ${chartColors.primary} 0%,
    ${chartColors.secondary} 50%,
    ${chartColors.tertiary} 100%
  );
  color: ${colors.white};
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 15px ${chartColors.primary}30;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(255,255,255,0.1) 0%,
      rgba(255,255,255,0.05) 100%
    );
  }
`;

export const ConditionRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr auto;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1rem;

  select, input {
    padding: 0.75rem;
    background: ${colors.darkPurpleButton};
    border: 1px solid ${colors.greyText}50;
    border-radius: 8px;
    color: ${colors.white};
    font-size: 0.9rem;
  }

  input {
    width: 100%;
  }
`;

export const RemoveButton = styled.button`
  background: none;
  border: none;
  color: ${colors.greyText};
  cursor: pointer;
  padding: 0 0.5rem;
  transition: color 0.2s ease;

  &:hover {
    color: ${colors.white};
  }
`;

export const ModalFooter = styled.div`
  padding: 1.5rem;
  border-top: 1px solid ${colors.greyText}30;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

export const ActionButton = styled.button<{ disabled?: boolean }>`
  background: ${({ disabled }) => disabled 
    ? colors.greyText 
    : `linear-gradient(
        135deg,
        ${chartColors.primary} 0%,
        ${chartColors.secondary} 100%
      )`};
  color: ${colors.white};
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 8px;
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  font-weight: 500;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;

  &:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 4px 15px ${chartColors.primary}30;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
            135deg,
            rgba(255,255,255,0.1) 0%,
            rgba(255,255,255,0.05) 100%,
          );

   ${({ disabled }) => disabled && css`
    background:  'rgba(0,0,0,0.3)';
  `}
  }
`;


export const GearButton = styled.button`
  background: linear-gradient(
    135deg,
    ${chartColors.primary} 0%,
    ${chartColors.secondary} 100%
  );
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);

  &:hover {
    transform: rotate(90deg) scale(1.1);
    box-shadow: 0 4px 15px ${chartColors.primary}30;
  }

  svg {
    width: 18px;
    height: 18px;
    fill: ${colors.white};
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  color: #6b7280;
  font-size: 1.5rem;
  line-height: 1;
  transition: color 0.2s;

  &:hover {
    color: #4b5563;
  }
`;