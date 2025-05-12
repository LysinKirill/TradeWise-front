import { useState } from 'react';
import { useAuth } from "@app/providers/AuthProvider";
import { StatsCard } from './components/StatsCard';
import { PortfolioChart } from './components/PortfolioChart';
import { TradingTable } from './components/TradingTable';
import { StrategyTable } from './components/StrategyTable';
import { mockStats, mockStrategies } from './constants';
import * as UI from './styles';
import { Footer } from '@/shared/ui/components/Footer';

const Dashboard = () => {
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredStrategies = mockStrategies.filter((strategy: { name: string; }) =>
    strategy.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <UI.DashboardContainer>
      <UI.DashboardHeader>
        <UI.DashboardTitle>Welcome back, {user?.fullName}</UI.DashboardTitle>
        <UI.DashboardSubtitle>Let's check in on your trading</UI.DashboardSubtitle>
      </UI.DashboardHeader>

      <UI.StatsContainer>
        <StatsCard title="Total balance" value={`$${mockStats.balance.toLocaleString()}`} />
        <StatsCard title="Today's P/L" value={`$${mockStats.todayPnl.toLocaleString()}`} />
        <StatsCard title="Strategies" value={mockStats.activeStrategies} />
      </UI.StatsContainer>

      <UI.MainContent>
        <UI.LeftPanel>
          <UI.Section>
            <UI.SectionTitle>Portfolio positions</UI.SectionTitle>
            <TradingTable data={mockStats.portfolioPositions} />
          </UI.Section>
          <UI.Section>
            <UI.SectionTitle>Portfolio distribution</UI.SectionTitle>
            <PortfolioChart data={mockStats.portfolioPositions} />
          </UI.Section>

        </UI.LeftPanel>

        <UI.RightPanel>
          <UI.Section>
            <UI.SectionTitle>Strategies</UI.SectionTitle>
            <UI.SearchInput
              placeholder="Search strategies"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <StrategyTable strategies={filteredStrategies} />
          </UI.Section>
        </UI.RightPanel>
      </UI.MainContent>

     <Footer/>
    </UI.DashboardContainer>
  );
};

export default Dashboard;