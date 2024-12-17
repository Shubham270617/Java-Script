//Synchronous Programming:

// console.log("one")
// console.log("two")
// console.log("three")

// setTimeout (()=>{
//     console.log("Hello");
// }, 5000)  //timeout;

// function sum(a, b) {
//     console.log(a+b);
// }

// function calculator(a,b,sumCallback) {
// sumCallback(a,b);
// }

// calculator(5, 7, sum);  //callback function;

// function getData(dataId, getNextData) {
//   //2s
//   setTimeout(() => {
//     console.log("data", dataId);
//     if (getNextData) {
//       getNextData(); //recursive call
//     }
//   }, 3000);
// }


// //callback hell


// getData(1, () => {
//   getData(2, () => {
//     getData(3, () => {
//       getData(4);
//     });
//   });
// });

// let promise = new Promise((resolve, reject) => {
//   console.log("I am a promise");
//   // resolve("Sucess");
//   reject("Failed");
// });

// const getPromise = () =>{
//   return new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     // resolve("Sucess");
//     reject("Failed");
//   });
// }

// let promise = getPromise();
// promise.then((res) =>{
//   console.log("promise resolved", res)
// })

// promise.catch((err) =>{
//   console.log("promise rejected", err)
// });

// function getData(dataId, getNextData) {
//   return new Promise((resolve,reject) => {
//     setTimeout(() => {
//           console.log("data", dataId);
//           resolve("Success")
//           if (getNextData) {
//             getNextData(); //recursive call
//           }
//         }, 3000);
//   })
// }


//Promise Chain 

// function asyncFunc1() {
//   return new Promise ((resolve, reject) =>{
//     setTimeout(() => {
//       console.log("Hello async");
//       resolve("Async Success");
//     }, 8000);
//   })
// }

// function asyncFunc2() {
//   return new Promise ((resolve, reject) =>{
//     setTimeout(() => {
//       console.log("Hello async2");
//       resolve("Async Success");
//     }, 6000);
//   })
// }


// console.log("Fetching Data1....")
//  asyncFunc1().then((res) =>{
//   console.log("Fetching Data2....")
//   asyncFunc2().then((res) =>{
//   })
// })



//Async Function

// async function hello () {
//   console.log("Hello");
// }

function api (){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Weather Data");
      resolve(200)
    }, 2000)
  })
}

// async function getWeatherData() {
//   await api()
// }

// async function getAllData(){
//   console.log("getting data1...")
//   await getAllData(1);
//   console.log("getting data2...")
//   await getAllData(2);
//   console.log("getting data3...")
//   await getAllData(3);
// }

// if we use IFFE function then we can use it 

(async function (){
    console.log("getting data1...")
    await getAllData(1);
    console.log("getting data2...")
    await getAllData(2);
    console.log("getting data3...") 
    await getAllData(3);
  })();