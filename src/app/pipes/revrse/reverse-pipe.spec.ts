import { ReversePipe } from './reverse-pipe';

describe('ReversePipe', () => {
  const pipe = new ReversePipe();

  it('should reverse string', () => {
    expect(pipe.transform('Kortu')).toBe('utroK');
  });

  it('should return empty string, if input is empty', () => {
    expect(pipe.transform('')).toBe('');
  });
});
