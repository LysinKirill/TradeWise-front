import styled, { css } from 'styled-components';
import { colors } from '@/shared/constants/colors';

export const Container = styled.div`
  background: ${colors.darkPurpleButton};
  border-radius: 12px;
  padding: 1.5rem;
  height: 40vh;
  display: flex;
  flex-direction: column;
  
  ${({ theme }) => theme.isMobile && css`
    height: auto;
    padding: 1rem;
  `}
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ theme }) => theme.isMobile && css`
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  `}
`;

export const Title = styled.h3`
  color: ${colors.white};
  margin: 0;
  font-size: 1.25rem;

  ${({ theme }) => theme.isMobile && css`
    font-size: 1rem;
  `}
`;

export const AddButton = styled.button`
  background: ${colors.purpleButton};
  color: ${colors.white};
  border: none;
  padding: 0.5rem 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 8vw;
  height: 8vh;
  border-radius: 100px;
  font-size: 0.8rem;
  font-weight: bold;
  transition: all 0.3s ease;
  box-shadow: 0 0 0 transparent;


  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 15px ${colors.purpleButton};
    z-index: 1;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  ${({ theme }) => theme.isMobile && css`
    width: 100%;
    height: auto;
    padding: 0.75rem;
    font-size: 0.9rem;
    justify-content: center;
  `}
`;

export const Content = styled.div`
  overflow-y: auto;

  ${({ theme }) => theme.isMobile && css`
    max-height: none;
  `}
`;

export const PresetsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid ${colors.greyText};
  overflow-y: auto;

  ${({ theme }) => theme.isMobile && css`
    grid-template-columns: 1fr;
  `}
`;

export const ConnectionsList = styled.div`
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-right: 0.5rem;
  margin-top: 1rem;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: ${colors.accentBlack};
  }

  &::-webkit-scrollbar-thumb {
    background: ${colors.purpleButton};
    border-radius: 3px;
  }

  ${({ theme }) => theme.isMobile && css`
    padding-right: 0;
  `}
`;

export const EmptyState = styled.div`
  color: ${colors.greyText};
  text-align: center;
  padding: 2rem;
  font-size: 0.9rem;

  ${({ theme }) => theme.isMobile && css`
    font-size: 0.8rem;
    padding: 1rem;
  `}
`;