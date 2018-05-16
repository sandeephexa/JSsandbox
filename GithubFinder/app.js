// // instantiate github
// const github = new Github();
// const ui = new UI;
// const searchUser = document.getElementById('searchUser');
// // add event listener
// searchUser.addEventListener('keyup',getUser);

// function getUser(e){
//     var userText = e.target.value;
//     if(userText !== ''){
//         github.getUser(userText)
//         .then(data => {
//             if(data.profile.message === 'Not Found'){
//                 // alert message
//             }
//             else{
//                ui.showProfile(data.profile);
//             }
//         })
//     }else{
//         // clear profile
//     }

// }

// Init Github
const github = new Github;
// Init UI
const ui = new UI;

// Search input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value;
  console.log(userText)

  if(userText !== ''){
   // Make http call
   github.getUser(userText)
    .then(data => {
      if(data.profile.message === 'Not Found') {
        // Show alert

      } else {
        // Show profile
        ui.showProfile(data.profile);
      }
    })
  } else {
    // Clear profile
    
  }
}); 

