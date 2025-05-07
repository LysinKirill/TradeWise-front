import styled from "styled-components";
import { chartColors, statusColors } from '@/shared/constants/colors';

export const StatCard = styled.div`
  background: ${chartColors.background};
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px ${chartColors.neutral}33;  // Add alpha channel for shadow
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

export const StatLabel = styled.div`
  font-size: 1rem;
  color: ${chartColors.textSecondary};
  margin-bottom: 0.5rem;
  letter-spacing: 0.5px;
`;

export const StatValue = styled.div<{ $positive?: boolean }>`
  font-size: 1.8rem;
  font-weight: 600;
  color: ${({ $positive }) => 
    $positive ? statusColors.positive : 
    $positive === false ? statusColors.negative : 
    chartColors.textPrimary};
  transition: color 0.3s ease;
  
  &:hover {
    color: ${({ $positive }) => 
      $positive ? `${statusColors.positive}CC` : 
      $positive === false ? `${statusColors.negative}CC` : 
      `${chartColors.textPrimary}CC`};
  }
`;