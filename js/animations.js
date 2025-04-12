/**
 * animations.js - Gestion des animations au scroll
 * Ce module gère toutes les animations déclenchées par le défilement
 */

/**
 * Initialise les animations de révélation au scroll
 */
function initRevealAnimations() {
    console.log('Initialisation des animations de révélation');
    
    // Vérifier si IntersectionObserver est disponible
    if (!('IntersectionObserver' in window)) {
        console.warn('IntersectionObserver non supporté, animations désactivées');
        // Fallback pour les navigateurs qui ne supportent pas IntersectionObserver
        document.querySelectorAll('[class*="reveal-"], .stagger-reveal, .grid-animation').forEach(el => {
            el.classList.add('revealed');
        });
        return;
    }
    
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
                    
                    // Animation progressive des enfants
                    const children = entry.target.children;
                    Array.from(children).forEach((child, index) => {
                        setTimeout(() => {
                            child.classList.add('revealed');
                        }, 100 * index);
                    });
                    
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
    
    // Animation des éléments avec délai échelonné
    initStaggeredElements();
}

/**
 * Initialise les animations avec délai échelonné
 */
function initStaggeredElements() {
    const staggerContainers = document.querySelectorAll('.stagger-reveal');
    
    const staggerObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    
                    // Animer les enfants avec un délai
                    const children = entry.target.children;
                    Array.from(children).forEach((child, index) => {
                        child.style.transitionDelay = `${0.1 * index}s`;
                    });
                    
                    staggerObserver.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.1,
        }
    );
    
    staggerContainers.forEach((container) => {
        staggerObserver.observe(container);
    });
}

/**
 * Initialise l'effet de texte "machine à écrire"
 */
function initTypewriterEffect() {
    const typewriterElements = document.querySelectorAll('.typewriter');
    
    typewriterElements.forEach(element => {
        const text = element.textContent;
        element.textContent = '';
        element.style.visibility = 'visible';
        
        let i = 0;
        const speed = 50; // Vitesse d'écriture en ms
        
        function typeWriter() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
        }
        
        // Démarrer l'animation quand l'élément est visible
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setTimeout(typeWriter, 500); // Délai avant de commencer
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.5 }
        );
        
        observer.observe(element);
    });
}

/**
 * Initialise les animations de texte découpé
 */
function initSplitTextAnimations() {
    const splitTextElements = document.querySelectorAll('.split-text');
    
    splitTextElements.forEach(element => {
        // Sauvegarder le texte original
        const originalText = element.textContent;
        
        // Vider l'élément
        element.innerHTML = '';
        
        // Ajouter chaque caractère dans un span
        for (let i = 0; i < originalText.length; i++) {
            const span = document.createElement('span');
            span.textContent = originalText[i];
            span.style.transitionDelay = `${0.03 * i}s`;
            element.appendChild(span);
        }
        
        // Observer quand l'élément devient visible
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        element.classList.add('animate');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.5 }
        );
        
        observer.observe(element);
    });
}

// Exporter les fonctions
export { 
    initRevealAnimations, 
    initTypewriterEffect, 
    initSplitTextAnimations 
};