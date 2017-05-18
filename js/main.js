var menu=document.querySelector(".hamburger-menu");
var navbar=document.querySelector(".page-navigation");
menu.addEventListener("click", function(){
var lista=document.querySelector(".nav-list");
lista.classList.toggle("open");
menu.classList.toggle("close-menu");
navbar.classList.toggle("open");

}, false);
