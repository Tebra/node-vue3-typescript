import axios, { AxiosInstance } from 'axios';

export default function useAxios(newBasePath?: string): AxiosInstance {
  const baseUrl = newBasePath || process.env.BASE_URL || 'localhost';
  const port = process.env.VUE_APP_API_PORT
    ? `:${process.env.VUE_APP_API_PORT}`
    : ':3000';

  return axios.create({
    baseURL: `${baseUrl}${port}/api/`,
    timeout: 1000,
  });
}
