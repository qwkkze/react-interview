import axios, { AxiosResponse } from 'axios';

export const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  withCredentials: true,
});

instance.interceptors.response.use(responseInterceptor);

function responseInterceptor(res: AxiosResponse) {
  return res.data;
}
