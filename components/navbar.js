
//makes sure navbar is inserted into the dom
document.addEventListener('DOMContentLoaded', () => {
    const navbarHTML = `
        <nav class="navbar">
            <div class="navbar__container">
                <a href="/" class="navbar__logo">JR</a>
                <div class="navbar__toggle" id="mobile-menu">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div>
                <ul class="navbar__menu">
                    <li class="navbar__item">
                        <a href="/pages/about.html" class="navbar__links">About</a>
                    </li>
                    <li class="navbar__item">
                        <a href="/pages/projects.html" class="navbar__links">Projects</a>
                    </li>
                    <li class="navbar__item">
                        <a href="/pages/Jaffer_Razavi_Resume.pdf" target="_blank" class="navbar__links">Resume</a>
                    </li>
                    <li class="navbar__item">
                        <a href="/pages/contact.html" class="navbar__links">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    `;

    document.body.insertAdjacentHTML('afterbegin', navbarHTML);
});
