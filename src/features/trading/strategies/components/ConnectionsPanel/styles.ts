import styled from 'styled-components';
import { colors } from '@/shared/constants/colors';

export const Container = styled.div`
  background: ${colors.darkPurpleButton};
  border-radius: 12px;
  padding: 1.5rem;
  height: calc(100vh - 200px);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const Title = styled.h3`
  color: ${colors.purpleButton};
  margin: 0;
  font-size: 1.25rem;
`;

export const AddButton = styled.button`
  background: ${colors.purpleButton};
  color: ${colors.white};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: background 0.2s ease;

  &:hover {
    background: ${colors.darkPurpleButton};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const PresetsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid ${colors.greyText};
`;

export const ConnectionsList = styled.div`
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-right: 0.5rem;

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
`;

export const EmptyState = styled.div`
  color: ${colors.greyText};
  text-align: center;
  padding: 2rem;
  font-size: 0.9rem;
`;