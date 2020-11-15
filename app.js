console.log("hello from node js");
// ./ = same level(path)
const Module = require('./Modules');
// getting all the data we have attached to the module(scope)
console.log(Module);
// calling the sum method from the module
console.log(Module.sum(2, 1));
// calling the PI from the module
console.log(Module.PI);
// creating a new object of the object we have attached to the module
console.log(new Module.someMathObject());
// Node.js has a built-in module, called "Events", where you can create-, fire-, and listen for- your own events.
// To include the built-in Events module use the require() method
const EventEmitter = require("events");
const eventEmitter = new EventEmitter()
// Assign the event handler to an event:
eventEmitter.on("event", () => {
    console.log("The Event has occurred");
});
//Fire the event:
eventEmitter.emit("event");
// creating a class that inherit of EventEmitter
class Person extends EventEmitter {
    constructor(name) {
        super();
        this._name = name;
    }
    get name() {
        return this._name;
    }
}

let pedro = new Person("pedro");
// // Assign the event handler to an event:
pedro.on("name", () => {
    console.log("my name is " + pedro.name);
});
//Fire the event:
pedro.emit("name");

const readline = require('readline');
// the readline.Interface class are constructed using the readline.createInterface() method. 
// Every instance is associated with a single input Readable stream and a single output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let num1 = Math.floor((Math.random() * 10) + 1);
let num2 = Math.floor((Math.random() * 10) + 1);
let answer = num1 + num2;

// The rl.question() method displays the query by writing it to the output, 
// waits for user input to be provided on input, then invokes the callback function passing the provided input as the first argument.
// help
rl.question(`what is ${num1} + ${num2} ? \n`,
    (userInput) => {
        // trim delete spaces 
        if (parseInt(userInput) === answer) {
            // finish running the app
            rl.close();
        }
        else {
            //  method sets the prompt that will be written to output whenever rl.prompt() is called.
            rl.setPrompt("Incorrect response please try agin \n");
            rl.prompt();
            rl.on("line", (userInput) => {
                // // Assign the event handler to an event:
                if (parseInt(userInput) === answer)
                    rl.close();
                else {
                    rl.setPrompt(`your answer of ${userInput} is incorrect again \n`);
                    rl.prompt();
                }

            });
        }
    });
// // Assign the event handler to an event:
rl.on("close", () => {
    console.log("Correct!!!");
});