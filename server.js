const express = require('express');
const path = require('path');
const app = express();


const port = process.env.PORT || 8000; 
//setup static folder to serve static files
// app.use(express.static(path.join(__dirname, 'public')));

//routes    

let posts = [
    { id: 1, title: 'Best Post One'},
    { id: 2, title: 'Silver Post Two'},
    { id: 3, title: 'Post Three'},
];

// get all posts
app.get('/api/posts', (req, res) => {
    res.json(posts);
});

//get single post
app.get('/api/posts/:id', (req, res) => {
    const id = parseInt(req.params.id);
    res.json(posts.filter(post => post.id === id));
}); 

app.listen(port, () => console.log(`Server is running on port ${port}`));