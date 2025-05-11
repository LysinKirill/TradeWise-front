import styled from 'styled-components';
import { colors } from '@/shared/constants/colors';

export const CanvasContainer = styled.div`
  position: relative;
  background: ${colors.backgroundBlack};
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
`;

export const StyledConnectionLine = styled.line.attrs(() => ({
  stroke: colors.purpleButton,
}))`
  stroke-width: 10px;
  pointer-events: none;
`;

export const StrategyNodeWrapper = styled.div.attrs<{ $x: number; $y: number,  }>(props => ({
  style: {
    left: `${props.$x}px`,
    top: `${props.$y}px`,
  }
}))<{ $x: number; $y: number, isStart?: boolean }>`
  position: absolute;
  left: ${({ $x }) => $x}px;
  top: ${({ $y }) => $y}px;
  background: ${({ isStart }) => isStart ? '#4CAF50' : '#fff'};
  border: 2px solid ${({ isStart }) => isStart ? '#2E7D32' : '#ccc'};
  color: ${({ isStart }) => isStart ? '#fff' : '#333'};
  border-radius: 50%;
  width: 80px;
  height: 80px;
  cursor: move;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;



  &:hover {
    transform: scale(1.1);
    box-shadow: 0 2px 8px rgba(128, 26, 229, 0.4);
  }
`;

export const NodeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export const NodeTitle = styled.h4`
  margin: 0;
  color: ${colors.darkPurpleButton};
  font-size: 0.8rem;
  pointer-events: none;
`;

export const NodeHandle = styled.div`
  width: 12px;
  height: 12px;
  background: ${colors.purpleButton};
  border-radius: 50%;
  cursor: crosshair;
`;


export const CardContainer = styled.div`
  background: ${colors.accentBlack};
  border: 1px solid ${colors.greyText};
  border-radius: 8px;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 80px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  &:hover {
    border-color: ${colors.purpleButton};
    transform: translateY(-2px);
    box-shadow: 0 2px 8px rgba(128, 26, 229, 0.2);
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardTitle = styled.h4`
  margin: 0;
  color: ${colors.white};
  font-size: 1rem;
  font-weight: 500;
`;

export const ConnectionType = styled.span<{ $color?: string }>`
  background: ${props => props.$color || colors.purpleButton};
  color: ${colors.white};
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
`;

export const ConnectionDetails = styled.div`
  color: ${colors.greyText};
  font-size: 0.875rem;
`;

export const ConditionBadge = styled.span`
  background: ${colors.darkPurpleButton};
  color: ${colors.white};
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  margin-right: 0.5rem;
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 4px;
  right: 4px;
  cursor: pointer;
  color: ${colors.greyText};
  padding: 2px;
  font-size: 1.2rem;
  line-height: 1;

  &:hover {
    color: ${colors.white};
  }
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
`;