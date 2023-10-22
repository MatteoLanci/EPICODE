//* [JS] Functions

// TODO: Switch-case è stato spiegato in epicode_array_js (30/03/23)!

// Functions
//? 1. Perché usare le funzioni?
// a. DRY
// b. Manutenzione codice
// c. Portabilità del codice (Librerie)

//? 2. Definire una funzione (senza argomenti)
// function greeting() {
//     console.log("Ciao");
//     console.log("Belli!");
// }

//? 3. Richiamare una funzione
// greeting(); // Output: "Ciao" "Belli!"

//? 4. Costruire una funzione (saluto personalizzato)
// let myChar = "Pippo";

// function specGreet(name1, name2) {
//     console.log("Benvenuti " + name1 + " " + name2);
// }

// specGreet(myChar, "Pluto"); // Output: Benvenuti Pippo Pluto

//? 5. Costruire una funzione (fattoriale di n)
// Target: Costruire una funzione che calcoli il fattoriale di un numero intero.
// Cosa significa fattoriale di un numero intero n?
// n! = nx(n-1)x(n-2)x...x1 , Es. 3! = 3 * 2 * 1 = 6
// Cosa significa "Ritornare" un valore?

// function factorial(num) {
//     let res = 1;
// for (let i = num; i > 0; i--) {
//      res *= i;
// }
//     return res;
// }

// let result = factorial(5); // 5 * 4 * 3 * 2 * 1 = 120
// console.log(result); // Output: 120

//? 6. Costruire una funzione (rilevetore parità/disparità)
// Target: Costruire una funzione che rilevi la parità o disparità di un numero intero.
// Cosa sono i controlli d'integrità?

// function evenOrOdd(intNum) {
//     // Controllo di integrità:
//     if(isNaN(intNum)) {
//         return "NOT A NUMBER!"; // Questo mi fa automaticamente cessare l'esecuzione della funzione, restituendo il valore!
//     }
//     // Funzione principale:
//     if(intNum % 2 === 0) {
//         return "PARI";
//     } else {
//         return "DISPARI";
//     }
// }

// console.log(evenOrOdd(15)); // Output: DISPARI
// console.log(evenOrOdd("Pippo")); // Output: NOT A NUMBER

//? 7. Metodi per stringhe
// N.B. La stringa in JS è un array!
// a. toLowerCase / toUpperCase [Output: String]
// let myString = "Mappamondomondo";
// console.log(myString.toLowerCase());
// console.log(myString.toUpperCase());
// b. includes [Output: Boolean]
// let subStr = "Ciao";
// console.log(myString.includes(subStr));
// c. concat [Output: String]
// console.log(myString.concat(subStr));
// d. repeat [Output: String]
// console.log(myString.repeat(5));
// e. replace [Output: String]
// console.log(myString.replace("mondo", "terra"));
// f. replaceAll [Output: String]
// console.log(myString.replaceAll("mondo", "terra"));

//? BONUS: Funzioni anonime & Arrow functions (Cenni)
// ECMASCript 2015
// Funzione anonima
// let myFunc = function() { // Una funzione anonima!
//     console.log("Hello World!");
// };
// myFunc(); // Output: Hello World!
// Arrow function
// let myOtherFunc = () => {
//     console.log("Questo viene stampato da una arrow function!");
// };

// myOtherFunc();

// TODO: Math.floor, Math.ceil, Math.round, Math.random() - In #risorse-didattiche

// Esempio studente:
// let myArr = [
//     { name: "Marco" },
//     { name: "Pippo" }
// ];

// let objA = myArr[0];
// let objB = myArr[1];

// console.log(objA, objB);

// for(obj of myArr) {
//     console.log(obj);
// }

