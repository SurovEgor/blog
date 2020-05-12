const searchButton = document.getElementById("search"),
    input = document.getElementById("input"),
    inputFocus = document.getElementById("inputFocus"),
    closeSearchButton = document.getElementById("close__search"),
    button = document.getElementById("hamburger-1"),
    mobile = document.getElementById("mobile");

    searchButton.addEventListener("click", () => { 
      input.classList.add("open");
      inputFocus.focus();
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

    button.addEventListener("click", () => {
        button.classList.toggle("is-active");
        mobile.classList.toggle("mobile__menu-active");
    });