const express = require('express')
const Quote = require('inspirational-quotes')
const cors = require('cors')
const dotenv = require('dotenv')


// using: 'express' - framework with app.?
const app = express();

// enable: 'cors' - to avoid problem
app.use(cors());
// enable: 'dotenv' - set .env or port
dotenv.config();

// deploy: main page link to data
app.get('/', (req, res) => {
    res.send("Hello Express wite NodeJS. Using to 'http://localhost:5000/api'");
})
// deploy: respone data to data (/api) 
app.get('/api', (req, res) => {
    res.send(Quote.getQuote()); // with 'inspirational-quotes'
})

// set: port or 5000? 
const PORT = process.env.PORT || 5000;
// set: use port
app.listen(PORT, () => {
    console.log(`Server started successfully!, Run on port ${PORT}`);
})