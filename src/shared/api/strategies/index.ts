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