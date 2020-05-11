let searchButton = document.getElementById("search"),
    input = document.getElementById("input");


    searchButton.addEventListener("click", () => { 
      input.classList.add("open");
      input.focus();
    });
   
    document.addEventListener('click', (event) => {
      if ((!input.contains(event.target)) && (!searchButton.contains(event.target)))
          input.classList.remove("open");
    });