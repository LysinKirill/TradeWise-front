import { chartColors, colors } from "@/shared/constants/colors";
import styled, { css } from "styled-components";
import { TableCell as MuiTableCell, TableRow as MuiTableRow } from "@mui/material";

export const TableWrapper = styled.div`
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  margin: 2rem 0;
  border-radius: 8px;
  box-shadow: 0 0 15px rgba(138, 43, 226, 0.2);

  ${({ theme }) => theme.isMobile && css`
    width: 100vw;
    margin: 1rem 0;
    box-shadow: 0 0 5px rgba(138, 43, 226, 0.1);
    border-radius: 6px;
  `}
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: ${colors.backgroundDark};
  min-width: 300px;
  border-radius: 16px;

  ${({ theme }) => theme.isMobile && css`
    padding: 0;
    margin: 0;
    font-size: 0.8rem;
  `}
`;

export const TableHeader = styled.thead`
  background: linear-gradient(
    135deg,
    ${chartColors.primary} 0%,
    ${chartColors.secondary} 50%,
    ${chartColors.tertiary} 90%
  );

  ${({ theme }) => theme.isMobile && css`
    background: linear-gradient(
      100deg,
      ${chartColors.primary} 0%,
      ${chartColors.secondary} 60%,
      ${chartColors.tertiary} 100%
    );
  `}
`;

export const StyledTableCell = styled(MuiTableCell)<{ $negative?: boolean }>`
  color: ${({ $negative }) => 
    $negative ? colors.accentRed : colors.textPrimary} !important;
  padding: 1.2rem !important;
  font-size: 0.9rem !important;
  border-bottom: 1px solid ${colors.borderColor} !important;
  white-space: nowrap;

  ${({ theme }) => theme.isMobile && css`
    padding: 0.6rem 0.8rem !important;
    font-size: 0.75rem !important;
    white-space: inherit;

  `}
`;

export const StyledTableRow = styled(MuiTableRow)`
  transition: all 0.3s ease;
  
  &:nth-child(even) {
    background: rgba(138, 43, 226, 0.05);
  }

  &:hover {
    background: ${colors.rowHover} !important;
    box-shadow: inset 0 0 10px rgba(138, 43, 226, 0.1);
  }

  ${({ theme }) => theme.isMobile && css`
    &:hover {
      background: inherit !important;
      box-shadow: none;
    }
  `}
`;

export const TableHeaderCell = styled(MuiTableCell)`
  font-weight: 600 !important;
  color: ${colors.white} !important;
  padding: 1.2rem !important;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-bottom: 2px solid ${colors.neonPurple} !important;
  white-space: nowrap;
  border-radius: 8px 8px 0px 0px;

  ${({ theme }) => theme.isMobile && css`
    padding: 0.8rem !important;
    font-size: 0.7rem !important;
    letter-spacing: 0.3px;
  `}
`;

export const TableBody = styled.tbody`
  & > tr:last-child > td {
    border-bottom: none !important;
  }

  ${({ theme }) => theme.isMobile && css`
    > tr > td {
      padding-top: 0.4rem;
      padding-bottom: 0.4rem;
    }
  `}
`;

export const StatusIndicator = styled.span<{ status: 'active' | 'paused' | string }>`
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.8rem;
  background-color: ${({ status }) => {
    switch (status) {
      case 'active': return '#D1FAE5';  // Light green
      case 'paused': return '#FEF3C7';  // Light amber
      default: return '#F3F4F6';       // Light gray
    }
  }};
  color: ${({ status }) => {
    switch (status) {
      case 'active': return '#059669';  // Dark green
      case 'paused': return '#D97706';  // Dark amber
      default: return '#4B5563';       // Dark gray
    }
  }};
`;


export const ActionButtonGroup = styled.div`
  display: flex;
  gap: 0.8rem;
  justify-content: flex-end;
`;

export const EditButton = styled.button`
  background: ${colors.neonPurple}20;
  color: ${colors.neonPurple};
  border: 1px solid ${colors.neonPurple};
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${colors.neonPurple}30;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const DeleteButton = styled.button`
  background: ${colors.red}20;
  color: ${colors.red};
  border: 1px solid ${colors.red};
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${colors.red}30;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;