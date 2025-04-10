// Variables globales
let isThemeDark = false;
let isMenuOpen = false;
let currentSection = 'hero';
let hasScrolled = false;
let heroCanvas, skillsCanvas;
let skillsScene, skillsCamera, skillsRenderer;
let heroParticles = [];
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
        
        // Réinitialiser les canvas avec les nouvelles couleurs
        if (heroCanvas) initHeroCanvas();
        if (skillsCanvas) initSkillsCanvas();
    });
}

// ===== CANVAS HERO =====
function initHeroCanvas() {
    heroCanvas = document.getElementById('hero-canvas');
    if (!heroCanvas) return;
    
    const ctx = heroCanvas.getContext('2d');
    const resizeCanvas = () => {
        heroCanvas.width = heroCanvas.offsetWidth;
        heroCanvas.height = heroCanvas.offsetHeight;
    };
    
    resizeCanvas();
    
    // Créer les particules
    heroParticles = [];
    const particleCount = Math.floor(heroCanvas.width * heroCanvas.height / 10000);
    
    for (let i = 0; i < particleCount; i++) {
        heroParticles.push({
            x: Math.random() * heroCanvas.width,
            y: Math.random() * heroCanvas.height,
            radius: Math.random() * 2 + 1,
            color: [colors.accent, colors.accentSecondary, colors.accentTertiary][Math.floor(Math.random() * 3)],
            speedX: Math.random() * 0.5 - 0.25,
            speedY: Math.random() * 0.5 - 0.25,
            proximity: []
        });
    }
    
    // Animation des particules
    function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, heroCanvas.width, heroCanvas.height);
        
        heroParticles.forEach(particle => {
            // Déplacer la particule
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            
            // Rebondir sur les bords
            if (particle.x < 0 || particle.x > heroCanvas.width) particle.speedX *= -1;
            if (particle.y < 0 || particle.y > heroCanvas.height) particle.speedY *= -1;
            
            // Dessiner la particule
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            ctx.fillStyle = particle.color;
            ctx.fill();
            
            // Réinitialiser les particules proches
            particle.proximity = [];
        });
        
        // Connecter les particules proches
        for (let i = 0; i < heroParticles.length; i++) {
            for (let j = i + 1; j < heroParticles.length; j++) {
                const dx = heroParticles[i].x - heroParticles[j].x;
                const dy = heroParticles[i].y - heroParticles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 100) {
                    ctx.beginPath();
                    ctx.moveTo(heroParticles[i].x, heroParticles[i].y);
                    ctx.lineTo(heroParticles[j].x, heroParticles[j].y);
                    ctx.strokeStyle = `rgba(59, 130, 246, ${1 - distance / 100})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }
    }
    
    // Lancer l'animation
    animate();
    
    // Redimensionner le canvas lors du redimensionnement de la fenêtre
    window.addEventListener('resize', resizeCanvas);
}

// ===== VISUALISATION DES COMPÉTENCES =====
function initSkillsCanvas() {
    const skillsSection = document.getElementById('skills');
    if (!skillsSection) return;
    
    // Changer la catégorie de compétences active
    const categories = document.querySelectorAll('.skill-category');
    categories.forEach(category => {
        category.addEventListener('click', () => {
            // Retirer la classe active de toutes les catégories
            categories.forEach(c => c.classList.remove('active'));
            // Ajouter la classe active à la catégorie cliquée
            category.classList.add('active');
            
            // Afficher le contenu des compétences correspondant
            const categoryId = category.getAttribute('data-category');
            document.querySelectorAll('.skill-details-content').forEach(content => {
                content.classList.remove('active');
            });
            document.querySelector(`.skill-details-content[data-category="${categoryId}"]`).classList.add('active');
            
            // Animer les barres de compétences
            setTimeout(() => {
                const bars = document.querySelectorAll(`.skill-details-content[data-category="${categoryId}"] .skill-bar`);
                bars.forEach(bar => {
                    const width = bar.style.width;
                    bar.style.width = '0';
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 50);
                });
            }, 100);
        });
    });
    
    // Initialiser les barres de compétences de la première catégorie
    setTimeout(() => {
        const firstCategory = document.querySelector('.skill-category.active');
        if (firstCategory) {
            const categoryId = firstCategory.getAttribute('data-category');
            const bars = document.querySelectorAll(`.skill-details-content[data-category="${categoryId}"] .skill-bar`);
            bars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 50);
            });
        }
    }, 1000);
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
    // Redimensionner les canvas
    if (heroCanvas) {
        heroCanvas.width = heroCanvas.offsetWidth;
        heroCanvas.height = heroCanvas.offsetHeight;
        
        // Recréer les particules
        initHeroCanvas();
    }
}