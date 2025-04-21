import { isDevelopment } from 'src/shared/utils/env';

export const ENV = {
  BACKEND_URL: isDevelopment() ? process.env.BACKEND_URL : 'PLACEHOLDER_IB_URL',
};
