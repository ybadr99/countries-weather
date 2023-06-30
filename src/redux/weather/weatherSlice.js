/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async (latlng) => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latlng[0]}&lon=${latlng[1]}&appid=53ad2d24617829800c4173528ad41288`);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  },
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    weather: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchWeather.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchWeather.fulfilled]: (state, action) => {
      state.loading = false;
      state.weather = action.payload;
    },
    [fetchWeather.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
  },
});

export default weatherSlice.reducer;
