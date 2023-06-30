import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchCountries } from '../redux/countries/countriesSlice';
import Card from './Card/Card';

const Countries = () => {
  const continentName = useParams();

  const { status, countries, error } = useSelector((state) => state.countries);

  const dispatch = useDispatch();
  useEffect(() => {
    console.log('rendered!');
    if (status === 'idle') {
      dispatch(fetchCountries(continentName.name));
    }
  }, [status, continentName.name, dispatch]);

  if (status === 'loading') {
    return <h2 style={{ textAlign: 'center' }}>Loading...</h2>;
  }

  if (status === 'failed') {
    return <h2 style={{ textAlign: 'center' }}>{error}</h2>;
  }

  return (
    <>
      <Link className="back-btn" to="/">
        Back
      </Link>
      <div className="body">
        {countries.map((country) => (
          <Card key={country.alpha2Code} country={country} />
        ))}
      </div>
    </>
  );
};

export default Countries;
