let sayHello = name => {
  if(name.trim().length > 0) {
    return `Hello ${name}`;
  }
  return "Invalid string";
}

export default sayHello;
