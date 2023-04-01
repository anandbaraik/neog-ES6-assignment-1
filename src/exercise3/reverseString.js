// 3. Write an ES6 function to reverse a string in JavaScript without using in-built methods.

export const reverseString = (str) => {
  let reverseStr = "";
  for (let char of str) {
    reverseStr = char + reverseStr;
  }
  return reverseStr;
};

console.log(reverseString("neoG Camp")); // pmaC Goen
