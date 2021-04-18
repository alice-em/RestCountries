import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import CountryCard from './CountryCard';
import { countrySort } from '../utility/sort';
import { filterSwitch } from '../utility/filter';
import { useFetchContext } from '../context/FetchProvider';
import { useOptionsContext } from '../context/OptionsProvider';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  // grid: {
  //   margin: 0,
  //   width: '100%',
  // },
}));

const CountryCardsContainer = () => {
  const classes = useStyles();
  const { options } = useOptionsContext();
  const { data } = useFetchContext();

  const filteredCountry = data.filter(
    filterSwitch(
      options.filterType,
      options.filterType === 'languages'
        ? options.languages
        : options.subregion,
    ),
  );

  return (
    <div className={classes.root}>
      <Grid className={classes.grid} container spacing={1}>
        {countrySort(filteredCountry, {
          ascending: options.ascending,
          key: options.sortKey,
        }).map(country => (
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
        ))}
      </Grid>
    </div>
  );
};

export default CountryCardsContainer;
