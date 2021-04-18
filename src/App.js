import React from 'react';

import CountryContainer from './containers/CountryContainer';
import OptionsBar from './containers/OptionsBar';
import Providers from './context/Providers';

const App = () => (
  <Providers>
    <OptionsBar />
    <CountryContainer />
  </Providers>
);

export default App;
