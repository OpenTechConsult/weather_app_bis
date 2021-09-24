// load the express library in a constant called express
const express = require('express');

// create an express application by calling the express function
const app = express();

// define the different routes
app.get('/', (req, res) => {
    // the function to call wen someone access the root '/' route
    // send a simple text to the browser
    res.send('Hello Express');
});

// setup the route for the /help page
app.get('/help', (req, res) => {
    res.send('Help page');
})



// lastly we need to start the server up
app.listen(3000, () => {
    // a callback function that runs when the server start up
    console.log('Server is up and listening on http://localhost:3000');
});
