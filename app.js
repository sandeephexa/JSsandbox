// console.log(document.getElementById('task-title'));

// // change style
// document.getElementById('task-title').style.background = '#333';
// document.getElementById('task-title').style.color = '#fff';
// document.getElementById('task-title').style.padding = '5px';
// // change content
// document.getElementById('task-title').textContent = 'Task list';

// document.getElementById('task-title').innerHTML = `<span style="color:red">task list</span>`;

// const taskTitle = document.getElementById('task-title');
// taskTitle.style.background = '#fff';

// document.querySelector()
// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-content'));

// console.log(document.querySelector('h5'));

// document.querySelector('li').style.color = 'red';

// document.querySelector('li:last-child').style.color = 'blue';

// document.querySelector('li:nth-child(3)').style.color = 'yellow';


// document.querySelector('li:nth-child(odd)').style.color = 'orange';
// by class name
// let items = document.getElementsByClassName('collection-item');

// items[0].style.color = 'red';

// // by tag name
//let lis = document.getElementsByTagName('li');


// // convert html collection into array
//  lis = Array.from(lis);
// lis.reverse(); 
// lis.forEach(function(li)
// {
//     console.log(li);
// })
// console.log(lis);

// document.querySelectorAll
// let liOdd = document.querySelectorAll('li:nth-child(odd)');
// console.log(liOdd);
// liOdd.forEach(function(li){
//    li.style.color = 'red';
// })

// let val;

// const list = document.querySelector('ul.collection');
// const listItem = document.querySelector('li.collection-item:first-child');


// val = listItem;
// val = list.id = "test-id";
// val = list;
// console.log(val);


// // create element
// const li = document.createElement('li');
// // add class
// li.className = "collection-item";
// // set attribute
// li.setAttribute('title','new item');
// // create text node
// li.appendChild(document.createTextNode('hello'));
// // append li
// document.querySelector('ul.collection').appendChild(li);
// console.log(li);

// // create new link element
// const link = document.createElement('a');

// // add class
// link.className='delete-item secondary-content';
// // add icon HTML
// link.innerHTML = '<i class="fa fa-remove"></i>';
// // append link to li collection
// li.appendChild(link);

// // add new element
// const newTitle = document.createElement('h2');
// // add title
// newTitle.id = 'new-title';
// // add text
// newTitle.appendChild(document.createTextNode('Task list'));
// // get old element
// const oldTitle = document.getElementById('task-title');
// // parent
// const cardAction = document.querySelector('.card-action');
// // replace oldTitle with newTitle
// cardAction.replaceChild(newTitle,oldTitle);
// console.log(cardAction);

// // remove
// const lis = document.querySelectorAll('li');
// const list = document.querySelector('ul');

// lis[0].remove();

// list.removeChild(lis[3]);

// Event handling
// document.querySelector('.clear-tasks').addEventListener('click', function(e){
//     console.log("clicked");
//     e.preventDefault();
// });

// document.querySelector('.clear-tasks').addEventListener('click', onClick);
 
// function onClick(e){
//     let val = e.offsetY;
//     console.log(val);
// }

// mouse events

// const clearBtn = document.querySelector('.clear-tasks');
// const card = document.querySelector('.card');
// const heading = document.querySelector('h5');
// click
// clearBtn.addEventListener('click', myEvent);

// double click
//clearBtn.addEventListener('dblclick', myEvent);

// mousedown
// clearBtn.addEventListener('mousedown', myEvent);

// mouseup
// clearBtn.addEventListener('mouseup', myEvent);

// mouseenter
// clearBtn.addEventListener('mouseenter', myEvent);

// //mouseleave
// card.addEventListener('mouseleave', myEvent);

// // mouseover
// card.addEventListener('mouseover', myEvent);

// // mouseout
// card.addEventListener('mouseout', myEvent);

// // mousemove
// card.addEventListener('mousemove', myEvent);

// function myEvent(e){
//     console.log(`event type ${e.type}`);
//     heading.textContent=`x offset ${e.offsetX} y offset ${e.offsetY}`;
//     document.body.style.background = `rgb(${e.offsetX},${e.offsetY},40)`;
// }

// let form = document.querySelector('form');
// let formInput = document.getElementById('task');
// // clear input


// form.addEventListener('submit', addEvn);

// function addEvn(e){
//     console.log(e.type);
//     console.log(formInput.value);
//     formInput.value = '';

//     e.preventDefault();
// }



// let form = document.querySelector('form');
// let formInput = document.getElementById('task');
// let select = document.querySelector('select')
// formInput.value = '';
// select.addEventListener('change', keyChange);

// keydown
// function keyDown(e){
//     console.log(e.type);
//     console.log(e.target.value);
   
// }

// keyup
// function keyUp(e){
//     console.log(e.type);
//     console.log(e.target.value);
   
// }

// key press
// function keyPress(e){
//     console.log(e.type);
//     console.log(e.target.value);
   
// }

// focus
// function keyFocus(e){
//     console.log(e.type);
//     console.log(e.target.value);
   
// }

// blur
// function keyBlur(e){
//     console.log(e.type);
//     console.log(e.target.value);
   
// }

// // cut
// function keyCut(e){
//     console.log(e.type);
//     console.log(e.target.value);
   
// }

// paste
// function keyPaste(e){
//     console.log(e.type);
//     console.log(e.target.value);
   
// }

//input
// function keyChange(e){
//     console.log(e.type);
//     console.log(e.target.value);
   
// }

//  EVENT Bubling & Event Delegation

// // Event Bubling
// document.querySelector('.card-title').addEventListener('click', function(){
//     console.log("card title");
// });

// document.querySelector('.card-content').addEventListener('click', function(){
//     console.log("card content");
// });
// document.querySelector('.col').addEventListener('click', function(){
//     console.log("col");
// });


// // Event Delegation

// //method 1
// document.body.addEventListener('click',delegatEvent);

// function delegatEvent(e){
//     if(e.target.parentElement.className === 'delete-item secondary-content')
//     {
//         console.log('delete event');
//     }
// }

// // method 2

// document.body.addEventListener('click',delegatEvent);

// function delegatEvent(e){
//     if(e.target.parentElement.classList.contains('delete-item'))
//     {
//         console.log('delete event');
//         e.target.parentElement.parentElement.remove();
//     }
// }

// // Local & Session Storage

// //set local storage item
// localStorage.setItem( 'name','ken');
// localStorage.setItem( 'age','30');


// //remove item
// //localStorage.removeItem('name');

// // get item
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// localStorage.clear();
// console.log(name,age);

// // set session storage
// sessionStorage.setItem('name','berkley');

document.querySelector('form').addEventListener('submit', function(e)
{
    //console.log('form submitted');
   const task = document.getElementById('task').value;
   console.log(task);
   let tasks;
   if(localStorage.getItem('tasks') === null)
   {
         tasks=[];
   }
   else {
       tasks = JSON.parse(localStorage.getItem('tasks'));
   }
   tasks.push(task);
   tasks = localStorage.setItem('tasks', JSON.stringify(tasks));
   alert('task saved');
console.log('test');
    e.preventDefault();
});

// printing localStorage array on console

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach((task)=>{
    console.log(task);
})














