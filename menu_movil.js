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
    titulos[0].onclick = () => {
        subMenu[0].classList.toggle("abierto");
        flechas[0].classList.toggle("rotar");
    }
    titulos[1].onclick = () => {
        subMenu[1].classList.toggle("abierto");
        flechas[1].classList.toggle("rotar");
    }
    titulos[2].onclick = () => {
        subMenu[2].classList.toggle("abierto");
        flechas[2].classList.toggle("rotar");
    }
}

// for(item of subMenu){
//     item.classList.toggle("abierto");
// };
// for(flecha of flechas){
//     flecha.classList.toggle("rotar");
// }

///MENU MOBILE///

///MENU DESKTOP///

const menus = document.querySelectorAll(".lista_principal");

const titulosDesktop = document.querySelectorAll(".tituloDesktop");

titulosDesktop.forEach(function(item){
    item.addEventListener("click",desplegarMenuDesktop);    
});

function desplegarMenuDesktop(){
    titulosDesktop[0].onclick = () => {
        menus[0].classList.toggle("cerrado");
        flechas[0].classList.toggle("rotar");
    }
    titulosDesktop[1].onclick = () => {
        menus[1].classList.toggle("cerrado");
        flechas[1].classList.toggle("rotar");
    }
    titulosDesktop[2].onclick = () => {
        menus[2].classList.toggle("cerrado");
        flechas[2].classList.toggle("rotar");
    }
}


// if (titulosDesktop[0].click) {
//     menus[0].classList.toggle("cerrado");
// }
// else if (titulosDesktop[1].click) {
//     menus[1].classList.toggle("cerrado");
// }
// else if (titulosDesktop[2].click) {
//     menus[2].classList.toggle("cerrado");
// }

// for (menu of menus) {
//     menu.classList.toggle("cerrado")};
// for(flecha of flechas){
//     flecha.classList.toggle("rotar");
// }
