//* Introduzione a JavaScript:

//? 1. Cos'è un console.log (Spiegazione non tecnica)
// Stampa il contenuto (in valore) dell'argomento, sulla console del browser!
// console.log("Hello World!");

//? 2. Commenti in JavaScript (single-line - multi-line)
// Questo è un commento single-line!
/* Questo è un 
commento multi-
riga! */

//? 3. Scegliere un nome per una variabile (Convenzioni e camelCase)
// Discorso approfondito nelle slides!

//? 4. Dichiarare una variabile
// let myFirstVar;

// console.log(myFirstVar); // Mi aspetto undefined..
// let myFirstVar = 10;

//? 5. Riassegnare una variabile
// myFirstVar = "Pippo";

//? 6. "Consoleloggare" una variabile
// console.log(myFirstVar);

//? 7. Prepariamo i biscotti! Riempiamo le 3 variabili (ciotole piccole) con i rispettivi ingredienti
let butter = 120;
let sugar = 80;
let flour = 260;

//? 8. Aggiungiamo il valore (il contenuto..) di 2 variabili ingrediente in una terza variabile ciotola media
let mediumBowl = butter + sugar; // Valore atteso: 200
// console.log(mediumBowl);

//? 9. Aggiungiamo il valore (il contenuto..) della 3° variabile ingrediente alla variabile ciotola media di prima
// mediumBowl = mediumBowl + flour; // Valore atteso: 460
// console.log(mediumBowl);

//? 10. Forma compatta per fare la stessa cosa dello step 10
mediumBowl += flour;
console.log(mediumBowl);