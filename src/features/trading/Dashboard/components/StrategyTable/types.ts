/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IStrategyData {
  id: string;
  title: string;
  description: string;
  status: 'active' | 'paused' | 'archived';
  createdAt: string;
  updatedAt: string;
  profit: number;
  riskLevel: number;
}

export interface IStrategyTableProps {
  strategies: IStrategyData[];
  onUpdate: any;
}
