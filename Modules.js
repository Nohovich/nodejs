const sum = (num1,num2) => num1 + num2;
// making this js file to be available to other files
// the exports is similar to the scope in angular js
module.exports.sum = sum; 
const PI = 3.14;
module.exports.PI = PI; 
class someMathObject
{
 constructor()
  {
   console.log("object created");
  }
}
module.exports.someMathObject = someMathObject; 

