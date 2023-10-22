//* [JS] If-else & Loops

//TODO: Recap of steps 10 -> 15 in my epicode_basic_js repo!

// CONDITIONALS
//? 1. L'if
// if(CONDITION) { Do this if CONDITION is TRUE! }

// let myBool = true;
// if(myBool === true) { // O in maniera compatta if(myBool)
//     console.log("Sono nell'IF!");
// }

//? 2. if-else
// if(CONDITION) { Do this if CONDITION is TRUE! } else { Do this if CONDITION is FALSE! }

// let myName = "Matteo";
// if(myName === "Marco") {
//     console.log("Sei Marco!");
// } else {
//     console.log("Non sei Marco!"); // Entro qui!
// }

//? 3. if + AND/OR conditions
// if(COND1 && COND2) { Do this if both CONDITIONS are TRUE! }
// if(COND1 || COND2) { Do this if at least one CONDITION is true }

// if((20 > 10) && (5 < 12)) {
//     console.log("Sono nell'IF!"); // Entro qui!
// } else {
//     console.log("Sono nell'else!");
// }

// if((20 > 10) || (5 > 12)) {
//     console.log("Sono nell'IF!"); // Entro qui!
// } else {
//     console.log("Sono nell'else!");
// }

//? 4. if senza condizioni (Truthy or Falsy values)
// Falsy: false, 0, “”, null, undefined, NaN, document.all
// Truty: Everything else...

// if(0) {
//     console.log("Sono nell'IF!");
// } else {
//     console.log("Sono nell'else!"); // Entro qui!
// }

// if(212390) {
//     console.log("Sono nell'IF!"); // Entro qui!
// } else {
//     console.log("Sono nell'else!");
// }

//? 5. Operatore Ternario (Assegnazione condizionale)
// let onSale = false;

// let price = onSale ? 79 : 99;
// console.log(price); // Output: 99

// LOOPS
//? 6. Il ciclo for
// for (let step = 1; step <= 10; step++) {
//    console.log(step); // Output: 1,2,3,4,5,6,7,8,9,10
// }

// console.log("Sono fuori dal for!");

// Alterazioni del ciclo
//? 7. Il break
// for (let i = 0; i < 10; i++) {
//     console.log(i);
//     if(i === 5) {
//         break;
//     }
// } // Output: 0,1,2,3,4,5

// Dopo il break vengo catapultato qui!!!

//? 8. Il continue
// for (let i = 0; i < 10; i++) {
//     if(i === 5) {
//         continue;
//     }
//     console.log(i);
// } // Output: 0,1,2,3,4,6,7,8,9

//? 9. Il ciclo while
// Esempio base:
// let n = 0, x = 0;
// while (n < 5) {
//     console.log(n);
//   	n++;
// } // Output: 0,1,2,3,4

// Esempio avanzato Epicode (Sommatoria del contatore):
// let n = 0, x = 0;
// while (n < 15) {
//   	n++;
//   	x += n;
// }

// console.log(x); // Output: 120
