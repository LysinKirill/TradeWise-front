import styled, { css } from 'styled-components';
import { chartColors, colors } from '@/shared/constants/colors';

export const NodeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export const NodeTitle = styled.h4<{ isStart?: boolean }>`
  margin: 0;
  color: ${colors.darkPurple};
  font-size: 0.8rem;

  ${({ isStart }) => isStart && css`
    color: ${colors.white};
  `}

  ${({ theme }) => theme.isMobile && css`
    font-size: 0.7rem;
  `}
`;

export const StrategyNodeWrapper = styled.div.attrs<{ $x: number; $y: number }>(props => ({
  style: {
    left: `${props.$x}px`,
    top: `${props.$y}px`,
  }
})) <{ $x: number; $y: number, isStart?: boolean }>`
  position: absolute;
  background: #fff;
  border: 2px solid #ccc;
  color: #333;
  border-radius: 120px;
  width: 120px;
  min-height: 120px;
  cursor: move;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  box-shadow: 0 2px 6px ${colors.white};
  padding: 12px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px ${colors.neonPurple};

    button {
      opacity: 1;
      visibility: visible;
    }
  }

  ${({ isStart }) => isStart && css`
    && {
      background: linear-gradient(
            100deg,
            ${chartColors.primary} 0%,
            ${chartColors.secondary} 60%,
            ${chartColors.tertiary} 100%
      );
      border: 2px solid ${colors.neonPurple};
      color: ${colors.white};
      border-radius: 120px;
      width: 120px;
      min-height: 120px;
      box-shadow: 0 4px 12px ${colors.neonPurple};

      &:hover {
      box-shadow: 0 4px 12px ${colors.white};
      }

      @media (max-width: 768px) {
        width: 90px;
        min-height: 90px;
      }
    }
  `}

  @media (max-width: 768px) {
    width: 90px;
    min-height: 45px;
    padding: 8px;
  }
`;

export const NodeCloseButton = styled.button`
  position: absolute;
  top: -8px;
  right: -8px;
  width: 24px;
  height: 24px;
  border: none;
  border-radius: 50%;
  background: #ef4444;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s ease;
  font-size: 16px;
  line-height: 1;

  &:hover {
    background: #dc2626;
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
    font-size: 14px;
  }
`;

export const NodeHandle = styled.div`
  width: 24px;
  height: 24px;
  background: #7C3AED;
  border-radius: 50%;
  cursor: crosshair;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 16px;
  position: absolute;
  //bottom: 30px;
  right: -10px;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
    background: #6D28D9;
  }

  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
    font-size: 14px;
    bottom: -10px;
    right: -10px;
  }
`;

export const DurationBadge = styled.div`
  background: #f0f0f0;
  border-radius: 4px;
  padding: 2px 5px;
  font-size: 0.8rem;
  margin-top: 4px;
`;