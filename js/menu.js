const restaurante = document.querySelector('.restaurante' )
const menu = document.querySelector('.menu_navegacion' )

menu.classList.toggle("spread")

restaurante.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
    // restaurante.classList.toggle("showreconststaurante")
    
//  document.getElementById("restaurante").style.top="23px";
})

window.addEventListener("click",e=>{
    if(menu.classList.contains("spread")&& e.target !=
    menu && e.target != restaurante){
        // restaurante.classList.toggle("showrestaurante")
        menu.classList.toggle("spread")
        // document.getElementById("restaurante").style.top="51px";
    }
})