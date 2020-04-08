const express = require('express')
const path = require('path')

const request = require('request');
const  port=process.env.PORT || 3000;
const url = 'https://api.chucknorris.io/jokes/random';

const app = express()

const viewPath = path.join(__dirname, '/views');

console.log(viewPath);
app.use(express.static(viewPath))
app.use(express.static(__dirname + '/public/src'));
//app.use(express.static(__dirname+'/public/src/img'));







app.get('/noris', (req, res) => {
    request({ url, json: true }, (error, response) => {
        res.send({
            joke: response.body.value
        })

    })
})

app.listen(port, () => {
    console.log("Server is  on port 3000");

})
