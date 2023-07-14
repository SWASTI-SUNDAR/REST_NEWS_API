const dotenv = require('dotenv');
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const articles = require('./routes/articles');
dotenv.config({ 'path': './config.env' })


require('./db/connect');


app.get('/', (req, res) => {
    res.send('Hi I am the rest Api');
})
app.use('/news', articles);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})