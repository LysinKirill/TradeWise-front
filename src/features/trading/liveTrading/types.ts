export interface Strategy {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface Execution {
  id: string;
  createdAt: string;
  updatedAt: string;
  status: string;
  strategyId: string;
}

export interface ExecutionOverview {
  strategyId: string;
  totalInputAmount: number;
  instruments: string[];
  sharesOwned: number;
  isPaperTrade: boolean;
  status: string;
}