// 2. Write an ES6 function which takes an array of digits and return the sum of all digits present at odd indices. Avoid using in-built methods.

export const sumDigitsAtOddIndices = (nums) => {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 !== 0) {
      sum += nums[i];
    }
  }
  return sum;
};

console.log(sumDigitsAtOddIndices([1, 2, 3, 4, 5, 6, 7, 8, 9])); // 20
