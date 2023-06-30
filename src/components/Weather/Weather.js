/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import React from 'react';
import './Weather.scss';
import {
  WiDaySunny,
  WiCloudy,
  WiRain,
  WiSnow,
  WiThunderstorm,
} from 'react-icons/wi';

const Weather = ({ weatherData }) => {
  const {
    name, weather, main, wind,
  } = weatherData;
  const { temp, humidity } = main;
  const { speed } = wind;

  // Convert temperature from Kelvin to Celsius
  const temperatureCelsius = Math.round(temp - 273.15);

  let weatherIcon;

  switch (weather[0].main) {
    case 'Clear':
      weatherIcon = <WiDaySunny size={64} color="#FCD440" />;
      break;
    case 'Clouds':
      weatherIcon = <WiCloudy size={64} color="#999999" />;
      break;
    case 'Rain':
      weatherIcon = <WiRain size={64} color="#4573D9" />;
      break;
    case 'Snow':
      weatherIcon = <WiSnow size={64} color="#FFFFFF" />;
      break;
    case 'Thunderstorm':
      weatherIcon = <WiThunderstorm size={64} color="#515151" />;
      break;
    default:
      weatherIcon = null;
  }

  return (
    <div className="weather-container">
      <h1 className="location-name">
        Weather in
        {' '}
        {name}
      </h1>
      <p className="weather-description">
        Description:
        {weather[0].description}
        <span className="weather-icon">{weatherIcon}</span>
      </p>
      <p className="temperature">
        Temperature:
        {temperatureCelsius}
        °C
      </p>
      <p className="humidity">
        Humidity:
        {humidity}
        %
      </p>
      <p className="wind-speed">
        Wind Speed:
        {speed}
        m/s
      </p>
    </div>
  );
};

export default Weather;
