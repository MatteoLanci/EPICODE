<!--! CONTINUIAMO A LAVORARE SU EPIBOOKS -->

<!--* 1. Sposta il campo di ricerca in un componente navbar posto in cima, dovrà sempre essere utilizzato per filtrare i libri della tua lista all'interno di LatestReleases; il tuo compito per oggi è di farlo usando la state elevation; -->

<!--* 2. Crea uno stato in App.jsx con proprietà chiamata query (che prenderà il valore di query nello stato di App.jsx) e una funzione per settare essa chiamata setQuery (che avrà come valore una funzione che prenda un parametro e cambi il valore di query nello stato di App.jsx nel valore di quel parametro); -->

<!--* 3. Crea un component MyNavbar, prendendo ad esempio la navbar di bootstrap. Aggiungi al suo interno un input di tipo TESTO. Renderizza poi il componente MyNavbar all'interno di App.jsx. -->

<!--* 4. Passa il valore di query dallo stato di App anche al componente LatestReleases, usando una prop con un nome a tua scelta; -->

<!--* 5. Usa questa prop di LatestReleases per filtrare i libri, Dovresti già avere questa funzionalità, dovrai solo cambiare l'origine della query, che non sarà più salvata nello stato ma proverrà dalle props. -->

<!--? EXTRA -->

<!-- 1. Inserisci spinner e messaggi di errore -->

<!-- 2. Permettere all'applicazione di avere solo UN libro selezionato alla volta, cliccando su una card diversa, il libro precendete deve de-selezionarsi, e la nuova card selezionata deve aggiornare il suo stato; Questo richiederà di elevare la proprietà selected dallo stato di SingleBook, allo stato di BookList e il suo valore non sarà più true/false ma conterrà l'ASIN del libro attualmente selezionato. Per raggiungere questa funzionalità puoi seguire la strategia che hai appena messo in atto per il task precedente; -->

<!-- 3. Utilizza React.Context per condividere con l'intera applicazione una proprietà 'theme'. Il suo valore può essere light o dark e deve influenzare qualche proprietà visiva dei componenti principali (MyNavbar, BookList, SingleBook etc...) Fornisci anche un modo per cambiare valore alla proprietà theme (da light a dark e viceversa) e verifica che l'applicazione riceva il nuovo valore alla modifica dello stesso. -->

<!--? DOCUMENTAZIONE API -->

endpoint per tutto il CRUD : https://striveschool-api.herokuapp.com/api/comments/

<!--! IMPORTANTE: -->

per utilizzare l'endpoint avrai bisogno di un header di autenticazione, puoi ottenerne uno insieme ad un esempio su come implementarlo su https://strive.school/studentlogin

<!--! API - struttura di un commento: -->

{
'comment': string //testo della recensione,
'rate': string //valore compreso tra 1 e 5,
'elementId': string //identificativo ASIN del libro
}

<!--! ATTENZIONE: -->

Facendo un'operazione di GET su https://striveschool-api.herokuapp.com/api/comments/ riceverai TUTTE le recensioni presenti sul DB.
Probabilmente quello che a te interessa maggiormente sono le recensioni relative ad un singolo libro, puoi ottenenrli aggiungendo ASIN del libro sul tuo endpoint
https://striveschool-api.herokuapp.com/api/comments/:elementId
