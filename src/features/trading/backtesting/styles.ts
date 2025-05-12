import styled from 'styled-components';
import { colors } from '@/shared/constants/colors';

export const Container = styled.div`
  //background: ${colors.darkPurpleButton};
  border-radius: 16px;
  padding: 2rem;
  width: 100vw;
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Title = styled.h2`
  color: ${colors.white};
  margin: 0 0 1rem 0;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: ${colors.white};
`;

export const StyledInput = styled.input`
  padding: 0.75rem;
  border-radius: 6px;
  background: ${colors.accentBlack};
  border: 1px solid ${colors.greyText};
  color: ${colors.white};
  font-size: 1rem;

  &:focus {
    outline: 2px solid ${colors.purpleButton};
  }
`;

export const Select = styled.select`
  padding: 0.75rem;
  border-radius: 6px;
  background: ${colors.accentBlack};
  border: 1px solid ${colors.greyText};
  color: ${colors.white};
  font-size: 1rem;

  &:focus {
    outline: 2px solid ${colors.purpleButton};
  }
`;

export const ButtonWrapper = styled.div``;

export const PrimaryButton = styled.button`
  background: ${colors.purpleButton};
  color: ${colors.white};
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 0 0 transparent;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 15px ${colors.purpleButton};
    z-index: 1;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const ResultBlock = styled.div`
  margin-top: 2rem;
  padding: 1.5rem;
  border-radius: 12px;
  background: ${colors.cardBg};
  box-shadow: 0 0 15px ${colors.purpleButton};

  h3 {
    margin-bottom: 1rem;
    color: ${colors.primaryText};
  }

  p {
    margin: 0.5rem 0;
    font-size: 1rem;
  }
`;

export const HistoryBlock = styled.div`
  margin-top: 3rem;
  padding: 1.5rem;
  border-radius: 12px;
  background: ${colors.cardBg};
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);

  h3 {
    margin-bottom: 1rem;
    color: ${colors.primaryText};
  }

  ul {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }

  li {
    margin-bottom: 0.75rem;
    font-size: 0.95rem;
    color: ${colors.secondaryText};
  }
`;