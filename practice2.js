// Get user to input a number using prompt("Enter a number:"). CHeck if the number us a nultiple of 5 or not


// let num = prompt("Enter a number:");

// if (num % 5 === 0) {
//     console.log(num, "The number is a multiple of 5");
// } else {
//     console.log(num, "The number is a not a multiple of 5");
// }


// Q2. Write a code which can give grade to studfents according to the scores: 90-100 A; 70-89 B, 60-69 C, 50-59 D, 0-49 F.
 
let score = 20;
let grade;

if (score>=90 && score<=100){
    console.log("Grade: A");
} else if (score>=70 && score<= 89){
    console.log("Grade: B");
} else if (score>=60 && score<=69){
    console.log("Grade: C");
}else if (score>=50 && score<=59){
    console.log("Grade: D")
}else {
    console.log("Grade: F");
}
