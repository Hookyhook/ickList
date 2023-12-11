import { Ick } from '../types';
import axios, { AxiosResponse } from 'axios';

async function getIcks(): Promise<Ick[]> {
  const response = await axios.get('http://localhost:8080/api/v1/ick');

  return response.data;
}

async function getIck(id: string): Promise<Ick> {
  const response: AxiosResponse<Ick> = await axios.get(
    `http://localhost:8080/api/v1/ick/${id}`
  );
  return response.data;
}

async function createIck(ick: any): Promise<Ick> {
  const response: AxiosResponse<Ick> = await axios.post(
    'http://localhost:8080/api/v1/ick',
    ick
  );
  return response.data;
}

export { getIcks, getIck, createIck };
