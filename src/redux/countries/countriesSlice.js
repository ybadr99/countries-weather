/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import axios from 'axios';

export const fetchCountries = createAsyncThunk(
  'countries/fetchCountries',
  async (continentName) => {
    console.log(continentName);

    try {
      const response = await axios.get(
        `https://restcountries.com/v2/region/${continentName}`,
      );

      console.log(response);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  },
);

const countriesSlice = createSlice({
  name: 'countries',
  initialState: {
    countries: [],
    status: 'idle',
    error: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.status = 'success';
        state.countries = action.payload;
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error;
      });
  },
});

export default countriesSlice.reducer;
