// styles.ts
import { chartColors, colors } from "@/shared/constants/colors";
import styled, { css } from "styled-components";
import { TableCell as MuiTableCell, TableRow as MuiTableRow } from "@mui/material";

export const PageResearch = styled.div`
  padding: 2rem;
  min-height: 100vh;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${colors.white};
  margin-bottom: 1.5rem;
`;

export const ResearchSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

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
    cursor: pointer;
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

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background: ${colors.backgroundDark};
  padding: 2rem;
  border-radius: 12px;
  width: 80%;
  max-width: 1500px;
  max-height: 90vh;
  overflow-y: auto;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

export const ModalTitle = styled.h3`
  color: ${colors.white};
  font-size: 1.5rem;
  margin: 0;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: ${colors.white};
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0;
  margin-left: 1rem;
`;

export const ModalBody = styled.div`
  padding: 1rem 0;
  gap: 2rem;
`;

export const Loader = styled.div`
  color: ${colors.white};
  padding: 2rem;
  text-align: center;
`;

export const ErrorMessage = styled.div`
  color: ${colors.accentRed};
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid ${colors.accentRed};
  border-radius: 4px;
`;

export const ChartSection = styled.div`
  margin-top: 2rem;
  padding: 1.5rem;
  border-radius: 8px;
`;

export const ChartTitle = styled.h3`
  color: ${colors.white};
  margin-bottom: 1rem;
  font-size: 1.2rem;
`;

export const StatSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding: 1rem;
  background: ${colors.accentBlack};
  border-radius: 8px;
`;

export const StatLabel = styled.span`
  color: ${colors.textSecondary};
  font-size: 1rem;
`;

export const StatValue = styled.span`
  color: ${colors.white};
  font-size: 1.5rem;
  font-weight: bold;
`;

export const StatsTableSection = styled.div`
  margin-bottom: 2rem;
  border-radius: 8px;
  padding: 1rem;
`;

export const NoData = styled.div`
  padding: 2rem;
  text-align: center;
  color: ${colors.textSecondary};
`;

export const TooltipContainer = styled.div`
  background: ${colors.backgroundDark} !important;
  border: 1px solid ${colors.borderColor} !important;
  padding: 1rem;
  border-radius: 6px;
`;

export const TooltipDate = styled.div`
  color: ${colors.textSecondary};
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

export const TooltipItem = styled.div<{ color?: string }>`
 color: ${colors.textSecondary};
  font-size: 0.9rem;
`;

export const TabsContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  border-bottom: 2px solid ${colors.borderColor};
`;

export const TabButton = styled.button<{ active?: boolean }>`
  padding: 0.8rem 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  color: ${({ active }) => active ? colors.neonBlue : colors.textSecondary};
  border-bottom: 3px solid ${({ active }) => 
    active ? colors.neonBlue : 'transparent'};
  transition: all 0.3s ease;

  &:hover {
    color: ${colors.neonBlue};
    background: rgba(138, 43, 226, 0.05);
  }
`;