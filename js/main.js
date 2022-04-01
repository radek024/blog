function toggleMenu(){
let menu = document.querySelector(".hamburger-menu");
let navbar = document.querySelector(".page-navigation");
menu.addEventListener("click", function() {
 let lista = document.querySelector(".nav-list");
 lista.classList.toggle("open");
 const a11yNav = navbar.getAttribute("aria-expanded");
 (a11yNav==="false")? navbar.setAttribute("aria-expanded", "true") : navbar.setAttribute("aria-expanded", "false");
 menu.classList.toggle("close-menu");
 navbar.classList.toggle("open");
 }, false);
}

function listOfContent(){
if(document.querySelector("body").classList.contains("post")){
  let tabContent = document.querySelector(".table-content");
  let subtitles = document.querySelectorAll("h3");
  if (subtitles.length > 1) {
      tabContent.querySelector("p").remove();
  }
  let table = document.createElement("ol");
  table.classList.add("content-list");
  for (let i = 1; i <= subtitles.length - 5; i++) {
      let listItem = document.createElement("li");
      let link = document.createElement("a");
      link.href = "#" + subtitles[i].id;
      link.innerHTML = subtitles[i].innerHTML;
      listItem.appendChild(link);
      table.appendChild(listItem);
      tabContent.appendChild(table);
  }
 }
}

window.addEventListener("DOMContentLoaded", function() {
 toggleMenu();
 listOfContent();
}, false);
