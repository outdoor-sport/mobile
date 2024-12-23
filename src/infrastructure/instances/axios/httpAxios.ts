import axios from "axios";
import { Http } from "@domain/repositories/Http";

export const httpAxios: Http = {
  get<T>(
    path: string,
    params?: Record<string, any>,
    config?: any
  ): Promise<T | any> {
    return axios.get(path, { params, ...config });
  },

  post<T>(
    path: string,
    params?: Record<string, any>,
    body?: any,
    config?: any
  ): Promise<T | any> {
    return axios.post(path, body, { params, ...config });
  },

  put<T>(
    path: string,
    params?: Record<string, any>,
    body?: any,
    config?: any
  ): Promise<T | any> {
    return axios.put(path, body, { params, ...config });
  },

  delete<T>(
    path: string,
    params?: Record<string, any>,
    config?: any
  ): Promise<T | any> {
    return axios.delete(path, { params, ...config });
  },
};
