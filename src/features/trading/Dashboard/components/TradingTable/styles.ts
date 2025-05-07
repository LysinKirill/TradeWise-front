import { colors } from "@/shared/constants/colors";
import styled from "styled-components";
import { TableCell as MuiTableCell, TableRow as MuiTableRow } from "@mui/material";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
`;

export const TableHeader = styled.thead`
  background: ${colors.mainBackgroundGrey};
`;

export const StyledTableCell = styled(MuiTableCell)<{ $negative?: boolean }>`
  color: ${({ $negative }) => 
    $negative ? colors.red : colors.accentBlack} !important;
  padding: 1rem !important;
`;

export const StyledTableRow = styled(MuiTableRow)`
  border-bottom: 1px solid ${colors.iconGrey};
`;

export const TableHeaderCell = styled(MuiTableCell)`
  font-weight: 600 !important;
  color: ${colors.accentBlack} !important;
  padding: 1rem !important;
`;

export const TableBody = styled.tbody``;

export const Footer = styled.footer`
  margin-top: auto;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  gap: 2rem;
  border-top: 1px solid ${colors.iconGrey};
`;

