export interface BacktestInfo {
  backtestId: string;
  startedAt: string;
  finishedAt: string;
  testPeriodStart: string;
  testPeriodEnd: string;
  status: 'Pending' | 'Running' | 'Completed' | 'Failed' | 'Cancelled';
  profit: number;
  tradesCount: number;
  initialBalance: number;
  finalBalance: number;
  createdAt: string;
}

export interface Model {
  id: string;
  name: string;
  type: string;
  createdAt: string;
}