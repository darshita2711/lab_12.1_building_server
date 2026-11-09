import express from 'express';

// create the express app
const app = express();

const PORT = 3000;

// serve static files from the 'public' directory
app.use(express.static('./public'));

// set up a GET request handler for the root URL
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// set up a GET request handler for the contact page
app.get('/contact', (req, res) => {
    res.send('Contact us at contact@example.com');
});

// start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

