const body= document.querySelector("body"),
      nav= document.querySelector("nav"),
      modeToggle= document.querySelector(".dark-light"),
      sidebarOpen= document.querySelector(".sidebarOpen"),      
      sunIcon = document.querySelector(".sun"),
      moonIcon = document.querySelector(".moon"),
      siderbarClose= document.querySelector(".siderbarClose");

      let getMode = localStorage.getItem("mode");
        if(getMode && getMode === "dark-mode"){
            body.classList.add("dark");
            modeToggle.classList.add("active");
        }

// esto es para cambiar el modo de claro <-> oscuro
modeToggle.addEventListener("click", () => {
    modeToggle.classList.toggle("active");
    body.classList.toggle("dark");

    if (!body.classList.contains("dark")) {
        localStorage.setItem("mode", "light-mode");
    } else {
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

//ocultar barra de navegación
let lastScrollTop = 0;

window.addEventListener("scroll", function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // Desplazando hacia abajo
        navbar.classList.add("nav-hidden");
    } else {
        // Desplazando hacia arriba
        navbar.classList.remove("nav-hidden");
    }
    lastScrollTop = scrollTop;
});

