function scores6(words, n) {
  for (let i = 0; i < words.length; i++) {
    if (words[i].length === n) {
      return words[i];
    }
  }
}

let input1 = ["a", "b", "c", "d"];
let num = 2;
console.log(scores6(input1, num));
