document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const savedTheme = localStorage.getItem('theme') || 'light-mode';
    body.classList.add(savedTheme);
});
