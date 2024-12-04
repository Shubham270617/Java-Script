//Q1.  For a given array with the marks of students -> [85,97,44,37,76,60] Find the average marks of the entire class.

// let marks = [85,97,44,37,76,60];

// let sum = 0;
// for (let val of marks) {
//     sum = sum + val;
// }
// let avg = sum/marks.length;
// console.log(`Average marks=${avg}`);

// Q 2. for a given array with prices of 5 items -> [250,645,300,900,50] All items have an offer of 10% OFF on them. Chnage the rray to store final price after applying offer.

// let prices = [250,645,300,900,50];
// // let i =0;
// // for (let val of prices) {
// //     let offer = val/10;
// //     prices[i]= prices[i]-offer;
// //     console.log(`value after offer = ${prices[i]}`);
// // };

// for (let i =0; i < prices.length; i++) {
//     let offer = prices[i]/10;
//     prices[i] = prices[i] - offer;
// }
// console.log(prices)

// // Q3. Create an array to store companies -> "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix".
//    (a) Remove the first company from the Array
//    (b) Remove Uber and Add Ola   in its place
//    (c) Add Amazon at the end 


let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
console.log(companies)
// console.log(companies.splice("1"))
companies.splice(2, 1, "Ola");
console.log(companies.push("Amazon"));