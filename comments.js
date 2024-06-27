// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Import the comments.js file
const comments = require('./comments');

// Get all comments
app.get('/comments', (req, res) => {
    res.send(comments.getAllComments());
});

// Get comment by id
app.get('/comments/:id', (req, res) => {
    const id = req.params.id;
    res.send(comments.getCommentById(id));
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

