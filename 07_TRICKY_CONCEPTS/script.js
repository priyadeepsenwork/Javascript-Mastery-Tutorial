// TRICKY CONCEPTS =======================

// Scopes in JS

// Global Scope
//const my_name = "Priyadeep";

// const logName = () => {
//     console.log(my_name)
// }

// logName()

//local scope
// const scripter = () => {
//
//     let myName2 = 'Sen'
//     console.log(`my name is : ${myName2}`)
// }

// scripter()

//for global varibles, try to use const

// const myName = 'Priyadeep'

// const fun1 = () => {
//     let secondName = 'Sen'
//     console.log(myName + " " + secondName)
// }

// const fun2 = () => {
//     
//     console.log(myName)
// }

// fun1(), fun2()

// if(true){
//     const name_1 = 'John'
//     console.log(name_1)
// }

//console.log(name_1)
//name_1 is in block scope of if statement


//always declare variable in scope which we want to use them in 

// if(true){
//     var a = "Hey there"
//     let b = "skibidi?"
//     const c = "Javascript"
// }

// console.log(a)
// console.log(b)
// console.log(c)

// HOISTING =========================
//never used in modern javascript

/* 
All variable declarations are hoisted in the top of the scope, be it global or local.
*/

//this is hoisting
// var myName1
// console.log(myName1)
// myName1 = 'Javascript'


//actually its this
// console.log(myName2)
// var myName2 = 'Coding'

//functions:
// hoist()

// function hoist() {
//     var message = 'name'
//     console.log(message)
// }


//CLOSURES =================================

const outer = () => {
    const outerVar =  'I am Outer '
    
    const inner = () => {
        const innerVar = " I am Inner"

        console.log(outerVar, innerVar)
    }

    return inner
}

const innerFn = outer()

innerFn()

//console.log(outerVar)

