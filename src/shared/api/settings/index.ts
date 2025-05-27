import http from '../axios-client';

export const linkInvestApiKey = async ({ investApiKey }: { investApiKey: string }) => {
  try {
    const res = await http.post('/api/v1/invest/link-invest-api-key-with-account', { 
      investApiKey 
    });
    return res;
  } catch (error) {
    console.error(error);
    return error.response;
  }
};

export const updatePassword = async ({ password }: { password: string }) => {
  try {
    const res = await http.post('/api/v1/account/update-password', { password });
    return res.data;
  } catch (error) {
    console.error(error);
    return error.response;
  }
};

export const verifyEmail = async ({ code }: { code: string }) => {
  try {
    const res = await http.post('/api/v1/account/verify-email', { code });
    return res.data;
  } catch (error) {
    console.error(error);
    return error.response;
  }
};
