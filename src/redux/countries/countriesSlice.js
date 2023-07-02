import { createSlice } from '@reduxjs/toolkit';
import countries from '../../data.json';

const countriesSlice = createSlice({
  name: 'weather',
  initialState: {
    countries,
  },
  reducers: {
    setCountries: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.countries = action.payload;
    },
  },
});

export default countriesSlice.reducer;
export const { setCountries } = countriesSlice.actions;
