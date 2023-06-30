import React from 'react';
import './Home.scss';
import { Link } from 'react-router-dom';

const Home = () => {
  const continents = [
    'Asia',
    'Africa',
    'North America',
    'South America',
    ' Antarctica',
    'Europe',
    'Australia',
  ];
  return (
    <div className="body">
      {continents.map((continent) => (
        <Link key={continent} to={`/continent/${continent}`}>
          {continent}
        </Link>
      ))}
    </div>
  );
};

export default Home;
