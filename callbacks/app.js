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

function createPost(post,callback)
{
    setTimeout(function(){
        console.log(posts);
        posts.push(post)
        console.log(posts);
        callback();
    },2000)
    
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
createPost({title:"post3",desc:"sample post"},getPost)
