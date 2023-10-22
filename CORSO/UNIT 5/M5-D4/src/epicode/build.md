<!--! CONTINUIAMO A LAVORARE SU EPIBOOKS -->

<!--* 1. Se ancora non lo hai fatto, crea lo stato all'interno di SingleBook e inserisci una proprietà booleana di nome selected, cliccando sulla copertina di un libro, la proprietà selected deve cambiare valore. Se Selected ha un valore TRUE, la copertina del libro deve aggiungere un bordo rosso; -->

<!--* 2. Inserisci le operazioni GET e POST in modo che l'utente possa leggere e creare recensioni sui libri; -->

Troverai le informazioni sull'API di seguito:

<!--* 3. Crea un componente CommentArea e incorporalo nel componente SingleBook. Quando un utente clicca su SingleBook, il componente CommentArea deve venire renderizzato (suggerimento: puoi usare l'operatore && e la proprietà 'selected') -->

<!--* 4. CommentArea deve eseguire una fetch e salvare tutte le recensioni del libro all'interno del suo stato. Deve inoltre renderizzare altri due componenti dentro di sè: CommentList e AddComment; -->

<!--* 5. CommentList riceverà la lista di recensioni da CommentArea con una prop, e dovrà renderizzare la lista utilizzando un componente SingleComment; -->

<!--* 6. AddComment conterrà un form per raccogliere il testo della recensione e la valutazione da 1 a 5, una volta raccolti i dati, tramite un pulsante (onClick) verrà effettuata una chiamata POST per inviare la recensione alle API. -->

<!--? EXTRA -->

<!--* 1. Inserisci la possibilità di eseguire un'operazione di DELETE; -->

<!--* 2. Inserisci la possibilità di eseguire un'operazione di PUT; -->

3. Inserisci spinner e messaggi di errore

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
