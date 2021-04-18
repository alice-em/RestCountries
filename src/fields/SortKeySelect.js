import React from 'react';

import CustomSelect from './CustomSelect';
import { useOptionsContext } from '../context/OptionsProvider';

const sortOptions = [
  { text: 'Name', value: 'name' },
  { text: 'Population', value: 'population' },
];

const SortKeySelect = () => {
  const { options, updateOptions } = useOptionsContext();

  const onChange = e =>
    updateOptions({
      ascending: e.target.value === 'name',
      sortKey: e.target.value,
    });

  return (
    <CustomSelect
      id="sortKeySelect"
      label="Sort By"
      onChange={onChange}
      options={sortOptions}
      value={options.sortKey}
    />
  );
};

export default SortKeySelect;
