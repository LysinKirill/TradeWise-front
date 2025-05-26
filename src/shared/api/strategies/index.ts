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
    const response = await http.get('/api/v1/account/executions');

    return response.data.executions;

  } catch (error: any) {
    throw new Error(error.response?.data?.detail || 'Failed to get executions list');
  }
};

export const runStrategy = async (strategyId: string) => {
  try {
    await http.post('/api/v1/strategy/run', { strategyId });

  } catch (error: any) {
    throw new Error(error.response?.data?.detail || 'Failed to run strategy');
  }
};

export const cancelStrategy = async (executionId: string) => {
  try {

    return http.post('/api/v1/strategy/cancel', { strategyExecutionId: executionId });
  } catch (error: any) {
    throw new Error(error.response?.data?.detail || 'Failed to run strategy');
  }
};