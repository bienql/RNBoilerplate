import { FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/dist/query/fetchBaseQuery';
import { BaseQueryFn, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from 'app/store';
import { logout, setAccessToken } from 'app/store/auth.slice';
import Config from 'react-native-config';

export const baseQuery = fetchBaseQuery({
  baseUrl: Config.API_URL,

  prepareHeaders: (headers: Headers, { getState }) => {
    // Mark requests as XMLHttpRequest
    headers.set('X-Requested-With', `XMLHttpRequest`);

    // Add authorization token to header if exists
    const token = (getState() as RootState).auth.accessToken;
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }

    return headers;
  },
});

export const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  // Token invalidated
  if (result.error && result.error.status === 401) {
    if (typeof args !== 'string' && args.url !== 'api/MemberTokenAuth/RenewToken') {
      // Try to get a new token
      const refreshResult: any = await baseQuery(
        '/api/MemberTokenAuth/RenewToken',
        api,
        extraOptions,
      );

      if (refreshResult.data.result) {
        // Store the new token
        api.dispatch(setAccessToken(refreshResult.data.result.accessToken));

        // Retry the initial query
        result = await baseQuery(args, api, extraOptions);
      } else {
        api.dispatch(logout());
      }
    } else {
      api.dispatch(logout());
    }
  }

  return result;
};
