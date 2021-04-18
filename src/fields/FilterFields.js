import React, { Fragment } from 'react';

import FilterOptionFields from './FilterOptionFields';
import FilterTypeSelect from './FilterTypeSelect';

const FilterFields = () => (
  <Fragment>
    <FilterTypeSelect />
    <FilterOptionFields />
  </Fragment>
);

export default FilterFields;
