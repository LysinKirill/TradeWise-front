/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ApiStrategyResponse {
  strategyId: string;
  title: string;
  description: string;
  strategyStages?: any[];
  strategyTransitions?: any[];
}