const imagenes = document.querySelectorAll(".imgn")
const imagenesLight = document.querySelector(".agregar-imagen")
const contenedorlight = document.querySelector(".imagen-ligth")
const close = document.querySelector(".close")
const restaurante1 = document.querySelector('.restaurante' )

imagenes.forEach(imagen => {
    imagen.addEventListener("click", ()=>{
        aparecerimagen(imagen.getAttribute("src"))
    })
})

// close.addEventListener("click",()=>{
//     contenedorlight.classList.toggle("show")
//     restaurante1.classList.toggle("showrestaurante")
// } )

contenedorlight.addEventListener("click",(e)=>{
if(e.target!= imagenesLight){
   
    contenedorlight.classList.toggle("show")
   
    restaurante1.classList.toggle("showrestaurante")
}



})
const aparecerimagen  = (imagen)=>{
    imagenesLight.src=imagen
    contenedorlight.classList.toggle("show")
    // imagenesLight.classList.toggle("showimage")
    restaurante1.classList.toggle("showrestaurante")

}
