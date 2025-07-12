/**
 * Gestionnaire de Navigation Principal
 * Gère le routage, les sections actives, et les animations de transition
 */
class NavigationManager {
    constructor() {
        // Éléments DOM principaux
        this.header = Utils.DOM.select('.header');
        this.navLinks = Utils.DOM.selectAll('.nav-link');
        this.sections = Utils.DOM.selectAll('section[id]');
        this.mobileToggle = Utils.DOM.select('.mobile-menu-toggle');
        this.mobileMenu = Utils.DOM.select('.main-nav');
        this.scrollProgress = Utils.DOM.select('.scroll-progress-bar');
        
        // État de navigation
        this.currentSection = 'hero';
        this.isNavigating = false;
        this.isMobileMenuOpen = false;
        
        // Configuration
        this.config = {
            headerHeight: 64, // Hauteur du header fixe
            scrollOffset: 100, // Offset pour la détection de section
            animationDuration: 600, // Durée des animations en ms
            mobileBreakpoint: 768 // Point de rupture mobile
        };
        
        // Initialisation
        this.init();
        
        Utils.Debug.log('info', 'NavigationManager initialisé');
    }

    /**
     * Initialisation du gestionnaire de navigation
     */
    init() {
        this.bindEvents();
        this.setupScrollSpy();
        this.updateActiveLink();
        this.handleInitialHash();
        this.observeScrollProgress();
    }

    /**
     * Liaison des événements de navigation
     */
    bindEvents() {
        // Événements des liens de navigation
        this.navLinks.forEach(link => {
            Utils.Events.on(link, 'click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                this.navigateToSection(targetId);
                
                // Fermer le menu mobile si ouvert
                if (this.isMobileMenuOpen) {
                    this.closeMobileMenu();
                }
            });
        });

        // Toggle menu mobile
        if (this.mobileToggle) {
            Utils.Events.on(this.mobileToggle, 'click', () => {
                this.toggleMobileMenu();
            });
        }

        // Fermeture du menu mobile sur redimensionnement
        Utils.Events.on(window, 'resize', Utils.Performance.debounce(() => {
            if (window.innerWidth > this.config.mobileBreakpoint && this.isMobileMenuOpen) {
                this.closeMobileMenu();
            }
        }, 250));

        // Gestion du scroll pour le header
        Utils.Events.on(window, 'scroll', Utils.Performance.throttle(() => {
            this.updateHeaderStyle();
            this.updateActiveLink();
            this.updateScrollProgress();
        }, 16)); // 60fps

        // Navigation au clavier
        Utils.Events.on(document, 'keydown', (e) => {
            this.handleKeyboardNavigation(e);
        });

