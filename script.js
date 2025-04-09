// Attendre que le DOM soit complètement chargé
document.addEventListener('DOMContentLoaded', function() {
    // Récupération des éléments du DOM
    const themeToggle = document.getElementById('theme-toggle');
    const backToTopButton = document.getElementById('back-to-top');
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');
    const skillLevels = document.querySelectorAll('.skill-level');
    
    // ===== GESTION DU THÈME SOMBRE/CLAIR =====
    
    // Vérifier si un thème est déjà en mémoire
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);
    }
    
    // Fonction pour mettre à jour l'icône du thème
    function updateThemeIcon(theme) {
        const icon = themeToggle.querySelector('i');
        if (theme === 'dark') {
            icon.className = 'fas fa-sun';
        } else {
            icon.className = 'fas fa-moon';
        }
    }
    
    // Fonction pour basculer entre thème clair et sombre
    function toggleTheme() {
        const currentTheme = document.body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        updateThemeIcon(newTheme);
        
        // Animation de transition fluide
        document.body.classList.add('theme-transition');
        setTimeout(() => {
            document.body.classList.remove('theme-transition');
        }, 300);
    }
    
    // Attacher l'événement de clic au bouton de changement de thème
    themeToggle.addEventListener('click', toggleTheme);
    
    // ===== BOUTON RETOUR EN HAUT =====
    
    // Fonction pour afficher/masquer le bouton de retour en haut
    function toggleBackToTopButton() {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    }
    
    // Écouteur d'événement pour le défilement
    window.addEventListener('scroll', toggleBackToTopButton);
    
    // Fonction pour remonter en haut de la page avec une animation fluide
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    // Attacher l'événement de clic au bouton de retour en haut
    backToTopButton.addEventListener('click', scrollToTop);
    
    // ===== ANIMATION D'APPARITION DES SECTIONS =====
    
    // Fonction pour vérifier si un élément est visible dans la fenêtre
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.75
        );
    }
    
    // Fonction pour animer les sections lors du défilement
    function animateSections() {
        sections.forEach(section => {
            if (isElementInViewport(section)) {
                section.classList.add('visible');
            }
        });
    }
    
    // Déclencher l'animation au chargement initial
    animateSections();
    
    // Écouteur d'événement pour le défilement
    window.addEventListener('scroll', animateSections);
    
    // ===== NAVIGATION ACTIVE =====
    
    // Fonction pour mettre à jour le lien actif dans la navigation
    function updateActiveNavLink() {
        const scrollPosition = window.scrollY;
        
        sections.forEach(section => {
            const sectionId = section.getAttribute('id');
            const sectionOffset = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionOffset && scrollPosition < sectionOffset + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    // Mettre à jour le lien actif au chargement
    updateActiveNavLink();
    
    // Écouteur d'événement pour le défilement
    window.addEventListener('scroll', updateActiveNavLink);
    
    // ===== ANIMATION DES BARRES DE COMPÉTENCES =====
    
    // Fonction pour animer les barres de compétences
    function animateSkillBars() {
        skillLevels.forEach(skillLevel => {
            const level = skillLevel.getAttribute('data-level');
            
            // Vérifier si la section des compétences est visible
            const skillsSection = document.getElementById('skills');
            if (isElementInViewport(skillsSection) && !skillLevel.style.width) {
                // Délai avant l'animation pour créer un effet en cascade
                setTimeout(() => {
                    skillLevel.style.width = `${level}%`;
                }, 100);
            }
        });
    }
    
    // Déclencher l'animation au chargement initial
    animateSkillBars();
    
    // Écouteur d'événement pour le défilement
    window.addEventListener('scroll', animateSkillBars);
    
    // ===== ANIMATION DOUCE POUR LES LIENS D'ANCRAGE =====
    
    // Fonction pour faire défiler en douceur vers les ancres
    function smoothScroll(event) {
        if (event.target.classList.contains('nav-link')) {
            event.preventDefault();
            
            const targetId = event.target.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    }
    
    // Attacher l'événement de clic aux liens de navigation
    document.querySelector('.main-nav').addEventListener('click', smoothScroll);
    
    // ===== NAVIGATION STICKY =====
    
    // Fonction pour gérer la navigation sticky
    function handleStickyNav() {
        const nav = document.querySelector('.main-nav');
        const header = document.querySelector('.header');
        const headerHeight = header.offsetHeight;
        
        if (window.scrollY >= headerHeight) {
            nav.classList.add('sticky');
        } else {
            nav.classList.remove('sticky');
        }
    }
    
    // Écouteur d'événement pour le défilement
    window.addEventListener('scroll', handleStickyNav);
    
    // ===== ANIMATION INITIALE =====
    
    // Fonction pour animer l'en-tête au chargement
    function animateHeader() {
        const header = document.querySelector('.header');
        header.style.opacity = '1';
    }
    
    // Animer l'en-tête après un court délai
    setTimeout(animateHeader, 100);
});
