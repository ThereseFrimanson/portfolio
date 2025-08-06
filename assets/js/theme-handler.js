console.log(document.getElementById('theme-switch'))
console.log("✅ theme-handler.js running");

const toggle = document.getElementById('theme-switch');
const root = document.documentElement;

if (!toggle) {
    console.warn("⚠️ #theme-switch not found");
} else {
    console.log("✅ Toggle found");

    // Sätt checkbox enligt sparat tema
    toggle.checked = root.classList.contains('dark-mode');

    toggle.addEventListener('change', () => {
        console.log("🌓 Toggle clicked");
        if (toggle.checked) {
            root.classList.remove('light-mode');
            root.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        } else {
            root.classList.remove('dark-mode');
            root.classList.add('light-mode');
            localStorage.setItem('theme', 'light-mode');
        }
    });
}
