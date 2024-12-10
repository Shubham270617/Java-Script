let btn1 = document.querySelector("#btn1");
// btn1.onclick = (evt) =>{
//     console.log(evt);
//     console.log(evt.target)
//     console.log(evt.type)
    // console.log("btn1 clicked");
    // let a = 20;
    // a++;
    // console.log(a);
// }

btn1.addEventListener("click", () =>{  //we can access event object also here.
    console.log("btn1 clicked - handle1");
})

btn1.addEventListener("click", () =>{  //we can access event object also here.
    console.log("btn1 clicked - handle2");
})

const handler3 = () =>{  //we can access event object also here.
    console.log("btn1 clicked - handle3");
}

btn1.addEventListener("click", handler3)

btn1.addEventListener("click", () =>{  //we can access event object also here.
    console.log("btn1 clicked - handle4");
})

btn1.removeEventListener("click", handler3)

// let divs = document.querySelector("div");
// divs.onmouseover = () =>{
//     console.log("enetered inside")
//     let b = 25;
//     b++;
//     console.log(b);
// }