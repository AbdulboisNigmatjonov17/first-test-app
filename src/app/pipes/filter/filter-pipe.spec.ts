import { FilterPipe } from './filter-pipe';

describe('FilterPipe', () => {
  const pipe = new FilterPipe();
  const list = ['Angular', 'React', 'Next']

  it('should return all items of searchText is empty', () => {
    expect(pipe.transform(list, '')).toEqual(list);
  });

  it('should filter matching items', () => {
    expect(pipe.transform(list, 'an')).toEqual(['Angular']);
  })

  it('shold be case insensitive', () => {
    expect(pipe.transform(list, 'REACT')).toEqual(['React']);
  })
});
