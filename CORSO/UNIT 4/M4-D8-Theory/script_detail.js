// Variabili globali:
// Recupero id dalla query string (id):
const activeQuery = new URLSearchParams(window.location.search);
const activeId = activeQuery.get("id");
const apiUrl = "https://striveschool-api.herokuapp.com/api/agenda/";

const nameInput = document.getElementById("name-field");
const descInput = document.getElementById("desc-field");
const priceInput = document.getElementById("price-field");
const emptyFields = document.getElementById("empty-fields");
const editDone = document.getElementById("edit-done");
const editBtn = document.getElementById("edit-btn");

// Recupero il singolo post al caricamento della pagina:
window.onload = showPost();

async function showPost() {
    const res = await fetch(apiUrl + activeId);
    const json = await res.json();
    // Riempio i campi degli input associati al post:
    nameInput.value = json.name;
    descInput.value = json.description;
    priceInput.value = json.price;
}

// Funzione per effettuare la modifica del post:
async function editPost() {
    if(nameInput.value && descInput.value && priceInput.value) {
        // Payload da fornire (con i dati presenti nei 3 inputs al momento del click):
        const newPayload = {
            "name": nameInput.value,
            "description": descInput.value,
            "price": priceInput.value,
            "time": new Date()
        };

        try {
            const editRes = await fetch(apiUrl + activeId, {
                "method" : "PUT",
                "headers": {
                    "Content-Type": "application/json"
                },
                "body": JSON.stringify(newPayload)
            });
            // Alert di avvenuta modifica:
            editDone.classList.toggle("d-none");
            setTimeout(() => {
                editDone.classList.toggle("d-none");
            }, 5000);
        } catch(error) {
            console.log(error);
        }
    } else {
        // Alert di mancato riempimento di tutti i campi necessari (validation):
        emptyFields.classList.toggle("d-none");
        setTimeout(() => {
            emptyFields.classList.toggle("d-none");
        }, 5000);
    }

}
