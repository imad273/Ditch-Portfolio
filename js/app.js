// The main button for home page 'my work' //
function skls(){
    var elm = document.getElementById("skills");
    elm.scrollIntoView();
}

// Open the slid menu for phone //

function openFunction(){
    var navPhone = document.getElementById("nav-phone");
    
    if (navPhone.style.display = "none"){
        navPhone.style.display = "flex";
    }
}

// Close the slid menu for phone //

function closeFunction(){
    var navPhone = document.getElementById("nav-phone");
    
    if (navPhone.style.display = "flex"){
        navPhone.style.display = "none";
    }
}

// End of script //