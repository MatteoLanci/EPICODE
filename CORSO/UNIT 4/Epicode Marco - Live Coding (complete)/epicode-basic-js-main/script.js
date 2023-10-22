//* Basic JavaScript

// DATA TYPES
//? 1. Infinity e NaN
// console.log(50 / 0); // Output: Infinity
// console.log(-50 / 0); // Output: -Infinity
// console.log("Ciao" / 10); // Output: NaN (Not a Number)

//? 2. Dato di tipo stringa
// console.log('Hello World!'); // Apici singoli
// console.log("Ciao Mondo!"); // Doppi apici
// console.log(`Marco`); // Backticks (Combinazione Linux: AltGr + ')

//? 3. Dato Booleano
// let myBool = false;
// console.log(myBool); // Output: false

//? 4. undefined e null
// let myVar;
// console.log(myVar); // Output: undefined
// let mySecVar = null;
// console.log(mySecVar); // Output: null

// STRUCTURAL TYPES
//? 5. Gli oggetti
// let student = {
// 	name: "Gordon",
// 	surname: "Freeman",
// 	age: 18,
// 	batch: "FS-Jun21",
// 	hasWebcam: true,
// }

// console.log(student); // Output: { name: 'Gordon', ... }

// ARITHMETIC OPERATORS
//? 6. Somma, Sottrazione, Moltiplicazione, Divisione, Modulo
// console.log(15 + 5); // Output: 20
// console.log(20 - 7); // Output: 13
// console.log(20 * 3); // Output: 60
// console.log(50 / 10); // Output: 5
// console.log(19 % 5); // Output: 4

//? 7. PEMDAS
// Vedasi immagine PEMDAS nella cartella images!

//? 8. L'operatore + con dati numerici, stringhe, misti
// console.log("Ciao" + 10); // Output: "Ciao10"

//? 9. parseInt & parseFloat
// console.log("23" + 12); // Output: "2312"
// console.log(parseInt("23") + 12); // Output: 35
// console.log(parseInt("adsui")); // Output: NaN
// console.log(parseFloat(250)); // Output: 250

//? 10. Operatori logici
// let height = 150;
// let condition = height > 180;
// console.log(condition); // Output: false

//? 11. Operatori di Uguaglianza/Disuguaglianza (==, ===, !=, !==)
// Uguaglianza debole
// console.log("73" == 73); // Output: true
// Uguaglianza stretta
// console.log("73" === 73); // Output: false
// Disuguaglianza debole
// console.log("73" != 73); // Output: false
// Disuguaglianza stretta
// console.log("73" !== 73); // Output: true

//? 12. Operatori di Maggioranza/Minoranza (>, >=, <, <=)
// Confronto fra numeri
// console.log(80 > 20); // Output: true
// Confronto fra caratteri/stringhe
// console.log("Ciao" > 50); // Output: false

//? 13. Operatore NOT (!)
// console.log(!(120 > 60)); // Output: false
// console.log(!(120 < 60)); // Output: true

//? 14. Operatore AND (&&)
// console.log((120 > 50) && (30 < 50)); // Output: true
// console.log((120 > 50) && (30 > 50)); // Output: false

//? 15. Operatore OR (||)
// console.log((120 > 50) || (30 < 50)); // Output: true
// console.log((120 > 50) || (30 > 50)); // Output: true
// console.log((120 < 50) || (30 > 50)); // Output: false


