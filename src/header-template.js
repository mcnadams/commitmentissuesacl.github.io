export default function makeNavigationTemplate() {
    const dom = `
    <header class="header">
        <section class="header-container">
            <nav class="nav-container">
                <a href="index.html"><img src="assets/boundless-logo.svg" alt="Logo" id="logo-image"></a>
                <a href="" id="map-nav" class="header-nav">All Routes</a>
                <a href="aboutus.html" class="header-nav">About Us</a>
            </nav>
        </section>
    </header>
    `;
    const template = document.createElement('template');
    template.innerHTML = dom;
    return template.content;
}

export function makeFooter() {
    const template = document.createElement('template');
    template.innerHTML = `
        <footer class="footer">
            <section id="footer-container">
                <img src="assets/boundless-logo-white.svg" id="footer-logo">
                <p id="footer-copyright">&copy; Commitment Issues 2019</p>
            </section>
        </footer>
    `;

    return template.content;
}

export function updateUserNameDisplay(user) {
    const template = document.createElement('template');
    const avatar = user.photoURL || '';

    template.innerHTML = `
        <section id="user-name-container">
            <img src="${avatar}" id="user-avatar">
            <a href="runnerprofile.html"><span id="user-name-display">${user.displayName}</span></a>
            <button>Logout</button>
        </section>
    `;

    return template.content;
}

const headerContainer = document.getElementById('header-container');

export function loadHeader() {
    const dom = makeNavigationTemplate();
    headerContainer.appendChild(dom);
}