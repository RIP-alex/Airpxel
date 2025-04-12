/**
 * theme.js - Gestion du thème clair/sombre
 * Ce module gère le basculement entre les thèmes et sauvegarde les préférences
 */

import { state } from './main.js';

/**
 * Initialise le toggle du thème clair/sombre
 */
function initThemeToggle() {
    console.log('Initialisation du toggle de thème');
    
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) {
        console.warn('Élément theme-toggle non trouvé');
        return;
    }
    
    // Vérifier si un thème est sauvegardé dans localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        state.isThemeDark = false;
        
        const themeText = document.querySelector('.theme-toggle-text');
        if (themeText) {
            themeText.textContent = 'Thème sombre';
        }
        
        // Mettre à jour les couleurs pour le mode clair
        updateColorsForLightTheme();
    }
    
    // Gérer le changement de thème
    themeToggle.addEventListener('click', () => {
        state.isThemeDark = !state.isThemeDark;
        
        if (state.isThemeDark) {
            applyDarkTheme();
        } else {
            applyLightTheme();
        }
        
        // Réinitialiser l'animation hero avec les nouvelles couleurs
        if (window.heroAnimation && typeof window.heroAnimation.init === 'function') {
            window.heroAnimation.init(state.colors);
        }
    });
}

/**
 * Applique le thème sombre
 */
function applyDarkTheme() {
    console.log('Application du thème sombre');
    
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    
    const themeText = document.querySelector('.theme-toggle-text');
    if (themeText) {
        themeText.textContent = 'Thème clair';
    }
    
    // Mettre à jour les couleurs pour le mode sombre
    updateColorsForDarkTheme();
}

/**
 * Applique le thème clair
 */
function applyLightTheme() {
    console.log('Application du thème clair');
    
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    
    const themeText = document.querySelector('.theme-toggle-text');
    if (themeText) {
        themeText.textContent = 'Thème sombre';
    }
    
    // Mettre à jour les couleurs pour le mode clair
    updateColorsForLightTheme();
}

/**
 * Met à jour les couleurs pour le thème sombre
 */
function updateColorsForDarkTheme() {
    state.colors.primary = '#0F172A';
    state.colors.secondary = '#1E293B';
    state.colors.accent = '#3B82F6';
    state.colors.accentSecondary = '#10B981';
    state.colors.accentTertiary = '#F59E0B';
}

/**
 * Met à jour les couleurs pour le thème clair
 */
function updateColorsForLightTheme() {
    state.colors.primary = '#F8FAFC';
    state.colors.secondary = '#F1F5F9';
    state.colors.accent = '#3B82F6';
    state.colors.accentSecondary = '#10B981';
    state.colors.accentTertiary = '#F59E0B';
}

// Exporter les fonctions
export { initThemeToggle };