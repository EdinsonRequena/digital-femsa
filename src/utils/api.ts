import {Product} from 'utils/types';

const API_BASE_URL = 'https://6222994f666291106a29f999.mockapi.io/api/v1/';

export const getProducts = async (): Promise<Product[]> => {
  const response = await fetch(`${API_BASE_URL}/products`);
  const data = await response.json();
  return data;
};
