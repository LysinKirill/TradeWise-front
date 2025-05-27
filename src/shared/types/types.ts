export interface TradingStrategy {
  id: string;
  title: string;
  description: string;
  status: 'active' | 'paused' | 'archived';
  createdAt: string;
  updatedAt: string;
  profit: number;
  riskLevel: number;
}