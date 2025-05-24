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
