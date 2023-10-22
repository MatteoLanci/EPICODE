//! ES6 Features

//? 1. Keyword this

// let second = {
//   name: "Lidia",
//   description: "Demo for the this keyword",
//   getCapitalName: function () {
//     console.log(this.name.toUpperCase()); // This will refer to the object
//   },
// };
// second.getCapitalName();

// // ECCEZIONE:
// let firstObject = {
//   name: "Lidia",
//   description: "Demo for the this keyword",
//   getCapitalName: () => {
//     console.log(this.description.toUpperCase()); // This will refer to the global context
//   },
// };
// firstObject.getCapitalName();

//? 2. Destrutturazione
// const student = { firstname: "Pippo", lastname: "Longo", job: "Teacher", phone: "3334534223" };
// const student2 = { firstname: "Mario", lastname: "Rossi", job: "Teacher", phone: "3334534223" };

// function greet({ firstname, lastname }) { // Destrutturazione ES6
//     console.log(`My name is ${firstname} ${lastname}!`);
// }

// greet(student);
// greet(student2);

//? 3. Operatore Spreading (...)
// // Es.1
// const obj1 = { name: "John", age: 22 };
// const obj2 = { name: "Rambo", gender: "M" };
// const obj4 = { name: "Pippo", gender: "X" };
// const obj3 = { ...obj1, ...obj2, phone: "1321521323" };

// console.log(obj3);
// { name: 'Rambo', age: 22, gender: 'M', phone: '1321521323' }

// // Es. 2
// const myString = "This is a string";
// const characters = [ ...myString ];

// console.log(characters);
// // ['T', 'h', 'i', 's', ' ', 'i', 's', ' ', 'a', ' ', 's', 't', 'r', 'i', 'n', 'g']

// // Es. 3
// const odd = [1, 3, 5];
// const combined = [...odd, 2,4,6];

// console.log(combined);
// // [ 1, 3, 5, 2, 4, 6 ]

// // Es.4
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [...arr1, ...arr2];
// // console.log(arr3);


//? 4. find
//* Input: Array, Output: Element [Any] (undefined if 404).
// const numbers = [24, 41, 23, 16, 59];
// let foundNum = numbers.find((number) => { return number > 30 });
// console.log(foundNum); // 41

//? 5. findIndex
//* Input: Array, Output: Number (-1 if 404).
// const numbers = [24, 41, 23, 16, 59];
// let foundIndex = numbers.findIndex((number) => { return number > 30 });
// console.log(foundIndex); // 1

//? 6. includes
//* Input: Array, Output: Boolean.
// const numbers = [24, 41, 23, 16, 59];

// console.log(numbers.includes(24));
// // true
// console.log(numbers.includes(8));
// // false
