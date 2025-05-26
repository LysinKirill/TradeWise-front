import http from "../axios-client";

export const startBacktest = (params: { strategyId: string; amount: number }) => {
  try {

    return http.post('/api/v1/BacktestService.StartBacktest', params);
  } catch (error: any) {
    throw new Error(error.response?.data?.detail || 'Failed to run strategy');
  }
};

export const getBacktestStatus = () => {
  try {
    return http.get('/BacktestService.GetBacktestStatus');
  } catch (error: any) {
    throw new Error(error.response?.data?.detail || 'Failed to run strategy');
  }
};

export const getBacktestResults = () => {
  try {
    return http.get('/BacktestService.GetBacktest');
  } catch (error: any) {
    throw new Error(error.response?.data?.detail || 'Failed to run strategy');
  }
};

export const cancelBacktest = (testId: string) => {
  try {
    return http.post('/BackendService.CancelBacktest', { testId });
  } catch (error: any) {
    throw new Error(error.response?.data?.detail || 'Failed to run strategy');
  }
};