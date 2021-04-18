import React from 'react';

import CountryCardsContainer from './CountryCardsContainer';
import FetchContainer from './FetchContainer';

const CountryContainer = () => (
  <FetchContainer ErrorComponent="error" LoadingComponent="loading">
    <CountryCardsContainer />
  </FetchContainer>
);

export default CountryContainer;
