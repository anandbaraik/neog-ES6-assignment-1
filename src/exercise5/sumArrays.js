// 5. Write an ES6 function that takes two array of numbers of equal length and returns a new array with the sum of each corresponding element in the two arrays. Avoid using in-built methods.

export const sumArrays = (nums1, nums2) => {
  const newArr = [];
  for (let i = 0; i < nums1.length; i++) {
    newArr[i] = nums1[i] + nums2[i];
  }
  return newArr;
};

console.log(sumArrays([1, 2, 3, 4], [1, 2, 3, 5])); // [2, 4, 6, 9]
