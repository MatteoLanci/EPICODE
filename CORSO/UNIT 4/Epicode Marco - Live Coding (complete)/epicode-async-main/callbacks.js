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

function addPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

// getPosts viene inviato come "costrutto di funzione" ad addPost tramite l'argomento callback.
addPost({ title: "Post Four", body: "Body of fourth post..." }, getPosts);
// getPosts();