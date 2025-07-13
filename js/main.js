/**
 * ===== SCRIPT PRINCIPAL DU CV =====
 * Point d'entrée principal pour toute la logique JavaScript du CV.
 * Coordonne l'initialisation de tous les modules et fonctionnalités.
 */

// ===== CONFIGURATION GLOBALE =====
const CONFIG = {
  // Durées d'animation
  ANIMATION_DURATION: {
    FAST: 200,
    NORMAL: 400,
    SLOW: 600
  },
  
  // Points de rupture (synchronisés avec CSS)
  BREAKPOINTS: {
    SM: 576,
    MD: 768,
    LG: 992,
    XL: 1200,
    XXL: 1400
  },
  
  // Sélecteurs principaux
  SELECTORS: {
    BODY: 'body',
    LOADER: '.loader',
    HEADER: '.header',
    NAV_TOGGLE: '.nav-toggle',
    NAV_MENU: '.nav-menu',
    NAV_LINKS: '.nav-link',
    SECTIONS: '.section',
    BACK_TO_TOP: '.back-to-top',
    THEME_TOGGLE: '#theme-toggle',
    CONTACT_FORM: '#contact-form',
    PROGRESS_BAR: '#scroll-progress'
  },
  
  // Classes CSS
  CLASSES: {
    LOADING: 'loading',
    ACTIVE: 'active',
    VISIBLE: 'visible',
    HIDDEN: 'hidden',
    DARK_THEME: 'dark',
    MENU_OPEN: 'menu-open'
  },
  
  // Stockage local
  STORAGE_KEYS: {
    THEME: 'cv-theme-preference',
    LANGUAGE: 'cv-language-preference'
  }
};

// ===== ÉTAT GLOBAL DE L'APPLICATION =====
const AppState = {
  isLoading: true,
  isMobileMenuOpen: false,
  currentSection: 'hero',
  currentTheme: 'light',
  isScrolling: false,
  screenWidth: window.innerWidth,
  scrollPosition: 0
};

// ===== UTILITAIRES GLOBAUX =====
const Utils = {
  /**
   * Sélectionne un élément DOM
   * @param {string} selector - Sélecteur CSS
   * @param {Element} context - Contexte de recherche (optionnel)
   * @returns {Element|null}
   */
  $(selector, context = document) {
    return context.querySelector(selector);
  },

  /**
   * Sélectionne tous les éléments correspondants
   * @param {string} selector - Sélecteur CSS
   * @param {Element} context - Contexte de recherche (optionnel)
   * @returns {NodeList}
   */
  $$(selector, context = document) {
    return context.querySelectorAll(selector);
  },

  /**
   * Debounce une fonction
   * @param {Function} func - Fonction à debouncer
   * @param {number} wait - Délai en millisecondes
   * @returns {Function}
   */
  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },

  /**
   * Throttle une fonction
   * @param {Function} func - Fonction à throttler
   * @param {number} limit - Limite en millisecondes
   * @returns {Function}
   */
  throttle(func, limit) {
    let inThrottle;
    return function(...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  },

  /**
   * Vérifie si un élément est visible dans le viewport
   * @param {Element} element - Élément à vérifier
   * @param {number} threshold - Seuil de visibilité (0-1)
   * @returns {boolean}
   */
  isElementVisible(element, threshold = 0.1) {
    if (!element) return false;
    
    const rect = element.getBoundingClientRect();
    const viewHeight = window.innerHeight;
    const viewWidth = window.innerWidth;
    
    return (
      rect.top < viewHeight * (1 - threshold) &&
      rect.bottom > viewHeight * threshold &&
      rect.left < viewWidth &&
      rect.right > 0
    );
  },

  /**
   * Fait défiler vers un élément
   * @param {Element|string} target - Élément cible ou sélecteur
   * @param {number} offset - Décalage en pixels
   */
  scrollToElement(target, offset = 0) {
    const element = typeof target === 'string' ? Utils.$(target) : target;
    if (!element) return;

    const headerHeight = Utils.$('.header')?.offsetHeight || 0;
    const elementPosition = element.offsetTop - headerHeight - offset;

    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  },

  /**
   * Ajoute/supprime une classe avec animation
   * @param {Element} element - Élément DOM
   * @param {string} className - Nom de la classe
   * @param {boolean} add - Ajouter (true) ou supprimer (false)
   */
  toggleClass(element, className, add = null) {
    if (!element) return;
    
    if (add === null) {
      element.classList.toggle(className);
    } else if (add) {
      element.classList.add(className);
    } else {
      element.classList.remove(className);
    }
  },

  /**
   * Formate une date
   * @param {Date} date - Date à formater
   * @returns {string}
   */
  formatDate(date) {
    return new Intl.DateTimeFormat('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  },

  /**
   * Génère un ID unique
   * @returns {string}
   */
  generateId() {
    return 'cv-' + Math.random().toString(36).substr(2, 9);
  }
};

// ===== GESTION DU THÈME =====
const ThemeManager = {
  init() {
    this.themeToggle = Utils.$(CONFIG.SELECTORS.THEME_TOGGLE);
    this.loadTheme();
    this.bindEvents();
  },

  loadTheme() {
    // Récupérer le thème stocké ou utiliser la préférence système
    const savedTheme = localStorage.getItem(CONFIG.STORAGE_KEYS.THEME);
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    AppState.currentTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    this.applyTheme(AppState.currentTheme);
  },

  applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    AppState.currentTheme = theme;
    
    // Mettre à jour l'icône du bouton
    if (this.themeToggle) {
      const icon = this.themeToggle.querySelector('i');
      if (icon) {
        icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
      }
    }
    
    // Sauvegarder la préférence
    localStorage.setItem(CONFIG.STORAGE_KEYS.THEME, theme);
    
    // Émettre un événement personnalisé
    window.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme } }));
  },

  toggleTheme() {
    const newTheme = AppState.currentTheme === 'dark' ? 'light' : 'dark';
    this.applyTheme(newTheme);
  },

  bindEvents() {
    if (this.themeToggle) {
      this.themeToggle.addEventListener('click', () => this.toggleTheme());
    }

    // Écouter les changements de préférence système
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem(CONFIG.STORAGE_KEYS.THEME)) {
        this.applyTheme(e.matches ? 'dark' : 'light');
      }
    });
  }
};

