
document.addEventListener('DOMContentLoaded', () => {
    // Botão "Voltar ao Topo"
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '⬆️';
    scrollBtn.id = 'scrollTopBtn';
    document.body.appendChild(scrollBtn);

    window.onscroll = () => {
        scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
    };

    scrollBtn.onclick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Modo Escuro / Claro
    const toggleMode = document.getElementById('modoToggle');
    if (toggleMode) {
        toggleMode.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            localStorage.setItem('modo', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
        });

        // Carrega o modo salvo
        if (localStorage.getItem('modo') === 'dark') {
            document.body.classList.add('dark-mode');
        }
    }

    // Simulação de login
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const user = document.getElementById('email').value;
            localStorage.setItem('usuario', user);
            alert("Login simulado com sucesso!");
            window.location.href = 'index.html';
        });
    }

    // Mostrar nome no menu se logado
    const userName = localStorage.getItem('usuario');
    if (userName) {
        const perfilMenu = document.querySelector('.menu a[href="perfil.html"]');
        if (perfilMenu) {
            perfilMenu.innerHTML = `<i class="bi bi-person-fill"></i> ${userName}`;
        }
    }
});
