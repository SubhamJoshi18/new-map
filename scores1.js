function scores1(scores) {
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] >= scores[i + 1] || scores[i] <= scores[i + 1]) {
      return true;
    } else if (
      scores[i + 1] >= scores[i - 1] ||
      scores[i + 1] <= scores[i - 1]
    ) {
      return true;
    } else {
      return false;
    }
  }
}

let input1 = [1, 3, 4];
console.log(scores1(input1));
