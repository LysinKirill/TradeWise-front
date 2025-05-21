import { useState, useEffect } from 'react';
import { useAuth } from "@app/providers/AuthProvider";
import { StatsCard } from './components/StatsCard';
import { PortfolioChart } from './components/PortfolioChart';
import { TradingTable } from './components/TradingTable';
import { StrategyTable } from './components/StrategyTable';
import * as UI from './styles';
import { Footer } from '@/shared/ui/components/Footer';
import { useMediaQuery } from '@/shared/hooks/useMediaQuery';
import { DashboardStats, PortfolioPosition, TradingStrategy } from './types';
import { fetchDashboardStats } from '@/shared/api/account-overview';
import { fetchTradingStrategies } from '@/shared/api/strategies';

const Dashboard = () => {
  const { user } = useAuth();
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [searchQuery, setSearchQuery] = useState('');
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [strategies, setStrategies] = useState<TradingStrategy[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadData = async () => {
      try {
        const [statsResponse, strategiesResponse] = await Promise.all([
          fetchDashboardStats(),
          fetchTradingStrategies()
        ]);
        
        setStats(statsResponse);
        setStrategies(strategiesResponse);
      } catch (err) {
        setError('Failed to load dashboard data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const filteredStrategies = strategies.filter(strategy =>
    strategy.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const portfolioPositions = stats?.portfolioPositions || [];

  if (loading) {
    return <UI.LoadingContainer>Loading...</UI.LoadingContainer>;
  }

  return (
    <UI.DashboardContainer>
      <UI.DashboardHeader>
        <UI.DashboardTitle>Welcome back, {user?.fullName}</UI.DashboardTitle>
        <UI.DashboardSubtitle>Let's check in on your trading</UI.DashboardSubtitle>
      </UI.DashboardHeader>

      <UI.StatsContainer>
        <StatsCard 
          title="Total balance" 
          value={`$${stats?.balance?.toLocaleString() ?? 0}`} 
        />
        <StatsCard 
          title="Today's P/L" 
          value={`$${stats?.todayPnl?.toLocaleString() ?? 0}`} 
        />
        <StatsCard 
          title="Strategies" 
          value={stats?.activeStrategies ?? 0} 
        />
      </UI.StatsContainer>

      <UI.MainContent>
        {!isMobile && (
          <UI.LeftPanel>
            <UI.Section>
              <UI.SectionTitle>Portfolio distribution</UI.SectionTitle>
              <PortfolioChart data={portfolioPositions} />
            </UI.Section>
          </UI.LeftPanel>
        )}

        <UI.RightPanel>
          <UI.Section>
            <UI.SectionTitle>Portfolio positions</UI.SectionTitle>
            {portfolioPositions.length > 0 ? (
              <TradingTable data={portfolioPositions} />
            ) : (
              <UI.EmptyState>No positions found</UI.EmptyState>
            )}
          </UI.Section>
          
          <UI.Section>
            <UI.SectionTitle>Strategies</UI.SectionTitle>
            <UI.SearchInput
              placeholder="Search strategies"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {filteredStrategies.length > 0 ? (
              <StrategyTable strategies={filteredStrategies} />
            ) : (
              <UI.EmptyState>No strategies found</UI.EmptyState>
            )}
          </UI.Section>
        </UI.RightPanel>
      </UI.MainContent>

      {!isMobile && <Footer/>}
    </UI.DashboardContainer>
  );
};

export default Dashboard;