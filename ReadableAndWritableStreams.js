const fs = require('fs');
// creating the stream
const readStream =  fs.createReadStream("TheTortoiseAndTheHare.txt",'utf8');
// fs.createWriteStream() to write to a file in chunks
// getting the data in chunks
readStream.on('data',(chunk)=>{
    console.log(chunk);
});

// getting the data in chunks and passing to another file
//readStream.pipe("WriteStream")

// zlib is for compressing fils
// const zlib = require('zlib');
// const gzip = zlib.createGzip();
// to decode a compressed file
//gzip = zlib.createUnzip();
// getting the data in chunks and passing to another file + compressing it
// readStream.pipe(gzip).pipe("WriteStream");



