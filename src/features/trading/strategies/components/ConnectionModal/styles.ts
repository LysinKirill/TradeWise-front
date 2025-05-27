import { chartColors, colors } from "@/shared/constants/colors";
import styled from "styled-components";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Toast = styled(ToastContainer)`
  .Toastify__toast {
    background: ${colors.accentBlack};
    border: 1px solid ${colors.greyText}30;
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    color: ${colors.white};
    padding: 1rem;
  }

  .Toastify__progress-bar {
    background: linear-gradient(
      90deg,
      ${chartColors.primary} 0%,
      ${chartColors.secondary} 100%
    );
  }

  .Toastify__close-button {
    color: ${colors.greyText};
    opacity: 1;
    transition: color 0.2s;

    &:hover {
      color: ${colors.white};
    }
  }
`;

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
  overflow: hidden;
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
  font-size: 2.25rem;
  color: ${colors.white};
  text-shadow: 0 0 10px ${colors.white}90;
  font-weight: 600;
`;

export const ModalBody = styled.div`
  padding: 1.5rem;
  overflow-y: auto;
  flex-grow: 1;
  
  &::-webkit-scrollbar {
    width: 6px;
    background: ${colors.darkPurpleButton};
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${chartColors.primary};
    border-radius: 3px;
  }
`;

/*export const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  label {
    display: block;
    margin-bottom: 0.75rem;
    font-weight: 500;
    color: ${colors.white}90;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
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
    appearance: none;

    &:focus {
      outline: none;
      border-color: ${chartColors.primary};
      box-shadow: 0 0 0 2px ${chartColors.primary}30;
    }
  }

  select {
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3e%3cpath d='M7 10l5 5 5-5z'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 0.8rem center;
    background-size: 1rem;
    padding-right: 2.5rem;
  }
`;*/

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

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 15px ${chartColors.primary}30;
  }
`;

/*export const ConditionRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 1.5fr 1.5fr 100px 40px;
  gap: 0.8rem;
  align-items: center;
  margin-bottom: 1rem;

  select, input {
    padding: 0.65rem;
    background: ${colors.darkPurpleButton};
    border: 1px solid ${colors.greyText}50;
    border-radius: 6px;
    color: ${colors.white};
    font-size: 0.9rem;
    height: 40px;
  }

  input {
    width: 100%;
    padding: 0.65rem 0.8rem;
  }
`;*/

export const RemoveButton = styled.button`
  background: none;
  border: none;
  color: ${colors.greyText};
  cursor: pointer;
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  border-radius: 50%;

  &:hover {
    color: ${colors.white};
    background: ${colors.red}30;
  }

  &::before {
    content: '×';
    font-size: 1.4rem;
    line-height: 1;
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

  &:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 4px 15px ${chartColors.primary}30;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  color: ${colors.greyText};
  font-size: 1.5rem;
  line-height: 1;
  transition: color 0.2s;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${colors.white};
    background: ${colors.greyText}15;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  label {
    display: block;
    margin-bottom: 0.75rem;
    font-weight: 500;
    color: ${colors.textPrimary};
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  select, input {
    width: 100%;
    padding: 0.9rem 1.2rem;
    border: 1px solid ${colors.borderColor};
    border-radius: 8px;
    background: ${colors.inputBackground};
    color: ${colors.textPrimary};
    font-size: 1rem;
    transition: all 0.3s ease;
    appearance: none;

    &:focus {
      outline: none;
      border-color: ${colors.neonPurple};
      box-shadow: 0 0 12px ${colors.neonPurple}40;
    }
  }

  select {
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3e%3cpath d='M7 10l5 5 5-5z'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 1.2rem center;
    background-size: 1rem;
    padding-right: 3rem;
  }
`;

export const ConditionRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 1.5fr 1.5fr 100px 40px;
  gap: 0.8rem;
  align-items: center;
  margin-bottom: 1rem;

  select, input {
    width: 100%;
    padding: 0.9rem 1.2rem;
    border: 1px solid ${colors.borderColor};
    border-radius: 8px;
    background: ${colors.inputBackground};
    color: ${colors.textPrimary};
    font-size: 1rem;
    transition: all 0.3s ease;
    height: auto;

    &:focus {
      outline: none;
      border-color: ${colors.neonPurple};
      box-shadow: 0 0 12px ${colors.neonPurple}40;
    }
  }

  select {
    background-repeat: no-repeat;
    background-position: right 1.2rem center;
    background-size: 1rem;
    padding-right: 3rem;
  }

  input {
    padding: 0.9rem 1.2rem;
  }
`;