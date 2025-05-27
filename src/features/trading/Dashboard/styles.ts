import { colors } from "@/shared/constants/colors";
import styled, { css } from "styled-components";

export const DashboardContainer = styled.div`
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  color: ${colors.textPrimary};
  padding: 2rem;
  max-width: 100%; 
  overflow-x: hidden; 
  box-sizing: border-box;

  ${({ theme }) => theme.isMobile && css`
    height: auto;
    padding: 1rem;
  `}
`;

export const DashboardHeader = styled.div`
  margin-bottom: 2rem;

  ${({ theme }) => theme.isMobile && css`
    margin-bottom: 1rem;
  `}
`;

export const DashboardTitle = styled.h1`
  font-size: 2.5rem;
  margin: 0;
  color: ${colors.white};
  text-shadow: 0 0 10px ${colors.white}90;

  ${({ theme }) => theme.isMobile && css`
    font-size: 2rem;
    line-height: 1.2;
  `}
`;

export const DashboardSubtitle = styled.p`
  font-size: 1.2rem;
  color: ${colors.textSecondary};
  margin: 0.5rem 0 0;

  ${({ theme }) => theme.isMobile && css`
    font-size: 1rem;
  `}
`;

export const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;

  ${({ theme }) => theme.isMobile && css`
    grid-template-rows: 1fr;
    gap: 1rem;
    margin-bottom: 1.5rem;
  `}
`;

export const MainContent = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 300px) minmax(0, 1fr);
  gap: 2rem;
  flex: 1;

  ${({ theme }) => theme.isMobile && css`
    grid-template-columns: 1fr;
    gap: 1rem;
  `}
`;

export const LeftPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  ${({ theme }) => theme.isMobile && css`
    gap: 1rem;
  `}
`;

export const RightPanel = styled.div`
  border-radius: 8px;

  ${({ theme }) => theme.isMobile && css`
    margin-top: 1rem;
  `}
`;

export const Section = styled.div`
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2rem;

  ${({ theme }) => theme.isMobile && css`
    max-width: 95vw;
    padding: 0rem;
    margin-bottom: 1rem;
  `}
`;

export const SectionTitle = styled.h3`
  font-size: 1.2rem;
  margin: 0 0 1rem;
  color: ${colors.white};
  text-shadow: 0 0 10px ${colors.white}90;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid ${colors.neonPurple};

  ${({ theme }) => theme.isMobile && css`
    font-size: 1.1rem;
    margin-bottom: 0.8rem;
  `}
`;

export const SearchInput = styled.input`
  width: 100%;
  max-width: 100%;
  padding: 0.8rem;
  border: 1px solid ${colors.borderColor};
  border-radius: 4px;
  font-size: 1rem;
  margin-bottom: 1.5rem;
  background: ${colors.inputBackground};
  color: ${colors.textPrimary};
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${colors.neonPurple};
    box-shadow: 0 0 10px ${colors.neonPurple}40;
  }

  &::placeholder {
    color: ${colors.textSecondary};
  }

  ${({ theme }) => theme.isMobile && css`
    padding: 0.6rem;
    font-size: 0.9rem;
  `}
`;

export const Footer = styled.footer`
  margin-top: auto;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  gap: 2rem;
  border-top: 1px solid ${colors.borderColor};

  ${({ theme }) => theme.isMobile && css`
    padding: 1rem 0;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  `}
`;

export const FooterLink = styled.a`
  color: ${colors.textSecondary};
  text-decoration: none;
  cursor: pointer;
  font-size: 0.9rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${colors.neonBlue};
    text-shadow: 0 0 8px ${colors.neonBlue}80;
  }

  ${({ theme }) => theme.isMobile && css`
    font-size: 0.8rem;
  `}
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: ${colors.textPrimary};
  font-size: 1.5rem;
`;

export const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: ${colors.accentRed};
  font-size: 1.2rem;
  text-align: center;
  padding: 2rem;
`;

export const EmptyState = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  color: ${colors.textSecondary};
  font-size: 1rem;
  border: 1px dashed ${colors.borderColor};
  border-radius: 8px;
`;
