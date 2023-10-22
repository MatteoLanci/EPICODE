<!--! CONTINUIAMO A LAVORARE SU EPIBOOKS -->

<!--* 1. Ricorda di installare il pacchetto npm: npm i react-router-dom; -->

<!--* 2. Crea una rotta per l'homepage dell'applicazione: dovrebbe puntare a '/' e caricare il componente LatestRelease; -->

<!--* 3. Crea un componente NotFound, dovrebbe venire renderizzato ogni volta che l'utente naviga su una rotta non gestita; -->

<!--* 4. Crea una rotta per un nuovo componente BookDetails. Questa rotta deve passare un parametro ASIN tramite un useParams; -->

<!--* 5. Aggiungi un pulsante in ogni SingleBook per poter navigare a questa nuova rotta dinamica e caricare BookDetails; -->

<!--* 6. Crea infine il componente BookDetails, che recupererà il parametro ASIN dall'url e caricherà i dettagli e le recensioni del libro su cui si è cliccato. Per recuperare le informazioni del libro selezionato, usa la state elevation. -->

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
