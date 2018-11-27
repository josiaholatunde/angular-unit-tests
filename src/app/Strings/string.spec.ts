import sayHello from './string';


describe('Greeting', () => {
  it('should contain name when called eith a name', () => {
    expect(sayHello("Ade")).toContain("Ade");
  })
  it('should return error message when empty string is passed', () => {
    expect(sayHello("")).toBe("Invalid string");
  })
})
