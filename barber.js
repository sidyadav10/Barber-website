const menu = document.querySelector("#menu");
const navlist = document.querySelector("#navlist");
menu.addEventListener("click", () =>{
    menu.classList.toggle("fa-xmark");
    navlist.classList.toggle("active");
  
    
});

document.addEventListener("click",(e)=>{
    if(e.target.id !== "menu" && e.target.id !== "navlist"){
        menu.classList.remove("fa-xmark");
        navlist.classList.remove("active");
    }
});


