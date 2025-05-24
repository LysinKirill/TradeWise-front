import styled, { css } from 'styled-components';
import { colors } from '@shared/constants/colors';

export const Container = styled.div`
  position: relative;
  background: ${colors.backgroundBlack};
  border-radius: 16px;
  padding: 1.5rem;
  width: 65vw;
  overflow-y: auto;

  ${({ theme }) => theme.isMobile && css`
    width: 100%;
    padding: 1rem;
    max-height: 60vh;
  `}
`;

export const Title = styled.h3`
  color: ${colors.white};
  margin: 0 0 1.5rem 0;
  font-size: 1.25rem;
  text-shadow: 0 0 10px ${colors.white}90;

  ${({ theme }) => theme.isMobile && css`
    font-size: 1rem;
    margin-bottom: 1rem;
  `}
`;

export const PresetsGrid = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  ${({ theme }) => theme.isMobile && css`
    flex-direction: column;
    gap: 0.75rem;
  `}
`;

export const EmptyState = styled.div`
  color: ${colors.greyText};
  text-align: center;
  padding: 2rem;

  ${({ theme }) => theme.isMobile && css`
    padding: 1rem;
    font-size: 0.9rem;
  `}
`;

export const DeleteZone = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100px;
  background: #ff000033;
  border: 2px dashed red;
  display: flex;
  align-items: center;
  justify-content: center;
  color: red;
  font-weight: bold;

  ${({ theme }) => theme.isMobile && css`
    height: 80px;
    font-size: 0.9rem;
  `}
`;

export const NodeCloseButton = styled.button`
  position: absolute;
  top: -10px;
  right: -10px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: red;
  color: white;
  border: none;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }

  ${({ theme }) => theme.isMobile && css`
    top: -8px;
    right: -8px;
    width: 18px;
    height: 18px;
  `}
`;