// ===== GESTION DE LA NAVIGATION =====
const NavigationManager = {
  init() {
    this.header = Utils.$(CONFIG.SELECTORS.HEADER);
    this.navToggle = Utils.$(CONFIG.SELECTORS.NAV_TOGGLE);
    this.navMenu = Utils.$(CONFIG.SELECTORS.NAV_MENU);
    this.navLinks = Utils.$(CONFIG.SELECTORS.NAV_LINKS);
    this.sections = Utils.$(CONFIG.SELECTORS.SECTIONS);
    
    this.bindEvents();
    this.updateActiveSection();
  },

  bindEvents() {
    // Toggle du menu mobile
    if (this.navToggle) {
      this.navToggle.addEventListener('click', () => this.toggleMobileMenu());
    }

    // Navigation par liens
    this.navLinks.forEach(link => {
      link.addEventListener('click', (e) => this.handleNavClick(e));
    });

    // Fermer le menu mobile en cliquant à l'extérieur
    document.addEventListener('click', (e) => {
      if (!this.navMenu?.contains(e.target) && !this.navToggle?.contains(e.target)) {
        this.closeMobileMenu();
      }
    });

    // Navigation au clavier
    document.addEventListener('keydown', (e) => this.handleKeyboardNav(e));
  },

  toggleMobileMenu() {
    AppState.isMobileMenuOpen = !AppState.isMobileMenuOpen;
    
    Utils.toggleClass(document.body, CONFIG.CLASSES.MENU_OPEN, AppState.isMobileMenuOpen);
    Utils.toggleClass(this.navMenu, CONFIG.CLASSES.ACTIVE, AppState.isMobileMenuOpen);
    
    // Mise à jour des attributs ARIA
    if (this.navToggle) {
      this.navToggle.setAttribute('aria-expanded', AppState.isMobileMenuOpen);
    }
  },

  closeMobileMenu() {
    if (AppState.isMobileMenuOpen) {
      this.toggleMobileMenu();
    }
  },

  handleNavClick(e) {
    e.preventDefault();
    const link = e.currentTarget;
    const targetId = link.getAttribute('href');
    
    if (targetId && targetId.startsWith('#')) {
      const targetSection = Utils.$(targetId);
      if (targetSection) {
        Utils.scrollToElement(targetSection);
        this.closeMobileMenu();
        
        // Mettre à jour l'état actif
        this.setActiveLink(link);
      }
    }
  },

  handleKeyboardNav(e) {
    // Navigation par flèches dans le menu
    if (e.key === 'Escape' && AppState.isMobileMenuOpen) {
      this.closeMobileMenu();
      this.navToggle?.focus();
    }
  },

  setActiveLink(activeLink) {
    this.navLinks.forEach(link => {
      Utils.toggleClass(link, CONFIG.CLASSES.ACTIVE, link === activeLink);
    });
  },

  updateActiveSection() {
    const scrollPosition = window.pageYOffset;
    let currentSection = 'hero';

    this.sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSection = section.id;
      }
    });

    if (currentSection !== AppState.currentSection) {
      AppState.currentSection = currentSection;
      
      // Mettre à jour le lien actif
      const activeLink = Utils.$(`[href="#${currentSection}"]`);
      if (activeLink) {
        this.setActiveLink(activeLink);
      }
      
      // Émettre un événement
      window.dispatchEvent(new CustomEvent('sectionChanged', { 
        detail: { section: currentSection } 
      }));
    }
  }
};

