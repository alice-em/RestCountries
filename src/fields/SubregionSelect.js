import React from 'react';

import CustomSelect from './CustomSelect';
import { useOptionsContext } from '../context/OptionsProvider';

const subregionOptions = [
  { text: 'Eastern Europe', value: 'Eastern Europe' },
  { text: 'Northern Europe', value: 'Northern Europe' },
  { text: 'Southern Europe', value: 'Southern Europe' },
  { text: 'Western Europe', value: 'Western Europe' },
];

const SubregionSelect = () => {
  const { options, updateOptions } = useOptionsContext();

  const onChange = e =>
    updateOptions({
      subregion: e.target.value,
    });

  return (
    <CustomSelect
      id="subregionSelect"
      label="Select Subregion"
      onChange={onChange}
      options={subregionOptions}
      value={options.subregion}
    />
  );
};

export default SubregionSelect;
