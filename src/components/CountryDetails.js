import React from 'react';
import { Link, useParams } from 'react-router-dom';

const CountryDetails = () => {
  const country = useParams();
  return (
    <div>
      <Link to="/">Back</Link>
      <h1>{country.name}</h1>
    </div>
  );
};

export default CountryDetails;
