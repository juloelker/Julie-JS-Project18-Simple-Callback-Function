const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
];

//Synchronous, output is only Post One and Post Two
//because getPosts finishes before createPost could
//create the 3rd one.
/*
function createPost(post) {
  setTimeout(function () {
    posts.push(post);
  }, 2000);
}

function getPosts() {
  setTimeout(function () {
    let output = "";
    posts.forEach(function (post) {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({ title: "Post Three", body: "Julie, this is Post 3." });

getPosts();
*/

/*Restructure the above with the callback argument, which then 
passes in the getPosts function to createPost.
Now createPost will take in the new post data, create it, and use the 
callback to get the existing posts along with the new one.
The callback argument is often written as just cb.*/

function createPost(post, callback) {
  setTimeout(function () {
    posts.push(post);
    callback();
  }, 2000);
}

function getPosts() {
  setTimeout(function () {
    let output = "";
    posts.forEach(function (post) {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({ title: "Post Three", body: "Julie, this is Post 3." }, getPosts);
