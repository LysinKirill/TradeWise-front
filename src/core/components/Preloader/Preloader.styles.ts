import styled, { css } from 'styled-components';

import { colors } from '@core/constants/colors';
import { Z_INDEX_PRELOADER } from '@core/constants/styles';
import { hexToRGB, omitProps } from '@core/utils/styles';

import { IPreloaderStylesProps, IPagePreloaderStylesProps } from './types';

export const Preloader = styled.div.withConfig({
  shouldForwardProp: omitProps(['color']),
})<IPreloaderStylesProps>`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: ${Z_INDEX_PRELOADER};
  color: ${({ color }) => color};

  ${({ isAbsolute }) => isAbsolute && css`
    position: absolute;
    top: 0;
    left: 0;
  `}

  ${({ styles }) => styles};
`;

export const PagePreloader = styled.div<IPagePreloaderStylesProps>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${Z_INDEX_PRELOADER};
  width: 100%;
  height: 100%;
  background-color: ${hexToRGB(colors.accentBlack, 0.3)};

  ${({ styles }) => styles};
`;

export const pagePreloaderSpinnerStyles = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
