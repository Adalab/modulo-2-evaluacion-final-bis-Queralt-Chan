'use strict';

const btnS = document.querySelector ('.js-btnSave');
const btnR = document.querySelector ('.js-btnRecover');
const friendsList = document.querySelector ('.js-friendsList');

let arrayFriends = [];
function getDataApi (){
fetch ('https://randomuser.me/api/?results=10')
.then ((response) => response.json())
.then ((data) => {
    console.log (results);
    arrayFriends = results.results;
    let name = results.results.name;
    let city = results.results.location.city;
    let user = results.results.login.username;

    for (const List of arrayFriends) {
        friendsList.innerHTML+= `<li> <img src="${List}" alt="friends">
        <h3>${name}<h3> 
        <h3>${city}<h3> 
        <h4>${user}<h4>
    </li>`
    
    }
});

}

getDataApi ();
