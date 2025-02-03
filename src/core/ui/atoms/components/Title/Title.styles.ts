import styled, { css } from 'styled-components';

import { TTitleStyleProps } from './types';
import { colors } from '../../../../constants/colors';

export const Container = styled.h1<TTitleStyleProps>`
  color: ${colors.accentBlack};
  font-size: 44px;
  text-align: center;
  
  ${({ settings }) => settings && css`
      color: ${settings.color};
      font-size: ${settings.size};
      text-align: ${settings.textAlign};
  `}
`;
