// get text
document.getElementById('button1').addEventListener('click',getText);
function getText(){
    fetch('text.txt')
    .then(res =>{
        
        return res.text();
    })
    .then((function(data){
         document.getElementById('output').innerHTML = data;
    }))
    .catch(function(err){
        console.log(err);
    })
}
// get JSON
document.getElementById('button2').addEventListener('click',getJson);
function getJson(){
    fetch('posts.json')
    .then(res =>{
       // console.log(res.text());
        return res.json();
    })
    .then((function(posts){
        let output = '';
        posts.forEach(post => {
            output+= `<ul></ul>
            <li>Title : ${post.title}</li>
            <li>Title : ${post.id}</li>`
        });
        document.getElementById('output').innerHTML = output;
       
    }))
    .catch(function(err){
        console.log(err);
    })
}
// get External API
document.getElementById('button3').addEventListener('click',getExternalAPI);
function getExternalAPI(){
    fetch('https://api.github.com/users')
    .then(res =>{
        return res.json();
    })
    .then((function(users){
        let output = '';
        users.forEach(user => {
            output+= `
            <li>Title : ${user.login}</li>
            `
        });
        document.getElementById('output').innerHTML = output;
       
    }))
    .catch(function(err){
        console.log(err);
    })
}




