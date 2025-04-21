export type TAuthContextType = {
  isAuthenticated: boolean;
  user: { fullName: string; email: string } | null;
};