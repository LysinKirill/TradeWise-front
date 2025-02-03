import styled, { css } from 'styled-components';

import { colors, TColors } from '../../constants/colors';

import { IStyledSvgProps } from './types';
import { omitProps } from '../../utils/styles';

export const StyledSvgIcon = styled.svg.withConfig({
  shouldForwardProp: omitProps(['color', 'size']),
})<IStyledSvgProps>`
  display: inline-block;
  flex-shrink: 0;
  min-width: 1em;
  max-width: 1em;
  min-height: 1em;
  max-height: 1em;
  cursor: default;
  user-select: none;

  fill: ${({ fill }) => fill || 'currentColor'};
  color: ${({ color }) => colors[color as TColors] || color || 'currentColor'};

  ${({ size }) => size && css`
    font-size: ${size}px;
  `}

  ${({ styles }) => styles}
`;

