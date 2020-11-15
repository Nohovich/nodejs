// we need to write in the cmd
// npm init to creat the package
// npm install express
const express = require('express');
const app = express();
//setting up the server
// the first parameter is the rout
app.get('/',(req,res)=>{
    // sending the data through the server
    res.send('hello word');
});
// rout = http://localhost:30000/example
app.get('/example',(req,res)=>{
    // sending the data through the server
    res.send('hitting example route word');
});
// http://localhost:30000/example/david/26
app.get('/example/:name/:age',(req,res)=>{
    console.log(req.params);
    // sending the data through the server
    // using the params
    res.send(req.params.name + " : " + req.params.age );
});

// http://localhost:30000/example/query/?query=queryData
app.get('/example/query',(req,res)=>{
    console.log(req.query);
    // sending the data through the server
    // using the query params
    res.send(req.query);
});

// http://localhost:30000/example/query/david/26?query=queryData&sort=byage
app.get('/example/query/:name/:age',(req,res)=>{
    console.log(req.params);
    console.log(req.query);
    // sending the data through the server
    // using the query params and the url params
    res.send(req.params.name + " : " + req.params.age);
});

app.listen(30000);