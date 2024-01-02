function scores9(words, target) {
  let empty = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i] !== target) {
      empty.push(words[i]);
    }
  }
  return empty;
}

let input1 = ["a", "b", "c", "a"];
let num = "a";
console.log(scores9(input1, num));
