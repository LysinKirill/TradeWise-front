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

export const StyledTableCell = styled(MuiTableCell)`
  padding: 1rem !important;
  color: ${colors.white} !important;
  background: ${colors.accentBlack};
`;

export const StyledTableRow = styled(MuiTableRow)`
  border-bottom: 1px solid ${colors.iconGrey};
`;

export const TableHeaderCell = styled(MuiTableCell)`
  font-weight: 600 !important;
  color: ${colors.accentBlack} !important;
  padding: 1rem !important;
`;

export const TableBody = styled.tbody`
`;

export const PageResearch = styled.div`
  padding: 2rem;
  background: ${colors.backgroundBlack};
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
  background-color: ${colors.accentBlack};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  
`;

export const SectionTitle = styled.h3`
  font-size: 2rem;
  font-weight: bold;
  color: ${colors.white};
  margin-bottom: 1.5rem;
`;