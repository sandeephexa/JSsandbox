// method 1

// async function sayHello(){
   
//     const promise = new Promise((resolve,reject) => {
//         setTimeout(() => resolve('Hello'),1000);
//     })

//     const error = false;
//     if(!error){
//         const res = await promise; // wait until promise is resolved.
//         return res;
//     }
//     else{
//         await Promise.reject(new Error('something went wrong'))
//     }
   
// }

// method 2
async function sayHello(){
    const users = await fetch('https://jsonplaceholder.typicode.com/users')

    const data = await users.json();

    return data;
}

sayHello().then(users => console.log(users))