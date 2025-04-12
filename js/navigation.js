/**
 * navigation.js - Gestion de la navigation et de la détection des sections
 * Ce module gère la barre latérale, le menu mobile et l'observation des sections
 */

import { state } from './main.js';

/**
 * Initialise les fonctionnalités de navigation
 */
function initNavigation() {
    console.log('Initialisation de la navigation');
    
    // Gestion de la barre latérale
    const navToggle = document.querySelector('.nav-toggle');
    const sideNav = document.querySelector('.side-nav');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            state.isMenuOpen = !state.isMenuOpen;
            sideNav.classList.toggle('expanded');
            sideNav.classList.toggle('mobile-visible');
            console.log(`Menu ${state.isMenuOpen ? 'ouvert' : 'fermé'}`);
        });
    }

    // Vérifier si le menu doit être ouvert en fonction de la largeur d'écran
    function checkScreenSize() {
        if (window.innerWidth > 1200) {
            sideNav.classList.add('expanded');
            state.isMenuOpen = true;
        } else if (window.innerWidth <= 1200 && window.innerWidth > 768) {
            sideNav.classList.remove('expanded');
            sideNav.classList.remove('mobile-visible');
            state.isMenuOpen = false;
        } else if (window.innerWidth <= 768) {
            sideNav.classList.remove('expanded');
            sideNav.classList.remove('mobile-visible');
            state.isMenuOpen = false;
        }
    }

    // Vérifier la taille d'écran au chargement
    checkScreenSize();

    // Vérifier la taille d'écran lors du redimensionnement
    window.addEventListener('resize', checkScreenSize);

    // Gestion des liens de navigation
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Fermer le menu sur mobile après clic
            if (window.innerWidth < 768) {
                sideNav.classList.remove('mobile-visible');
                state.isMenuOpen = false;
            }

            // Si lien interne, défilement en douceur
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    const offsetTop = targetElement.offsetTop;

                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });

                    // Mettre à jour le lien actif
                    navLinks.forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
                    state.currentSection = targetId;
                    updateSectionMarker(targetId);
                }
            }
        });
    });

    // Initialiser le marqueur de section
    updateSectionMarker('hero');
}

/**
 * Initialise l'observateur des sections pour la navigation
 */
function initSectionObserver() {
    console.log('Initialisation de l\'observateur de sections');
    
    const sections = document.querySelectorAll('.section');
    const sectionMarker = document.querySelector('.section-marker');

    const options = {
        root: null,
        rootMargin: '-20% 0px -79% 0px', // Considère qu'une section est active quand elle occupe 20-80% de la vue
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.getAttribute('id');
                console.log(`Section active: ${sectionId}`);

                // Mettre à jour le lien actif
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });

                // Mettre à jour la section actuelle
                state.currentSection = sectionId;
                document.querySelectorAll('.section').forEach(s => {
                    s.classList.remove('active-section');
                });
                entry.target.classList.add('active-section');

                // Mettre à jour le marqueur de section
                updateSectionMarker(sectionId);

                // Animer les éléments de la section actuelle
                const revealElements = entry.target.querySelectorAll('[class*="reveal-"]');
                revealElements.forEach(el => {
                    el.classList.add('revealed');
                });

                // Animer les éléments échelonnés
                const staggerElements = entry.target.querySelectorAll('.stagger-reveal');
                staggerElements.forEach(el => {
                    el.classList.add('revealed');
                });
                
                // Gérer l'animation du hero
                if (sectionId === 'hero' && window.heroAnimation) {
                    window.heroAnimation.init(state.colors);
                } else if (window.heroAnimation) {
                    window.heroAnimation.stop();
                }
            }
        });
    }, options);

    // Observer toutes les sections
    sections.forEach(section => {
        observer.observe(section);
    });

    // Afficher le marqueur de section après avoir scrollé un peu
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100 && !state.hasScrolled) {
            state.hasScrolled = true;
            sectionMarker.classList.add('visible');
        } else if (window.scrollY <= 100) {
            state.hasScrolled = false;
            sectionMarker.classList.remove('visible');
        }
    });
}

/**
 * Met à jour le marqueur de section
 * @param {string} sectionId - ID de la section active
 */
function updateSectionMarker(sectionId) {
    const marker = document.querySelector('.section-marker');
    if (!marker) return;
    
    const sectionTitle = document.querySelector(`#${sectionId} .section-title`);
    let title = '';

    if (sectionId === 'hero') {
        title = 'Accueil';
    } else if (sectionTitle) {
        title = sectionTitle.textContent;
    } else {
        title = sectionId.charAt(0).toUpperCase() + sectionId.slice(1);
    }

    const currentSectionElement = document.querySelector('.current-section');
    if (currentSectionElement) {
        currentSectionElement.textContent = title;
    }

    // Calculer la progression dans la section
    const section = document.getElementById(sectionId);
    if (section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const scrollY = window.scrollY;
        const viewportHeight = window.innerHeight;

        // Calculer le pourcentage de progression
        let progress = (scrollY - sectionTop + viewportHeight / 2) / sectionHeight;
        progress = Math.max(0, Math.min(1, progress));

        const progressBar = document.querySelector('.progress-bar');
        if (progressBar) {
            progressBar.style.width = `${progress * 100}%`;
        }
    }
}

// Exporter les fonctions pour les utiliser dans d'autres modules
export { initNavigation, initSectionObserver, updateSectionMarker };