const fs = require('fs');
// create a file
// example.txt= name of the file we are creating
// this is an example = the content to be writing inside 
// err = method if theres an error
fs.writeFile('example.txt', 'this is an example ', (err) => {
    if (err)
        console.log(err + "\n");
    else {
        console.log("file successfully created" + "\n");
        // read a file
        // example.txt= name of the file we are reading
        // utf8 = coding type
        // err = method if theres an error
        fs.readFile('example.txt', 'utf8', (err, file) => {
            if (err)
                console.log(err + "\n");
            else
                console.log(file + "\n");
        }
        )
    };
});

// fs.rename() rename a file

// appending data to the file
fs.appendFile('example.txt', 'some data being appended ', (err) => {
    if (err)
        console.log(err + "\n");
    else {
        console.log("successfully appended data to file" + "\n");
    }
});

fs.readFile('example.txt', 'utf8', (err, file) => {
    if (err)
        console.log(err + "\n");
    else {
        console.log(file + "\n");
    }
});

// delete a file
fs.unlink('example.txt',(err)=>{
    if(err)
    console.log(err);
    else
    console.log("successfully deleted the file");
});

// creat a new folder
fs.mkdir("folderExample",(err)=>{
    if(err)
    console.log(err);
    else{   
        console.log("folder successfully created");
        // delete a folder
        fs.rmdir("folderExample",(err)=>{
            if(err)
            console.log(err);
            else
            console.log("successfully deleted the folder");
        });
    }
});