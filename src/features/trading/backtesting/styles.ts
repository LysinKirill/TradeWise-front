import styled, { css } from "styled-components";
import { colors, chartColors } from "@/shared/constants/colors";

export const Container = styled.div`
  padding: 2rem;
  max-width: 1440px;
  margin: 0 auto;
  min-height: 100vh;
  color: ${colors.textPrimary};
  
  ${({ theme }) => theme.isMobile && css`
    padding: 1rem;
  `}
`;

export const Title = styled.h2`
  font-size: 2.2rem;
  margin: 0 0 2rem;
  color: ${colors.white};
  text-shadow: 0 0 10px ${colors.white}90;
  position: relative;
  padding-bottom: 0.5rem;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(
      90deg,
      ${chartColors.primary} 0%,
      ${chartColors.secondary} 50%,
      ${chartColors.tertiary} 100%
    );
  }

  ${({ theme }) => theme.isMobile && css`
    font-size: 1.8rem;
  `}
`;

export const InputGroup = styled.div`
  margin-bottom: 1.5rem;
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    color: ${colors.textSecondary};
    font-size: 0.95rem;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 0.9rem 1.2rem;
  border: 1px solid ${colors.borderColor};
  border-radius: 8px;
  background: ${colors.inputBackground};
  color: ${colors.textPrimary};
  font-size: 1rem;
  transition: all 0.3s ease;

  &[type="date"]::-webkit-calendar-picker-indicator {
    filter: invert(0.8);
  }

  &:focus {
    outline: none;
    border-color: ${colors.neonPurple};
    box-shadow: 0 0 12px ${colors.neonPurple}40;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 0.9rem 1.2rem;
  border: 1px solid ${colors.borderColor};
  border-radius: 8px;
  background: ${colors.inputBackground};
  color: ${colors.textPrimary};
  font-size: 1rem;
  appearance: none;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${colors.neonPurple};
    box-shadow: 0 0 12px ${colors.neonPurple}40;
  }
`;

export const PrimaryButton = styled.button`
  background: linear-gradient(
    135deg,
    ${chartColors.primary} 0%,
    ${chartColors.secondary} 50%,
    ${chartColors.tertiary} 100%
  );
  color: ${colors.white};
  border: none;
  border-radius: 8px;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(255,255,255,0.1),
      transparent
    );
    transition: all 0.5s;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px ${chartColors.primary}40;
    
    &::before {
      left: 100%;
    }
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    background: ${colors.disabledBg};
  }
`;

export const FormCard = styled.div`
  
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 0px 10px 100px rgba(84, 1, 140, 0.75);
`;

export const HistoryCard = styled(FormCard)`
  margin-top: 2rem;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 1.2rem;
  color: ${colors.white};
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${colors.borderColor};

  svg {
    width: 1.2em;
    height: 1.2em;
    stroke-width: 1.5px;
  }
`;

export const InputRow = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-bottom: 1.5rem;
`;

export const ActionRow = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1rem;
`;

export const ResponsiveTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: ${colors.backgroundDark};
  border-radius: 8px;
  overflow: hidden;

  th, td {
    padding: 1rem;
    text-align: left;
    font-size: 0.9rem;
  }

  th {
    background: linear-gradient(
      135deg,
      ${chartColors.primary} 0%,
      ${chartColors.secondary} 50%,
      ${chartColors.tertiary} 100%
    );
    color: ${colors.white};
    font-weight: 600;
    text-transform: uppercase;
  }

  td {
    border-bottom: 1px solid ${colors.borderColor};
  }

  tr:hover {
    background: ${colors.rowHover};
  }

  @media (max-width: 768px) {
    th, td {
      padding: 0.8rem;
      overflow-x: auto;
    }
  }
`;

export const TimeGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  
  div:first-child {
    font-weight: 500;
  }
  
  div:last-child {
    font-size: 0.85rem;
    color: ${colors.textSecondary};
  }
`;

export const CancelButton = styled.button`
  background: ${colors.accentRed}20;
  color: ${colors.accentRed};
  border: 1px solid ${colors.accentRed};
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${colors.accentRed}30;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const EmptyState = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  padding: 2rem;
  color: ${colors.textSecondary};
  font-size: 0.95rem;

  svg {
    width: 1.5em;
    height: 1.5em;
    stroke-width: 1.2px;
  }
`;

export const StatusIndicator = styled.span<{ status: string }>`
  display: inline-block;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.2s ease;
  white-space: nowrap;
  background: ${({ status }) =>
    status === 'pending' ? 'rgba(255, 193, 7, 0.15)' :
      status === 'running' ? 'rgba(33, 150, 243, 0.15)' :
        status === 'completed' ? 'rgba(76, 175, 80, 0.15)' :
          status === 'failed' ? 'rgba(244, 67, 54, 0.15)' :
            status === 'canceled' ? 'rgba(158, 158, 158, 0.15)' :
              'rgba(103, 58, 183, 0.15)'};
  color: ${({ status }) =>
    status === 'pending' ? '#FFC107' :
      status === 'running' ? '#2196F3' :
        status === 'completed' ? '#4CAF50' :
          status === 'failed' ? '#F44336' :
            status === 'canceled' ? '#9E9E9E' :
              '#673AB7'};
`;
