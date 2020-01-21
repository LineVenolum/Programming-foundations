/* Question 1 */ 
var name = "Line";

/*Question 2 */
var person = {
    name: "Line",
    age: 23
};

/*Question 3 */
var outOfStock = true;
if (outOfStock) {
    console.log("This product is currently out of stock"); 
} else {console.log ("This product is in stock"); 
} 

/* Question 4 Loop through the array and console log each value.*/ 
var numberArray = [0,1,2,3,4];

console.log(numberArray);

/*Question 5 Create a for loop that counts from 15 to 25. Console log the value of the counter variable inside the loop.*/
for (var count=15; count<=25; count++){
    console.log(count)
};


/*Question 6 
Using the same loop from the above question, only log the value of the counter variable if it is equal to 20.*/
console.log(count=20);

/*Question 7*
Loop through the array and console log the number value and the boolean value.*/
var foodArray = [
{
    name: "pizza",
    cookingtime: 20,
    healthy: false
},
{ name: "tacos",
cookingtime:15,
healthy: true
},
{
    name: "fishsoup",
    cookingtime: 45,
    healthy: true
}];

for(var i = 0; i < foodArray.length; i++) {
    console.log(foodArray[i].cookingtime);
    console.log(foodArray[i].healthy);
};

/*Question 8*/
function whatIdontLike (hello){
    console.log(hello + " giraffes");
}
whatIdontLike("I don´t like");

/*Question 9*/

function whatIDoLike (food, person){
    console.log(food - person)
}
whatIDoLike(5,2);

/*Question 10*/
var emptyArray = [];

function lala (candy) {
    candy.push("chocolate");
    return candy;
}

lala (emptyArray);

console.log(emptyArray);