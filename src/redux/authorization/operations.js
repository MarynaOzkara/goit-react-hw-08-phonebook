import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    // console.log(credentials);
    try {
      const response = await axios.post('/users/signup', credentials);
      token.set(response.data.token);
      toast.success('Welcome to PhoneBook App!');
      // console.log(response.data);
      return response.data;
    } catch (e) {
      toast.error('Something went wrong. Try again!');
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    // console.log(credentials);
    try {
      const { data } = await axios.post('/users/login', credentials);
      token.set(data.token);
      toast.success('Welcome back!');
      // console.log(data);
      return data;
    } catch (e) {
      toast.error('Wrong email or password. Try again!');
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
export const refreshUser = createAsyncThunk(
  '/auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistToken = state.auth.token;
    console.log(persistToken);
    if (persistToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistToken);
    try {
      const response = await axios.get('/users/current');
      console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
