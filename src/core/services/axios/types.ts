import { AxiosRequestConfig, AxiosResponse, CancelTokenSource } from 'axios';

export enum EHttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export type TRequestConfig = {
  method: AxiosRequestConfig['method'];
  url: string;
  params?: AxiosRequestConfig['params'];
  data?: AxiosRequestConfig['data'];
  config?: AxiosRequestConfig;
  abort?: boolean;
  cancelToken?: CancelTokenSource;
};

export interface IAxios {
  get: <T>(
    url: string,
    query?: AxiosRequestConfig['params'],
    options?: { config?: AxiosRequestConfig, abort?: boolean }
  ) => Promise<AxiosResponse<T>>;
  post: <T>(
    url: string,
    data?: AxiosRequestConfig['data'],
    options?: { config?: AxiosRequestConfig, abort?: boolean }
  ) => Promise<AxiosResponse<T>>;
  put: <T>(
    url: string,
    data?: AxiosRequestConfig['data'],
    options?: { config?: AxiosRequestConfig, abort?: boolean }
  ) => Promise<AxiosResponse<T>>;
  delete: <T>(
    url: string,
    options: { config?: AxiosRequestConfig, abort?: boolean },
  ) => Promise<AxiosResponse<T>>;
}
