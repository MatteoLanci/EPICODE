// Carrello e sconti particolari - BuildTime #2

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
*/

let user = [
  {
    name: "Marco",
    lastName: "Rossi",
    isAmbassador: true,
  },

  {
    name: "Paul",
    lastName: "Flynn",
    isAmbassador: false,
  },

  {
    name: "Amy",
    lastName: "Reed",
    isAmbassador: false,
  },
];

const prices = [34, 5, 2]; //! CHANGE ARRAY VALUES IN ORDER TO CHANGE SHOPPING CART VALUE AND BE ABLE TO AVOID SHIPPING COSTS;
const shippingCost = 50;
const minDiscount = 100;
let totalCost;
let ambassadorDiscount = 0.7;
let shoppingCart = 0;

let loggedUser = user[2]; //! CHANGE NUMBER INSIDE '[]' IN ORDER TO SWITCH USER;
console.log(`${loggedUser.name} ${loggedUser.lastName} : login verified`);

for (let i = 0; i < prices.length; i++) {
  shoppingCart += prices[i];
}
console.log(`${shoppingCart} : this is the value of the cart`);

let n = 0;

if (shoppingCart > minDiscount && loggedUser.isAmbassador) {
  totalCost = (shoppingCart * ambassadorDiscount).toFixed(2); //AMBASSADOR VERIFIED, NO SHIPPING COSTS;
} else if (shoppingCart <= minDiscount && loggedUser.isAmbassador) {
  totalCost = (shoppingCart * ambassadorDiscount + shippingCost).toFixed(2); //AMBASSADOR VERIFIED + SHIPPING COSTS;
} else if (shoppingCart > minDiscount && !loggedUser.isAmbassador) {
  totalCost = shoppingCart.toFixed(2); //NOT AMBASSADOR, NO SHIPPING COSTS;
} else {
  totalCost = (shoppingCart + shippingCost).toFixed(2); //NOT AMBASSADOR + SHIPPING COSTS;
}
console.log(
  `You're almost there ${loggedUser.name}! your purchase amount is ${totalCost} $USD. Let's proceed to checkout`
);
