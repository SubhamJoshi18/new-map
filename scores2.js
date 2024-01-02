function scores2(scores) {
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] && scores[i + 1] === 100) {
      return true;
    } else {
      return false;
    }
  }
}

let input1 = [1, 100, 100];
console.log(scores2(input1));
