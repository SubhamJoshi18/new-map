function countStringsOfLength(words, len) {
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].length === len) {
      count++;
    }
  }
  return count;
}

let stringsArray = ["apple", "banana", "orange", "kiwi", "grape"];
let targetLength = 6;
let result = countStringsOfLength(stringsArray, targetLength);

console.log(result);
