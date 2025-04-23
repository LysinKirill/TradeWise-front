import styled from "styled-components";

// Add to styles.ts
export const StrategyHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;
`;

export const FormContainer = styled.div`
  background: ${({ theme }) => theme.paperBackground};
  border-radius: 8px;
  padding: 2rem;
  margin-top: 1rem;
`;

export const InputField = styled.input`
  width: 100%;
  padding: 1rem;
  margin-bottom: 2rem;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 4px;
  font-size: 1rem;
`;

export const TemplateSelector = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
`;

export const TemplateCard = styled.div`
  background: ${({ theme }) => theme.cardBackground};
  border-radius: 8px;
  padding: 1.5rem;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const TemplateTitle = styled.h4`
  margin: 0;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.textPrimary};
`;

export const PrimaryButton = styled.div``;

import { TableCell as MuiTableCell, TableRow as MuiTableRow, } from "@mui/material";

export const DashboardContainer = styled.div`
  padding: 1rem;
  padding-top: 10rem;
  width: 95vw;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  
`;

export const DashboardHeader = styled.div`
  margin-bottom: 2rem;
`;

export const DashboardTitle = styled.h1`
  font-size: 2.5rem;
  margin: 0;
  color: ${({ theme }) => theme.textPrimary};
`;

export const DashboardSubtitle = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.textSecondary};
  margin: 0.5rem 0 0;
`;

export const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
`;

export const StatCard = styled.div`
  background: ${({ theme }) => theme.cardBackground};
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.cardShadow};
`;

export const StatLabel = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.textSecondary};
  margin-bottom: 0.5rem;
`;

export const StatValue = styled.div<{ $positive?: boolean }>`
  font-size: 1.8rem;
  font-weight: 600;
  color: ${({ $positive, theme }) => 
    $positive ? theme.successColor : $positive === false ? theme.errorColor : theme.textPrimary};
`;

export const MainContent = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 2rem;
  flex: 1;
`;

export const LeftPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const RightPanel = styled.div`
  background: ${({ theme }) => theme.paperBackground};
  border-radius: 8px;
  padding: 1.5rem;
`;

export const Section = styled.div`
  background: ${({ theme }) => theme.paperBackground};
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2rem;
`;

export const SectionTitle = styled.h3`
  font-size: 1.2rem;
  margin: 0 0 1rem;
  color: ${({ theme }) => theme.textPrimary};
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 4px;
  font-size: 1rem;
  margin-bottom: 1.5rem;
  background: ${({ theme }) => theme.inputBackground};
  color: ${({ theme }) => theme.textPrimary};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primaryColor};
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
`;

export const TableHeader = styled.thead`
  background: ${({ theme }) => theme.tableHeaderBackground};
`;

export const StyledTableCell = styled(MuiTableCell)<{ $negative?: boolean }>`
  color: ${({ $negative, theme }) => 
    $negative ? theme.errorColor : theme.textPrimary} !important;
  padding: 1rem !important;
`;

export const StyledTableRow = styled(MuiTableRow)`
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
`;

export const TableHeaderCell = styled(MuiTableCell)`
  font-weight: 600 !important;
  color: ${({ theme }) => theme.textPrimary} !important;
  padding: 1rem !important;
`;

export const TableBody = styled.tbody``;

export const Footer = styled.footer`
  margin-top: auto;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  gap: 2rem;
  border-top: 1px solid ${({ theme }) => theme.borderColor};
`;

export const FooterLink = styled.a`
  color: ${({ theme }) => theme.textSecondary};
  text-decoration: none;
  cursor: pointer;
  font-size: 0.9rem;

  &:hover {
    color: ${({ theme }) => theme.primaryColor};
  }
`;