import express from 'express';
import path from 'path';
import posts from './routes/posts.js';
import logger from './middleware/logger.js';   
import errorHandler from './middleware/error.js';
import notfound from './middleware/notfound.js';
const port = process.env.PORT || 8000; 

const app = express();


//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// logger middleware
app.use(logger);

//routes
app.use('/api/posts', posts);



// Error handler
app.use(notfound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on port ${port}`));


