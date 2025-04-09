// Attendre que le DOM soit complètement chargé
document.addEventListener('DOMContentLoaded', function() {
    // Récupération des éléments du DOM
    const themeToggle = document.getElementById('theme-toggle');
    const backToTopButton = document.getElementById('back-to-top');
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');
    const skillLevels = document.querySelectorAll('.skill-level');
    const contactForm = document.getElementById('contact-form');
    const navContainer = document.querySelector('.nav-container');
    const navIndicator = document.querySelector('.nav-indicator');
    
    // ===== ANIMATION DE L'INDICATEUR DE NAVIGATION =====
    
    // Fonction pour mettre à jour l'indicateur de navigation
    function updateNavIndicator(link) {
        if (!navIndicator) return;
        
        const linkRect = link.getBoundingClientRect();
        const navRect = navContainer.getBoundingClientRect();
        
        navIndicator.style.width = `${linkRect.width}px`;
        navIndicator.style.left = `${linkRect.left - navRect.left}px`;
    }
    
    // Initialiser l'indicateur de navigation
    function initNavIndicator() {
        if (!navIndicator || !navLinks.length) return;
        
        // Initialiser l'indicateur sur le premier lien
        updateNavIndicator(navLinks[0]);
        
        // Ajouter des écouteurs d'événements pour tous les liens
        navLinks.forEach(link => {
            link.addEventListener('mouseenter', function() {
                updateNavIndicator(this);
            });
        });
        
        // Restaurer l'indicateur au lien actif lorsque la souris quitte la navigation
        navContainer.addEventListener('mouseleave', function() {
            const activeLink = document.querySelector('.nav-link.active') || navLinks[0];
            updateNavIndicator(activeLink);
        });
    }
    
    // Initialiser l'indicateur de navigation
    initNavIndicator();
    
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
    
    // ===== ANIMATION DES BARRES DE COMPÉTENCES =====
    
    // Cette fonction n'est plus nécessaire avec le nouveau design des compétences
    // mais on garde les animations pour les autres éléments
    function handleSkillCards() {
        const skillCards = document.querySelectorAll('.skill-card');
        
        skillCards.forEach((card, index) => {
            // Ajouter un délai progressif pour l'animation d'entrée
            setTimeout(() => {
                if (isElementInViewport(card.closest('.skill-group'))) {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }
            }, index * 100);
        });
    }
    
    // Déclencher l'animation au chargement initial
    handleSkillCards();
    
    // Écouteur d'événement pour le défilement
    window.addEventListener('scroll', handleSkillCards);
    
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
    
    // ===== VALIDATION DU FORMULAIRE DE CONTACT =====
    
    // Fonction pour valider le formulaire de contact
    function validateContactForm(event) {
        let isValid = true;
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const subjectInput = document.getElementById('subject');
        const messageInput = document.getElementById('message');
        
        // Supprimer les classes d'erreur précédentes
        const inputs = [nameInput, emailInput, subjectInput, messageInput];
        inputs.forEach(input => {
            input.classList.remove('error');
        });
        
        // Valider le nom (au moins 2 caractères)
        if (nameInput.value.trim().length < 2) {
            nameInput.classList.add('error');
            isValid = false;
        }
        
        // Valider l'email avec une regex simple
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            emailInput.classList.add('error');
            isValid = false;
        }
        
        // Valider le sujet (au moins 3 caractères)
        if (subjectInput.value.trim().length < 3) {
            subjectInput.classList.add('error');
            isValid = false;
        }
        
        // Valider le message (au moins 10 caractères)
        if (messageInput.value.trim().length < 10) {
            messageInput.classList.add('error');
            isValid = false;
        }
        
        // Si le formulaire n'est pas valide, empêcher l'envoi
        if (!isValid) {
            event.preventDefault();
            
            // Faire défiler jusqu'au premier champ en erreur
            const firstError = document.querySelector('.error');
            if (firstError) {
                firstError.focus();
            }
        }
    }
    
    // Attacher l'événement de soumission au formulaire
    if (contactForm) {
        contactForm.addEventListener('submit', validateContactForm);
    }
});
