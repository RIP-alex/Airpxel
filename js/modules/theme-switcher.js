/* ===== CHANGEMENT DE THÈME CLAIR/SOMBRE ===== */
/* Gestion accessible du thème avec préférence utilisateur */

export class ThemeSwitcher {
    constructor() {
        this.init();
    }

    init() {
        this.currentTheme = localStorage.getItem('cv-theme') || 'light';
        this.applyTheme(this.currentTheme);
        this.setupToggle();
    }

    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        this.updateToggleState(theme);
    }

    setupToggle() {
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                this.toggleTheme();
            });
        }
    }

    toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.applyTheme(this.currentTheme);
        localStorage.setItem('cv-theme', this.currentTheme);
    }

    updateToggleState(theme) {
        const toggleText = document.querySelector('.theme-toggle-text');
        if (toggleText) {
            toggleText.textContent = theme === 'light' ? 'Thème sombre' : 'Thème clair';
        }
    }
}