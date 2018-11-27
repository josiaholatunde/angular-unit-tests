import getCurrency from './currency';

describe('currency', () => {
  it('should containa currency string when called', () => {
    expect(getCurrency()).toContain('EUR');
  })
  it('lenght should be greater than 0', () => {
    expect(getCurrency().length).toBeGreaterThan(0);
  })
})