// ===== GESTION DU SCROLL =====
const ScrollManager = {
  init() {
    this.progressBar = Utils.$(CONFIG.SELECTORS.PROGRESS_BAR);
    this.backToTop = Utils.$(CONFIG.SELECTORS.BACK_TO_TOP);
    this.lastScrollY = window.pageYOffset;
    
    this.bindEvents();
    this.updateScrollProgress();
  },

  bindEvents() {
    // Optimisation avec throttle pour de meilleures performances
    window.addEventListener('scroll', Utils.throttle(() => {
      this.handleScroll();
    }, 16)); // ~60fps

    // Bouton retour en haut
    if (this.backToTop) {
      this.backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  },

  handleScroll() {
    const currentScrollY = window.pageYOffset;
    AppState.scrollPosition = currentScrollY;

    // Mettre à jour la barre de progression
    this.updateScrollProgress();
    
    // Afficher/masquer le bouton retour en haut
    this.updateBackToTop();
    
    // Masquer/afficher le header selon la direction du scroll
    this.updateHeaderVisibility(currentScrollY);
    
    // Mettre à jour la section active
    NavigationManager.updateActiveSection();
    
    this.lastScrollY = currentScrollY;
  },

  updateScrollProgress() {
    if (!this.progressBar) return;

    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollProgress = (AppState.scrollPosition / scrollHeight) * 100;
    
    this.progressBar.style.width = `${Math.min(scrollProgress, 100)}%`;
  },

  updateBackToTop() {
    if (!this.backToTop) return;

    const showThreshold = window.innerHeight;
    const shouldShow = AppState.scrollPosition > showThreshold;
    
    Utils.toggleClass(this.backToTop, CONFIG.CLASSES.VISIBLE, shouldShow);
  },

  updateHeaderVisibility(currentScrollY) {
    if (!NavigationManager.header) return;

    const scrollDifference = currentScrollY - this.lastScrollY;
    const isScrollingDown = scrollDifference > 0 && currentScrollY > 100;
    
    Utils.toggleClass(NavigationManager.header, 'header-hidden', isScrollingDown);
  }
};

// ===== GESTIONNAIRE D'ANIMATIONS =====
const AnimationManager = {
  init() {
    this.observeElements();
    this.initParallax();
  },

  observeElements() {
    // Observer pour les animations au scroll
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.1
    };

    this.intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateElement(entry.target);
        }
      });
    }, observerOptions);

    // Observer tous les éléments animables
    const animatableElements = Utils.$('[data-animate]');
    animatableElements.forEach(el => {
      this.intersectionObserver.observe(el);
    });
  },

  animateElement(element) {
    const animationType = element.dataset.animate || 'fade-in';
    const delay = element.dataset.delay || 0;
    
    setTimeout(() => {
      Utils.toggleClass(element, animationType, true);
      Utils.toggleClass(element, 'animated', true);
    }, parseInt(delay));
  },

  initParallax() {
    const parallaxElements = Utils.$('[data-parallax]');
    
    if (parallaxElements.length > 0) {
      window.addEventListener('scroll', Utils.throttle(() => {
        parallaxElements.forEach(element => {
          this.updateParallax(element);
        });
      }, 16));
    }
  },

  updateParallax(element) {
    const speed = parseFloat(element.dataset.parallax) || 0.5;
    const yPos = -(AppState.scrollPosition * speed);
    element.style.transform = `translate3d(0, ${yPos}px, 0)`;
  }
};

