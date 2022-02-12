let birds = ['Blue Jay','Falcon','Vulture']
console.log(birds)

birds.forEach(function (bird, index){
    console.log(index,bird.toUpperCase())
})

for (let x = 0; x < birds.length ; x=x+1){
    let bird = birds[x]
    console.log(bird)
}

//While loops
//rarely used in web programming

//Replace method

let text = 'The classes are itec 1150, itec 1250, itec 2560'

//to replace one 'itec' item in the text:

let replace = text.replace('itec', 'ITEC')

console.log(replace)

//to replace every instance of 'itec':

let replaceAll = text.replace(/itec/g, 'ITEC')
//g stands for 'global'

console.log(replaceAll)

let message = 'The classes are 1150, 1250,2560'

//translates to match every digit that repeats four times, {replacement string} {$& represent the digits}
let replaceRegex = message.replace(/\d{4}/g, 'ITEC $&')
console.log(replaceRegex)

//.trim removes all white space from the string 

