/* Question 1
Create an array called petArray with 3 string items in it: "cat", "cow", "dog".*/ 
var petArray = [ "cat", "cow", "dog"]; 

/*Question 2
Console log the value of the second item in petArray*/
console.log(petArray[1]);

/*Question 3 
Add the item "sheep" to petArray using the push method.*/
petArray.push("sheep");

/*Question 4*/
var numberOfpetArray = petArray.length;
console.log(petArray.length);

/*Question 5 Create an object called catObject with 3 properties: name, colour, age. Add appropriate values (and type of values) for each of these properties*/
var catObject ={
    name: "Gulla",
    colour: "orange",
    age: 2
};

/*Question 6 Console log the value of the third property of catObject */
console.log(catObject.name);

/*Question 7 Take the value of catObject (the {} part) and place it inside an array called catArray.*/
var catArray = ["Gulla", "orange", 2];

/* Question 8 Loop throughcatArray and console log each property of each object inside (there will be only 1 object inside).*/
for (i=0; i<catArray.length; i++);
console.log(catArray);

/*Question 9 Create a function called logToConsole. Th function should accept 1 argument. Decide on the name of the argument and console log its value inside the function.*/
function logToConsole (theWord){
    console.log(theWord);
}

logToConsole("Hello");


/*Question 10 all the logToConsole function and pass in the value "donkey".*/
logToConsole("Donkey");


