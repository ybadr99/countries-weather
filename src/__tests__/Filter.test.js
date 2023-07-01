import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from 'react-test-renderer';
import Filter from '../components/Filter/Filter';
import countriesReducer from '../redux/countries/countriesSlice';
import '@testing-library/jest-dom/extend-expect'; // Corrected import

describe('Filter component', () => {
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

  it('renders the countries correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Filter />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
