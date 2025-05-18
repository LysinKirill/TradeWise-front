import axios, { AxiosResponse, AxiosInstance, AxiosRequestConfig, CancelTokenSource } from 'axios';

import {
  EHttpMethod,
  TRequestConfig,
  IAxios,
} from './types';
import { useAuth } from '@/app/providers/AuthProvider';

export const DEFAULT_TIMEOUT = 60000;

class Http implements IAxios {
  private readonly http: AxiosInstance;

  // Текущий набор исполняемых запросов
  private readonly requests: Record<string, CancelTokenSource>;

  constructor(baseURL: string = '/', headers?: AxiosRequestConfig['headers'], paramsSerializer?: AxiosRequestConfig['paramsSerializer']) {
    this.http = axios.create({
      baseURL,
      paramsSerializer,
      timeout: DEFAULT_TIMEOUT,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        ...headers,
      },
    });
    this.requests = {};

    //TO DO: update or remove later
    this.http.interceptors.response.use(
      response => response,
      async error => {
        const originalRequest = error.config;
        
        if (error.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;
          
          //const auth = useAuth();
          //const success = await auth.refreshToken();
          
          /*if (success) {
            originalRequest.headers.Authorization = `Bearer ${auth.token}`;
            return this.http(originalRequest);
          }*/
        }
        
        return Promise.reject(error);
      }
    );
  }

  private async request<T>(requestConfig: TRequestConfig): Promise<AxiosResponse<T>> {
    const {
      method,
      url,
      params,
      data,
      config = {},
      abort = false,
      cancelToken,
    } = requestConfig;

    if (abort) {
      this.abortRequest(url);
    }

    const request: AxiosRequestConfig = {
      method,
      url,
      ...config,
      ...params && { params },
      ...data && { data },
      ...abort && { cancelToken: this.createAbortController(url).token },
      ...cancelToken && { cancelToken: cancelToken.token },
    };

    const response = await this.http.request<T>(request);

    this.deleteRequest(url);

    return response;
  }

  private createAbortController(key: string): CancelTokenSource {
    const controller = axios.CancelToken.source();
    this.requests[key] = controller;

    return controller;
  }

  private abortRequest(key: string): void {
    const controller = this.requests[key];

    if (!controller) {
      return;
    }

    controller.cancel();
  }

  private deleteRequest(key: string): void {
    delete this.requests[key];
  }

  public get<T>(
    url: string,
    params?: AxiosRequestConfig['params'],
    options: { config?: AxiosRequestConfig, abort?: boolean, cancelToken?: CancelTokenSource } = {},
  ): Promise<AxiosResponse<T>> {
    const { config, abort, cancelToken } = options;

    return this.request<T>({
      method: EHttpMethod.GET,
      url,
      params,
      config,
      abort,
      cancelToken,
    });
  }

  public post<T>(
    url: string,
    data?: AxiosRequestConfig['data'],
    options: { config?: AxiosRequestConfig, abort?: boolean } = {},
  ): Promise<AxiosResponse<T>> {
    const { config, abort } = options;

    return this.request<T>({
      method: EHttpMethod.POST,
      url,
      data,
      config,
      abort,
    });
  }

  public put<T>(
    url: string,
    data: AxiosRequestConfig['data'],
    options: { config?: AxiosRequestConfig, abort?: boolean } = {},
  ): Promise<AxiosResponse<T>> {
    const { config, abort } = options;

    return this.request<T>({
      method: EHttpMethod.PUT,
      url,
      data,
      config,
      abort,
    });
  }

  public delete<T>(
    url: string,
    options: { config?: AxiosRequestConfig, abort?: boolean } = {},
  ): Promise<AxiosResponse<T>> {
    const { config, abort } = options;

    return this.request<T>({
      method: EHttpMethod.DELETE,
      url,
      config,
      abort,
    });
  }
}

const http = new Http(import.meta.env.VITE_BACKEND_URL);

export default http;
