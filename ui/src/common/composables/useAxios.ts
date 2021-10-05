import axios, { AxiosInstance } from 'axios';

export default function useAxios(newBasePath?: string): AxiosInstance {
  return axios.create({
    baseURL: getApiUrl(newBasePath),
    timeout: 1000,
  });
}

function getApiUrl(newBasePath?: string): string {
  let baseUrl =
    newBasePath || process.env.VUE_APP_API_HOST || process.env.BASE_URL;
  let port = '';

  // If basepathUrl is localhost, add specified port or default 3000
  if (process.env.VUE_APP_API_HOST) {
    if (baseUrl.indexOf('http') === -1) {
      baseUrl = `http://${baseUrl}`;
    }

    port = process.env.VUE_APP_API_PORT
      ? `:${process.env.VUE_APP_API_PORT}`
      : ':3000';
  }

  return `${baseUrl}${port}/api`;
}
