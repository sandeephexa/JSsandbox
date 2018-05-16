const  posts = [{
    title:"post1",
    desc:"sample post"
},
{
    title:"post2",
    desc:"sample post"
},
]

// SYNCHRONOUS WAY

// function createPost(post)
// {
//     setTimeout(function(){
//         posts.push(post)
//     },2000)
// }

// function getPost(){
//     setTimeout(function(){
//         var output = '';

//         posts.forEach(function (post){
//               output += `<li>${post.title}</li>
//               <li>${post.desc}</li>`
//         },1000)
//         document.body.innerHTML = output;
//     })
// }

// createPost({title:"post3",desc:"sample post"})

// getPost();

// ASYNCHRONOUS WAY

function createPost(post)
{
    return new Promise(function(resolve,reject){
        setTimeout(function(){  
            posts.push(post)
            const error = false;
            if(!error){
                resolve();
            }
            else{
                reject('something went wrong');
            }
           
        },2000)
    })
    
    
}


function getPost(){
    setTimeout(function(){
        var output = '';

        posts.forEach(function (post){
              output += `<li>${post.title}</li>
              <li>${post.desc}</li>`
        },1000)
        document.body.innerHTML = output;
    })
}
createPost({title:"post3",desc:"sample post"}).then(getPost)
.catch(function(err){
    console.log(err)
});
