import { getRandomInts } from './pokeApi.helpers';

describe('getRandomInt', () => {
  it('should take in a min and max integer then return and array of 10 random integers', () => {
    const min = 1;
    const max = 898;
    const randomInts = getRandomInts(min, max);
    const expectation = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(randomInts.length).toBe(expectation.length);
  });
});