// ===== GESTIONNAIRE DE FORMULAIRES =====
const FormManager = {
  init() {
    this.contactForm = Utils.$(CONFIG.SELECTORS.CONTACT_FORM);
    if (this.contactForm) {
      this.bindFormEvents();
    }
  },

  bindFormEvents() {
    this.contactForm.addEventListener('submit', (e) => this.handleSubmit(e));
    
    // Validation en temps réel
    const inputs = this.contactForm.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
      input.addEventListener('blur', () => this.validateField(input));
      input.addEventListener('input', () => this.clearFieldError(input));
    });
  },

  handleSubmit(e) {
    e.preventDefault();
    
    if (this.validateForm()) {
      this.submitForm();
    }
  },

  validateForm() {
    const inputs = this.contactForm.querySelectorAll('input[required], textarea[required], select[required]');
    let isValid = true;

    inputs.forEach(input => {
      if (!this.validateField(input)) {
        isValid = false;
      }
    });

    return isValid;
  },

  validateField(field) {
    const value = field.value.trim();
    const type = field.type;
    const isRequired = field.hasAttribute('required');
    
    let isValid = true;
    let errorMessage = '';

    // Validation obligatoire
    if (isRequired && !value) {
      isValid = false;
      errorMessage = 'Ce champ est obligatoire';
    }
    // Validation email
    else if (type === 'email' && value && !this.isValidEmail(value)) {
      isValid = false;
      errorMessage = 'Veuillez saisir une adresse email valide';
    }
    // Validation téléphone
    else if (type === 'tel' && value && !this.isValidPhone(value)) {
      isValid = false;
      errorMessage = 'Veuillez saisir un numéro de téléphone valide';
    }

    this.showFieldError(field, errorMessage);
    return isValid;
  },

  showFieldError(field, message) {
    const errorElement = document.getElementById(field.getAttribute('aria-describedby'));
    
    if (errorElement) {
      errorElement.textContent = message;
      Utils.toggleClass(field, 'error', !!message);
      Utils.toggleClass(errorElement, 'visible', !!message);
    }
  },

  clearFieldError(field) {
    this.showFieldError(field, '');
  },

  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  isValidPhone(phone) {
    const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
    return phoneRegex.test(phone);
  },

  async submitForm() {
    const submitBtn = this.contactForm.querySelector('[type="submit"]');
    const feedback = Utils.$('#form-feedback');
    
    // État de chargement
    Utils.toggleClass(submitBtn, 'loading', true);
    submitBtn.disabled = true;

    try {
      // Simulation d'envoi (remplacer par votre logique d'envoi)
      await this.simulateFormSubmission();
      
      this.showFeedback('success', 'Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.');
      this.contactForm.reset();
      
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      this.showFeedback('error', 'Une erreur est survenue. Veuillez réessayer ou me contacter directement par email.');
      
    } finally {
      Utils.toggleClass(submitBtn, 'loading', false);
      submitBtn.disabled = false;
    }
  },

  async simulateFormSubmission() {
    // Simulation d'un appel API
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // 90% de chance de succès pour la démo
        Math.random() > 0.1 ? resolve() : reject(new Error('Erreur simulée'));
      }, 2000);
    });
  },

  showFeedback(type, message) {
    const feedback = Utils.$('#form-feedback');
    if (feedback) {
      feedback.textContent = message;
      feedback.className = `form-feedback ${type} visible`;
      
      // Masquer après 5 secondes pour les succès
      if (type === 'success') {
        setTimeout(() => {
          Utils.toggleClass(feedback, 'visible', false);
        }, 5000);
      }
    }
  }
};

