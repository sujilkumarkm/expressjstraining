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
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);
    // res.status(200).json(posts.filter(post => post.id === id));
    if(!post){
       return res
       .status(404)
       .json({ msg: `A Post with ID ${id} is not found :( Ja ja ja...!`});
    }
       res.status(200).json(post);
}); 




//create new post
router.post('/', (req, res) => {
        console.log(req.body);
        res.status(201).json({ msg: 'Post created...'});
    });

export default router;