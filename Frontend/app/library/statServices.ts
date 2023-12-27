import { Stat } from '@types';
import axios, { AxiosResponse } from 'axios';

const apiURL = process.env.NEXT_PUBLIC_API_URL;

export async function getStat(): Promise<Stat> {
  const response: AxiosResponse<Stat> = await axios.get(
    apiURL + '/api/v1/stat'
  );
  return response.data;
}
