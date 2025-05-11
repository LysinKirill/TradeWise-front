import styled from "styled-components";
import { colors } from '@/shared/constants/colors';

export const StrategiesContainer = styled.div`
  background-color: ${colors.backgroundBlack};
  color: ${colors.white};
  min-height: 100vh;
  width: 95vw;
  
`;

export const StrategySection = styled.section`
  background: ${colors.darkPurpleButton};
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: ${colors.purpleButton};
`;

export const InputGroup = styled.div`
  margin-bottom: 1.5rem;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  background: ${colors.accentBlack};
  border: 1px solid ${colors.greyText};
  border-radius: 8px;
  color: ${colors.white};
  &:focus {
    outline: 2px solid ${colors.purpleButton};
  }
`;

export const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  background: ${colors.accentBlack};
  border: 1px solid ${colors.greyText};
  border-radius: 8px;
  color: ${colors.white};
  min-height: 100px;
  resize: vertical;
`;

export const PresetGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
`;

export const PresetCard = styled.div`
  background: ${colors.accentBlack};
  border-radius: 8px;
  padding: 1rem;
  border: 1px solid ${colors.greyText};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${colors.purpleButton};
    transform: translateY(-2px);
  }
`;

export const PurpleButton = styled.button`
  background: ${colors.purpleButton};
  color: ${colors.white};
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: ${colors.darkPurpleButton};
  }

  &:disabled {
    background: ${colors.greyText};
    cursor: not-allowed;
  }
`;