import { createApi } from '@reduxjs/toolkit/query/react';
import {
  ChangePasswordRequest,
  DeviceInfo,
  LoginRequest,
  LoginResponse,
  ResetPasswordRequest,
  UploadImageRespone,
  User,
} from 'app/models/auth.model';
import { baseQueryWithReauth } from './base.service';

export const authApi = createApi({
  reducerPath: 'authApi',

  baseQuery: baseQueryWithReauth,

  endpoints: (builder) => ({
    login: builder.mutation<{ result: LoginResponse }, LoginRequest>({
      query: (data: LoginRequest) => ({
        url: `/api/MemberTokenAuth/Authenticate`,
        method: 'POST',
        body: data,
      }),
    }),

    updateDeviceInfo: builder.mutation<undefined, DeviceInfo>({
      query: (data) => ({
        url: `api/services/app/Membership/UpdateDeviceInfo`,
        method: 'PUT',
        body: data,
      }),
    }),

    register: builder.mutation<{ result: User }, User>({
      query: (data: User) => ({
        url: `/api/services/app/MemberAccount/Register`,
        method: 'POST',
        body: data,
      }),
    }),

    getUsers: builder.query<User[], void>({
      query: () => ({
        url: `/api/Membership/GetAllRewards?Filter=1&VoucherTypeFilter=Tenant&SkipCount=1&MaxResultCosunt=99`,
        method: 'GET',
      }),
    }),

    upLoadImage: builder.mutation<{ result: UploadImageRespone }, FormData>({
      query: (file) => ({
        url: `/File/UploadImageFile`,
        method: 'POST',
        body: file,
      }),
    }),

    changPassword: builder.mutation<void, ChangePasswordRequest>({
      query: (data: ChangePasswordRequest) => ({
        url: `/api/services/app/Membership/ChangePassword`,
        method: 'POST',
        body: data,
      }),
    }),

    resetPassword: builder.mutation<void, ResetPasswordRequest>({
      query: (data: ResetPasswordRequest) => ({
        url: `/api/services/app/MemberAccount/ResetPassword`,
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useUpdateDeviceInfoMutation,
  useRegisterMutation,
  useGetUsersQuery,
  useUpLoadImageMutation,
  useChangPasswordMutation,
  useResetPasswordMutation,
} = authApi;
