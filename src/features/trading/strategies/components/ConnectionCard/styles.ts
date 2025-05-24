import styled, { css } from 'styled-components';
import { chartColors, colors } from '@/shared/constants/colors';

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

  ${({ theme }) => theme.isMobile && css`
    padding: 0.75rem;
    min-height: 60px;
  `}
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

  ${({ theme }) => theme.isMobile && css`
    font-size: 0.875rem;
  `}
`;

export const ConnectionType = styled.span<{ $color?: string }>`
  //background: ${props => props.$color || colors.purpleButton};
  background: linear-gradient(
        135deg,
        ${chartColors.primary} 0%,
        ${chartColors.secondary} 50%,
        ${chartColors.tertiary} 100%
      );
  color: ${colors.white};
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;

  ${({ theme }) => theme.isMobile && css`
    font-size: 0.65rem;
    padding: 0.2rem 0.4rem;
  `}
`;

export const ConnectionDetails = styled.div`
  color: ${colors.greyText};
  font-size: 0.875rem;

  ${({ theme }) => theme.isMobile && css`
    font-size: 0.75rem;
  `}
`;

export const ConditionBadge = styled.span`
  background: ${colors.darkPurpleButton};
  color: ${colors.white};
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  margin-right: 0.5rem;

  ${({ theme }) => theme.isMobile && css`
    font-size: 0.65rem;
    padding: 0.2rem 0.4rem;
  `}
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

  ${({ theme }) => theme.isMobile && css`
    font-size: 0.65rem;
    padding: 0.2rem 0.4rem;
  `}
`;

