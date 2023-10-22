/* //?ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

//* RISPOSTA ESERCIZIO 1
// let num1 = 5;
// let num2 = 10;

// if (num1 > num2) {
//   console.log(num1 + ' è il numero intero più grande');
// } else {
//   console.log(num2 + ' è il numero intero più grande');
// }

/* //?ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

//* RISPOSTA ESERCIZIO 2
// let num = 7;
// if (num != 5) {
//   console.log ("not equal");
// } else {
//   console.log ("equal");
// }

/* //?ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisible by 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

//* RISPOSTA ESERCIZIO 3
// let num = 25;

// if (num % 5 === 0) {
//   console.log ("divisible by 5");
// } else {
//   console.log ("not divisible by 5");
// }

/* //?ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

//* RISPOSTA ESERCIZIO 4
// let num1 = 16, num2 = 8;

// if (num2 === 8 || num1 === 8 || num1 + num2 === 8 || num1-num2 === 8 || num2-num1===8) {
//   console.log ("one of two conditions is true");
// } else {
//   console.log ("none of two conditions is true");
// }

/* //?ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

//* RISPOSTA ESERCIZIO 5
// let totalShoppingCart = 50;
// let shippingCost = 10;
// let finalTotal;

// if (totalShoppingCart <= 50) {
//   finalTotal = totalShoppingCart + shippingCost;
// } else {
//   finalTotal = totalShoppingCart;
// }
// console.log ('You have to pay ' + finalTotal + ',00$');

/* //?ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

//* RISPOSTA ESERCIZIO 6
// let totalShoppingCart = 60;
// let shippingCost = 10;
// let finalTotal;
// let discountBlackFriday = 0.8;
// let blackFridayAlert = " Hey it's Black Friday! A 20% coupon has been applied to your shopping cart!"
// let noChargesAlert = " Your shipping charges have been cancelled since your order is greater than 50,00$"

// if (totalShoppingCart <= 50) {
//   finalTotal = ((totalShoppingCart * discountBlackFriday) + shippingCost).toFixed(0);
//   console.log ("Your total is " + finalTotal + ",00$." + blackFridayAlert);

// } else {
//   finalTotal = (totalShoppingCart * discountBlackFriday).toFixed(0);
//   console.log ("Your total is " + finalTotal + ",00$." + blackFridayAlert + noChargesAlert);
// }

/* //?ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

//* RISPOSTA ESERCIZIO 7
// let num1 = 150;
// let num2 = 100;
// let num3 = 500;
// let min, mid, max;

// if (num1 > num2 && num1 > num3) {
//   max = num1;
//   if (num2 > num3) {
//     mid = num2;
//     min = num3;
//   } else {
//     mid = num3;
//     min = num2;
//   }
// } else if (num2 > num1 && num2 > num3) {
//   max = num2;
//   if (num1 > num3) {
//     mid = num1;
//     min = num3;
//   } else {
//     mid = num3;
//     min = num1;
//   }
// } else {
//   max = num3;
//   if (num2 > num1){
//     mid = num2;
//     min = num1;
//   } else{
//     mid = num1;
//     min = num2;
//   }
// }
// console.log(max, mid, min);
  
/* //?ESERCIZIO 8
  Crea un algoritmo per verificare che un numero fornito sia un intero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

//* RISPOSTA ESERCIZIO 8
//! MATTEO - non avendo capito bene cosa chiede l'esercizio, utilizzo 'typeof' per determinare che tipo di variabile si tratta; utilizzo anche 'Number.isInteger' per determinare se il valore della variabile è o meno un numero intero con un output booleano (true || false) essendo l'unico metodo che mi è venuto in mente per verificare se un numero è intero oppure no.

// let num1 = 78;
// let num2 = '78';
// let num3 = 78.5;

// Number.isInteger(num1); console.log(Number.isInteger(num1)); //output: true;
// Number.isInteger(num2); console.log(Number.isInteger(num2)); //output: false;
// Number.isInteger(num3); console.log(Number.isInteger(num3)); //output: false;

// console.log(typeof num1); //output: number;
// console.log(typeof num2); //output: string;
// console.log(typeof num3); //output: number;

/* //?ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

//* RISPOSTA ESERCIZIO 9
// let num = 2;

// if (num % 2 == 0) {
//   console.log("Pari");
// } else {
//   console.log("Dispari");
// }

/* //?ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

//* RISPOSTA ESERCIZIO 10
// let val = 7;

//   if (val < 5) {
//       console.log("Meno di 5");
//     } else if (val < 10) {
//       console.log("Meno di 10");
//     } else {
//       console.log("Uguale a 10 o maggiore");
//     }

/* //?ESERCIZIO 11
  Crea un blocco condizionale if/else annidato su più livelli per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

//* RISPOSTA ESERCIZIO 11
// let num = 9.8;

// if (num < 5) {
//   console.log("Tiny"); //output: num = tra 0.1 e 4.9
// } else if (num < 10) {
//   console.log("Small"); //output: num = tra 5 e 9.9
// } else if (num < 15) {
//   console.log ("Medium"); //output: num = tra 10 e 14.9
// } else if (num < 20) {
//   console.log ("Large"); //output: num = tra 15 e 19.9
// } else if (num >= 20) {
//   console.log("Huge"); //output: num = 20 o +
// }

/*  //?ESERCIZIO 12
  Usa un operatore ternario per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile chiamata isMale.
*/

