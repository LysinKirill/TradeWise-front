/* eslint-disable @typescript-eslint/no-explicit-any */
import http from "../axios-client";

export const fetchSupportedModels = async () => {
  try {
    const response:any = await http.get('/api/v1/invest/get-supported-models');

    return response.data.models.map((model: any) => ({
      id: model.id.toString(),
      name: model.name,
      type: model.type,
      parameters: {},
      color: '#7F56D9', 
      createdAt: new Date(model.createdAt)
    }));
  } catch (error) {
    console.error('Error fetching supported models:', error);
    throw error;
  }
};