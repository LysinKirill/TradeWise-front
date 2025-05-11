import styled from "styled-components";

export const DashboardContainer = styled.div`
  //width: 95vw;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  color: #fff;
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