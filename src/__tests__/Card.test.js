import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Card from '../components/Card/Card';

const country = {
  name: 'Afghanistan',
  population: 40218234,
  region: 'Asia',
  capital: 'Kabul',
  flag: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg',
};

describe('Card component', () => {
  it('renders the card correctly', () => {
    const { container } = render(
      <MemoryRouter>
        <Card country={country} />
      </MemoryRouter>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
