//* [JS] Array

// TODO: Switch-case

// CONDITIONALS
//? 0.a L'else if
// let gender = "Boh";

// if(gender === "Male") {
//     console.log("Benvenuto!");
// } else if(gender === "Female") {
//     console.log("Benvenuta!");
// } else {
//     console.log("Ciao!");
// }

//? 0.b Switch-case
// let gender = "Male";

// switch (gender) {
//     case "Male":
//         console.log("Benvenuto!");
//         break;
//     case "Female":
//         console.log("Benvenuta!");
//         break;
//     case "Non binary":
//         console.log("Benvenut*!");
//         break;
//     default: // Tutto il resto...
//         console.log("Ciao!");
//         break;
// }

// DATI STRUTTURATI
//? 1. Array
// Es. Slides:
// let arr = [ 1, "2", { three: 3 }, [4, 5, [8, 9]] ];
// console.log(arr[3][2][1]); // Output: 9

//? 2. Array Complessi
// Strutture e sintassi di accesso
// a. Basic
// let array = [ 1, 2, 3, 4, 5 ];
// console.log(array[3]); // Output: 4

// b. Simil DB:
// let students = [
// 	{ name: "Paulina", note: 5 },
// 	{ name: "Alex", note: 6 },
// 	{ name: "Diana", note: 4 }
// ];

// Esempio per studente:
// console.log(students.note); // Output: undefined

// Esempio per studente:
// let mySentence = students[0].name + " " + students[1].name; // Output: Paulina Alex
// console.log(mySentence);

// console.log(students); // Output: Array
// console.log(students[0].note); // Output: 5

// console.log(students[1].name); // Output: Alex
// console.log(students[2].name); // Output: Diana

// c. Matrice:
// let matrix = [
// 	[ 1, 2, 3 ],
// 	[ 4, 5, 6 ],
// 	[ 7, 8, 9 ]
// ];

// console.log(matrix[1][2]); // Output: 6

//? 3. Metodi per gli Arrays
// Es. Slides:
// let array = [ 1, 2, 3, 4, 5, 6, 7 ];
// Proprietà length
// console.log(array.length); // Output: 7

// METODI COMUNI
// a. concat [output Type: Array]
// let modArray = array.concat(8, 9);
// console.log(array); // Output: [ 1,2,3,4,5,6,7 ]
// console.log(modArray); // Output: [ 1,2,3,4,5,6,7,8,9 ]

// b. indexOf [output Type: Int]
// console.log(array.indexOf(7));

// c. lastIndexOf [output Type: Int]
// console.log(array.lastIndexOf(7));

// d. pop (M) [output Type: Any]
// array.pop();
// console.log(array);

// e. push (M) [output Type: Int]
// console.log(array.push(8, 9, 10));
// console.log(array);

// let array = [ 1, 2, 3, 4, 5, 6, 7 ];
// f. slice (estremo destro ESCLUSO!) [output Type: Array]

// console.log(array.slice(2, 5)); // Output: [ 3,4,5 ]
// console.log(array);

// g. includes (output Type: Boolean)
// console.log(array.includes(6)); // Output: true

// h. join (output Type: String)
// console.log(array.join(",")); // Output: 1-2-3-4-5-6-7

// i. splice(x, y) (M) (A posizione x, togli y elementi, compreso quello di partenza!) [output Type: Array]

// console.log(array.splice(4, 2)); // Output: [5, 6]
// console.log(array);

//? 4. Ciclare un Array
// let pippo = [ 1, 2, 3, 4, 5, 6, 7 ];
// // a. FOR classico
// for (let index = 0; index < pippo.length; index++) {
//     console.log(pippo[index]); // Output: Multiple console.logs -> 1, 2, 3, 4, 5, 6, 7
//     // Loop 1: index = 0 , pippo[0] = 1, index++ = 1
//     // Loop 2: index = 1 , pippo[1] = 2, index++ = 2
//     // Loop 3: index = 2 , pippo[2] = 3, index++ = 3
//     // [...]
// }

// b. FOR-of
// let array = [ 1, 2, 3, 4, 5 ];

// for (let element of array) {
//     console.log(element); // Output: Multiple console.logs -> 1, 2, 3, 4, 5
// }

