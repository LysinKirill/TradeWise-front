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
export const validateStrategy = async (strategy : any) => {
  try {
    const response = await http.post('/api/v1/strategy/validate', strategy);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.detail || 'Validation error');
  }
};

export const createStrategy = async (strategy : any) => {
  try {
    const response = await http.post('/api/v1/strategy/create', strategy);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.detail || 'Failed to create strategy');
  }
};