import http from "../axios-client";

export const startBacktest = (params: { modelId: string; initialBalance: string, from: string, to: string }) => {
  try {

    return http.post('/api/v1/backtest/run', params);
  } catch (error: any) {
    throw new Error(error.response?.data?.detail || 'Failed to run backtest');
  }
};

export const getAllBacktests = () => {
  try {

    return http.get('/api/v1/backtest/all-backtests');
  } catch (error: any) {
    throw new Error(error.response?.data?.detail || 'Failed to get all backtests');
  }
};

export const cancelBacktest = (backtestExecutionId: { backtestExecutionId: string; }) => {
  try {
    return http.post('/api/v1/backtest/cancel', { backtestExecutionId });
  } catch (error: any) {
    throw new Error(error.response?.data?.detail || 'Failed to cancel backtest');
  }
};