import { countrySort } from '../sort';

describe('sort', () => {
  it('should countrySort with ascending order', () => {
    const data = [{ sample: 234 }, { sample: 123 }, { sample: 345 }];
    expect(
      countrySort(data, { ascending: true, key: 'sample' }),
    ).toMatchObject([{ sample: 123 }, { sample: 234 }, { sample: 345 }]);
  });

  it('should countrySort with descending order', () => {
    const data = [{ sample: 234 }, { sample: 123 }, { sample: 345 }];
    expect(
      countrySort(data, { ascending: false, key: 'sample' }),
    ).toMatchObject([{ sample: 345 }, { sample: 234 }, { sample: 123 }]);
  });
});
