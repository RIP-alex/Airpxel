// Variables globales
let isThemeDark = false;
let isMenuOpen = false;
let currentSection = 'hero';
let hasScrolled = false;
let colors = {
    primary: '#0F172A',
    secondary: '#1E293B',
    accent: '#3B82F6',
    accentSecondary: '#10B981',
    accentTertiary: '#F59E0B'
};

// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function() {
    // Masquer le loader après chargement
    setTimeout(() => {
        const loader = document.querySelector('.loader');
        loader.classList.add('hide');
        document.body.classList.remove('loading');
    }, 1500);
    
    // Initialiser toutes les fonctionnalités
    initNavigation();
    initSectionObserver();
    initThemeToggle();
    initHeroCanvas();
    initFormAnimations();
    initRevealAnimations();
    
    // Gestion du défilement et du redimensionnement
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    // Animer les éléments visibles au chargement initial
    setTimeout(() => {
        document.querySelectorAll('.section.active-section [class*="reveal-"]').forEach(el => {
            el.classList.add('revealed');
        });
    }, 1800);
});

// ===== NAVIGATION ET MENU =====
function initNavigation() {
    // Gestion de la barre latérale
    const navToggle = document.querySelector('.nav-toggle');
    const sideNav = document.querySelector('.side-nav');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            isMenuOpen = !isMenuOpen;
            sideNav.classList.toggle('expanded');
            sideNav.classList.toggle('mobile-visible');
        });
    }

    // Vérifier si le menu doit être ouvert en fonction de la largeur d'écran
    function checkScreenSize() {
        if (window.innerWidth > 1200) {
            sideNav.classList.add('expanded');
            isMenuOpen = true;
        } else if (window.innerWidth <= 1200 && window.innerWidth > 768) {
            sideNav.classList.remove('expanded');
            sideNav.classList.remove('mobile-visible');
            isMenuOpen = false;
        } else if (window.innerWidth <= 768) {
            sideNav.classList.remove('expanded');
            sideNav.classList.remove('mobile-visible');
            isMenuOpen = false;
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
                isMenuOpen = false;
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
                    currentSection = targetId;
                    updateSectionMarker(targetId);
                }
            }
        });
    });

    // Initialiser le marqueur de section
    updateSectionMarker('hero');
}

// Gestion de l'observation des sections pour navigation
function initSectionObserver() {
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

                // Mettre à jour le lien actif
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });

                // Mettre à jour la section actuelle
                currentSection = sectionId;
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
                    window.heroAnimation.init(colors);
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
        if (window.scrollY > 100 && !hasScrolled) {
            hasScrolled = true;
            sectionMarker.classList.add('visible');
        } else if (window.scrollY <= 100) {
            hasScrolled = false;
            sectionMarker.classList.remove('visible');
        }
    });
}

// Mettre à jour le marqueur de section
function updateSectionMarker(sectionId) {
    const marker = document.querySelector('.section-marker');
    const sectionTitle = document.querySelector(`#${sectionId} .section-title`);
    let title = '';

    if (sectionId === 'hero') {
        title = 'Accueil';
    } else if (sectionTitle) {
        title = sectionTitle.textContent;
    } else {
        title = sectionId.charAt(0).toUpperCase() + sectionId.slice(1);
    }

    document.querySelector('.current-section').textContent = title;

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

        document.querySelector('.progress-bar').style.width = `${progress * 100}%`;
    }
}

// ===== GESTION DU THÈME =====
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    
    // Vérifier si un thème est sauvegardé dans localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        isThemeDark = false;
        document.querySelector('.theme-toggle-text').textContent = 'Thème sombre';
    }
    
    // Gérer le changement de thème
    themeToggle.addEventListener('click', () => {
        isThemeDark = !isThemeDark;
        
        if (isThemeDark) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            document.querySelector('.theme-toggle-text').textContent = 'Thème clair';
            
            // Mettre à jour les couleurs pour les canvas
            colors = {
                primary: '#0F172A',
                secondary: '#1E293B',
                accent: '#3B82F6',
                accentSecondary: '#10B981',
                accentTertiary: '#F59E0B'
            };
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            document.querySelector('.theme-toggle-text').textContent = 'Thème sombre';
            
            // Mettre à jour les couleurs pour les canvas
            colors = {
                primary: '#F8FAFC',
                secondary: '#F1F5F9',
                accent: '#3B82F6',
                accentSecondary: '#10B981',
                accentTertiary: '#F59E0B'
            };
        }
        
        // Réinitialiser l'animation hero avec les nouvelles couleurs
        if (window.heroAnimation) {
            window.heroAnimation.init(colors);
        }
    });
}

// ===== CANVAS HERO =====
function initHeroCanvas() {
    // Utiliser le module externe pour l'animation du hero
    if (window.heroAnimation && typeof window.heroAnimation.init === 'function') {
        window.heroAnimation.init(colors);
    }
}

// ===== ANIMATIONS DU FORMULAIRE =====
function initFormAnimations() {
    const formInputs = document.querySelectorAll('.form-input');
    
    formInputs.forEach(input => {
        // Gérer l'état initial
        if (input.value) {
            input.classList.add('has-content');
        }
        
        // Ajouter des écouteurs d'événements
        input.addEventListener('focus', () => {
            input.classList.add('focused');
        });
        
        input.addEventListener('blur', () => {
            input.classList.remove('focused');
            if (input.value) {
                input.classList.add('has-content');
            } else {
                input.classList.remove('has-content');
            }
        });
        
        input.addEventListener('input', () => {
            if (input.value) {
                input.classList.add('has-content');
            } else {
                input.classList.remove('has-content');
            }
        });
    });
    
    // Gérer la soumission du formulaire
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const submitBtn = contactForm.querySelector('.submit-btn');
            submitBtn.classList.add('loading');
            
            // Pour simuler l'envoi (à remplacer par votre logique réelle)
            setTimeout(() => {
                submitBtn.classList.remove('loading');
            }, 2000);
        });
    }
}

// ===== ANIMATIONS AU SCROLL =====
function initRevealAnimations() {
    // Effets de révélation au scroll
    const revealElements = document.querySelectorAll('[class*="reveal-"]');
    
    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.15,
        }
    );
    
    revealElements.forEach((el) => {
        revealObserver.observe(el);
    });
    
    // Animation échelonnée pour les grilles
    const staggerGrids = document.querySelectorAll('.grid-animation');
    
    const staggerObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    staggerObserver.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.1,
        }
    );
    
    staggerGrids.forEach((grid) => {
        staggerObserver.observe(grid);
    });
}

// ===== GESTION DU SCROLL =====
function handleScroll() {
    // Mettre à jour la progress bar
    updateSectionMarker(currentSection);
    
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
    // Rien à faire ici pour le hero canvas puisqu'il est géré dans hero-animation.js
}