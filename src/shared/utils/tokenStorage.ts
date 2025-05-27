const TOKEN_KEY = 'accessToken';

export const getLocalToken = (): string | null => localStorage.getItem(TOKEN_KEY);
export const setLocalToken = (token: string): void => localStorage.setItem(TOKEN_KEY, token);
export const removeLocalToken = (): void => localStorage.removeItem(TOKEN_KEY);

export const getRefreshToken = () => localStorage.getItem('refreshToken');
export const setRefreshToken = (token: string) => localStorage.setItem('refreshToken', token);