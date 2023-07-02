import React from 'react';
import renderer from 'react-test-renderer';
import Weather from '../components/Weather/Weather';

const weatherData = {
  name: 'City',
  weather: [
    {
      main: 'Clear',
      description: 'Clear sky',
    },
  ],
  main: {
    temp: 298.15,
    humidity: 70,
  },
  wind: {
    speed: 5.4,
  },
};

describe('Weather component', () => {
  it('should match the snapshot', () => {
    const tree = renderer
      .create(<Weather weatherData={weatherData} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
