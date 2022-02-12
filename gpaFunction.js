function validGpa(number){
    if (number >= 0 && number <= 4){
        return true
    }
    else {
        return false
    }
}
console.log(validGpa(4))