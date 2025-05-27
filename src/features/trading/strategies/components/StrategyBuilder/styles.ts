import styled, { css } from 'styled-components';
import { chartColors, colors } from '@shared/constants/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  color: ${colors.white}; 
  
  ${({ theme }) => theme.isMobile && css`
    padding: 1rem;
  `}
`;

export const Layout = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
  box-shadow: 0px 10px 100px rgba(84, 1, 140, 0.75);

  ${({ theme }) => theme.isMobile && css`
    flex-direction: column;
    overflow: visible;
  `}
`;

export const SidePanel = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 25vw;
  max-width: 100%;
  border-radius: 8px;
  max-height: 85vh;
  padding: 1rem;

  ${({ theme }) => theme.isMobile && css`
    width: 100%;
    max-height: none;
    padding: 0.5rem;
    margin-top: 1rem;
  `}
`;

export const WidePanel = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  padding-top: 0.5rem;
  gap: 1rem;

  ${({ theme }) => theme.isMobile && css`
    padding: 0.5rem;
  `}
`;

export const CommitButton = styled.button`
  background: linear-gradient(
      135deg,
      ${chartColors.primary} 0%,
      ${chartColors.secondary} 50%,
      ${chartColors.tertiary} 100%
  );
  color: ${colors.white};
  border: none;
  border-radius: 16px;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 0 0 transparent;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 15px ${colors.purpleButton};
    opacity: 0.9;
    z-index: 1;
  }

  &:disabled {
    background: ${colors.greyText};
    cursor: not-allowed;
  }

  ${({ theme }) => theme.isMobile && css`
    width: 100%;
    padding: 0.75rem;
    font-size: 1rem;
  `}
`;

export const ValidationAlert = styled.div`
  color: ${colors.red};
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  background: ${colors.red};

  ${({ theme }) => theme.isMobile && css`
    font-size: 0.75rem;
    padding: 0.25rem 0.5rem;
  `}
`;

export const CommitSection = styled.div`
  display: flex;
  justify-content: flex-end;

  ${({ theme }) => theme.isMobile && css`
    justify-content: center;
    width: 100%;
  `}
`;

