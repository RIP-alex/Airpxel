/**
 * main.js - Fichier principal qui importe et initialise tous les modules JavaScript
 * Ce fichier sert de point d'entrée pour charger les différentes fonctionnalités du site
 */

// Importation des modules
import { initNavigation, initSectionObserver, updateSectionMarker } from './navigation.js';
import { initThemeToggle } from './theme.js';
import { initHeroCanvas } from './hero.js';
import { initFormAnimations } from './form.js';
import { initRevealAnimations } from './animations.js';
import { initSkillTabs, initDefaultCategory } from './skill.js';
import { initTimeline } from './timeline.js';
import { initProjectModal } from './modal.js';

// Variables globales partagées entre les modules
export const state = {
    isThemeDark: false,
    isMenuOpen: false,
    currentSection: 'hero',
    hasScrolled: false,
    colors: {
        primary: '#0F172A',
        secondary: '#1E293B',
        accent: '#3B82F6',
        accentSecondary: '#10B981',
        accentTertiary: '#F59E0B'
    }
};

// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio - Initialisation...');
    
    // Masquer le loader après chargement
    setTimeout(() => {
        const loader = document.querySelector('.loader');
        if (loader) {
            loader.classList.add('hide');
            document.body.classList.remove('loading');
        }
    }, 1500);
    
    // Initialiser toutes les fonctionnalités
    initNavigation();
    initSectionObserver();
    initThemeToggle();
    initHeroCanvas();
    initFormAnimations();
    initRevealAnimations();
    initSkillTabs();
    initDefaultCategory();
    initTimeline();
    initProjectModal();
    
    // Gestion du défilement et du redimensionnement
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    // Animer les éléments visibles au chargement initial
    setTimeout(() => {
        document.querySelectorAll('.section.active-section [class*="reveal-"]').forEach(el => {
            el.classList.add('revealed');
        });
    }, 1800);
    
    console.log('Portfolio - Initialisation terminée');
});

// ===== GESTION DU SCROLL =====
function handleScroll() {
    // Mettre à jour la progress bar
    updateSectionMarker(state.currentSection);
    
    // Effet parallaxe pour les éléments de fond
    const parallaxElements = document.querySelectorAll('.parallax-bg');
    parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.2;
        const yPos = -(window.scrollY * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
}

// ===== GESTION DU REDIMENSIONNEMENT =====
function handleResize() {
    // La plupart des ajustements liés au redimensionnement sont gérés dans leurs modules respectifs
    // On peut ajouter ici des ajustements globaux si nécessaire
}

// Exporter les fonctions disponibles globalement
export { handleScroll, handleResize };