import { PortfolioPosition } from "@/features/trading/dashboard/types";

export interface DashboardStats {
  balance: number;
  todayPnl: number;
  activeStrategies: number;
  portfolioPositions: PortfolioPosition[];
}