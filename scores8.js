function scores8(nums, count) {
  let evenNumber = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      evenNumber.push(nums[i]);
    }
    if (evenNumber.length === count) {
      break;
    }
  }
  return evenNumber;
}
let input1 = [3, 2, 4, 5, 8];
let input2 = 2;
console.log(scores8(input1, input2));
