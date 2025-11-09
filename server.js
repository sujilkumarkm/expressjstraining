import express from 'express';
import paths from 'path';
import posts from './routes/posts.js';
const port = process.env.PORT || 8000; 

const app = express();

//routes
app.use('/api/posts', posts);

app.listen(port, () => console.log(`Server is running on port ${port}`));