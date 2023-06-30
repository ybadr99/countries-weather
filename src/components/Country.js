/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const Country = ({ country }) => (
  <div className="card">
    <div className="flag-img">
      <img src={country.flags.svg} alt="flag" />
    </div>
    <div className="content">
      <Link to={`country/${country.name}`}>{country.name}</Link>
    </div>
  </div>
);

export default Country;
