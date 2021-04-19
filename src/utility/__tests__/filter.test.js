import { filterByNumberOfLanguages, filterBySubregion } from '../filter';

describe('filter', () => {
  it('should filterByNumberOfLanguages', () => {
    const data = [{ languages: [0, 1, 2, 3] }, { languages: [0, 1] }];
    expect([...data].filter(filterByNumberOfLanguages(2))).toHaveLength(1);
  });

  it('should filterBySubregion', () => {
    const data = [{ subregion: 'abc' }, { subregion: 'def' }];
    expect([...data].filter(filterBySubregion('def'))).toHaveLength(1);
  });
});
