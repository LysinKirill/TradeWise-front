import styled from 'styled-components';
import { colors } from '@shared/constants/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  color: ${colors.white}; 
`;

export const Layout = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`;

export const SidePanel = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 320px;
  max-width: 100%;
  background: ${colors.accentBlack};
  border-radius: 8px;
  padding: 1rem;
  overflow-y: auto;
  max-height: 85vh;
`;

export const WidePanel = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  padding-top: 0;
  gap: 1rem;
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 2rem;
  background: ${colors.darkPurpleButton};
  border-top: 1px solid ${colors.greyText};
`;

export const CommitButton = styled.button`
  background: ${colors.purpleButton};
  color: ${colors.white};
  border: none;
  border-radius: 6px;
  padding: 0.75rem 1.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    background: ${colors.greyText};
    cursor: not-allowed;
  }
`;

export const ValidationAlert = styled.div`
  color: ${colors.accentRed};
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  background: ${colors.darkRed};
`;