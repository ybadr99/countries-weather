/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import data from '../../data.json';
import { fetchWeather } from '../../redux/weather/weatherSlice';

import './Country.scss';
import Weather from '../Weather/Weather';

const Country = () => {
  const { countryName } = useParams();
  const dispatch = useDispatch();

  const country = data.filter(
    (el) => el.name.toLowerCase() === countryName?.toLowerCase(),
  );

  const [
    {
      name,
      flags: { svg },
      nativeName,
      population,
      topLevelDomain,
      region,
      currencies,
      languages,
      subregion,
      capital,
      borders,
      latlng,
    },
  ] = country;

  const formattedPopulation = new Intl.NumberFormat('tr-TR').format(population);
  const languagesList = languages.map((el) => el.name).join(',');

  useEffect(() => {
    if (latlng) dispatch(fetchWeather(latlng));
  }, [latlng, dispatch]);

  const { weather, loading, error } = useSelector((state) => state.weather);

  return (
    <div className="country">
      <Link to="/">
        <FaArrowLeft className="back-icon" />
        Back
      </Link>

      <div>
        <img src={svg} alt="Flag" />
        <div>
          <h1>{name}</h1>
          <div className="infos">
            <p>
              Native Name:
              <span>{nativeName}</span>
            </p>
            <p>
              Top Level Domain:
              <span>{topLevelDomain}</span>
            </p>
            <p>
              Population:
              <span>{formattedPopulation}</span>
            </p>
            <p>
              Currencies:
              <span>{currencies?.[0]?.code}</span>
            </p>
            <p>
              Region:
              <span>{region}</span>
            </p>
            <p>
              Languages:
              <span>{languagesList}</span>
            </p>
            <p>
              Sub Region:
              <span>{subregion}</span>
            </p>
            <p>
              Capital:
              <span>{capital}</span>
            </p>
          </div>
          <div>
            <p>
              Border Countries:
              <div className="borders">
                {borders?.map((el) => (
                  <span key={el}>{el}</span>
                ))}
              </div>
            </p>
          </div>
        </div>
      </div>
      {weather ? (
        <Weather weatherData={weather} />
      ) : (
        <h2 style={{ textAlign: 'center', color: 'white' }}>Loading...</h2>
      )}
    </div>
  );
};

export default Country;
