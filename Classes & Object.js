// const student = {
//   FullName: "Shubham Sinha",
//   marks: 95,
//   printMarks: function () {
//     console.log("marks:", this.marks); // here this means that the student.marks
//   },
// };

// const employe = {
//   calcTax() {
//     console.log("tax rate us 10%");
//   },
// };

// const karanArjun = {
//   salary: 50000,
// };

// karanArjun.__proto__ = employe;


// classes

// class ToyatCar {
//   constructor(brand ,milage) {
//     console.log("Creating new objects");
//     this.brand = brand;
//     this.milage = milage;
//   }
//   start(){
//     console.log("car started");
//   }
//   stop(){
//     console.log("car stopped");
//   }

//   setBrand(brand){
//     this.brand = brand;
//   }
// }

// let fortuner = new ToyatCar("fortuner", 10 ); //constructor
// console.log(fortuner);
// let lexus = new ToyatCar("Nissan", 12); //constructor
// console.log(lexus)


// class Person {
// constructor(name) {
//   this.species = "Homo sepien"
//   this.name = name;
// }

//  eat () {
//     console.log("eat");
//   }

//  sleep () {
//     console.log("eat");
//   }
// }

// class Engineer extends Person {
//   constructor(name){
//     super(name); //invoke parent class constructor
//     // this.branch = branch;
//   }
//   study () {
//     super.eat()
//     console.log("study");
//   }
// }

// let shubhamObj = new Engineer("chem engg");


let a =10;
let b = 20;
console.log("a =", a)
console.log("b =", b)
console.log("a+b =", a+b);
try {
  console.log("a+b =", a+b+c); //error
} catch (err) {
  console.log(err);
}
console.log("a+b =", a+b);
console.log("a+b =", a+b);
console.log("a+b =", a+b);
console.log("a+b =", a+b);