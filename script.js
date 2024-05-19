const body= document.querySelector("body"),
      nav= document.querySelector("nav"),
      modeToggle= document.querySelector(".dark-light"),
      sidebarOpen= document.querySelector(".sidebarOpen"),
      siderbarClose= document.querySelector(".siderbarClose");

      let getMode = localStorage.getItem("mode");
        if(getMode && getMode === "dark-mode"){
            body.classList.add("dark");
        }

// esto es para cambiar el modo de claro <-> oscuro
modeToggle.addEventListener("click", () => {
    modeToggle.classList.toggle("active");
    body.classList.toggle("dark");
    const personSection = document.querySelector(".person");
    personSection.classList.toggle("dark-mode");
    console.log("Clase dark-mode en person:", personSection.classList.contains("dark-mode"));

    if(!body.classList.contains("dark")){
        localStorage.setItem("mode", "light-mode");
    }else{
        localStorage.setItem("mode", "dark-mode");
    }
});
// este es del sidebar
sidebarOpen.addEventListener("click", () =>{
    nav.classList.add("active");
});

body.addEventListener("click", e =>{
    let clickedElm = e.target;

    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    }
});


