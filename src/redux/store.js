import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './weather/weatherSlice';
import countriesReducer from './countries/countriesSlice';

const store = configureStore({
  reducer: {
    countries: countriesReducer,
    weather: weatherReducer,
  },
});

export default store;
