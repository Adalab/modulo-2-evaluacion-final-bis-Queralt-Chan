'use strict';

const btnS = document.querySelector ('.js-btnSave');
const btnR = document.querySelector ('.js-btnRecover');
const friendsList = document.querySelector ('.js-friendsList');


let arrayFriends = [];


function handleClick(event) {
    const clickedCard = event.currentTarget.id;
    console.log(clickedCard);
    
}
function listenerFriends () {
    const allFriends = document.querySelectorAll ('.js-amiguiContainer');

    for (const oneFriend of allFriends) {
       oneFriend.addEventListener ('click, handleClick');
    }
    
}
listenerFriends ();

function getDataApi (){
fetch ('https://randomuser.me/api/?results=10')
.then ((response) => response.json())
.then ((data) => {
    console.log (data.results);
    arrayFriends = data.results;
    
    console.log (arrayFriends);
    for (const friendData of arrayFriends) {
        friendsList.innerHTML+= `<li class="js-amiguiContainer" id="${friendData.id}"> <img class="imageFriend" src="${friendData.picture.medium}" alt="friends">
        <h3>${friendData.name.title} ${friendData.name.first} ${friendData.name.last}<h3> 
        <h3>${friendData.location.city}<h3> 
        <h4>${friendData.login.username}<h4>
    </li>`
    }

     }
      
     
)}; 
// esta linia cierra el fetch
getDataApi ();

