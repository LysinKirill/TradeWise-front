import styled, { css } from 'styled-components';


import { TTextCardStyleProps } from './types';
import { colors } from '../../../../constants/colors';

export const Container = styled.div<TTextCardStyleProps>`
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
  align-items: center;
  padding: 2px 8px;
  border-radius: 12px;
  background-color: ${colors.white};
  font-size: 16px;
  font-family: 'dinpro',sans-serif;

  ${({ settings }) => settings && css`
    gap: ${settings.gap};
    justify-content: ${settings.justify};
    align-items: ${settings.alignItems};
    padding: ${settings.padding} ;
    background-color: ${settings.backgroundColor};
    font-size: ${settings.fontSize};
    font-weight: ${settings.fontWeight};
    width: ${settings.width};
    cursor: ${settings.cursor};
  `}

  ${({ withHover }) => withHover && css`
    cursor: pointer; 
    
    :hover {
      background-color: ${colors.lightHover};
    }
  `}

  ${({ isActive }) => isActive && css`
    color: ${colors.white};
    background-color: ${colors.accentBlack};

    :hover {
      background-color: ${colors.darkHover};
    }
  `}

  ${({ additionalStyles }) => additionalStyles}
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.40);
  border-radius: 100%;
  color: ${colors.white};
  cursor: pointer;

  & > svg {
    cursor: pointer;
  }
`;
