<!--! UPLOAD DI IMMAGINI -->

Il backend dovrebbe includere queste nuove rotte:

<!--* 1. PATCH /authors/:authorId/avatar => carica un'immagine per l'autore specificato e salva l'URL creato da cloudinary nel DB; -->

<!--todo 2. PATCH /posts/:postId/cover => carica un'immagine per il post specificato dall'id. Salva l'URL creato da Cloudinary nel post corrispondente -->

<!--? EXTRA (facoltativo) -->

<!--todo Invia un'email all'autore quando pubblica un nuovo post e quando un nuovo autore si registra sulla piattaforma -->

<!--! GESTIONE DEGLI ACCESSI -->

<!--* Aggiungi la Token Based Authentication al tuo progetto precedente -->

<!--* Tutti gli endpoint (tranne /login) devono essere accessibili solo tramite token -->

<!--* Collega il tuo API al frontend -->

<!--* Crea le pagine di registrazione e Login per il progetto -->

<!--* Dopo un login effettuato con successo, memorizza il token di accesso nel localStorage e redirezione l'utente alla homepage -->

<!--* usa il Token ovunque sia necessario -->

<!--! COMPITO ENDPOINT -->

Aggiungi i seguenti endpoint al backend:

<!--* GET /login => restituisce token di accesso -->

<!--* GET /me => restitusce l'utente collegato al token di accesso -->

<!--* modifica POST/authors => deve creare un nuovo utente valido -->

<!--! COMPITO GESTIONE DEGLI ACCESSI -->

<!--* Usa la giusta Passport Strategy per connettere Github al tuo backend -->

<!--* Abilita il login con Github nella tua applicazione, creando gli endpoint necessari -->

<!--* Integra ovunque lo standard JWT -->

<!--? EXTRA: -->

    <!--* Aggiungi il pulsante per il login con GitHub nell'applicazione -->
