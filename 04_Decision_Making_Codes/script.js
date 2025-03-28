console.log('Decision Making Programs =======================================')

//start

let age = 18
if(age > 18 || age === 18){
    console.log("you may enter!")
} else {
    console.log("you are underage. not allowed!")
}

// 0--> False, 1 or other numbers--> true
//strings --> true 
//these are truly and falsy value
//its considered as boolean contexts, as JS considers it as boolean inside if()-else blocks

if('test'){
    console.log('truly')
} else {
    console.log('falsey')
}

// falsey are: 0, null, NaN, undefined
//absolutely everything else is truly

// const dogs = 'German Shepherd'
// if(dogs){
//     console.log(`You have ${dogs} dogs`)
// } else {
//     console.log(`You have no dogs`)
// }

//complex codes

console.log('truthy' && 1 && 'test' && 999)
//its evaluated from left to right, thats why output is 999

console.log('truthy' && NaN && 'test' && 999)
//here, it encounters NaN which is falsey, so condition is false, so it immediately comes out and prints NaN.

console.log('truthy' || 1 || 'test' || 999)
//it will only return false when all the values inside the 'if' is falsey, else even if there is one truly, it will priortize truly.


console.log(!false) //makes it truly
console.log(!'test') //makes it falsey
console.log(!!!!!1) // yes this is possible. this will be falsey


// SWITCH case ===============

// const superhero = 'Iron Man'
// switch(superhero){
//     case 'Captain America': {
//         console.log('I am Captain America')
//         break
//     }
//     case 'Iron Man': {
//         console.log('Ironman Coming!!')
//         break;
//     }
//     case 'Thor': {
//         console.log("This is my Hammer!")
//         break;
//     }
//     default:
//         console.log("No Superhero")
        
// }

//if no case is executed, then the default case is executed. it doesn't need a break statement.

//switch case compares the condition value with === comparison type.



//ternary operators
let agee = 19
console.log((agee > 18) ? 'you can drive' : 'you cannot drive')

if(agee > 20){
    console.log('you can drive')
} else {
    console.log('you cannot drive')
}

//ABOVE, BOTH ARE SAME.

