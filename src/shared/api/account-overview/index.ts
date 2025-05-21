import http from "@/shared/api/axios-client";

export const fetchDashboardStats = async () => {
  try {
    const response = await http.get('/api/v1/account/get-overview');
    return response.data;
  } catch (error) {
    console.error('Error fetching dashboard stats:', error);
    throw error;
  }
};