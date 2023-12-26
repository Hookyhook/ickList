import { Stat } from '@types';
import axios, { AxiosResponse } from 'axios';

const apiURL = 'https://api.icklist.justusvonvoss.me';

export async function getStat(): Promise<Stat> {
  const response: AxiosResponse<Stat> = await axios.get(
    apiURL + '/api/v1/stat'
  );
  return response.data;
}
