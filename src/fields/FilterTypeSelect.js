import React from 'react';

import CustomSelect from './CustomSelect';
import { useOptionsContext } from '../context/OptionsProvider';

const filterOptions = [
  { text: 'None', value: 'none' },
  { text: 'Languages', value: 'languages' },
  { text: 'Subregion', value: 'subregion' },
];

const SortKeySelect = () => {
  const { options, updateOptions } = useOptionsContext();

  const onChange = e =>
    updateOptions({
      filterType: e.target.value,
    });

  return (
    <CustomSelect
      id="filterTypeSelect"
      label="Filter Type"
      onChange={onChange}
      options={filterOptions}
      value={options.filterType}
    />
  );
};

export default SortKeySelect;
