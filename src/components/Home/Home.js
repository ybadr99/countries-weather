import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import Filter from '../Filter/Filter';
import './Home.scss';

const Home = () => {
  const { countries } = useSelector((state) => state.countries);
  return (
    <>
      <nav>
        <h1>Where in the world?</h1>
      </nav>
      <Filter />
      <div className="body">
        {countries.map((country) => (
          <Card key={country.name} country={country} />
        ))}
      </div>
    </>
  );
};

export default Home;
