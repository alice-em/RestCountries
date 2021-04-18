import PropTypes from 'prop-types';
import React, { createContext, useContext } from 'react';
import useFetch from 'react-fetch-hook';

const FetchContext = createContext();

const FetchProvider = ({ children, url }) => {
  const { isLoading, data, error } = useFetch(url);

  return (
    <FetchContext.Provider value={{ isLoading, data, error }}>
      {children}
    </FetchContext.Provider>
  );
};

FetchProvider.propTypes = {
  children: PropTypes.node.isRequired,
  url: PropTypes.string.isRequired,
};

const useFetchContext = () => {
  const context = useContext(FetchContext);
  if (context === undefined) {
    throw new Error('useFetchContext needs to be a child of FetchProvider');
  }
  return context;
};

export { FetchProvider, useFetchContext };
