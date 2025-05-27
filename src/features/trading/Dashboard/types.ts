export interface DashboardStats {
  balance: number;
  todayPnl: number;
  activeStrategies: number;
  portfolioPositions: PortfolioPosition[];
}

export interface PortfolioPosition {
  instrumentId: string;
  quantity: number;
  ticker: string;
  dailyYield: number;
  currentPrice: number;
}