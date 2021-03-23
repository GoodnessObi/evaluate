var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv');
const fetch = require('node-fetch');
dotenv.config();

const app = express();
const bodyParser = require('body-parser');

const baseURL = 'https://api.meaningcloud.com/sentiment-2.1';
const apiKey = process.env.API_KEY;
let inputValue = 'http://tika.apache.org/1.3/formats.html'

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require('cors');
const { response } = require('express');
app.use(cors());

app.use(express.static('dist'))

console.log(__dirname, '>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')


app.get('/', function (req, res) {
    res.sendFile(path.resolve('dist/index.html'))
})

console.log(`Your API key is ${process.env.API_KEY}`);

// designates what port the app will listen to for incoming requests
const port = process.env.PORT || 8081;
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`)
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.post('/addData', async (req, res) => {
    console.log('body', req.body)
    try{
        const response = await fetch (`${baseURL}?key=${apiKey}&lang=auto&url=${req.body.formText}`, {
            method: 'POST'
        })
        const data = await response.json();
        if (data.status.msg !== 'OK') {
            throw new Error(data.status.msg)
        }
        console.log(data, 'data');
        console.log(data.agreement, data.subjectivity, data.irony)
        res.send(data)
    }catch(error) {
        console.log(error, 'error', error.message)
        res.status(500).send({ error: error.message});
    }
})