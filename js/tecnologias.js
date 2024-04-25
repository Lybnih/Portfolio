document.addEventListener("DOMContentLoaded", function () { /*roda só após o html carregar*/

    const areaItems = document.querySelectorAll(".areas ul li"); /* tras as opçoes dentro da lista ul li*/
    const logoSections = document.querySelectorAll(".logos section"); /* tras as imagens dasa logos*/

    areaItems.forEach(function (item) {

        item.addEventListener("click", function () { /*quando um dos itens é clicado, a função é executada.*/

            const targetId = this.getAttribute("data-target"); /*trouxe o valor de data target que coloquei nos itens html */
            const targetSection = document.getElementById(targetId);

            
            logoSections.forEach(function (section) {
                section.style.display = "none";// Oculta todas as imagens quando uma área é selecionada
            });

            
            targetSection.style.display = "block";// Mostra apenas as imagens da área correspondente

           
            areaItems.forEach(function (li) {
                li.classList.remove("active"); // Remove a classe "active" de todos os itens da lista
            });

           
            this.classList.add("active"); // Adiciona a classe "active" apenas ao item clicado
        });
    });

    // Oculta todas as imagens quando nenhuma área é selecionada
    function hideAllImages() {
        logoSections.forEach(function (section) {
            section.style.display = "none";
        });
    }

    // Verifica se há alguma área selecionada ao carregar a página
    let areaSelected = false;
    areaItems.forEach(function (item) {
        if (item.classList.contains("active")) {
            areaSelected = true;
        }
    });
    if (!areaSelected) {
        hideAllImages();
    }
});

// AQUI O FRONTEND JA É SELECIONADO
document.addEventListener('DOMContentLoaded', function () {
    const areas = document.querySelectorAll('.tecnologias .areas ul li');

    areas.forEach(area => {
        area.addEventListener('click', function () {
            areas.forEach(a => a.classList.remove('clicked'));
            this.classList.add('clicked');
        });
    });
});

