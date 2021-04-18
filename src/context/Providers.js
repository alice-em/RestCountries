import PropTypes from 'prop-types';
import React from 'react';

import { FetchProvider } from './FetchProvider';
import { OptionsProvider } from './OptionsProvider';

const Providers = ({ children }) => (
  <FetchProvider url="https://restcountries.eu/rest/v2/region/europe">
    <OptionsProvider>
      {children}
    </OptionsProvider>
  </FetchProvider>
);

Providers.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Providers;
