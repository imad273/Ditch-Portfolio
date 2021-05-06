window.onscroll = function(){
    console.log(window.pageYOffset)
};

function skls(){
    var elm = document.getElementById("skills");
    elm.scrollIntoView();
}


function openFunction(){
    var navPhone = document.getElementById("nav-phone");
    
    if (navPhone.style.display = "none"){
        navPhone.style.display = "flex";
    }
}

function closeFunction(){
    var navPhone = document.getElementById("nav-phone");
    
    if (navPhone.style.display = "flex"){
        navPhone.style.display = "none";
    }
}





