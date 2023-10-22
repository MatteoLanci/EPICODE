<!--todo IL NOSTRO PRIMO API - Capitolo II-->

Strive Blog

<!--* 1. Se non lo hai fatto, implementa le funzionalità di PUT e DELETE per gli autori; -->

<!--* 2. Sviluppa le operazioni CRUD per i blog post (struttura di seguito); -->

<!--* 3. La persistenza dei dati deve essere garantita dall'uso di MongoDB; -->

<!--todo 4. Le query e i body dovranno essere validati; -->

<!--!NOTA -->

Ricorda di installare il pacchetto 'cors' con 'npm i cors' e di usarlo con 'server.use(cors())' se vuoi collegare be al fe

<!--!STRUTTURA DI BLOG POST -->

\_id //server generated;
category //categoria del post,
title //titolo del post,
cover //link dell'img,
readTime:{
value //numero,
unit //unità di misura
},
author:{
name //nome dell'autore,
avatar //img dell'autore
},
content //HTML dell'articolo

<!--!STRIVE BLOG - ROTTE -->

<!--* GET /blogPosts => ritorna una lista di blog post -->

<!--* GET /blogPosts/123 => ritorna un singolo blog post -->

<!--* POST /blogPosts => crea un nuovo blog post -->

<!--* PATCH /blogPosts/123 => modifica il blog post con l'id associato -->

<!--* DELETE /blogPost/123 => cancella il blog post con l'id associato -->

<!--? STRIVE BLOG - EXTRA (facoltativi, per ora) -->

<!--* 1. Fare la POST di un articolo dal form di aggiunta articolo; -->

<!--* 2. Fare la fetch dei blogPosts presenti nel DB e visualizzarli nella homepage; -->

<!--* 3. GET /authors/:id/blogPosts/ => ricevi tutti i blog post di uno specifico autore dal corrispondente ID; -->

<!--* 4. GET /blogPosts?title=whatever => filtra i blog post e ricevi l'unico che corrisponda alla condizione di ricerca (es: titolo contiene 'whatever'); -->

<!--* 5. Aggiungi la funzionalità di ricerca dei post nel frontend; -->
