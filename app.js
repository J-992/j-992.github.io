document.addEventListener('DOMContentLoaded', () => {
    const initializeNavbar = () => {
        const menu = document.querySelector('#mobile-menu');
        const menuLinks = document.querySelector('.navbar__menu');
        const navLogo = document.querySelector('#navbar__logo');

        if (menu && menuLinks) {
            menu.addEventListener('click', function() {
                menu.classList.toggle('is-active');
                menuLinks.classList.toggle('active');
            });
        }
    };

    initializeNavbar(); // Ensure initialization after DOM content is loaded
});
