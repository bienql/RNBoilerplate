import { createSlice } from '@reduxjs/toolkit';
import { User } from 'app/models/auth.model';
import { RootState } from 'app/store';
import { authApi } from 'app/services/auth.service';
import { ACCESS_TOKEN_KEY } from 'app/config/storage_key';
import { STORAGE } from 'app/utils/storage';
import messaging from '@react-native-firebase/messaging';

interface UserState {
  user: User;
  accessToken: string;
  loginMessage: string;
}

const initialState: UserState = {
  user: {} as User,
  accessToken: '',
  loginMessage: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload || '';
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.accessToken = '';
      STORAGE.removeData(ACCESS_TOKEN_KEY);
      messaging().deleteToken();
      // resetState();
    },
  },
  extraReducers: (builder) => {
    // Login successful
    builder.addMatcher(authApi.endpoints.login.matchFulfilled, (state, { payload }) => {
      const token = payload.result.accessToken;

      state.accessToken = token;

      STORAGE.storeData(ACCESS_TOKEN_KEY, token);
    });
  },
});

export const { setAccessToken, setUser, logout } = authSlice.actions;

export const selectAccessToken = (state: RootState): string => state.auth.accessToken;
export const selectUser = (state: RootState): User => state.auth.user;
