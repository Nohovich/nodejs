const http = require('http');
const server = http.createServer((req, res) => {

    // only if it the root domain
    if (req.url === '/') {
        // the data we want to pass on
        res.write("hello word from nodejs");
        // sending the data(res)
        res.end();
    }
    else {
        res.write("using some other domain");
        res.end();
    }
});
// the port the server is gonna listen
server.listen('30000'); 