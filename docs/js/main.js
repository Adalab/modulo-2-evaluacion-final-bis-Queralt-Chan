document.querySelector(".js-btnSave");document.querySelector(".js-btnRecover");const c=document.querySelector(".js-friendsList");let i=[];function t(n){const e=n.currentTarget.id,s=i.findIndex(r=>r.login.uuid===e);console.log(s)}findFriends!==-1&&(i[findFriends].isFriend=!0,clickedCard.classList.add("card__selected"));t();function o(){const n=document.querySelectorAll(".js-amiguiContainer");for(const e of n)e.addEventListener("click",t)}function d(){fetch("https://randomuser.me/api/?results=10").then(n=>n.json()).then(n=>{console.log(n.results),i=n.results,console.log(i);for(const e of i)c.innerHTML+=`<li class="js-amiguiContainer card__selected" id="${e.login.uuid}"><img class="imageFriend" src="${e.picture.medium}" alt="friends">
        <h3>${e.name.title} ${e.name.first} ${e.name.last}</h3> 
        <h3>${e.location.city}</h3> 
        <h4>${e.login.username}</h4> 
    </li>`;o()})}d();
//# sourceMappingURL=main.js.map
