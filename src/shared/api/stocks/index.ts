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