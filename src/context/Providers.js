import PropTypes from 'prop-types';
import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from '../theme/theme';
import { FetchProvider } from './FetchProvider';
import { OptionsProvider } from './OptionsProvider';

const Providers = ({ children }) => (
  <ThemeProvider theme={theme}>
    <FetchProvider url="https://restcountries.eu/rest/v2/region/europe">
      <OptionsProvider>{children}</OptionsProvider>
    </FetchProvider>
  </ThemeProvider>
);

Providers.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Providers;
