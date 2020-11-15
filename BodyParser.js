// we need to write in the cmd
// npm init to creat the package
// npm install express
// npm install body-parser
// npm install joi
const express = require('express');
const path = require("path");
const joi = require('joi')
const app = express();
const bodyParser = require('body-parser');
// alias name = public real name = static
app.use('/public', express.static(path.join(__dirname, 'static')));
// allowing us to pars url encoded forms it parsed the data and passing it to the request
// extended = falls because we are using a simple object
app.use(bodyParser.urlencoded({ extended: false }));
// pars json
app.use(bodyParser.json());
app.get('/', (req, res) => {
    // uploading the html file the the server
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

app.post('/', (req, res) => {
    console.log(req.body);
    // in the real word database work here

    // response of the server 
    // res.send('successfully posted data');

    // response of the server in json
     res.json({ success: true });

});
app.listen(30000);