/* eslint-disable @typescript-eslint/no-explicit-any */
import http from "../axios-client";

export const startBacktest = async (params: { modelId: string; initialBalance: string, from: string, to: string }) => {
  try {
    const response = await http.post('/api/v1/backtest/run', params);

    return response
  } catch (error: any) {
    throw new Error(error.response?.data?.detail || 'Failed to run backtest');
  }
};

export const getAllBacktests = async () => {
  try {
    const response = await http.post('/api/v1/backtest/all-backtests');

    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.detail || 'Failed to get all backtests');
  }
};

export const cancelBacktest = async (backtestExecutionId: string) => {
  try {
    const response = await http.post('/api/v1/backtest/cancel', {
      
        "backtestExecutionId": backtestExecutionId
      
    });

    return response;
  } catch (error: any) {
    throw new Error(error.response?.data?.detail || 'Failed to cancel backtest');
  }
};