        // Gestion du hash URL
        Utils.Events.on(window, 'hashchange', () => {
            this.handleHashChange();
        });
    }

    /**
     * Navigation vers une section spécifique
     * @param {string} sectionId - ID de la section cible
     * @param {Object} options - Options de navigation
     */
    async navigateToSection(sectionId, options = {}) {
        const { 
            smooth = true, 
            updateUrl = true, 
            offset = this.config.headerHeight 
        } = options;

        // Éviter les navigations multiples simultanées
        if (this.isNavigating) return;
        
        const targetSection = Utils.DOM.select(`#${sectionId}`);
        if (!targetSection) {
            Utils.Debug.log('warn', `Section non trouvée: ${sectionId}`);
            return;
        }

        this.isNavigating = true;

        try {
            // Calcul de la position cible
            const targetPosition = targetSection.offsetTop - offset;
            
            // Animation de scroll
            if (smooth) {
                await this.smoothScrollTo(targetPosition);
            } else {
                window.scrollTo(0, targetPosition);
            }

            // Mise à jour de l'état
            this.currentSection = sectionId;
            this.updateActiveLink();

            // Mise à jour de l'URL
            if (updateUrl) {
                this.updateUrl(sectionId);
            }

            // Déclenchement d'événement personnalisé
            Utils.Events.trigger(document, 'sectionChanged', {
                sectionId,
                element: targetSection
            });

            Utils.Debug.log('info', `Navigation vers la section: ${sectionId}`);

        } catch (error) {
            Utils.Debug.log('error', 'Erreur de navigation:', error);
        } finally {
            this.isNavigating = false;
        }
    }

    /**
     * Animation de scroll fluide
     * @param {number} targetPosition - Position cible
     * @returns {Promise} Promise d'animation
     */
    smoothScrollTo(targetPosition) {
        return new Promise((resolve) => {
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;
            const duration = this.config.animationDuration;
            let startTime = null;

            function animation(currentTime) {
                if (startTime === null) startTime = currentTime;
                const timeElapsed = currentTime - startTime;
                const progress = Math.min(timeElapsed / duration, 1);

                // Fonction d'easing (ease-out)
                const easeOut = 1 - Math.pow(1 - progress, 3);
                
                window.scrollTo(0, startPosition + distance * easeOut);

                if (progress < 1) {
                    requestAnimationFrame(animation);
                } else {
                    resolve();
                }
            }

            requestAnimationFrame(animation);
        });
    }

    /**
     * Configuration du Scroll Spy
     * Détecte automatiquement la section visible
     */
    setupScrollSpy() {
        const observerOptions = {
            threshold: 0.3,
            rootMargin: `-${this.config.scrollOffset}px 0px -50% 0px`
        };

        this.scrollObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.isNavigating) {
                    const sectionId = entry.target.id;
                    if (sectionId !== this.currentSection) {
                        this.currentSection = sectionId;
                        this.updateActiveLink();
                        this.updateUrl(sectionId, false); // Sans scroll
                    }
                }
            });
        }, observerOptions);

        // Observer toutes les sections
        this.sections.forEach(section => {
            this.scrollObserver.observe(section);
        });
    }

    /**
     * Mise à jour du lien actif dans la navigation
     */
    updateActiveLink() {
        this.navLinks.forEach(link => {
            const linkTarget = link.getAttribute('href').substring(1);
            
            if (linkTarget === this.currentSection) {
                Utils.DOM.addClass(link, 'active');
                
                // Mise à jour ARIA pour l'accessibilité
                link.setAttribute('aria-current', 'page');
            } else {
                Utils.DOM.removeClass(link, 'active');
                link.removeAttribute('aria-current');
            }
        });
    }

    /**
     * Gestion du style du header au scroll
     */
    updateHeaderStyle() {
        const scrollY = window.pageYOffset;
        
        if (scrollY > 50) {
            Utils.DOM.addClass(this.header, 'scrolled');
        } else {
            Utils.DOM.removeClass(this.header, 'scrolled');
        }
    }

    /**
     * Mise à jour de la barre de progression du scroll
     */
    updateScrollProgress() {
        if (!this.scrollProgress) return;

        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.pageYOffset;
        
        const totalHeight = documentHeight - windowHeight;
        const progress = (scrollTop / totalHeight) * 100;
        
        this.scrollProgress.style.width = `${Math.min(progress, 100)}%`;
    }

    /**
     * Observer la progression du scroll
     */
    observeScrollProgress() {
        // Mise à jour des propriétés CSS personnalisées pour les animations
        Utils.Events.on(window, 'scroll', Utils.Performance.throttle(() => {
            const scrollY = window.pageYOffset;
            document.documentElement.style.setProperty('--scroll-y', `${scrollY}px`);
        }, 16));
    }

    /**
     * Gestion du menu mobile
     */
    toggleMobileMenu() {
        if (this.isMobileMenuOpen) {
            this.closeMobileMenu();
        } else {
            this.openMobileMenu();
        }
    }

    openMobileMenu() {
        Utils.DOM.addClass(this.mobileMenu, 'active');
        this.mobileToggle.setAttribute('aria-expanded', 'true');
        this.isMobileMenuOpen = true;
        
        // Empêcher le scroll du body
        document.body.style.overflow = 'hidden';
        
        // Focus sur le premier lien pour l'accessibilité
        const firstLink = this.mobileMenu.querySelector('.nav-link');
        if (firstLink) {
            setTimeout(() => firstLink.focus(), 100);
        }
        
        Utils.Debug.log('info', 'Menu mobile ouvert');
    }

    closeMobileMenu() {
        Utils.DOM.removeClass(this.mobileMenu, 'active');
        this.mobileToggle.setAttribute('aria-expanded', 'false');
        this.isMobileMenuOpen = false;
        
        // Restaurer le scroll du body
        document.body.style.overflow = '';
        
        Utils.Debug.log('info', 'Menu mobile fermé');
    }

    /**
     * Navigation au clavier (accessibilité)
     * @param {KeyboardEvent} e - Événement clavier
     */
    handleKeyboardNavigation(e) {
        // Échap pour fermer le menu mobile
        if (e.key === 'Escape' && this.isMobileMenuOpen) {
            this.closeMobileMenu();
            this.mobileToggle.focus();
        }

        // Navigation par touches fléchées dans le menu
        if (this.isMobileMenuOpen && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
            e.preventDefault();
            this.navigateMenuWithKeyboard(e.key === 'ArrowDown' ? 1 : -1);
        }

        // Raccourcis clavier pour navigation rapide (Ctrl + numéro)
        if (e.ctrlKey && e.key >= '1' && e.key <= '6') {
            e.preventDefault();
            const sectionIndex = parseInt(e.key) - 1;
            const sections = ['hero', 'about', 'experience', 'skills', 'projects', 'contact'];
            if (sections[sectionIndex]) {
                this.navigateToSection(sections[sectionIndex]);
            }
        }
    }

    /**
     * Navigation au clavier dans le menu
     * @param {number} direction - Direction (1 pour bas, -1 pour haut)
     */
    navigateMenuWithKeyboard(direction) {
        const focusedElement = document.activeElement;
        const menuLinks = Array.from(this.mobileMenu.querySelectorAll('.nav-link'));
        const currentIndex = menuLinks.indexOf(focusedElement);
        
        if (currentIndex !== -1) {
            const nextIndex = currentIndex + direction;
            if (nextIndex >= 0 && nextIndex < menuLinks.length) {
                menuLinks[nextIndex].focus();
            }
        }
    }

    /**
     * Gestion des changements de hash URL
     */
    handleHashChange() {
        const hash = window.location.hash.substring(1);
        if (hash && hash !== this.currentSection) {
            this.navigateToSection(hash, { updateUrl: false });
        }
    }

    /**
     * Gestion du hash initial au chargement
     */
    handleInitialHash() {
        const hash = window.location.hash.substring(1);
        if (hash && Utils.DOM.select(`#${hash}`)) {
            // Petite temporisation pour permettre le chargement complet
            setTimeout(() => {
                this.navigateToSection(hash, { smooth: false, updateUrl: false });
            }, 100);
        }
    }

    /**
     * Mise à jour de l'URL sans rechargement
     * @param {string} sectionId - ID de la section
     * @param {boolean} addToHistory - Ajouter à l'historique
     */
    updateUrl(sectionId, addToHistory = true) {
        const newUrl = `#${sectionId}`;
        
        if (addToHistory) {
            history.pushState({ section: sectionId }, '', newUrl);
        } else {
            history.replaceState({ section: sectionId }, '', newUrl);
        }
    }

    /**
     * Navigation vers la section précédente
     */
    goToPreviousSection() {
        const sections = Array.from(this.sections);
        const currentIndex = sections.findIndex(section => section.id === this.currentSection);
        
        if (currentIndex > 0) {
            const previousSection = sections[currentIndex - 1];
            this.navigateToSection(previousSection.id);
        }
    }

    /**
     * Navigation vers la section suivante
     */
    goToNextSection() {
        const sections = Array.from(this.sections);
        const currentIndex = sections.findIndex(section => section.id === this.currentSection);
        
        if (currentIndex < sections.length - 1) {
            const nextSection = sections[currentIndex + 1];
            this.navigateToSection(nextSection.id);
        }
    }

    /**
     * Obtention de la section actuellement visible
     * @returns {string} ID de la section active
     */
    getCurrentSection() {
        return this.currentSection;
    }

    /**
     * Vérification si une section existe
     * @param {string} sectionId - ID de la section
     * @returns {boolean} True si la section existe
     */
    sectionExists(sectionId) {
        return Utils.DOM.exists(`#${sectionId}`);
    }

    /**
     * Obtention de la liste de toutes les sections
     * @returns {Array} Liste des IDs de sections
     */
    getAllSections() {
        return Array.from(this.sections).map(section => section.id);
    }

    /**
     * Ajout d'un écouteur pour les changements de section
     * @param {Function} callback - Fonction callback
     */
    onSectionChange(callback) {
        Utils.Events.on(document, 'sectionChanged', callback);
    }

    /**
     * Suppression d'un écouteur de changement de section
     * @param {Function} callback - Fonction callback à supprimer
     */
    offSectionChange(callback) {
        Utils.Events.off(document, 'sectionChanged', callback);
    }

    /**
     * Reset de la navigation (retour au début)
     */
    reset() {
        this.navigateToSection('hero');
        this.closeMobileMenu();
    }

    /**
     * Nettoyage et destruction du gestionnaire
     */
    destroy() {
        // Suppression de l'observer
        if (this.scrollObserver) {
            this.scrollObserver.disconnect();
        }

        // Suppression des styles inline ajoutés
        document.body.style.overflow = '';
        
        // Nettoyage des propriétés CSS personnalisées
        document.documentElement.style.removeProperty('--scroll-y');

        Utils.Debug.log('info', 'NavigationManager détruit');
    }
}

