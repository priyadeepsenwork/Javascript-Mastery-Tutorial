//? Async and Await are used to handle promises

/*
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('I am resolved!') //resolve only after 10s
    }, 10000)
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Now You are resolved!') //resolve only after 10s
    }, 5000)
})

? await can only be used inside await function
? write await inside of a promise

async function getData() {
    console.log('Hello??')
    ! JS engine was (not)waiting for promise to be resolved!
    ? It APPEARS TO BE WAITING .....................


    const res = await p
    console.log(`Namaste Javascript`)
    console.log(res)
    console.log(p)
    
        
    const res2 = await p2
    console.log(res2)
    console.log(p2)
    console.log(p)

}

getData()
*/

/*
const API_URL = `https://api.github.com/users/priyadeepsenwork`;

async function handlePromise() {
  try {
    const result = await fetch(API_URL);
    const result_json = await result.json();
    console.log(result_json);
  } catch (error) {
    console.log(`Coudn't fetch data. Error : $`);
  }
}

handlePromise();

*/


