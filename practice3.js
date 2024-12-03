//  Print alll even number from 0 to 100

// for (let num = 0; num<100; num++) {
//     if (num % 2 === 0) { // even number 
//         console.log("Num:", num);
//     }
//     console.log(num)
// }

// Q2. Create a game where you start with any rndom game number. Ask the user to keep gueesing the game number until the usre enter correct value.

// let gameNum = 25;
// let usernum = prompt("Guess the game number :") ;

// while (usernum != gameNum) {
//  usernum = prompt ("You enter wrong game number. Guess again :") ;
// }

// console.log("Congratulations! You guessed the correct number");


// Q3. Prompt the user to enter their full name. Generate a username for them based on the InputDeviceInfo. STart username with @AbortController, followed byy= their full name and ending with the full length. eg: username = "shubhamsinha" , username should be "@shubhamsinha17"

let fullName = prompt("Enter your fullname without spaces");
let username = "@" + fullName + fullName.length;
console.log(username);