import styled, { css } from 'styled-components';
import { chartColors, colors } from '@/shared/constants/colors';

export const CanvasContainer = styled.div`
  position: relative;
  border: 2px dashed ${colors.greyText};
  border-radius: 8px;
  height: 50vh;
  width: 65vw;
  overflow: hidden;
  transition: border-color 0.2s ease;
  
  &.dragover {
    border-color: ${colors.purpleButton};
    background: ${colors.accentBlack};
  }

  ${({ theme }) => theme.isMobile && css`
    width: 100%;
    height: 40vh;
  `}
`;

export const StageDivider = styled.div`
  position: absolute;
  width: 2px;
  height: 100%;
  background: ${colors.greyText}30;
  z-index: 0;

  &::after {
    content: attr(data-stage);
    position: absolute;
    top: 10px;
    left: 10px;
    color: ${colors.greyText};
    font-size: 0.8rem;
  }

  ${({ theme }) => theme.isMobile && css`
    &::after {
      font-size: 0.7rem;
    }
  `}
`;

export const DurationModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${colors.backgroundDark};
  border-radius: 12px;
  padding: 2rem;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 0 30px rgba(138, 43, 226, 0.3);
  border: 1px solid ${colors.borderColor};
  z-index: 1001;

  h3 {
    color: ${colors.white};
    font-size: 1.3rem;
    margin: 0 0 1.5rem;
    text-align: center;
    text-shadow: 0 0 15px ${colors.neonPurple}90;
  }
`;

export const DurationInput = styled.input`
  width: 100%;
  padding: 0.8rem 1rem;
  background: ${colors.cardBg};
  border: 1px solid ${colors.borderColor};
  border-radius: 8px;
  color: ${colors.textPrimary};
  font-size: 1rem;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${colors.neonPurple};
    box-shadow: 0 0 10px ${colors.neonPurple}50;
  }

  &::placeholder {
    color: ${colors.textSecondary};
  }
`;

export const ModalButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
`;

export const ConfirmButton = styled.button`
  background: ${colors.neonPurple};
  color: ${colors.white};
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 0 15px ${colors.neonPurple}50;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const CancelButton = styled.button`
  background: ${colors.cardBg};
  color: ${colors.textSecondary};
  border: 1px solid ${colors.borderColor};
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: ${colors.neonPurple};
    color: ${colors.neonPurple};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;
