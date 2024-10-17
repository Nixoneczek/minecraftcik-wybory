function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
}

// Funkcja do podświetlania aktywnego linku
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('.menu a').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
        toggleMenu(); // Zamknij menu po kliknięciu
    });
});

