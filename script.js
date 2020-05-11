let searchButton = document.getElementById("search"),
    input = document.getElementById("input");


    searchButton.addEventListener("click", () => { 
      input.classList.add("open");
    });
   
  document.addEventListener('click', (event) => !input.contains(event.target) && !searchButton.contains(event.target) ? input.classList.remove("open"): false)
  



// (input.classList.contains("open")