/**
 * Gestionnaire de Thème - Gestion du mode sombre/clair
 */
class ThemeManager {
    constructor() {
        this.themeToggle = Utils.DOM.select('.theme-toggle');
        this.currentTheme = this.getInitialTheme();
        
        this.init();
        Utils.Debug.log('info', 'ThemeManager initialisé');
    }

    init() {
        this.applyTheme(this.currentTheme);
        this.bindEvents();
    }

    bindEvents() {
        if (this.themeToggle) {
            Utils.Events.on(this.themeToggle, 'click', () => {
                this.toggleTheme();
            });
        }

        // Écoute des préférences système
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        Utils.Events.on(mediaQuery, 'change', (e) => {
            if (!Utils.Storage.get('theme-preference')) {
                this.applyTheme(e.matches ? 'dark' : 'light');
            }
        });
    }

    getInitialTheme() {
        // Priorité : préférence stockée > préférence système > défaut (dark)
        const stored = Utils.Storage.get('theme-preference');
        if (stored) return stored;

        const systemPrefers = window.matchMedia('(prefers-color-scheme: dark)').matches;
        return systemPrefers ? 'dark' : 'light';
    }

    toggleTheme() {
        const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        this.applyTheme(newTheme);
        Utils.Storage.set('theme-preference', newTheme);
    }

