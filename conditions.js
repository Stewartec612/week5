let takenCSharp = false
let takenJava = true

if (takenCSharp || takenJava){
    console.log('you meet the pre-requisites for android')
}
else {
    console.log('you mustt take java or C# first')
}

let age = 35
let lengthOfCitizenship = 35
let stateOfResidence = 'Minnesota'
let stateWantToRepresent = 'Minnesota'

if (age >=30 && lengthOfCitizenship >= 9 && stateWantToRepresent === stateOfResidence ) {
    console.log('you are eligible to run for senator')
}
else {
    console.log('you are not eligible to run for senator')
}
// === for no type coercion, == for type coercion
//=== is recommended 
