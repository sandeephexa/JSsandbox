const http = new easyHttp();
// HTTP GET

// http.get('https://jsonplaceholder.typicode.com/users')
// .then(data => console.log(data))
// .catch(err => console.log(err))

// HTTP POST

// user data
const data = {
    name : "john doe",
    username : "johndoe",
    email : "new@gmail.com"
}

// http.post('https://jsonplaceholder.typicode.com/users',data)
// .then(data => console.log(data))
// .catch(err => console.log(err))

// HTTP PUT
// http.put('https://jsonplaceholder.typicode.com/users/2',data)
// .then(data => console.log(data))
// .catch(err => console.log(err))

http.delete('https://jsonplaceholder.typicode.com/users/2',data)
.then(post => console.log(post))
.catch(err => console.log(err))