import axios, { AxiosInstance } from 'axios';

export default function useAxios(newBasePath?: string): AxiosInstance {
  return axios.create({
    baseURL: getApiUrl(newBasePath),
    timeout: 1000,
  });
}

function getApiUrl(newBasePath?: string): string {
  if (newBasePath) {
    return newBasePath;
  }

  const baseUrl = process.env.HOST || process.env.BASE_URL;

  if (process.env.HOST && process.env.PORT) {
    return `http://${baseUrl}:${process.env.PORT}/api`;
  }

  // TODO: Rethink how this behaves in Production. Maybe use the NODE_ENV Flag.

  return `${baseUrl}api`;
}
