/* eslint-disable @typescript-eslint/no-explicit-any */
import http from "../axios-client";

export const fetchSupportedInstruments = async () => {
  try {
    const response = await http.get('/api/v1/invest/get-supported-instruments');

    return response.data;
  } catch (error) {
    console.error('Error fetching supported instruments:', error);
    throw error;
  }
};

export const fetchInstrumentStat = async (
  instrumentId: string,
  statType: string,
  from: string,
  to: string
) => {
  try {
  const response = await http.post('/api/v1/invest/get-instrument-stat', {
    instrumentId,
    statType,
    from,
    to
  });
  return response.data;
} catch (error) {
  console.error('Error fetching supported instruments:', error);
  throw error;
}
};

export const fetchCandles = async (
  instrumentId: string,
  from: string,
  to: string
) => {
  try {
  const response:any = await http.post('/api/v1/invest/get-candles-by-instrument', {
    instrumentId,
    from,
    to
  });
  return response.data.candles;

} catch (error) {
  console.error('Error fetching supported instruments:', error);
  throw error;
}
};