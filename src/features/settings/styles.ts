// src/pages/Settings/style.ts
import styled from 'styled-components';
import { colors } from '@constants/colors';

export const Container = styled.div`
  color: #fff;
  min-height: 100vh;
  background: ${colors.backgroundBlack};
  padding: 4vh 2vw;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: ${colors.white};
  margin-bottom: 2rem;
`;

export const Subtitle = styled.h2`
  font-size: 1.2rem;
  color: ${colors.greyText};
  margin-bottom: 1rem;
`;

export const FormSection = styled.div`
  width: 100%;
  max-width: 500px;
  margin-bottom: 2rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  background: ${colors.accentBlack};
  border: 1px solid ${colors.greyText};
  border-radius: 6px;
  color: ${colors.white};
  margin-bottom: 1rem;
  font-size: 1rem;

  &:focus {
    outline: 2px solid ${colors.purpleButton};
  }
`;

export const PrimaryButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background: ${colors.purpleButton};
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 15px ${colors.purpleButton};
  }
`;
