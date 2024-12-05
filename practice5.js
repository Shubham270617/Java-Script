// Create a function using the"function" keyword that takes a String as an argumnet and return the number of vowels in the string.

// function countVowles(string) {
//   let count = 0;
//   for (const char of string) {
//     if (
//       char === "a" ||
//       char === "i" ||
//       char === "e" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }

// //   console.log(count);
// return count;
// }

// Create an arrw functio9n to perfoem the same task.

const countVow = (str) => {
    let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "i" ||
      char === "e" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }

//   console.log(count);
return count;
}