// 4. Write an ES6 function that takes an array of strings and returns the shortest string in the array.

export const getShortestString = (strs) => {
  let shortestString = strs[0];
  for (const str of strs) {
    if (str.length < shortestString.length) {
      shortestString = str;
    }
  }
  return shortestString;
};

console.log(getShortestString(["primary", "secondary", "education", "exams"])); // exams
