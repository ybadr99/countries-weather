import React from 'react';
import './Card.scss';
import { useNavigate } from 'react-router-dom';

const Card = ({ country }) => {
  const {
    name, population, region, capital, flag,
  } = country;

  const navigator = useNavigate();

  const formattedPopulation = new Intl.NumberFormat('tr-TR').format(population);

  return (
    <div className="card" onClick={() => navigator(`/${name}`)} aria-hidden="true">
      <img src={flag} alt="Flag" />
      <ol>
        <h2>{name}</h2>
        <li>
          Population:
          <span>{formattedPopulation}</span>
        </li>
        <li>
          Region:
          <span>{region}</span>
        </li>
        <li>
          Capital:
          <span>{capital}</span>
        </li>
      </ol>
    </div>
  );
};

export default Card;
