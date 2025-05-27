/* eslint-disable @typescript-eslint/no-explicit-any */
import http from "../axios-client";

export const fetchTradingStrategies = async () => {
  try {
    const response = await http.get('/api/v1/strategy/user-strategies');
    return response.data;
  } catch (error) {
    console.error('Error fetching trading strategies:', error);
    throw error;
  }
};
//TODO: change any on specified type
export const validateStrategy = async (strategy: any) => {
  try {
    const response = await http.post('/api/v1/strategy/validate', strategy);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.detail || 'Validation error');
  }
};

export const createStrategy = async (strategy: any) => {
  try {
    const response = await http.post('/api/v1/strategy/create', strategy);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.detail || 'Failed to create strategy');
  }
};

export const fetchExecutions = async () => {
  try {
    const response:any = await http.get('/api/v1/account/executions');

    return response.data.executions;

  } catch (error: any) {
    throw new Error(error.response?.data?.detail || 'Failed to get executions list');
  }
};

export const runStrategy = async (strategyId: string, isPaperTrading: boolean, AllocatedBudget: string) => {
  try {
    await http.post('/api/v1/strategy/run', { strategyId, IsPaperTrade: isPaperTrading, AllocatedBudget });

  } catch (error: any) {
    throw new Error(error.response?.data?.detail || 'Failed to run strategy');
  }
};

export const cancelStrategy = async (executionId: string) => {
  try {

    return http.post('/api/v1/strategy/cancel', { strategyExecutionId: executionId });
  } catch (error: any) {
    throw new Error(error.response?.data?.detail || 'Failed to cancel strategy');
  }
};

export const deleteStrategy = async (strategyId: any) => {
  try {
    await http.post('/api/v1/strategy/delete',  strategyId );

  } catch (error: any) {
    throw new Error(error.response?.data?.detail || 'Failed to delete strategy');
  }
};

export const editStrategy = async (strategy: any) => {
  try {
    const response = await http.post('/api/v1/strategy/edit', strategy);

    return response;

  } catch (error: any) {
    throw new Error(error.response?.data?.detail || 'Failed to edit strategy');
  }
};

export const getStrategy = async (strategyId: string) => {
  try {
    const response = await http.get(`/api/v1/strategy/get?StrategyId=${strategyId}`);

    return response.data;

  } catch (error: any) {
    throw new Error(error.response?.data?.detail || 'Failed to get strategy');
  }
};

