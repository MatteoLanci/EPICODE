//!EXTRA #1--------------------------------------------------------------------------------->
//* Crea con JavaScript la funzionalità per rimuovere il link "twitter" sotto alla sezione "Altro" nell'elemento "aside". Deve avvenire al caricamento della pagina, automaticamente.
let twitterLink = document.getElementsByClassName("list-unstyled")[1];
// console.log(twitterLink);

twitterLink = twitterLink.children[1].innerHTML = "";
// console.log(twitterLink);

//!EXTRA #2--------------------------------------------------------------------------------->
//* Crea con JavaScript la funzionalità per rimuovere il corrispondente elemento padre dal DOM cliccando sul link "Continua a leggere".
let keepReadSection1 = document.getElementsByClassName("lead mb-0")[0];
let keepRead1 = keepReadSection1.children[0];
// console.log(keepReadSection1);
// console.log(keepRead1);

let keepReadSection2 =
  document.getElementsByClassName("col-md-6")[1].children[0];
let keepRead2 = keepReadSection2.children[0].children[4];
// console.log(keepReadSection2);
// console.log(keepRead2);

let keepReadSection3 =
  document.getElementsByClassName("col-md-6")[2].children[0];
let keepRead3 = keepReadSection3.children[0].children[4];
// console.log(keepReadSection3);
// console.log(keepRead3);

keepRead1.addEventListener("click", () => {
  keepReadSection1.remove();
});

keepRead2.addEventListener("click", () => {
  keepReadSection2.remove();
});

keepRead3.addEventListener("click", () => {
  keepReadSection3.remove();
});
//!EXTRA #3--------------------------------------------------------------------------------->
//* Crea con JavaScript la funzionalità per creare un alert col nome dell'autore ogni volta che il cursore passa sopra l'autore del post.
let blogAuthor = document.getElementsByClassName("blog-post-meta");
let arr = [];
// console.log(blogAuthor);

for (let i = 0; i < blogAuthor.length; i++) {
  arr.push(blogAuthor[i].lastElementChild);
}
// console.log(arr);

for (let i = 0; i < arr.length; i++) {
  arr[i].addEventListener("mouseover", () => {
    alert(`L'autore del blog post è ${arr[i].innerText}`);
  });
}
