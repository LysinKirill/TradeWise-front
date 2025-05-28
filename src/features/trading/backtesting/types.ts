/* eslint-disable @typescript-eslint/no-explicit-any */
export interface BacktestInfo {
  modelInfo: any;
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
  modelId: string,
}

export interface Model {
  id: string;
  name: string;
  type: string;
  createdAt: string;
}