// Menu hamburger
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const mainMenu = document.getElementById('mainMenu');
    const barsIcon = hamburger.querySelector('.fa-bars');

    // Função para alternar o menu
    function toggleMenu() {
        mainMenu.classList.toggle('show');

        // Alternar entre ícone de barras e "X"
        if (mainMenu.classList.contains('show')) {
            barsIcon.classList.remove('fa-bars');
            barsIcon.classList.add('fa-times');
            hamburger.setAttribute('aria-label', 'Fechar menu');
            // Adiciona overlay quando o menu está aberto
            document.body.style.overflow = 'hidden';
        } else {
            barsIcon.classList.remove('fa-times');
            barsIcon.classList.add('fa-bars');
            hamburger.setAttribute('aria-label', 'Abrir menu');
            document.body.style.overflow = '';
        }
    }

    // Evento de clique no hamburger
    hamburger.addEventListener('click', toggleMenu);

    // Fechar o menu ao clicar em um link
    const menuLinks = mainMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mainMenu.classList.contains('show')) {
                toggleMenu();
            }
        });
    });

    // Fechar o menu ao clicar fora
    document.addEventListener('click', function (event) {
        if (!mainMenu.contains(event.target) && !hamburger.contains(event.target)) {
            if (mainMenu.classList.contains('show')) {
                toggleMenu();
            }
        }
    });
});