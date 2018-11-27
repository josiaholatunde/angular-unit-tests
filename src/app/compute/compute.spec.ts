import compute from './compute';

describe('Compute', () => {
  it('should return 0 if input is negative', () => {
    const res = compute(-1);
    expect(res).toBe(0);
  })
  it('should increment number if it is positive', () => {
    const res = compute(5);
    expect(res).toBe(6);
  })
})
