export type TokenData = {
  tokenType: string;
  accessToken: string;
  expiresIn: number;
  refreshToken: string;
};

export type TAuthContextType = {
  isAuthenticated: boolean;
  user: TUser | null;
  login: (userData: TUser, tokenData: TokenData) => void;
  logout: () => void;
};

export type TUser = {
  email: string;
  fullName: string;
  //TO DO: Add other user properties 
};