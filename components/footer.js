document.addEventListener('DOMContentLoaded', () => {
    const footerHTML = `
        <div class="footer__container">
            <div class="footer__links">
                <p class="footer__copyright">
                    Built and designed by Jaffer
                </p>
                <p class="footer__copyright">
                    All rights reserved.
                </p>
                <ul class="footer__socials">
                    <a href="https://www.linkedin.com/in/jafferr/" class="footer__logo"><i class="fab fa-linkedin"></i></a>
                    <a href="https://github.com/J-992" class="footer__logo"><i class="fab fa-github"></i></a>
                    <a href="mailto:jhrazavi@uwaterloo.ca" class="footer__logo"><i class="far fa-envelope"></i></a>
                </ul>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', footerHTML);
});
