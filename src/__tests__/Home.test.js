import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { MemoryRouter } from 'react-router-dom';
import Home from '../components/Home/Home';
import countriesReducer from '../redux/countries/countriesSlice';
import '@testing-library/jest-dom/';

it('renders the countries correctly', () => {
  const countries = [
    {
      name: 'Afghanistan',
      topLevelDomain: ['.af'],
    },
    {
      name: 'Åland Islands',
      topLevelDomain: ['.ax'],
    },
  ];

  const rootReducer = combineReducers({
    countries: countriesReducer,
  });

  const store = configureStore({
    reducer: rootReducer,
    preloadedState: {
      countries: {
        countries,
        status: 'success',
        error: null,
      },
    },
  });

  const { container } = render(
    <Provider store={store}>
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    </Provider>,
  );

  expect(container).toMatchSnapshot();
});
