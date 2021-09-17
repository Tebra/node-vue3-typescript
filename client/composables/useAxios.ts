import axios from 'axios';

export default function useAxios(newBasePath?: string) {
  const baseUrl = newBasePath || 'http://localhost:3000/api/';
  const instance = axios.create({
    baseURL: baseUrl,
    timeout: 1000,
  });

  return {
    instance,
  };
}
