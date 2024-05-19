let mostrador = document.getElementById("mostrador");
let seleccion = document.getElementById("seleccion");
let imgSeleccionada = document.getElementById("img");
let modeloSeleccionado = document.getElementById("modelo");
let descripSeleccionada = document.getElementById("descripcion");
let precioSeleccionado = document.getElementById("precio");

function cargar(item){
    quitarBordes();
      // Get description text from the element with the corresponding class
    const containerWidth = document.documentElement.clientWidth;
    const seleccionWidth = containerWidth * 0.4; // Set width of seleccion to 40% of container
    mostrador.style.width = `${containerWidth - seleccionWidth}px`;
    seleccion.style.width = `${seleccionWidth}px`;
    seleccion.style.opacity = "1";
    item.style.border = "2px solid red";
  
    imgSeleccionada.src = item.getElementsByTagName("img")[0].src;
  
    modeloSeleccionado.innerHTML =  item.getElementsByTagName("p")[0].innerHTML;
  
    //descripSeleccionada.innerHTML = "Descripción del modelo ";
  
    precioSeleccionado.innerHTML =  item.getElementsByTagName("span")[0].innerHTML;
    
  
  
  }
function cerrar(){
    mostrador.style.width = "100%";
    seleccion.style.width = "0%";
    seleccion.style.opacity = "0";
    quitarBordes();
}
function quitarBordes(){
    var items = document.getElementsByClassName("item");
    for(i=0;i <items.length; i++){
        items[i].style.border = "none";
    }
}