import axios, { AxiosInstance } from "axios";

export default function useAxios(newBasePath?: string): AxiosInstance {
  const baseUrl = newBasePath || 'http://localhost:3000/api/';
  const instance = axios.create({
    baseURL: baseUrl,
    timeout: 1000,
  });

  return instance;
}
