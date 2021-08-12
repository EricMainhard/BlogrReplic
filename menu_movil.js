const menuHamburguesa = document.querySelector("#menuHamburguesa");
const sideBar = document.querySelector("#sideBar");
const titulos = document.querySelectorAll("li.titulo");
const subMenu = document.querySelectorAll("ul.contenedor");
const flechas = document.querySelectorAll(".flecha");

////MENU MOBILE////
menuHamburguesa.addEventListener("click",abrirMenu);

titulos.forEach(function(titulo){
    titulo.addEventListener("click",desplegarMenu);
})

function abrirMenu(){
    sideBar.classList.toggle("activo");
}

function desplegarMenu(){
    for(item of subMenu){
        item.classList.toggle("abierto");
    };
    for(flecha of flechas){
        flecha.classList.toggle("rotar");
    }
}

///MENU MOBILE///

///MENU DESKTOP///

const menus = document.querySelectorAll(".lista_principal");

const titulosDesktop = document.querySelectorAll(".tituloDesktop");

titulosDesktop.forEach(function(item){
    item.addEventListener("click",desplegarMenuDesktop);    
});

function desplegarMenuDesktop(){
    for (menu of menus) {
        menu.classList.toggle("cerrado")};
    for(flecha of flechas){
        flecha.classList.toggle("rotar");
    }
}

