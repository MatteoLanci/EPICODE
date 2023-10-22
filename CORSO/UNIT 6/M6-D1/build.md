<!--todo IL NOSTRO PRIMO API -->

Strive Blog

1. Sei responsabile della creazione di una serie di WebAPI per l'applicazione Strive Blog

2. (Ti abbiamo fornito un frontend in React per semplificare il lavoro.) => Non servirà a meno che non eseguirai gli esercizi EXTRA(facoltativi)

3. Oggi ti occuperai di creare e visualizzare gli autori dei blog

<!--! STRIVE BLOG - STRUTTURA -->

\_id //generato da mongo
nome //stringa
cognome //stringa
email //stringa
data di nascita //stringa
avatar //stringa

<!--! ESERCIZI -->

<!--? STRIVE BLOG - ROTTE -->

<!--* GET /authors => ritorna la lista degli autori -->
<!--* GET /authors/123 => ritorna il singolo autore -->
<!--* POST /authors => crea un nuovo autore -->

<!--? STRIVE BLOG - EXTRA FACOLTATIVI (per ora) -->

<!--* PUT /authors/123 => modifica l'autore con l'id associato -->
<!--* DELETE /authors/123 => cancella l'autore con l'id associato -->

<!--* Connessione del backend al frontend: -->

    Nota: Se vuoi connettere il b.e. al f.e. oggi dovrai installare il pacchetto 'cors' con il cmd 'npm i cors'

    Dovrai quindi importarlo con un import statement

    Puoi usare cors col seguente cmd 'server.use(cors())'

    Impareremo cos'è CORS prossimamente
