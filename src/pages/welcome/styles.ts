import { colors } from '@constants/colors';
import styled, { css } from "styled-components";

export const Container = styled.div`
  color: #fff;
  min-height: 100vh;
  height: 70vh;
  padding: 0px;

  ${({ theme }) => theme.isMobile && css`
    height: auto;
  `}
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 100px;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0), 0 0 20px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.4); 

  ${({ theme }) => theme.isMobile && css`
    font-size: 48px;
    line-height: 1.2;
  `}
`;

export const HeroSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 25vh;

  ${({ theme }) => theme.isMobile && css`
    margin-top: 15vh;
  `}
`;

export const HeroContent = styled.div`
  max-width: 2000px;
  display: flex;
  flex-direction: column;
  gap: 2vh;

  ${({ theme }) => theme.isMobile && css`
    padding: 0 1rem;
  `}
`;

export const Subtitle = styled.p`
  font-size: 1.5rem;
  margin: 20px 0;
  opacity: 0.8;

  ${({ theme }) => theme.isMobile && css`
    font-size: 1rem;
    max-width: 90%;
  `}
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 5vw;

  ${({ theme }) => theme.isMobile && css`
    gap: 1rem;
    flex-direction: column;
    width: 100%;
  `}
`;

export const PrimaryButton = styled.button`
  width: 20vw;
  padding: 12px 24px;
  background: ${colors.purpleButton};
  color: white;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
  transition: all 0.3s ease;
  box-shadow: 0 0 0 transparent;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 15px ${colors.purpleButton};
    z-index: 1;
  }

  ${({ theme }) => theme.isMobile && css`
    width: 100%;
    font-size: 1rem;
    
    &:hover {
      transform: scale(1.02);
    }
  `}
`;

export const SecondaryButton = styled(PrimaryButton)`
  background: ${colors.darkPurpleButton};
  &:hover {
    box-shadow: 0 0 15px ${colors.darkPurpleButton};
  }
`;