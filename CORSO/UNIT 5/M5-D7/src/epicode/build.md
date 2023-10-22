<!--! CONTINUIAMO A LAVORARE SU EPIBOOKS -->

<!--* 1. Trasforma qualche componente classe in componente a funzione; -->

<!--* 2. Inizia da quelli più semplici e poi continua con quelli più complessi; -->

<!--* 3. Assicurati di aver fatto un commit + push su github prima di iniziare, in modo che se qualcosa dovesse andare storto tu possa tornare indietro; -->

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
