const express = require('express');
const path = require('path');
const app = express();


const port = process.env.PORT || 8000; 
//setup static folder to serve static files
// app.use(express.static(path.join(__dirname, 'public')));

//routes    

let posts = [
    { id: 1, title: 'Post One', body: 'This is post one' },
    { id: 2, title: 'Post Two', body: 'This is post two' },
    { id: 3, title: 'Post Three', body: 'This is post three' },
];

app.get('/api/posts', (req, res) => {
    // const posts = [
    //     { id: 1, title: 'Post One', body: 'This is post one' },
    //     { id: 2, title: 'Post Two', body: 'This is post two' },
    //     { id: 3, title: 'Post Three', body: 'This is post three' },
    // ];
    res.json(posts);
});

app.listen(port, () => console.log(`Server is running on port ${port}`));