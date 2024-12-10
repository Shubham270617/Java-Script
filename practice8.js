// Create a toggle button that changes the screen to dark-mode when clicked and light-mode when clicked again.

let mode = document.querySelector("#modebtn");
let currentMode = "Light";
let body = document.querySelector("body");

mode.addEventListener("click", () =>{
    if(currentMode === "Light"){
        currentMode = "Dark";
        body.classList.add("Dark");
        body.classList.remove("Light");
    } else {
        currentMode = "Light";
        body.classList.add("Light");
        body.classList.remove("Dark");
    }
    console.log(currentMode);
})