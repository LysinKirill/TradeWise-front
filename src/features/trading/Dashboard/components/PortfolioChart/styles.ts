import { centerLabelGradient, chartColors } from '@/shared/constants/colors';
import styled, { css } from 'styled-components';

export const ChartContainer = styled.div`
  color: ${chartColors.textPrimary};
  border-radius: 12px;
  padding: 1.5rem;
  position: relative;
  height: 100%;
  min-height: 300px;

  ${({ theme }) => theme.isMobile && css`
    padding: 1rem;
    min-height: 250px;
    border-radius: 8px;
  `}

  .recharts-surface {
    overflow: visible;
  }

  .recharts-legend-wrapper {
    bottom: -20px !important;
  }
`;

export const LabelContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  pointer-events: none;

  ${({ theme }) => theme.isMobile && css`
    width: 80%;
  `}
`;

export const LabelValue = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
  background: ${centerLabelGradient};
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;

  ${({ theme }) => theme.isMobile && css`
    font-size: 1.4rem;
  `}
`;

export const LabelDescription = styled.div`
  font-size: 0.9rem;
  color: ${chartColors.textSecondary};
  margin-top: 0.5rem;

  ${({ theme }) => theme.isMobile && css`
    font-size: 0.8rem;
  `}
`;