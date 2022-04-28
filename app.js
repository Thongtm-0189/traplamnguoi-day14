const btn = document.getElementById("btn")
const menu =document. querySelector(".menu")


btn.addEventListener("click", ()=>{
    if(menu.style.display === "block"){
        menu.style.display = "flex"
    }else{
        menu.style.display = "block"
    }
})