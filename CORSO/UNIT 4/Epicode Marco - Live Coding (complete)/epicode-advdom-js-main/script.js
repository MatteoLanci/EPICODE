//* [JS] Advanced DOM

//? 1. Input types
// Most common:
// Check them in index.html, please check remaining types and play with them!

// Take value of an input with JS.
// let myInputText = document.getElementById("text");
// console.log(+myInputText.value);
// console.log(parseFloat(10));
// console.log(Math.round(15.6));

// Dummy function:
function consoleMe() {
    console.log("I was triggered!");
}

//? 2. Events & Listeners
// Click event: 3 options
// a. onclick="" [Elemento pre-esistente]
// b. node.onclick
// let myButton = document.getElementById("my-button");
// myButton.onclick = consoleMe;
// c. node.addEventListener("click", functionName)
// myButton.addEventListener("click", (event) => {
//     console.log("Ciao!");
//     console.log(event);
// });
// 2 more listeners: mouseenter, mouseleave
// myButton.addEventListener("mouseenter", (event) => {
//     console.log("Ciao!");
//     console.log(event.target);
// });
// onkeypress="" [Elemento pre-esistente]

//? 3. Window onload
// Executive code + functions library
function mainFunction() {
    let myVar = 50;
    console.log("My var is: " + myVar);
    consoleMe();
}

// window.onload = mainFunction()
window.onload = mainFunction();

// Get ready for Calculator JS project:

// 0. For
// 1. For-of
// 2. Truthy and falsy values
// 3. if-else
// 4. switch-case
// 5. querySelectorAll
// 6. addEventListener