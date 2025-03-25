// src/core/services/axios/types.ts
import type {
  AxiosRequestConfig as InternalAxiosRequestConfig,
  AxiosResponse,
  CancelTokenSource,
} from 'axios';

export enum EHttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export type TRequestConfig = {
  method: InternalAxiosRequestConfig['method'];
  url: string;
  params?: InternalAxiosRequestConfig['params'];
  data?: InternalAxiosRequestConfig['data'];
  config?: InternalAxiosRequestConfig;
  abort?: boolean;
  signal?: AbortSignal;
  cancelToken?: CancelTokenSource;
};

export interface IAxios {
  get: <T>(
    url: string,
    params?: InternalAxiosRequestConfig['params'],
    options?: { config?: InternalAxiosRequestConfig, abort?: boolean, signal?: AbortSignal }
  ) => Promise<AxiosResponse<T>>;
  post: <T>(
    url: string,
    data?: InternalAxiosRequestConfig['data'],
    options?: { config?: InternalAxiosRequestConfig, abort?: boolean, signal?: AbortSignal }
  ) => Promise<AxiosResponse<T>>;
  put: <T>(
    url: string,
    data?: InternalAxiosRequestConfig['data'],
    options?: { config?: InternalAxiosRequestConfig, abort?: boolean, signal?: AbortSignal }
  ) => Promise<AxiosResponse<T>>;
  delete: <T>(
    url: string,
    options?: { config?: InternalAxiosRequestConfig, abort?: boolean, signal?: AbortSignal }
  ) => Promise<AxiosResponse<T>>;
}