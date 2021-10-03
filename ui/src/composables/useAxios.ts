import axios, { AxiosInstance } from 'axios';

export default function useAxios(newBasePath?: string): AxiosInstance {
  const baseUrl =
    newBasePath || process.env.VUE_APP_API_HOST || 'localhost:3000';
  return axios.create({
    baseURL: `${baseUrl}/api/`,
    timeout: 1000,
  });
}
