import styled, { css } from "styled-components";
import { chartColors, statusColors } from '@/shared/constants/colors';

export const StatCard = styled.div`
  background: linear-gradient(
    135deg,
    ${chartColors.primary} 0%,
    ${chartColors.secondary} 50%,
    ${chartColors.tertiary} 100%
  );
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px ${chartColors.neutral}33;
  transition: transform 0.3s ease;

  ${({ theme }) => theme.isMobile && css`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    border-radius: 16px;
    align-items: center;
    justify-content: center;
  `}

  &:hover {
    transform: translateY(-3px);
  }
`;

export const StatLabel = styled.div`
  font-size: 1rem;
  color: ${chartColors.textSecondary};
  margin-bottom: 0.5rem;
  letter-spacing: 0.5px;

  ${({ theme }) => theme.isMobile && css`
    font-size: 0.9rem;
    margin-bottom: 0.3rem;
  `}
`;

export const StatValue = styled.div<{ $positive?: boolean }>`
  font-size: 1.8rem;
  font-weight: 600;
  color: ${({ $positive }) => 
    $positive ? statusColors.positive : 
    $positive === false ? statusColors.negative : 
    chartColors.textPrimary};
  transition: all 0.3s ease;
  
  &:hover {
    color: ${({ $positive }) => 
      $positive ? `${statusColors.positive}CC` : 
      $positive === false ? `${statusColors.negative}CC` : 
      `${chartColors.textPrimary}CC`};
  }

  ${({ theme }) => theme.isMobile && css`
    font-size: 1.4rem;
    
    &:hover {
      transform: none;
    }
  `}
`;