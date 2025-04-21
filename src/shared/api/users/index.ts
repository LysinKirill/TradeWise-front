import { IUserRegistrationData } from "@/shared/ui/components/modals/RegistrationModal/types";
import http from "../axios-client";

export const registerUser = async (userData: IUserRegistrationData) => {
    try {
      const response = await http.post(
        `/api/v1/register`, 
        userData,   
      );
      
      return response;
    } catch (error) {
      console.error(error);
      
      return error.response;
    }
};

export const authUser = async (userData: IUserRegistrationData) => {
  try {
    const response = await http.post(
      `/api/v1/register`, 
      userData,   
    );
    
    return response;
  } catch (error) {
    console.error(error);
    
    return error.response;
  }
};