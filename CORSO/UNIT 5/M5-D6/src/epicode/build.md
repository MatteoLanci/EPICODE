<!--! CONTINUIAMO A LAVORARE SU EPIBOOKS -->

<!--* 1. oggi devi modificare il layout dell'applicazione: crea due colonne, quella di sinistra continuerà a mostrare le copertine dei libri, mentre quella sulla destra mostrerà SEMPRE un componente CommentArea, infine rimuovi l'altra istanza di CommentArea, quella presente all'interno di SingleBook; -->

<!--* 2. Al caricamento dell'applicazione, CommentArea non riceverà più immediatamente un libro per effettuare la fetch delle recensioni; Fai in modo che CommentArea non provochi un crash dell'intera applicazione quando ancora non possiede dati da mostrare. (ricordi i valori iniziali dello stato?); -->

<!--* 3. Se non lo hai fatto, cambia il modo in cui viene salvato 'selected'. Non deve più essere salvato in SingleBook ma in LatestRelease e non deve più contenere un booleano ma l'asin del libro su cui si è cliccato. Per farlo, implementa lo stage lifting e modifica SingleBook di conseguenza; -->

<!--* 4. Passa il valore 'selected' sia a SIngleBook che a CommentArea. QUando cambia il valore di 'selected', CommentArea deve eseguire una nuova fetch con il nuovo valore di 'selected' e le recensioni nella colonna di destra devono riflettere il libro seleziona nella colonna di sinistra. Utilizza componentDidMount (o useEffect per le functional) e non dimenticarti di sfruttare le sue prop per non imbatterti in un loop infinito; -->

<!--* 5. Assicurati che l'asin del libro (nella prop 'selected') arrivi anche a AddCOmment in modo da mantenere aggiornata la sua proprietà elementId (necessaria per la richiesta POST) con il libro attualmente selezionato. -->

<!--? EXTRA -->

<!--* 1. Inserisci spinner e messaggi di errore -->

<!--* 2. Permettere all'applicazione di avere solo UN libro selezionato alla volta, cliccando su una card diversa, il libro precendete deve de-selezionarsi, e la nuova card selezionata deve aggiornare il suo stato; Questo richiederà di elevare la proprietà selected dallo stato di SingleBook, allo stato di BookList e il suo valore non sarà più true/false ma conterrà l'ASIN del libro attualmente selezionato. Per raggiungere questa funzionalità puoi seguire la strategia che hai appena messo in atto per il task precedente; -->

<!--* 3. Utilizza React.Context per condividere con l'intera applicazione una proprietà 'theme'. Il suo valore può essere light o dark e deve influenzare qualche proprietà visiva dei componenti principali (MyNavbar, BookList, SingleBook etc...) Fornisci anche un modo per cambiare valore alla proprietà theme (da light a dark e viceversa) e verifica che l'applicazione riceva il nuovo valore alla modifica dello stesso. -->

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
