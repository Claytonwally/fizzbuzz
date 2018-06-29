for (let i = 1; i <= 100; i++) {
  if (i % 5 == 0 && i % 3 == 0) {
    state = i + 'fizzBuzz';
  }else if (i % 3 == 0) {
    state = i + 'fizz';
  }else if (i % 5 == 0) {
    state = i + 'buzz';
  }else {
    state = i;
  }

  console.log(state);
};