    applyTheme(theme) {
        this.currentTheme = theme;
        document.documentElement.setAttribute('data-theme', theme);
        
        // Mise à jour du bouton toggle
        if (this.themeToggle) {
            this.themeToggle.setAttribute('aria-label', 
                theme === 'dark' ? 'Passer au thème clair' : 'Passer au thème sombre'
            );
        }

        // Événement personnalisé
        Utils.Events.trigger(document, 'themeChanged', { theme });
        
        Utils.Debug.log('info', `Thème appliqué: ${theme}`);
    }

    getCurrentTheme() {
        return this.currentTheme;
    }
}

/**
 * Gestionnaire de Scroll Reveal - Animations à l'apparition
 */
class ScrollRevealManager {
    constructor() {
        this.revealElements = Utils.DOM.selectAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale');
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        this.init();
        Utils.Debug.log('info', 'ScrollRevealManager initialisé');
    }

    init() {
        this.setupObserver();
        this.observeElements();
    }

    setupObserver() {
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    Utils.DOM.addClass(entry.target, 'revealed');
                    
                    // Une fois révélé, arrêter d'observer pour la performance
                    this.observer.unobserve(entry.target);
                }
            });
        }, this.observerOptions);
    }

    observeElements() {
        this.revealElements.forEach(element => {
            this.observer.observe(element);
        });
    }

    revealAll() {
        this.revealElements.forEach(element => {
            Utils.DOM.addClass(element, 'revealed');
        });
    }

    destroy() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }
}

// Export pour utilisation globale
window.NavigationManager = NavigationManager;
window.ThemeManager = ThemeManager;
window.ScrollRevealManager = ScrollRevealManager;

// Export pour modules ES6
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { NavigationManager, ThemeManager, ScrollRevealManager };
}

Utils.Debug.log('info', '✅ Système de navigation chargé avec succès');