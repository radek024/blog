var menu=document.querySelector(".hamburger-menu");
var navbar=document.querySelector(".page-navigation");
menu.addEventListener("click", function(){
var lista=document.querySelector(".nav-list");
lista.classList.toggle("open");
menu.classList.toggle("close-menu");
navbar.classList.toggle("open");

}, false);

window.addEventListener("load", function(){
  var tabContent=document.querySelector(".table-content");
  var subtitles=document.querySelectorAll("h3");
  if(subtitles.length>1){
    tabContent.querySelector("p").remove();
  }
  var table=document.createElement("ol");
  table.classList.add("content-list");
  for(var i=1; i<=subtitles.length-2; i++){
  var listItem=document.createElement("li");
  var link=document.createElement("a");
  link.href="#"+subtitles[i].id;
  link.innerHTML=subtitles[i].innerHTML;
  listItem.appendChild(link);
  table.appendChild(listItem);
  tabContent.appendChild(table);
  }
  }, false)
