function hasone(n) {
  while (n > 0) {
    if (n % 10 === 1) {
      return true;
    }
    n = Math.floor(n / 10);
  }
  return false;
}

let input1 = 10;
console.log(hasone(input1));

function hastwo(n) {
  while (n > 0) {
    if (n % 2 === 0) {
      return true;
    }
    n = Math.floor(n / 2);
  }
  return false;
}

let input2 = 128;
console.log(hastwo(input2));
