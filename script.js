"use strict";

const searchButton = document.getElementById("search"),
      input = document.getElementById("input"),
      closeSearchButton = document.getElementById("close__search"),
      buttonMenu = document.getElementById("button-menu"),
      navCover = document.getElementById("nav-cover");

    searchButton.addEventListener("click", () => { 
      input.classList.add("open");
      searchButton.style.display = "none";
      closeSearchButton.style.display = "block";
    });
   
    document.addEventListener('click', (event) => {
      if ((!input.contains(event.target)) && (!searchButton.contains(event.target))) {
         input.classList.remove("open");
         searchButton.style.display = "block";
         closeSearchButton.style.display = "none";
      }
    });
    
    closeSearchButton.addEventListener("click", () => {
        input.classList.remove("open");
        searchButton.style.display = "block";
        closeSearchButton.style.display = "none";
    });

    buttonMenu.addEventListener("click", () => {
        buttonMenu.classList.toggle("is-active");
        navCover.classList.toggle("opened");
    });