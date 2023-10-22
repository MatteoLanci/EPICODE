//! Array Methods & Fetch (Epicode)

//? 1. filter
//* Input: callback, Output: nuovo array modificato secondo callback function.
// let myArray = [ 1, 3, 5, 9, 2 ];
// let lowerThanFive = myArray.filter((x) => { return x < 5; });
// console.log(lowerThanFive);

//? 2. forEach
//* Input: callback del tipo (element, index) => { ... }, Output: nessuno.
// let myArray = [ 1, 3, 5, 9, 2 ];
// myArray.forEach((x, index) => {
//   console.log(2*x);
//   console.log(index);
// });

// let myStringArray = [ "Abaco", "Ciao", "Bello", "Italia", "Salve" ];
// mystringArray.forEach((x, index) => {
//     //   console.log(2*x);
//   console.log(x.toUpperCase());
//   console.log(index);
// });

//? 3. map
//* Input: callback, Output: nuovo array modificato secondo callback function.
// let myArray = [ 1, 3, 5, 9, 2 ];
// let items = myArray.map((x) => { return `<li class=”element”>${x}</li>` });
// console.log(items);
// // console.log(myArray);

//? 4. reduce
//* Input: callback, Output: number.
// let myArray = [ 1, 3, 5, 9, 2 ];
// let initialValue = 0;
// let sum = myArray.reduce((accumulator, currentValue) => { return accumulator + currentValue }, initialValue);
// console.log(sum); // 20
// console.log(myArray);

//? 5. join
//* Input: string, Output: string.
// let myArray = [ 1, 3, 5, 9, 2 ];
// let items = myArray.join(", ");
// console.log(items); // 1, 3, 5, 9, 2

//TODO: Epicode endpoint: https://striveschool-api.herokuapp.com/api/agenda
//* Quick Guide:
//* GET call to root endpoint: Returns all DB items.
//* POST call with body object like: 
//* { name: [string], description: [string], price: [number], time: [timestamp] }
//* PUT call with record ID as slug and body with updated data.
//* DELETE call with record ID as slug (no payload needed).

//? 6a. fetch (GET)
// fetch("https://striveschool-api.herokuapp.com/api/agenda")
// .then((response) => response.json())
// .then((json) => console.log(json))
// .catch((err) => console.log("Error detected: ", err) );

//? 6b. fetch (POST)
// const myBody = { name: "Marco", description: "Prova LC", price: 182, time: "2023-05-22T21:14:00.000Z" }; // Il mio Payload
// fetch('https://striveschool-api.herokuapp.com/api/agenda', { method: "POST", body: JSON.stringify(myBody), headers: { "Content-type": "application/json;charset=UTF-8"} }) 
// .then((response) => response.json())
// .then((json) => console.log(json))
// .catch((err) => console.log(err));

//? 6c. fetch (PUT)
// const myBody = { name: "Marco Bis", description: "Prova LC Bis", price: 202, time: "2023-05-22T21:19:00.000Z" }; // Il mio Payload
// const myId = "646bbfad55e33b00142dc021";
// fetch('https://striveschool-api.herokuapp.com/api/agenda/' + myId, { method: "PUT", body: JSON.stringify(myBody), headers: { "Content-type": "application/json;charset=UTF-8"} }) 
// .then((response) => response.json())
// .then((json) => console.log(json))
// .catch((err) => console.log(err));

//? 6d. fetch (DELETE)
// const myId = "646bbfad55e33b00142dc021";
// fetch('https://striveschool-api.herokuapp.com/api/agenda/' + myId, { method: "DELETE", headers: { "Content-type": "application/json;charset=UTF-8"} }) 
// .then((response) => response.json())
// .then((json) => console.log(json))
// .catch((err) => console.log(err));