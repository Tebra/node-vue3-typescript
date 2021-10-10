import axios, { AxiosInstance } from 'axios';

export default function useAxios(newBasePath?: string): AxiosInstance {
  return axios.create({
    baseURL: newBasePath || getApiUrl(),
    timeout: 1000,
  });
}

function getApiUrl(): string {
  const baseUrl = process.env.HOST || process.env.BASE_URL;

  if (process.env.HOST && process.env.PORT) {
    return `http://${baseUrl}:${process.env.PORT}/api`;
  }

  return `${baseUrl}api`;
}
