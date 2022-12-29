import express from 'express'

const app = express();
const port = 3000;

// A route handler for the home page//
app.get('/', (req , res) => {
    res.redirect('/api');
});
app.get('/api', (req, res) => {
    res.send('First Server');
});

// Starting the express server //
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});