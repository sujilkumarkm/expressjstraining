import express from 'express';
const router = express.Router();

let posts = [
    { id: 1, title: 'Best Post One'},
    { id: 2, title: 'Silver Post Two'},
    { id: 3, title: 'Post Three'},
];

// get all posts
router.get('/', (req, res) => {
    const limit = parseInt(req.query.limit);
   
    if(!isNaN(limit) && limit > 0) {
        return res.status(200).json(posts.slice(0, limit));
    } 
        res.status(200).json(posts);
});

//get single post
router.get('/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);
    // res.status(200).json(posts.filter(post => post.id === id));
    if(!post){
        const error = new Error(`A Post with ID ${id} is not found :( Ja ja ja...!`);
        error.status = 404;
        return next(error);
    }
       res.status(200).json(post);
}); 




//create new post
router.post('/', (req, res, next) => {
    const newPost = {
        id: posts.length + 1,
        title: req.body.title,
    };
    if(!newPost.title){
        const error = new Error(`Plaease provide a title for the post`);
        error.status = 400;
        return next(error);
    }    
    posts.push(newPost);
    res.status(201).json(posts);
});


// update posts
router.put('/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if(!post){
        return res
        .status(404)
        .json({ msg: `A Post with ID ${id} is not found :( OMG unlucky...!`});
     }
     post.title = req.body.title ? req.body.title : post.title;
     res.status(200).json(posts);
});

// delete posts
router.delete('/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.findIndex((post) => post.id === id);    
    
    if (!post) {
        return res
        .status(404)
        .json({ msg: `A Post with ID ${id} is not found :( OMG unlucky...!`});
     }
     posts = posts.filter((post) => post.id !== id);
     res.status(200).json(posts);
});




export default router;