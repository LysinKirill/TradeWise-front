import http from '@core/services/axios';

export const checkPassword = async (passwordData: string) => {
    try {
      const dataToSend = {
        password: passwordData,
      };
  
      const response = await http.post(
        `${process.env.BACKEND_URL}/api/v1/int/check_password`, 
        dataToSend,   
      );
      
      return response;
    } catch (error) {
      console.error(error);
      
      return error.response;
    }
  };