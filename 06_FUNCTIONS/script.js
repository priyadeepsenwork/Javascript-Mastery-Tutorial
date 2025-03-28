//FUNCTIONS

console.log("hey, i am a function hehe, console.log()")

let myname = "Priyadeep Sen"

//Function declaration

// function fun(param) {
//     console.log(`My name is : ${param}`)
// }

//Function Call (executing a function)
// fun(myname)

// function squareOfNum(num) {
//     num *= num
//     return num
// }

let num_value = 20;
// console.log(`The square of ${num_value} = ` + squareOfNum(num_value))

// const result = squareOfNum(34)
// console.log(result)

//ARROW FUNCTION ** IMPORTANT
// const res = (num_value) => {
//     console.log(`Arrow Function : ${num_value}`)
// }



//By default, all function returns undefined
// function add(a, b) {
//     return a+b
// }
// const res = add(1, 2)
// console.log(res)

// function test(){
//     console.log(1)
//     return true
//     console.log(2)
//     return false
// }

// const bool = test()
// console.log(bool)



//ARROW FUNCTIONS ===================
//MODERN JAVASCRIPT FUNCTIONS =======
//MAKE THIS THE MAIN FUNCTION TYPE JS

const square = (num) => {
    return num*num
}

console.log(square(10))

//shorter form

const cube = (num) => (num*num*num) //function declaration
console.log(cube(40)) //function call

const sayHi = (myName, age = 0) => {
    console.log(`Hello, my name is ${myName} and I am ${age} years old`)
}

//we can also allocate default parameter beside age, as age = 0. this is important.

sayHi('Priyadeep', 25)


const addd = (a = 0, b = 0) => {
    return a + b
}

const result = addd(2, 5)
console.log(result) // UNDEFINED. Unless we assign a default parameter
