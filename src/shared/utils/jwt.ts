export const decodeJWT = <T>(token: string): T | null => {
  try {
    if (!token || typeof token !== 'string') {
      throw new Error('Invalid token format');
    }

    const parts = token.split('.');
    if (parts.length !== 3) {
      throw new Error('Invalid JWT structure');
    }

    const base64Url = parts[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
    
    return JSON.parse(jsonPayload) as T;
  } catch (error) {
    console.error('Error decoding JWT:', error);
    return null;
  }
};

export type JwtPayload = {
  sub: string;
  email: string;
  fullName: string;
  exp: number;
  iat: number;
};