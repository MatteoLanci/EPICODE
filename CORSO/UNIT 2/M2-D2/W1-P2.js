/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

// I datatypes in JS descrivono i differenti tipi di dati utilizzabili nel codice e servono per creare variabili e funzioni.
// Esistono diversi datatypes:
// - Stringa: rappresenta valori di testo, sempre racchiusi tra apici singoli o doppi;
// - Numero: rappresenta valori numerici interi o decimali;
// - Booleano: rappresenta valori logici, possono essere VERI o FALSI;
// - Null: rappresenta intenzionalmente l'assenza di un valore;
// - Undefined : rappresenta una variabile dichiarata ma a cui non è stato assegnato un valore;
// - Oggetti: rappresentano un insieme di valori, dati o funzioni assegnati ad una variabile;
 

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

// In Javascript un oggetto è essenzialmente un contenitore di proprietà o elementi composti da un nome ed un valore, ad esempio:

// const meStesso = {
//     nome: "Matteo";
//     cognome: "Lanci";
// };

// Gli oggetti in JS sono elementi dinamici il che implica che possono essere modificati. Un'altra proprietà fondamentale degli oggetti è che possono essere annidati, ovvero che le proprietà possono essere loro stesse degli oggetti che contengono in modo annidato le sue proprietà.

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

// let x = 12;

// sum = (x + 20);

// console.log(sum);


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

// let x = 12;

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

// let name = "Matteo";

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

// let x = 12;

// sub = (4 - x);

// console.log(sub);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

// let name1 = "john";
// let name2 = "John";

// diseguality = name1 !== name2; /* output: true */
// diseguality = name1 === name2; /* output: false */
// diseguality = name1 === name2.toLowerCase(); /* output: true */

// console.log(diseguality);
