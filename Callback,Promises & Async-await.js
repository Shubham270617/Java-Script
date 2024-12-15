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

function getData(dataId, getNextData) {
  //2s
  setTimeout(() => {
    console.log("data", dataId);
    if (getNextData) {
      getNextData(); //recursive call
    }
  }, 3000);
}

//callback hell
getData(1, () => {
  getData(2, () => {
    getData(3, () => {
      getData(4);
    });
  });
});
