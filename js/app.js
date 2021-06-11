// Variabl
var myWork = document.getElementById("my-work");
var btnOpen = document.getElementById("open-btn");
var btnClose = document.getElementById("close-btn");


// The main button for home page 'my work'
myWork.addEventListener("click", (event) =>{
    var elm = document.getElementById("skills");
    elm.scrollIntoView();
})

// Open the slid menu for phone //
btnOpen.addEventListener("click", (event) =>{
    var navPhone = document.getElementById("nav-phone");
    
    if (navPhone.style.display = "none"){
        navPhone.style.display = "flex";
    }
})

// Close the slid menu for phone //
btnClose.addEventListener("click", (event) =>{
    var navPhone = document.getElementById("nav-phone");
    
    if (navPhone.style.display = "flex"){
        navPhone.style.display = "none";
    }
})

// End Of Script //