//* RISPOSTA ESERCIZIO 12
// let isMale;
// let gender = "male";

// if (gender === "male"){
//   isMale = true;
// } else {
//   isMale = false;
// }
// console.log (isMale);

/* //?ESERCIZIO 13
  Mostra i numeri da 0 a 5 (incluso) in ordine ascendente utilizzando un ciclo while.
*/

//* RISPOSTA ESERCIZIO 13
// let n = 0;

// while (n < 6) {
//   console.log (n);
//   n++;
// }

/* //?ESERCIZIO 14
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente utilizzando un ciclo for.
*/

//* RISPOSTA ESERCIZIO 14
// for (let n = 0; n < 11; n++) {
//   console.log (n);
// }



/* //?ESERCIZIO 15
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8.
*/

//* RISPOSTA ESERCIZIO 15
// for (let n = 0; n < 11; n++) {
//   if (n === 3 || n === 8) {
//     continue;
//   }
//   console.log (n);
// }

/* //?ESERCIZIO 16
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

//* RISPOSTA ESERCIZIO 16
// for (let n = 0; n < 16; n++) {
//   console.log (n);
//   if (n % 2 === 0) {
//     console.log ('pari');
//   } else {
//     console.log ('dispari');
//   }
// }

/* //?ESERCIZIO 17
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3, stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

//* RISPOSTA ESERCIZIO 17
// let n = 0;

// for (n = 0; n < 101; n++) {
//   if (n  % 15 == 0) {
//     console.log ('FizzBuzz');
//   } else if (n % 3 == 0) {
//     console.log ('Fizz');
//   } else if (n % 5 == 0) {
//     console.log('Buzz');
//   } else {
//     console.log (n);
//   }
// }


/* //?ESERCIZIO 18
  Scrivi un algoritmo per controllare il giorno della settimana. Usa uno switch-case sulla variabile "day", che può avere un valore da 1 a 7.
  Ad esempio, se il valore di "day" è 1, stampa in console "Lunedì"; se il valore fosse 3, in console dovrebbe comparire "Mercoledì".
*/

//* RISPOSTA ESERCIZIO 18
// let day = 5; //output = "Tuesday"

// switch (day) {
//   case 1 :
//   day = "Monday"
//   break;
  
//   case 2 :
//     day = "Tuesday"
//     break;

//   case 3 :
//     day = "Wednesday"
//     break;

//   case 4 :
//     day = "Thursday"
//     break;

//   case 5 :
//     day = "Friday"
//     break;

//   case 6 :
//     day = "Saturday"
//     break;

//   case 7 :
//     day = "Sunday"
//     break;
// }
// console.log(day);
