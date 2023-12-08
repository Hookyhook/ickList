import { Ick } from '@types';
import axios, { AxiosResponse } from 'axios';

async function getIcks(): Promise<Ick[]> {
  const response: AxiosResponse<Ick[]> = await axios.get('/api/v1/ick');
  return response.data;
}

async function getIck(id: string): Promise<Ick> {
  const response: AxiosResponse<Ick> = await axios.get(`/api/v1/ick/${id}`);
  return response.data;
}

async function createIck(ick: Ick): Promise<Ick> {
  const response: AxiosResponse<Ick> = await axios.post('/api/v1/ick', ick);
  return response.data;
}

export { getIcks, getIck, createIck };
