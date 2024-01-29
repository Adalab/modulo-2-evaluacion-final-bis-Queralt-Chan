'use strict';

const btnS = document.querySelector ('.js-btnSave');
const btnR = document.querySelector ('.js-btnRecover');
const friendsList = document.querySelector ('.js-friendsList');

fetch ('https://randomuser.me/api/?results=10')
.then ((response) => response.json())
.then ((data) => {
    console.log (data)
});