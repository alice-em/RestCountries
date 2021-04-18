import PropTypes from 'prop-types';
import React, { createContext, useContext, useState } from 'react';

const initiateOptions = () => ({
  ascending: true,
  filterType: 'none',
  languages: 1,
  sortKey: 'name',
  subregion: 'Northern Europe',
});

const OptionsContext = createContext(initiateOptions());

const OptionsProvider = ({ children }) => {
  const [options, setOptions] = useState(initiateOptions());
  const updateOptions = slice =>
    setOptions(oldState => ({ ...oldState, ...slice }));

  return (
    <OptionsContext.Provider value={{ options, updateOptions }}>
      {children}
    </OptionsContext.Provider>
  );
};

OptionsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const useOptionsContext = () => {
  const context = useContext(OptionsContext);
  if (context === undefined) {
    throw new Error('useOptionsContext needs to be a child of OptionsProvider');
  }
  return context;
};

export { OptionsProvider, useOptionsContext };
