import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    background: '#fff',
    minWidth: '200px',
  },
}));

const CustomSelect = ({ id, label, options, onChange, value }) => {
  const classes = useStyles();

  return (
    <FormControl className={classes.root}>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <Select
        onChange={onChange}
        value={value}
      >
        {options.map(({ text, value }) => (
          <MenuItem key={text} value={value}>{text}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

CustomSelect.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    value: PropTypes.string,
  })),
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

CustomSelect.defaultProps = {
  options: [],
};

export default CustomSelect;
