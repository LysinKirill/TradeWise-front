import { colors } from '../../../../constants/colors';
import styled, { css } from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(17, 17, 19, 0.8);
  backdrop-filter: blur(12px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
     
  &::-webkit-scrollbar {
    width: 3px;
    height: 3px;
  }
  
  &::-webkit-scrollbar-track {
    margin: 10px;
  }
  
  &::-webkit-scrollbar-thumb {
    border-radius: 100px;
    background: ${colors.greyText};
  }

  ${({ theme }) => theme.isMobile && css`
    align-items: flex-end;
    padding: 0;
    background: rgba(17, 17, 19, 0.95);
  `}
`;

export const Title = styled.h1`
  font-size: 5rem;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0), 0 0 20px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.4); 

  ${({ theme }) => theme.isMobile && css`
    font-size: 2.5rem;
    margin-bottom: 1rem;
    line-height: 1.3;
  `}
`;

export const ModalContent = styled.div`
  background: black;
  padding: 5vh;
  border-radius: 20px;
  width: 50vw;
  max-width: 90%;
  box-shadow: 0 0px 15px rgba(255, 255, 255, 0.31);
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.isMobile && css`
    width: 100%;
    height: auto;
    max-width: none;
    border-radius: 24px 24px 0 0;
    padding: 2rem 1.5rem;
    min-height: 50vh;
  `}
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5em;
  cursor: pointer;
  color: white;

  ${({ theme }) => theme.isMobile && css`
    top: 15px;
    right: 15px;
    font-size: 2em;
  `}
`;

export const InnerContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.isMobile && css`
    width: 100%;
    padding: 0 0.5rem;
  `}
`;

export const Description = styled.p`
  font-size: 1em;
  margin: 5vh;

  ${({ theme }) => theme.isMobile && css`
    font-size: 0.9em;
    margin: 2rem 0;
    padding: 0 1rem;
    line-height: 1.5;
  `}
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 5vw;

  ${({ theme }) => theme.isMobile && css`
    flex-direction: column;
    gap: 1rem;
    max-width: 100%;
  `}
`;

export const PrimaryButton = styled.button`
  width: 15vw;
  padding: 12px 24px;
  background: ${colors.purpleButton};
  color: white;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
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
    padding: 1rem;
    font-size: 1.1rem;
    
    &:hover {
      transform: none;
      box-shadow: none;
    }
  `}
`;

export const SecondaryButton = styled(PrimaryButton)`
  background: ${colors.darkPurpleButton};

  &:hover {
    box-shadow: 0 0 15px ${colors.darkPurpleButton};
  }

  ${({ theme }) => theme.isMobile && css`
    &:hover {
      box-shadow: none;
    }
  `}
`;


