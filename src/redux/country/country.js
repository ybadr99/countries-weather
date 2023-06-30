import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTemp = createAsyncThunk(
  'country/fetchTemp',
  async (countryName) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${countryName}&appid=53ad2d24617829800c4173528ad41288`,
      );
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  },
);

const countrySlice = createSlice({
  name: 'country',
  initialState: {},
  extraReducers: {},
});

export default countrySlice.reducer;
