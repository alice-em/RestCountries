const sortByKey = key => (a, b) => a[key] - b[key];

const countrySort = (countries, options = {
  ascending: true,
  key: 'name',
}) => {
  // destructured array to avoid mutating original data
  const sortedCounties = [...countries].sort(sortByKey(options.key));

  return options.ascending ? sortedCounties : sortedCounties.reverse();
};

export { countrySort };
