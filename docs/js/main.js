document.querySelector(".js-btnSave");document.querySelector(".js-btnRecover");const r=document.querySelector(".js-friendsList");let t=[friends].isFriend=!0;function o(n){const e=n.currentTarget.id,i=t.findIndex(s=>s.login.uuid===e);console.log(i),i===!0&&e.classList.add("card__selected")}function c(){const n=document.querySelectorAll(".js-amiguiContainer");for(const e of n)e.addEventListener("click",o)}function l(){fetch("https://randomuser.me/api/?results=10").then(n=>n.json()).then(n=>{console.log(n.results),t=n.results,localStorage.setItem("users",JSON.stringify(t)),console.log(t);for(const e of t)r.innerHTML+=`<li class="js-amiguiContainer card__selected" id="${e.login.uuid}"><img class="imageFriend" src="${e.picture.medium}" alt="friends">
        <h3>${e.name.title} ${e.name.first} ${e.name.last}</h3> 
        <h3>${e.location.city}</h3> 
        <h4>${e.login.username}</h4> 
    </li>`;c()})}l();
//# sourceMappingURL=main.js.map
