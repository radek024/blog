function toggleMenu(){
let menu = document.querySelector(".hamburger-menu");
let navbar = document.querySelector(".page-navigation");
menu.addEventListener("click", function() {
 let lista = document.querySelector(".nav-list");
 lista.classList.toggle("open");
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
  for (let i = 1; i <= subtitles.length - 3; i++) {
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

function replaceBookInfo(){
if(document.querySelector("body").classList.contains("post")){
  const content = document.querySelector(".content .container");
  const section = document.createElement("section");
  section.classList.add("book");
  const sectionContent = document.createElement("div");
  sectionContent.classList.add("about");
  const sectionTitle = document.createElement("h3");
  sectionTitle.innerHTML = "Podobają Ci się treści które tworzę?";  sectionTitle.classList.add("title");
  const sectionText = document.createElement("p");
  sectionText.innerHTML = "Tak się składa, że jestem autorem książki dot. frameworku CSS. Omawiam tam tworzenie stron od podstaw z wykorzystaniem Bootstrap 3.";
  const sectionLink = document.createElement("a");
  sectionLink.href="http://www.goo.gl/sus928";
  sectionLink.innerHTML = "Może warto po nią sięgnąć?";
  const sectionImage = document.createElement("img");
  sectionImage.src="/blog/img/bootstrap-icon.png";
  sectionImage.classList.add("book-cover");
  sectionContent.appendChild(sectionTitle);
  sectionContent.appendChild(sectionText);
  sectionContent.appendChild(sectionLink);
  section.appendChild(sectionContent);
  section.appendChild(sectionImage);
  console.log(section);
  content.appendChild(section);

  const paragraph = document.querySelectorAll(".content .container p");
  let num = Math.floor((Math.random() * paragraph.length)+1);

  content.insertBefore(section, paragraph[num]);
 }
}
window.addEventListener("DOMContentLoaded", function() {
 toggleMenu();
 listOfContent();
 replaceBookInfo();
}, false);
