//! Spotify WebApp (Marco H.L.)

//? [X] 1. Raw structure
// 1. Make an API call to https://striveschool-api.herokuapp.com/api/deezer/search?q=my_search with Postman
// 2. Make an API call to endpoint above with fetch, fill song's details into a proper template, then inject it into results box.
//? [X] 2. Refactored code
// - search fn (async)
// - cycle res fn
// - create template and inject fn
//? [X] 3. Query params for dedicated artist page
// - follow 7 steps (in italian)!!
//? [X] 4. Use localStorage to save user name
// - .setItem("var_name", value) | .getItem("var_name")
//? [X] 5. Refactor all promises code with async-await
// - Ex. fetch("url").then(res => res.json()) -> const res = await fetch("url");
// - Note: promises need to be inside a fn!

// URL endpoint for songs:
const endpointUrl =
  "https://striveschool-api.herokuapp.com/api/deezer/search?q=";
// URL endpoint for artists:
const endpointArtistUrl =
  "https://striveschool-api.herokuapp.com/api/deezer/artist/";
// Box with results (songs):
const resultBox = document.getElementById("searchSection");
// Box with results (artist):
const resultArtistBox = document.getElementById("artistSection");
// Search Button GO:
const searchBtn = document.getElementById("button-search");
// Spinner animation element:
const spinner = document.getElementById("spinner");
// User greeting elements:
const userBtn = document.getElementById("set-user");
const userInput = document.getElementById("username");
const userBox = document.getElementById("user-box");

// Questo è il POTENZIALE valore assegnato dall'utente alla chiave user di localStorage...
const userName = localStorage.getItem("user");
// Questo è il nome EFFETTIVO che compare accanto al Benvenuto nella nostra WebApp!
const effName = userName ? userName : "Utente";

userBox.innerText = effName;

// ternary operator: condition ? value_if_true : value_if_false;

userBtn.addEventListener("click", () => {
  let inputValue = userInput.value;
  localStorage.setItem("user", inputValue);
  userBox.innerText = inputValue;
});

//TODO1: Implementa benvenuto personalizzato (localStorage)! FATTO!
// 1. Verifico se nell'URL sono presenti query parameters:
if (window.location.search) {
  // 2. Avvio animazione spinner togliendo d-none nativo:
  spinner.classList.toggle("d-none");
  // console.log("There's a query parameter:", window.location.search);
  // 3. Catturo i parametri disponibili sull'URL:
  const params = new URLSearchParams(window.location.search);
  // 4. Isolo il valore del parametro (es. ?q=123&r=543 -> 123)
  const query = params.get("q"); // Ottenete l'id come number/string

  // Create Read Update Delete
  // 5. Eseguo AJAX verso l'endpoint dedicato agli artisti endpointArtistUrl (questo accetta come slug l'id dell'artista da cercare che sarebbe il valore che ho salvato in query):
  fetch(endpointArtistUrl + query)
    .then((res) => res.json()) // Promise
    // 6. Lancio una funzione ad hoc per costruire il template del nuovo oggetto artista:
    .then((artist) => createArtistTemplate(artist))
    .catch((error) => {
      console.log("Attention! Error description: " + error);
      spinner.classList.toggle("d-none");
    });
}

//TODO2: Rimodula la funzione con async-await! FATTO!
// Gets search input value and perform an AJAX call with proper q parameter:
async function makeSearch() {
  let searchValue = document.getElementById("searchField").value;
  spinner.classList.toggle("d-none");

  try {
    // Codice (asincrono) con promise(s):
    const res = await fetch(endpointUrl + searchValue);
    const json = await res.json();
    cycleResponse(json.data);
  } catch (error) {
    // Gestione errore in caso di promise rejected!
    console.log("Attention! Error description: " + error);
    spinner.classList.toggle("d-none");
  }
  // Old promises approach:
  // fetch(endpointUrl + searchValue)
  //   .then((res) => res.json()) // Promise
  //   .then((json) => cycleResponse(json.data))
  //   .catch((error) => {
  //     console.log("Attention! Error description: " + error);
  //     spinner.classList.toggle("d-none");
  //   });
}

// Produces a createTemplate fn call for each song in the array:
function cycleResponse(jsonData) {
  // console.log(jsonData);
  resultBox.innerHTML = "";
  jsonData.forEach((song) => {
    createTemplate(song);
  });
  document.getElementById("searchField").value = "";
  spinner.classList.toggle("d-none");
}

// Takes song data and spread them into the template, then inject it into results box:
function createTemplate(song) {
  let songBox = document.createElement("div");
  songBox.classList.add("text-light", "p-3", "text-center");
  let img = document.createElement("img");
  img.src = song.artist.picture_medium;
  let title = document.createElement("h6");
  title.classList.add("mt-2", "mb-0");
  title.innerText = song.title;
  let artist = document.createElement("a");
  artist.href = `index.html?q=${song.artist.id}`;
  artist.innerText = song.artist.name;

  // Genera nel DOM (con contenuti dinamici) questo:
  // <div class="text-light p-3 text-center">
  //     <img src="" alt="">
  //     <h6 class="mt-2 mb-0"></h6>
  //     <a href="index.html?q=[song.artist.id]"></a>
  // </div>

  songBox.appendChild(img);
  songBox.appendChild(title);
  songBox.appendChild(artist);

  resultBox.appendChild(songBox);
}

// 7. Questa funzione fa esattamente quello che faceva createTemplate, ma è particolarizzata per costruire un template per l'artista da iniettare in un box risultati apposito (div#artistSection):
function createArtistTemplate(artist) {
  let artistBox = document.createElement("div");
  artistBox.classList.add("text-light", "text-center");
  let artistImg = document.createElement("img");
  artistImg.src = artist.picture_big;
  let artistName = document.createElement("h2");
  artistName.innerText = artist.name;
  let fansNum = document.createElement("div");
  fansNum.classList.add("mt-2");
  fansNum.innerText = `${artist.nb_fan} followers`;
  let albumNum = document.createElement("div");
  albumNum.innerText = `${artist.nb_album} albums available`;

  artistBox.appendChild(artistName);
  artistBox.appendChild(artistImg);
  artistBox.appendChild(fansNum);
  artistBox.appendChild(albumNum);

  resultArtistBox.appendChild(artistBox);
  spinner.classList.toggle("d-none");
}
