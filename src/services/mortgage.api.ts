import axios from 'axios';
import type { AxiosResponse } from 'axios';

const DEFAULT_HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'x-nesto-candidat': 'Mani Kamineni',
};

export const getProducts = async (): Promise<AxiosResponse> => {
  return await axios({
    url: `https://nesto-fe-exam.vercel.app/api/products`,
    method: 'get',
    headers: {
      ...DEFAULT_HEADERS,
    },
    timeout: 25000,
  });
};

export const createApplication = async (
  productId: number
): Promise<AxiosResponse> => {
  return await axios({
    url: `https://nesto-fe-exam.vercel.app/api/applications`,
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    data: JSON.stringify({
      productId,
    }),
  });
};
