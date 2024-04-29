document.addEventListener("DOMContentLoaded", function () {
    // Função para rolar até seção sobre
    function scrollToSection(event) {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }

    // Seletor de links com hash #
    const linksHash = document.querySelectorAll("a[href^='#']");

    // Adiciona o evento de clique, serve pra quaolquer section que criei
    linksHash.forEach(function(link) {
        link.addEventListener('click', scrollToSection);
    });
});
