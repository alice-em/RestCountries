import React from 'react';
import { Grid, TextField } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import { useOptionsContext } from '../context/OptionsProvider';

const useStyles = makeStyles(() => ({
  root: {
    background: '#fff',
  },
}));

const LanguagesFilterInput = () => {
  const classes = useStyles();
  const { options, updateOptions } = useOptionsContext();

  const onChange = e =>
    updateOptions({
      languages: Number(e.target.value),
    });

  return (
    <Grid item sm={3} xs={12}>
      <TextField
        className={classes.root}
        label="Number of languages"
        numeric="true"
        onChange={onChange}
        value={options.languages}
      />
    </Grid>
  );
};

export default LanguagesFilterInput;
