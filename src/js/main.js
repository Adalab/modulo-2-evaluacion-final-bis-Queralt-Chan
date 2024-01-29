'use strict';

const btnS = document.querySelector ('.js-btnSave');
const btnR = document.querySelector ('.js-btnRecover');
const friendsList = document.querySelector ('.js-friendsList');

let arrayFriends = [];
function getDataApi (){
fetch ('https://randomuser.me/api/?results=10')
.then ((response) => response.json())
.then ((data) => {
    console.log (data);
    arrayFriends = data.results;
    for (const urlList of arrayFriends) {
        friendsList.innerHTML+= `<li> <img src="${urlList}" alt="friends">
    </li>`
    
    }
});

}

getDataApi ();
