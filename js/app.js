var nav  = document.getElementById("nav"); 
var menu = document.getElementById("menu");
var exit = document.getElementById("exit");
var link = document.getElementsByClassName("link");
var i = 0;
menu.addEventListener("click", ()=>{
    nav.style.width = "100%";
})

exit.addEventListener("click", ()=>{
    nav.style.width = "0px";
})

if(window.innerWidth < "475"){
    for(i; i < link.length; i++){
        link[i].addEventListener("click", ()=>{
            nav.style.width = "0px";
        })
    }
}

