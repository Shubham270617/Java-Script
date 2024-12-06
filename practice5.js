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

// const countVow = (str) => {
//     let count = 0;
//   for (const char of str) {
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


//  For a given array of number print the square of each value using the forEach loop.

// let number = [67,39,68,55,44,42]

// number.forEach((num)=>{
//     console.log(num*num)
// })


// Q We are given array of marks of students. Filter our of the marks of student that scored 90+

// let marks = [34,87,93,64,99,98,90]
// let passStu = marks.filter((val) =>{
//     return val > 90
// })

// console.log(passStu)

// Take a number n as input from user. Create an array of number from 1 to n.
// use reduce method to calculate the sum and product of all the number in the array.

// let n = prompt("Enter a number: ");
// let arr = [];
// for (let i = 1 ; i<=n ; i++ ){
//     arr[i-1] = i;
// }

// console.log(arr)

// let sum = arr.reduce((pre,curr) =>{
//     return pre + curr
// });

// console.log("Sum of numbers:", sum)

// let product = arr.reduce((pre,curr) =>{
//     return pre * curr
// });

// console.log("Product of numbers:", product)