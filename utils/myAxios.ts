/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse } from 'axios';

const myAx = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  withCredentials: true,
  responseType: 'json',
  timeout: 5000,
});

const myAxios = {
  get: (endpoint: string): Promise<AxiosResponse> => myAx.get(endpoint),

  post: (endpoint: string, body: any): Promise<AxiosResponse> =>
    myAx.post(endpoint, body),

  put: (endpoint: string, body: any): Promise<AxiosResponse> =>
    myAx.put(endpoint, body),

  delete: (endpoint: string): Promise<AxiosResponse> => myAx.delete(endpoint),
};

export default myAxios;
