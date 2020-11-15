// we need to write in the cmd
// npm init to creat the package
// npm install express
const express = require('express');
const path = require("path");
const app = express();
// alias name = public real name = static
app.use('/public',express.static(path.join(__dirname,'static')));
app.get('/',(req,res)=>{
    // uploading the html file the the server
    res.sendFile(path.join(__dirname,'static','index.html'));
});
app.listen(30000);