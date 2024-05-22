let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.getElementById("icone-x")

function abreFechaMenu() {
    // Menu fechado - tem classe menu-fechado
    // Menu fechado - não tem a classe menu-fechado

    // menu.classList.toggle("menu-fechado")
    // Alterna a classe "menu-fechado" no menu

    // Se o menu contém a classe menu-fechado
    if (menu.classList.contains("menu-fechado")) {
        // abrir menu
        menu.classList.remove("menu-fechado")

        // Esconder icone barras
        iconeBarras.style.display = "none"

        // Mostrar o icone do X
        iconeX.style.display = "inline"
    } else {
        // Fechar o menu - adcionar a classe menu-fechado
        menu.classList.add("menu-fechado")

        // Esconder icone do x 
        iconeX.style.display = "none"

        // Mostrar o icone barras
        iconeBarras.style.display = "inline"
    }

}

onresize = () => {
    menu.classList.remove("menu-fechado")

    iconeBarras.style.display = "none"

    iconeX.style.display = "inline"
}

// Carrosel

let banner = document.querySelector(".banner")

// let slides = [0,1,2]
// slides [0] => primeiro banner
// slides [1] => segundo banner
// slides [2] => terceiro banner
let slides = [
    "primeiro-banner",
    "segundo-banner",
    "terceiro-banner"
]

let slideAtual = 0

banner.classList.add (slides[slideAtual])

function mostrarProximoSlide() {
    // Remover o slide anterior
    banner.classList.remove(slides[slideAtual])

    // Somar 1 na variavel slideAtual
    slideAtual++


    // Mostrar slide de acordo com slide atual
    banner.classList.add(slides[slideAtual])

}

