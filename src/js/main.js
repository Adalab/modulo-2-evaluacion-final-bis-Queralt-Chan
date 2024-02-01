'use strict';



const btnS = document.querySelector ('.js-btnSave');
const btnR = document.querySelector ('.js-btnRecover');
const friendsList = document.querySelector ('.js-friendsList');


let arrayFriends = [];



function handleClick(event) {
    const clickedCard = event.currentTarget.id; //elemento donde hacemos el click
    
    const findFriends = arrayFriends.findIndex((friends) => friends.login.uuid === clickedCard); //me indica la posición del objeto dentro del
    console.log (findFriends);

    if (findFriends !== -1) {  
        arrayFriends[findFriends].isFriend = true;
        clickedCard.classList.add('card__selected');    
    //si el resultado es distinto a -1, añademe true a la posición que tiene esa coincidencia dentro del array
    // y pintame esa tarjeta.
}    
handleClick ();
} 
    



function listenerFriends () {
    const allFriends = document.querySelectorAll ('.js-amiguiContainer');

    for (const oneFriend of allFriends) { //para recorrer el array de los usuarios
       oneFriend.addEventListener ('click', handleClick);
       
    }
    
}


function getDataApi (){
fetch ('https://randomuser.me/api/?results=10')
.then ((response) => response.json())
.then ((data) => {
    console.log (data.results);
    arrayFriends = data.results;
     
    console.log (arrayFriends);
    for (const friendData of arrayFriends) {
        friendsList.innerHTML+= `<li class="js-amiguiContainer card__selected" id="${friendData.login.uuid}"><img class="imageFriend" src="${friendData.picture.medium}" alt="friends">
        <h3>${friendData.name.title} ${friendData.name.first} ${friendData.name.last}</h3> 
        <h3>${friendData.location.city}</h3> 
        <h4>${friendData.login.username}</h4> 
    </li>`
    }
listenerFriends ();
     }
      
     
)}; 
// esta linia cierra el fetch
getDataApi ();

