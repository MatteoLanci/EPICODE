// Realizzare una mini WebApp con cui poter creare una lista della spesa. 
// Un input consente di scrivere il nome del prodotto ed un bottone produce l'inserimento in una lista numerata. 
// EXTRA: Rendere possibile la rimozione di un prodotto al click su di esso.

const myCart = document.getElementById("my-cart");
const productItem = document.getElementById("product-item");

function addProduct() {
    let inputContent = productItem.value;
    let newLi = document.createElement("li");
    newLi.innerText = inputContent;
    newLi.addEventListener("click", (event) => {
        event.target.remove();
    });
    myCart.appendChild(newLi);
    productItem.value = "";
}

// EXTRA: Produrre la cancellazione di un elemento li su una (X) rossa, piuttosto che su tutto il suo "corpo".