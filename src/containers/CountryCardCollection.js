import PropTypes from 'prop-types';
import React from 'react';
import { Grid } from '@material-ui/core';

import CountryCard from './CountryCard';

const CountryCardCollection = ({ countries }) => (
  countries.map(country => (
    <Grid key={country.name} item md={4} sm={6} xs={12}>
      <CountryCard
        capital={country.capital}
        flag={country.flag}
        languages={country.languages}
        name={country.name}
        population={country.population}
        subregion={country.subregion}
      />
    </Grid>
  ))
);

CountryCardCollection.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.shape({
    capital: PropTypes.string.isRequired,
    flag: PropTypes.string.isRequired,
    languages: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
    })),
    name: PropTypes.string.isRequired,
    population: PropTypes.number.isRequired,
    subregion: PropTypes.string.isRequired,
  })),
};

export default CountryCardCollection;
