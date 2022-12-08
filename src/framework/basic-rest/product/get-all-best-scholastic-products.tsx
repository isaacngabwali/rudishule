import { QueryOptionsType, Product } from '@framework/types';
//import http from '@framework/utils/http';
import { API_ENDPOINTS } from '@framework/utils/api-endpoints';
import { useQuery } from 'react-query';
import axios from "axios";

export const fetchBestScholasticProducts = async ({ queryKey }: any) => {
  const api = axios.create({
    baseURL: 'https://rsbase.fanitehub.com/api/v1',
    headers: { "Access-Control-Allow-Origin": "https://rs.fanitehub.com/" },
  });
  const [_key, _params] = queryKey;
  const { data } = await api.get("products");
  return data as Product[];
};
export const useBestScholasticProductsQuery = (
  options: QueryOptionsType
) => {
  return useQuery<Product[], Error>(
    [API_ENDPOINTS.BEST_SELLER_GROCERY_PRODUCTS, options],
    fetchBestScholasticProducts
  );
};
