const rootDiv = document.getElementById('root');

function renderSignUp() {
    rootDiv.innerHTML = `
    <style>buttom { background-color: #04AA6D; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    }
    </style>

    <h1>Sign Up</h1>
    <form id="signupForm">
        <label for="name">Name:</label>
        <input type="text" id="name" placeholder="Enter your name"><br>
        <label for="email">Email:</label>
        <input type="text" id="email" placeholder="Enter your email"><br>
        <label for="password">Password:</label>
        <input type="text" id="password" placeholder="Enter your password"><br>
        <buttom type="buttom" onclick="handleSignUp()">Sign Up</buttom>
        </form>
    `;
}

renderSignUp()

let userName='';

function handleSignUp(){
    const nameInput = document.getElementById('name').value;
    const emailInput = document.getElementById('email').value;
    const passwordInput = document.getElementById('password').value;
    if (nameInput && emailInput && passwordInput) {
        userName = nameInput;
        renderHomePage();
    } else{
        alert('please fill out all fields');
    }
}

function renderHomePage(){
    rootDiv.innerHTML = `
        <style>buttom { background-color: #04AA6D; /* Green */
         border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        }
        </style>

        <h1>Welcome, ${userName}!<h1>
        <h2>Create a Post</h2>
        <textarea id="postContent" placeholder="What's on your mind?"></textarea><br>
        <buttom type="buttom" onclick="handleCreatePost()">Post</buttom>
        <h3>Your Posts</h3>
        <ul id="postList"></ul>
    `;
}

let posts = [];
function handleCreatePost() {
    const postContent = document.getElementById('postContent').value;
    
    if (postContent) {
        posts.push(postContent); // Add the new post to the posts array
        renderPostList();        // Update the displayed post list
    } else {
        alert('Post content cannot be empty');
    }
}


function renderPostList() {
    const postListElement = document.getElementById('postList');
    postListElement.innerHTML = '';

    posts.forEach((post) => {
        const postItem = document.createElement('li');
        postItem.textContent = post;
        postListElement.appendChild(postItem);
    });
    
}
