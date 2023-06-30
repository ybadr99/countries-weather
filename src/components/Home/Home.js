import React from 'react';
import './Home.scss';
import Card from '../Card/Card';
import countries from '../../data.json';

const Home = () => (
  <div className="body">
    {countries.map((country) => (
      <Card key={country.name} country={country} />
    ))}
  </div>
);

export default Home;
