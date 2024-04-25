document.addEventListener("DOMContentLoaded", function () {
    const areaItems = document.querySelectorAll(".areas ul li");
    const descricaoSections = document.querySelectorAll(".descricao section");

    areaItems.forEach(function (item) {
        item.addEventListener("click", function () {
            const targetId = this.getAttribute("data-target");
            const targetSection = document.getElementById(targetId);

            // Oculta todas as seções de descrição
            descricaoSections.forEach(function (section) {
                section.style.display = "none";
            });

            // Mostra apenas a seção da área correspondente
            targetSection.style.display = "block";

            // Remove a classe "active" de todos os itens da lista
            areaItems.forEach(function (li) {
                li.classList.remove("active");
            });

            // Adiciona a classe "active" apenas ao item clicado
            this.classList.add("active");
        });
    });

    descricaoSections.forEach(function (section) {
        section.style.display = "none";
    });

    //Seleciona o Front-End por padrão ao carregar a página
    const frontEndItem = document.querySelector('.areas ul li[data-target="front"]');
    if (frontEndItem) {
        frontEndItem.click();
    }
});
