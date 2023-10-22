const posts = [
    { title: "Post One", body: "Body of first post..." },
    { title: "Post Two", body: "Body of second post..." },
    { title: "Post Three", body: "Body of third post..." }
];

const myPostsBox = document.getElementById("posts-box");

function getPosts() {
    setTimeout(() => {
        for (const post of posts) {
            let myLi = document.createElement("li");
            myLi.innerText = post.title + " - " + post.body;
            myPostsBox.appendChild(myLi);
        }
    }, 1000);
}

function addPost(post) {
    // Utilizzo una promise con resolve & reject:
    return new Promise((resolve, reject) => {
        // Simulo un comportamento di stallo con setTimeout (simil endpoint delay):
        setTimeout(() => {
            // Aggiungo il post nell'array dei posts:
            posts.push(post);
            // Gestione statica dell'errore (nel mondo reale, potrebbe essere uno status code dopo una call API):
            const error = null;
            // Entro nell'if se non ho errori (Promise RESOLVED):
            if(!error) {
                // Invio posts come argomento della arrow function di .then:
                resolve(posts);
            // Entro nell'else se ho errori (Promise REJECTED):
            } else {
                // Invio la stringa di errore come argomento della arrow function di .catch:
                reject("Houston, I have a problem!");
            }
        }, 2000);
    });
}

addPost({ title: "Post Four", body: "Body of fourth post..." })
// Metodo lanciato se la promise è RESOLVED:
.then((posts) => console.log(posts))
// Metodo lanciato se la promise è REJECTED:
.catch((error) => console.log(error));

console.log("Sono a riga x!");
console.log("Sono a riga y!");