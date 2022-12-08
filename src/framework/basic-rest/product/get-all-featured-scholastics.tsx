import { QueryOptionsType, Product } from '@framework/types';
// import http from '@framework/utils/http';
import { API_ENDPOINTS } from '@framework/utils/api-endpoints';
import { useQuery } from 'react-query';
import axios from 'axios';
export const fetchPopularProducts = async ({ queryKey }: any) => {
  const api = axios.create({
    baseURL: 'http://rsbase.fanitehub.com/api/v1',
    headers: { "Content-Type": "multipart/form-data" },
  });
  const [_key, _params] = queryKey;
  const { data } = await api.get("products");
  return data as Product[];
};
export const useFeaturedScholasticQuery = (options: QueryOptionsType) => {
  return useQuery<Product[], Error>(
    [API_ENDPOINTS.POPULAR_PRODUCTS, options],
    fetchPopularProducts
  );
};