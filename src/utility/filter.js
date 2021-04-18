const filterByNumberOfLanguages = number => country => {
  console.log(number);
  console.log(country);
  return (country.languages.length === Number(number));
};
const filterBySubregion = subregion => country => (country.subregion === subregion);

const filterSwitch = (type, value) => {
  switch (type) {
    case 'languages':
      return filterByNumberOfLanguages(value);
    case 'subregion':
      return filterBySubregion(value);
    default:
      // "true" allows for no filtering
      return () => true;
  }
};

export { filterByNumberOfLanguages, filterBySubregion, filterSwitch };
