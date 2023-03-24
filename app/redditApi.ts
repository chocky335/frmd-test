import { useQuery } from '@tanstack/react-query';


import { api } from './api';
import { ListResponse, NewsData } from './types';

export const listNewsQuery = async (): Promise<NewsData[]> => {
  const response = await api.get<ListResponse>('/pics/hot.json');
  const result = response.data.data.children.map(({data}) => data);

  return result;
};

export const useListNews = () =>
  useQuery({
    queryKey: ['/pics/hot'],
    queryFn: listNewsQuery,
  });
