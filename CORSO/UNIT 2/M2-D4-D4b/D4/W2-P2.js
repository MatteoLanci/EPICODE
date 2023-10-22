/* //? ESERCIZIO 1
  Fornito il seguente oggetto, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
//* SOLUZIONE 1
// const me = {
//   name: "Joh",
//   lastName: "Doe",
//   skills: ["javascript", "html", "css"],
// };
// me.skills.pop();
// console.log(me.skills);

/* //? ESERCIZIO 2
  Scrivi del codice per creare un array di soli valori DISPARI da 1 a 100.
 */
//* SOLUZIONE 2
// let array = [];

// for (let num = 0; num <= 100; num++) {
//   if (num % 2 !== 0) {
//     array.push(num);
//   }
// }
// console.log(array);

/* //? ESERCIZIO 3
  Scrivi del codice per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
 */
//* SOLUZIONE 3
//! include oggetti non trattati a lezione
// let array2 = [];

// for (let num = 0; num < 10; num++) {
//   array2.push(Math.floor(Math.random() * 101));
// }
// console.log(array2);

/* //? ESERCIZIO 4
  Scrivi del codice per ricavare solamente i valori PARI da un array composto da soli valori numerici.
 */
//* SOLUZIONE 4
// let array3 = [3, 65, 32, 30, 26, 25, 87];
// let dispari = [];

// for (let i = 0; i <= array3.length; i++) {
//   if (array3[i] % 2 === 0) {
//     console.log(array3[i]);
//   }
// }

/* //? ESERCIZIO 5
  Scrivi del codice per sommare a catena i numeri contenuti in un array.
 */
//* SOLUZIONE 5
// let numeri = [1, 7, 11, 12, 15, 56, 78, 90, 60, 4, 6];
// let sum = 0;

// for (let i = 0; i < numeri.length; i++) {
//   sum += numeri[i];
// }
// console.log(sum);

/* //? ESERCIZIO 6
  Scrivi del codice per incrementare di 1 tutti i valori numerici in un array.
*/
//* SOLUZIONE 6
// let array5 = [4, 35, 78, 100, 600, 700];

// for (let i = 0; i < array5.length; i++) {
//   array5[i] = array5[i] + 1;
// }
// console.log(array5);

/* //? ESERCIZIO 7 (EXTRA)
  Scrivi del codice per eliminare solo i valori PARI da un array.
*/
//* SOLUZIONE 7 (EXTRA)
// let array6 = [];

// for (let i = 0; i < 10; i++) {
//   if (i % 2 !== 0) {
//     array6.push(i);
//   }
// }
// console.log(array6);

/* //? ESERCIZIO 8
  Scrivi del codice per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 10 (incluso), SENZA AMMETTERE DUPLICATI.
 */
//* SOLUZIONE 8
//! include oggetti non trattati a lezione
// let arrayNotDoubles = [];
// let x;

// for (let num = 0; num < 10; num++) {
//   x = Math.floor(Math.random() * 11);
//   if (arrayNotDoubles.includes(x) === true) {
//     num = num - 1;
//   } else {
//     arrayNotDoubles.push(x);
//   }
// }
// console.log(arrayNotDoubles);

/* //? ESERCIZIO 9
  Sostituisci ogni stringa contenuta in un array con un numero rappresentante la sua lunghezza.
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/
//* SOLUZIONE 9
// let array7 = ["Matteo", "Lanci", "aspirante", "full-stack", "developer"];

// for (let i = 0; i < array7.length; i++) {
//   array7[i] = array7[i].length;
// }

// console.log(array7);

/* //? ESERCIZIO 10
  Scrivi un algoritmo in grado di invertire un array.
  es: [1, 3, 5] ==> [5, 3, 1]
*/
//* SOLUZIONE 10
// let array8 = ["questo", "non", "è", "un", "palindromo"];
// array8.reverse();

// console.log(array8);

/* //? ESERCIZIO 11
  Scrivi del codice per estrarre il massimo valore numerico da un array.
*/
//* SOLUZIONE 11
// let array9 = [76, 4, 86, 9020, 1, 45, 1070];
// let maxInt = array9[0];

// for (let i = 0; i < array9.length; i++) {
//   if (array9[i] > maxInt) {
//     maxInt = array9[i];
//   }
// }
// console.log(maxInt);

//TODO Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :)
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* //? ESERCIZIO 12
  Scrivi del codice per trovare il film più vecchio nell'array fornito.
*/
//* SOLUZIONE 12
// let elderMovie = movies[0];

// for (let index = 0; index < movies.length; index++) {
//   if (parseInt(movies[index].Year) < parseInt(elderMovie.Year)) {
//     elderMovie = movies[index];
//   }
// }
// console.log(elderMovie);

//! HO CREATO ANCHE UNA VARIANTE CON UN OGGETTO NON ANCORA TRATTATO (.find);
// for (let index = 0; index < movies.length; index++) {
//   // console.log(movies[index].Year); //! ho ottenuto la lista degli anni dei film nell'array	'movies';
//   elderMovie.push(movies[index].Year);
// }

// elderMovie = Math.min(...elderMovie);

// let elderMovieObj = movies.find(({ Year }) => Year == elderMovie);

// console.log(elderMovieObj);

/* //? ESERCIZIO 13
  Scrivi del codice per ottenere il numero di film contenuti nell'array fornito.
*/
//* SOLUZIONE 13
// let moviesNumber = movies.length;
// console.log(moviesNumber);

/* //? ESERCIZIO 14
  Scrivi del codice per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/
//* SOLUZIONE 14
// let movieTitles = [];

// for (let index = 0; index < movies.length; index++) {
//   let movie = movies[index];
//   let title = movie.Title;
//   movieTitles.push(title);
// }
// console.log(movieTitles);

/* //? ESERCIZIO 15
  Scrivi del codice per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/
//* SOLUZIONE 15
// let moviesThisMillennium = [];
// let currentMillennium = 2000;

// for (let index = 0; index < movies.length; index++) {
//   if (parseInt(movies[index].Year) >= currentMillennium) {
//     moviesThisMillennium.push(movies[index]);
//   }
// }

// console.log("This is the console.log for exercise 15");
// console.log(moviesThisMillennium);

/* //? ESERCIZIO 16
  Scrivi del codice per ottenere dall'array fornito il film con il seguente id.
*/
//* SOLUZIONE 16
// const id = "tt0355702";

// for (let n = 0; n < movies.length; n++) {
//   if (movies[n].imdbID === id) {
//     console.log(movies[n]);
//   }
// }

/* //? ESERCIZIO 17
  Scrivi del codice per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/
//* SOLUZIONE 17
// let years = 0;
// for (let i = 0; i < movies.length; i++) {
//   years += parseInt(movies[i].Year);
// }
// console.log(years);

/* //? ESERCIZIO 18
  Scrivi del codice per recuperare tutti i film dall'array fornito che contengono una parola fornita.
*/
//* SOLUZIONE 18
// let keyW = "Lord";
// let keyWmovies = [];

// for (let index = 0; index < movies.length; index++) {
//   if (movies[index].Title.includes(keyW)) {
//     console.log(movies[index]); //expected output: 10 objects;
//   } else {
//     console.log("qui non è presente la parola cercata"); //expected output: 4 objects;
//   }
// }
