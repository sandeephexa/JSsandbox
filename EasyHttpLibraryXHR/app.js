// Initialize easyHttp
const http = new easyHttp();

// GET all posts
// http.get('https://jsonplaceholder.typicode.com/posts', function(err,res){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(res);
//     }
   
// });
// GET single post
// http.get('https://jsonplaceholder.typicode.com/posts/1', function(err,res){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(res);
//     }
   
// });

// Create data
const data = {
    title : "Custom post",
    body : "This is sample post"
}

// POST
// http.post('https://jsonplaceholder.typicode.com/posts',data, function(err,post){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(post);
//     }
   
// });

// http.put('https://jsonplaceholder.typicode.com/posts/5',data, function(err,post){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(post);
//     }
   
// });

// DELETE post
http.delete('https://jsonplaceholder.typicode.com/posts/5', function(err,res){
    if(err){
        console.log(err);
    }
    else{
        console.log(res);
    }
   
});

