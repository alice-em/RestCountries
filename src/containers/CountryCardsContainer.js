import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import CountryCardCollection from './CountryCardCollection';
import { countrySort } from '../utility/sort';
import { filterSwitch } from '../utility/filter';
import { useFetchContext } from '../context/FetchProvider';
import { useOptionsContext } from '../context/OptionsProvider';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
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

  const countryList = countrySort(filteredCountry, {
    ascending: options.ascending,
    key: options.sortKey,
  });

  return (
    <div className={classes.root}>
      <Grid className={classes.grid} container spacing={1}>
        <CountryCardCollection countries={countryList} />
      </Grid>
    </div>
  );
};

export default CountryCardsContainer;
