// 1. Write an ES6 function that takes an array of numbers and returns a new array with only the odd numbers.

export const getOddNumbers = (nums) => {
  if (!nums) return [];
  let oddNums = [];
  for (let num of nums) {
    if (num % 2 !== 0) {
      oddNums.push(num);
    }
  }
  return oddNums;
};

console.log(getOddNumbers([2, 6, 7, 3, 8, 9, 13])); // [7, 3, 9, 13]
