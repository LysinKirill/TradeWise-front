import { centerLabelGradient, chartColors, statusColors } from '@/shared/constants/colors';
import styled from 'styled-components';

export const ChartContainer = styled.div`
  background: ${chartColors.background};
  color: ${chartColors.textPrimary};
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  height: 100%;
  min-height: 300px;
  border: 1px solid rgba(255, 255, 255, 0.1);

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
`;

export const LabelValue = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
  background: ${centerLabelGradient};
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

export const LabelDescription = styled.div`
  font-size: 0.9rem;
  color: ${chartColors.textSecondary};
  margin-top: 0.5rem;
`;

export const LegendContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-top: 1.5rem;
`;

export const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: ${chartColors.textPrimary};
`;

export const LegendColor = styled.div<{ color: string }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
`;

export const ChartHoverEffect = styled.div`
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
`;

export const ResponsiveWrapper = styled.div`
  @media (max-width: 768px) {
    ${ChartContainer} {
      padding: 1rem;
    }
    
    ${LabelValue} {
      font-size: 1.4rem;
    }
    
    ${LegendContainer} {
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;

// Animation for chart elements
export const chartAnimation = {
  duration: 1000,
  easing: 'easeOutQuart'
};

// Custom tooltip styles
export const TooltipContainer = styled.div`
  background: ${chartColors.background};
  border: 1px solid ${chartColors.neutral};
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  color: ${chartColors.textPrimary};
`;

export const TooltipItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  margin: 0.25rem 0;
  color: ${chartColors.textPrimary};
`;

// Accessibility styles
export const ScreenReaderOnly = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;

// Status color helper
export const PlValue = styled.span<{ negative: boolean }>`
  color: ${({ negative }) => negative ? statusColors.negative : statusColors.positive};
  font-weight: 500;
`;