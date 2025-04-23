import { IUserRegistrationData, IUserAuthData } from "@/features/auth/types";
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

export const authUser = async (userData: IUserAuthData) => {
  try {
    const response = await http.post(
      `/api/v1/login`, 
      userData,   
    );
    
    return response;
  } catch (error) {
    console.error(error);
    
    return error.response;
  }
};