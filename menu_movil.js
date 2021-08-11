const menuHamburguesa = document.querySelector("#menuHamburguesa");
const sideBar = document.querySelector("#sideBar");
const titulos = document.querySelectorAll("li.titulo");
const subMenu = document.querySelectorAll("ul.contenedor");

menuHamburguesa.addEventListener("click",abrirMenu);

titulos.forEach(function(titulo){
    titulo.addEventListener("click",desplegarMenu);
})

function abrirMenu(){
    sideBar.classList.toggle("activo");
}

// forEach(function(titulo){
//     titulo.addEventListener("click",desplegarMenu);
// })

function desplegarMenu(){
    for(item of subMenu){
        item.classList.toggle("abierto");
    }
}
