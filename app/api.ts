import { AppStateStatus } from 'react-native';
import {
  focusManager,
  QueryClient,
  QueryFunctionContext,
  QueryKey,
} from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';

import { API_BASE_PATH, BASE_URL } from './constants';


export const onAppStateChange = (status: AppStateStatus) => {
  focusManager.setFocused(status === 'active');
};

const defaultQueryFn = async <Response>({
  queryKey,
}: QueryFunctionContext<QueryKey>): Promise<Response> => {
  const { data } = await api.get<unknown, AxiosResponse<Response>>(
    queryKey[0] as string,
  );

  return data;
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      queryFn: defaultQueryFn,
    },
  },
});


export const api = axios.create({
  baseURL: `${BASE_URL}/${API_BASE_PATH}`,
  withCredentials: true,
  headers: {
    Accept: '*/*',
    ['Content-Type']: 'application/json',
  },
});
