import express from 'express';
import {
    getPosts,
    getPost,
    createPost,
    updatePost,
    deletePost
} from '../controllers/postController.js';
const router = express.Router();

// get all posts
router.get('/', getPosts);

//get single post
router.get('/:id', getPost); 

//create new post
router.post('/', createPost);


// update posts
router.put('/:id', updatePost);

// delete posts
router.delete('/:id', deletePost);




export default router;