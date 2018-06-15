let menu = document.querySelector(".hamburger-menu");
let navbar = document.querySelector(".page-navigation");

menu.addEventListener("click", function() {
    let lista = document.querySelector(".nav-list");
    lista.classList.toggle("open");
    menu.classList.toggle("close-menu");
    navbar.classList.toggle("open");

}, false);

if (document.querySelector("body").classList.contains("post")) {
    window.addEventListener("DOMContentLoaded", function() {
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
    }, false);
}
