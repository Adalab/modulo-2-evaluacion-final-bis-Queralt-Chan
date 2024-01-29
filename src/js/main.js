'use strict';

const btnS = document.querySelector ('.js-btnSave');
const btnR = document.querySelector ('.js-btnRecover');
const friendsList = document.querySelector ('.js-friendsList');

let arrayFriends = [];
function getDataApi (){
fetch ('https://randomuser.me/api/?results=10')
.then ((response) => response.json())
.then ((data) => {
    console.log (data.results);
    arrayFriends = data.results;
    
    console.log (arrayFriends);
    for (const friendData of arrayFriends) {
        friendsList.innerHTML+= `<li class="amiguiContainer"> <img class="imageFriend" src="${friendData.picture.medium}" alt="friends">
        <h3>${friendData.name.title} ${friendData.name.first} ${friendData.name.last}<h3> 
        <h3>${friendData.location.city}<h3> 
        <h4>${friendData.login.username}<h4>
    </li>`
    
    }
});

}

getDataApi ();
