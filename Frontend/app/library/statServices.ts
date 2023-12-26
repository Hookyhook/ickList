import { Stat } from '@types';
import axios, { AxiosResponse } from 'axios';

const apiURL = process.env.API_URL
  ? process.env.API_URL
  : 'http://localhost:8080';

export async function getStat(): Promise<Stat> {
  const response: AxiosResponse<Stat> = await axios.get(
    apiURL + '/api/v1/stat'
  );
  return response.data;
}
