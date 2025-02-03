import styled, { css } from 'styled-components';

import { colors } from '@core/constants/colors';

export const PageInput = styled.input`
  border: none;
  outline: none;
  background: none;
  height: 32px;
  padding: 0 8px;
  width: 100%;

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 32px;
  width: 32px;

  & > svg {
    cursor: pointer;
  }
`;

export const InputContainer = styled.div<{ error: boolean }>`
  display: flex;
  border: 1px solid ${colors.lightHover};
  border-radius: 8px;
  background-color: ${colors.white};
  width: 100%;

  ${({ error }) => error && css`
    border: 1px solid ${colors.red};
    background-color: ${colors.lightRed};
  `}
`;

export const InputPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  color: ${colors.red};
  width: 100%;
`;