// ===== GESTIONNAIRE DE PERFORMANCE =====
const PerformanceManager = {
  init() {
    this.optimizeImages();
    this.preloadCriticalResources();
    this.handleVisibilityChange();
  },

  optimizeImages() {
    // Lazy loading pour les images non critiques
    const images = Utils.$('img[data-src]');
    
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        });
      });

      images.forEach(img => imageObserver.observe(img));
    } else {
      // Fallback pour les navigateurs non compatibles
      images.forEach(img => {
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
      });
    }
  },

  preloadCriticalResources() {
    // Précharger les ressources critiques
    const criticalImages = [
      'assets/images/profile.jpg',
      // Ajouter d'autres images critiques
    ];

    criticalImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });
  },

  handleVisibilityChange() {
    // Pause les animations quand la page n'est pas visible
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        // Pauser les animations coûteuses
        document.body.style.animationPlayState = 'paused';
      } else {
        document.body.style.animationPlayState = 'running';
      }
    });
  }
};

// ===== INITIALISATION PRINCIPALE =====
class CVApp {
  constructor() {
    this.isInitialized = false;
  }

  async init() {
    if (this.isInitialized) return;

    try {
      // Attendre que le DOM soit prêt
      if (document.readyState === 'loading') {
        await new Promise(resolve => {
          document.addEventListener('DOMContentLoaded', resolve);
        });
      }

      // Initialiser tous les modules
      this.initializeModules();
      
      // Finaliser le chargement
      this.finishLoading();
      
      this.isInitialized = true;
      console.log('CV Application initialisée avec succès');

    } catch (error) {
      console.error('Erreur lors de l\'initialisation:', error);
      this.handleInitError(error);
    }
  }

  initializeModules() {
    // Ordre d'initialisation important
    ThemeManager.init();
    NavigationManager.init();
    ScrollManager.init();
    AnimationManager.init();
    FormManager.init();
    PerformanceManager.init();
    
    // Événements globaux
    this.bindGlobalEvents();
  }

  bindGlobalEvents() {
    // Redimensionnement de la fenêtre
    window.addEventListener('resize', Utils.debounce(() => {
      AppState.screenWidth = window.innerWidth;
      this.handleResize();
    }, 250));

    // Gestion des erreurs globales
    window.addEventListener('error', (e) => {
      console.error('Erreur globale:', e.error);
    });

    // Événements personnalisés
    window.addEventListener('themeChanged', (e) => {
      console.log('Thème changé:', e.detail.theme);
    });

    window.addEventListener('sectionChanged', (e) => {
      console.log('Section active:', e.detail.section);
    });
  }

  handleResize() {
    // Fermer le menu mobile sur redimensionnement vers desktop
    if (AppState.screenWidth >= CONFIG.BREAKPOINTS.MD && AppState.isMobileMenuOpen) {
      NavigationManager.closeMobileMenu();
    }
  }

  finishLoading() {
    // Retirer la classe loading après un petit délai pour les animations
    setTimeout(() => {
      Utils.toggleClass(document.body, CONFIG.CLASSES.LOADING, false);
      
      // Déclencher les animations d'entrée
      const heroSection = Utils.$('#hero');
      if (heroSection) {
        Utils.toggleClass(heroSection, 'loaded', true);
      }
    }, 100);
  }

  handleInitError(error) {
    // Affichage d'erreur gracieux
    const errorDiv = document.createElement('div');
    errorDiv.className = 'init-error';
    errorDiv.innerHTML = `
      <h2>Erreur de chargement</h2>
      <p>Une erreur est survenue lors du chargement de la page. Veuillez actualiser.</p>
      <button onclick="location.reload()">Actualiser la page</button>
    `;
    
    document.body.appendChild(errorDiv);
    Utils.toggleClass(document.body, CONFIG.CLASSES.LOADING, false);
  }
}

// ===== DÉMARRAGE DE L'APPLICATION =====
const app = new CVApp();

// Initialisation immédiate
app.init();

// Export pour utilisation dans d'autres modules si nécessaire
window.CVApp = {
  app,
  Utils,
  CONFIG,
  AppState,
  ThemeManager,
  NavigationManager,
  ScrollManager,
  AnimationManager,
  FormManager
};