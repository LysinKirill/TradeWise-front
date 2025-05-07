// src/features/dashboard/index.tsx
import { useAuth } from "@app/providers/AuthProvider";
import { StatsCard } from './components/StatsCard';
import { PortfolioChart } from './components/PortfolioChart';
import { TradingTable } from './components/TradingTable';
import { mockStats, mockPortfolioData, mockTrades } from './mocks';
import * as UI from './styles';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <UI.DashboardContainer>
      <UI.DashboardHeader>
        <UI.DashboardTitle>Welcome back, {user?.fullName}</UI.DashboardTitle>
        <UI.DashboardSubtitle>Let's check in on your trading</UI.DashboardSubtitle>
      </UI.DashboardHeader>

      <UI.StatsContainer>
        <StatsCard title="Total balance" value={`$${mockStats.balance.toLocaleString()}`} />
        <StatsCard title="Today's P/L" value={`$${mockStats.dailyPL.toLocaleString()}`} />
        <StatsCard title="Active strategies" value={mockStats.strategies} />
      </UI.StatsContainer>

      <UI.MainContent>
        <UI.LeftPanel>
          <UI.SearchInput placeholder="Search for algo by name" />
          <UI.Section>
            <UI.SectionTitle>Portfolio distribution</UI.SectionTitle>
            <PortfolioChart data={mockPortfolioData} />
          </UI.Section>
          <UI.Section>
            <UI.SectionTitle>Strategy</UI.SectionTitle>
            {/* Add strategy components here */}
          </UI.Section>
        </UI.LeftPanel>

        <UI.RightPanel>
          <UI.Section>
            <UI.SectionTitle>Long Trade performance</UI.SectionTitle>
            <TradingTable data={mockTrades} />
          </UI.Section>
        </UI.RightPanel>
      </UI.MainContent>

      <UI.Footer>
        <UI.FooterLink>New algo</UI.FooterLink>
        <UI.FooterLink>Help</UI.FooterLink>
        <UI.FooterLink>Feedback</UI.FooterLink>
        <UI.FooterLink>About</UI.FooterLink>
        <UI.FooterLink>Changelog</UI.FooterLink>
      </UI.Footer>
    </UI.DashboardContainer>
  );
};

export default Dashboard;