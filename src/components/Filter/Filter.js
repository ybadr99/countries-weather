import React, { useState, useEffect } from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import data from '../../data.json';
import { setCountries } from '../../redux/countries/countriesSlice';
import './Filter.scss';

const Filter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState('Filter by region');
  const [searchInput, setSearchInput] = useState('');

  const allRegions = ['All Regions', ...new Set(data.map((el) => el?.region))];
  const handleRegion = (e, region) => {
    e.stopPropagation();
    setSelectedRegion(region);
    setIsOpen(false);
  };

  const handleCountryChange = (e) => {
    setSearchInput(e.target.value);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedRegion !== 'Filter by region') {
      if (selectedRegion === 'All Regions') {
        dispatch(setCountries(data));
      } else {
        const selectedRegionArray = data.filter(
          (el) => el?.region === selectedRegion,
        );
        dispatch(setCountries(selectedRegionArray));
      }
    }
    if (searchInput === '') {
      dispatch(setCountries(data));
    } else if (searchInput) {
      // eslint-disable-next-line max-len
      const filteredCountry = data.filter((el) => el.name.toLowerCase().includes(searchInput.toLowerCase()));
      dispatch(setCountries(filteredCountry));
    }
  }, [
    selectedRegion,
    setSelectedRegion,
    searchInput,
    setSearchInput,
    dispatch,
  ]);

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search country"
        onChange={handleCountryChange}
        value={searchInput}
      />
      <button
        type="button"
        className="filter"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>
          {selectedRegion}
          {isOpen ? <FaArrowUp /> : <FaArrowDown />}
        </div>
        {isOpen && (
          <div className="regions">
            {allRegions.map((region, idx) => (
              <button
                type="button"
                onClick={(e) => handleRegion(e, region)}
                key={idx}
              >
                {region}
              </button>
            ))}
          </div>
        )}
      </button>
    </div>
  );
};

export default Filter;
