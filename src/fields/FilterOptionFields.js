import React from 'react';

import SubregionSelect from './SubregionSelect';
import LanguagesFilterInput from './LanguagesFilterInput';
import { useOptionsContext } from '../context/OptionsProvider';

const FilterOptionFields = () => {
  const { options } = useOptionsContext();
  switch (options.filterType) {
    case 'languages':
      return <LanguagesFilterInput />;
    case 'subregion':
      return <SubregionSelect />;
    default:
      return null;
  }
};

export default FilterOptionFields;
