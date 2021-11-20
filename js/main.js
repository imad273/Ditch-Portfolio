let menu = document.getElementById("menu");
let openBtn = document.getElementById("open-btn");
let closeBtn = document.getElementById("close-btn");

openBtn.addEventListener("click", () => {
   menu.style.display = "flex";
   closeBtn.style.display = "block"
})
closeBtn.addEventListener("click", () => {
   menu.style.display = "none";
   closeBtn.style.display = "none"
})