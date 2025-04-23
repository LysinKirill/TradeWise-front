export type TAuthContextType = {
  isAuthenticated: boolean;
  user: {
    email: string;
    fullName: string;
  } | null;
  login: (userData: { email: string; fullName: string }) => void;
  logout: () => void;
};

export type TUser = {
  email: string;
  fullName: string;
  // Add other user properties as needed
};