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
    width: 60px;
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

export const ButtonWrapper = styled.div`
  margin-top: 2rem;
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

export const HistoryBlock = styled.div`
  margin-top: 3rem;
  background: ${colors.cardBg};
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 20px ${colors.purpleButton}10;
`;

export const TableWrapper = styled.div`
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  border-radius: 8px;
  margin: 1rem 0;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: ${colors.backgroundDark};
  border-radius: 8px;
  overflow: hidden;

  th, td {
    padding: 1rem;
    text-align: left;
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
    font-size: 0.9rem;
  }

  td {
    border-bottom: 1px solid ${colors.borderColor};
    font-size: 0.95rem;
  }

  tr:hover {
    background: ${colors.rowHover};
  }
`;

export const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin: 1.5rem 0;

  input[type="checkbox"] {
    width: 1.2rem;
    height: 1.2rem;
    accent-color: ${colors.neonPurple};
  }

  label {
    color: ${colors.textSecondary};
    font-size: 0.95rem;
  }
`;

export const StatusIndicator = styled.span<{ status: string }>`
  display: inline-block;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  background: ${({ status }) => 
    status === 'Pending' ? colors.statusPendingBg :
    status === 'Active' ? colors.statusActiveBg :
    colors.statusCompletedBg};
  color: ${({ status }) => 
    status === 'Pending' ? colors.statusPendingText :
    status === 'Active' ? colors.statusActiveText :
    colors.statusCompletedText};
`;

export const EmptyStateRow = styled.tr`
  td {
    padding: 2rem;
    text-align: center;
    color: ${colors.textSecondary};
    font-style: italic;
  }
`;