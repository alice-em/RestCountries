import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import FilterFields from '../fields/FilterFields';
import SortKeySelect from '../fields/SortKeySelect';

const useStyles = makeStyles(theme => ({
  toolbar: {
    padding: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
}));

const OptionsBar = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography className={classes.title} variant="h6">
          FairyGodBoss Countries Demo
        </Typography>
        <SortKeySelect />
        <FilterFields />
      </Toolbar>
    </AppBar>
  );
};

export default OptionsBar;
