function scores3(scores) {
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] === scores[i] - 2) {
      return false;
    } else {
      return true;
    }
  }
}

let input1 = [3, 4, 5];
console.log(scores3(input1));
