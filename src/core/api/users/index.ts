import { IUserRegistrationData } from './../../components/DesktopWrapper/modals/RegistrationModal/types';
import http from './../../services/axios';

export const registerUser = async (userData: IUserRegistrationData) => {
    try {
      /*const dataToSend = {
        password: passwordData,
      };*/
  
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