export interface IStrategyData {
  id: string;
  name: string;
  description: string;
}

export interface IStrategyTableProps {
  strategies: IStrategyData[];
}