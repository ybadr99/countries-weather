import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import data from '../../data.json';
import './Country.scss';

const Country = () => {
  const { country } = useParams();

  const memo = useMemo(
    () => data.filter((el) => el.name.toLowerCase() === country?.toLowerCase()),
    [country],
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
    },
  ] = memo;
  const formattedPopulation = new Intl.NumberFormat('tr-TR').format(population);
  const languagesList = languages.map((el) => el.name).join(',');

  return (
    <div className="country">
      <Link to="/">
        <i className="fa-solid fa-arrow-left" />
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
    </div>
  );
};

export default Country;
