console.log('hello World!')

//ways to create variables:
let color = 'blue'//for variables

var size = 'medium' //not recommended but will see in code examples online

const language = 'JavaScript' //for final value, cannot be changed

//number types:
let quantity = 5
let distance = 4.5
//static and floating numbers aren't 2 different things in javascript

//string types:
//can be defined with single or double quotes

let text = 'hello'
let message = "goodbye"

console.log('there are ' + quantity + " open seats")

let todaysTemp = 75

//use double quotes for a string if you need to enter a single quote for an apostrophy
console.log("Today's temperature is " + todaysTemp + "F")

//or cancel out with '\'s'

//if you want to convert F to C:
let tempC = (todaysTemp - 32) * 5 / 9
//toFixed() to have fixed amount of decimal places after the number value
console.log('today\'s temp is ' + tempC.toFixed(2) + 'C')




