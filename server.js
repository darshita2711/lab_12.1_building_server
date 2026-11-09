import express from 'express';

// create the express app
const app = express();

const PORT = 3000;

// set up a GET request handler for the root URL
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

