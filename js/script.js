// Abre e fecha o menu do celular

const botaoMenu = document.querySelector(".menu-toggle");
const menu = document.querySelector(".nav-links");

botaoMenu.addEventListener("click", function () {
    menu.classList.toggle("open");

    if (menu.classList.contains("open")) {
        botaoMenu.setAttribute("aria-expanded", "true");
        botaoMenu.setAttribute("aria-label", "Fechar menu");
    } else {
        botaoMenu.setAttribute("aria-expanded", "false");
        botaoMenu.setAttribute("aria-label", "Abrir menu");
    }
});

// Fecha o menu quando um link é clicado

const linksDoMenu = document.querySelectorAll(".nav-links a");

linksDoMenu.forEach(function (link) {
    link.addEventListener("click", function () {
        menu.classList.remove("open");
        botaoMenu.setAttribute("aria-expanded", "false");
        botaoMenu.setAttribute("aria-label", "Abrir menu");
    });
});

// Mostra o ano atual no rodapé

const ano = document.querySelector("#year");
ano.textContent = new Date().getFullYear();

// Mostra os elementos quando eles aparecem na tela

const elementos = document.querySelectorAll(".reveal");

function mostrarElementos() {
    elementos.forEach(function (elemento) {
        const posicao = elemento.getBoundingClientRect().top;

        if (posicao < window.innerHeight - 50) {
            elemento.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", mostrarElementos);
mostrarElementos();
