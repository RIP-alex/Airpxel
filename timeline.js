/**
 * timeline-parallax.js
 * Ce fichier contient toutes les fonctions pour gérer la timeline avec effet parallaxe
 */

// Fonction pour initialiser la timeline avec effet parallaxe
function initParallaxTimeline() {
    const timelineContainers = document.querySelectorAll('.parallax-timeline');
    
    timelineContainers.forEach(container => {
        const timelinePoints = container.querySelectorAll('.timeline-point');
        const timelineCards = container.querySelectorAll('.timeline-card-wrapper');
        const prevBtn = container.querySelector('.prev-btn');
        const nextBtn = container.querySelector('.next-btn');
        
        // Si aucun élément n'est trouvé, sortir de la fonction
        if (timelinePoints.length === 0 || timelineCards.length === 0) {
            console.log('Éléments de timeline manquants');
            return;
        }
        
        // Position active courante
        let currentIndex = 0;
        
        // Fonction pour activer un point et sa carte correspondante
        function activateTimelinePoint(index) {
            // Vérifier que l'index est valide
            if (index < 0 || index >= timelinePoints.length) {
                console.error('Index de timeline non valide:', index);
                return;
            }
            
            // Mettre à jour l'index courant
            currentIndex = index;
            
            // Mettre à jour l'état des points
            timelinePoints.forEach((point, i) => {
                point.classList.toggle('active', i === index);
            });
            
            // Mettre à jour l'état des cartes
            timelineCards.forEach((card, i) => {
                card.classList.toggle('active', i === index);
            });
            
            // Mettre à jour l'état des boutons
            if (prevBtn && nextBtn) {
                prevBtn.disabled = index === 0;
                nextBtn.disabled = index === timelinePoints.length - 1;
                prevBtn.style.opacity = index === 0 ? '0.5' : '1';
                nextBtn.style.opacity = index === timelinePoints.length - 1 ? '0.5' : '1';
            }
            
            // Effet de parallaxe sur les autres points (subtilement)
            timelinePoints.forEach((point, i) => {
                const distance = Math.abs(i - index);
                const factor = 1 - (distance * 0.2); // Facteur de réduction pour les points éloignés
                
                if (i !== index) {
                    point.style.transform = `translate(-50%, -50%) scale(${factor})`;
                } else {
                    point.style.transform = 'translate(-50%, -50%) scale(1.2)';
                }
            });
            
            // Effet de parallaxe sur les années
            const yearMarkers = container.querySelectorAll('.year-marker');
            yearMarkers.forEach((marker, i) => {
                const distance = Math.abs(i - index);
                const translateY = distance * -2; // Déplacement vertical subtil
                
                marker.style.transform = `translateX(-50%) translateY(${translateY}px)`;
                marker.style.opacity = 1 - (distance * 0.15); // Légère variation d'opacité
            });
        }
        
        // Attacher les gestionnaires d'événements aux points de la timeline
        timelinePoints.forEach((point, index) => {
            point.addEventListener('click', () => {
                activateTimelinePoint(index);
            });
        });
        
        // Gestionnaires d'événements pour les boutons
        if (prevBtn && nextBtn) {
            prevBtn.addEventListener('click', () => {
                if (currentIndex > 0) {
                    activateTimelinePoint(currentIndex - 1);
                }
            });
            
            nextBtn.addEventListener('click', () => {
                if (currentIndex < timelinePoints.length - 1) {
                    activateTimelinePoint(currentIndex + 1);
                }
            });
        }
        
        // Ajouter l'interaction au défilement pour l'effet parallaxe
        window.addEventListener('scroll', () => {
            const rect = container.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
            
            if (isVisible) {
                const scrollPercentage = 1 - (rect.top / window.innerHeight);
                const parallaxFactor = Math.min(Math.max(scrollPercentage, 0), 1);
                
                // Animer la ligne de timeline lors du défilement
                const timelineLine = container.querySelector('.timeline-line');
                if (timelineLine) {
                    timelineLine.style.width = `${Math.min(100, parallaxFactor * 120)}%`;
                }
                
                // Animer les points lors du défilement
                timelinePoints.forEach((point, i) => {
                    const delay = i * 0.1;
                    const pointFactor = Math.min(Math.max(parallaxFactor - delay, 0), 1);
                    point.style.opacity = pointFactor;
                });
            }
        });
        
        // Initialiser la timeline à la position initiale
        activateTimelinePoint(0);
        
        // Ajouter la navigation clavier
        document.addEventListener('keydown', (e) => {
            if (container.closest('.timeline-container.active')) {
                if (e.key === 'ArrowLeft' && currentIndex > 0) {
                    activateTimelinePoint(currentIndex - 1);
                } else if (e.key === 'ArrowRight' && currentIndex < timelinePoints.length - 1) {
                    activateTimelinePoint(currentIndex + 1);
                }
            }
        });
    });
}

// Initialiser la navigation entre les onglets (expériences/formation)
function initTimelineTabs() {
    const tabs = document.querySelectorAll('.journey-tab');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-tab');
            
            // Mettre à jour les onglets actifs
            document.querySelectorAll('.journey-tab').forEach(t => {
                t.classList.remove('active');
            });
            tab.classList.add('active');
            
            // Afficher le contenu correspondant
            document.querySelectorAll('.timeline-container').forEach(container => {
                container.classList.remove('active');
            });
            
            const targetTimeline = document.getElementById(`${target}-timeline`);
            if (targetTimeline) {
                targetTimeline.classList.add('active');
                
                // Réinitialiser la timeline active
                setTimeout(() => {
                    initParallaxTimeline();
                }, 50);
            }
        });
    });
    
    // Activer l'onglet par défaut
    const firstTab = document.querySelector('.journey-tab');
    if (firstTab) {
        firstTab.click();
    }
}

// Ajout d'effets d'interaction avancés pour la parallaxe
function addAdvancedParallaxEffects() {
    const timelineContainers = document.querySelectorAll('.parallax-timeline');
    
    timelineContainers.forEach(container => {
        const timelineCards = container.querySelectorAll('.timeline-card');
        
        // Effet de parallaxe au mouvement de la souris
        container.addEventListener('mousemove', (e) => {
            // Ne pas appliquer l'effet si on est sur mobile
            if (window.innerWidth < 768) return;
            
            const containerRect = container.getBoundingClientRect();
            const mouseX = e.clientX - containerRect.left;
            const mouseY = e.clientY - containerRect.top;
            
            // Calculer la position relative de la souris (de -1 à 1)
            const relativeX = (mouseX / containerRect.width) * 2 - 1;
            const relativeY = (mouseY / containerRect.height) * 2 - 1;
            
            // Appliquer un effet subtil aux cartes actives
            timelineCards.forEach(card => {
                if (card.closest('.timeline-card-wrapper.active')) {
                    // Rotation et déplacement subtils basés sur la position de la souris
                    const rotateX = relativeY * -3; // Rotation sur l'axe X (haut/bas)
                    const rotateY = relativeX * 5;  // Rotation sur l'axe Y (gauche/droite)
                    const translateX = relativeX * 5; // Déplacement horizontal
                    const translateY = relativeY * 5; // Déplacement vertical
                    
                    card.style.transform = `
                        perspective(1000px) 
                        rotateX(${rotateX}deg) 
                        rotateY(${rotateY}deg) 
                        translateX(${translateX}px) 
                        translateY(${translateY}px)
                    `;
                }
            });
        });
        
        // Rétablir la position normale lorsque la souris quitte le conteneur
        container.addEventListener('mouseleave', () => {
            timelineCards.forEach(card => {
                if (card.closest('.timeline-card-wrapper.active')) {
                    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateX(0) translateY(0)';
                }
            });
        });
    });
}

// Fonction pour ajouter des animations de défilement
function addScrollAnimations() {
    // Vérifier si IntersectionObserver est disponible
    if ('IntersectionObserver' in window) {
        // Observer pour déclencher les animations lors du défilement
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });
        
        // Observer les éléments de la timeline
        document.querySelectorAll('.timeline-track, .timeline-point, .timeline-card-wrapper').forEach(el => {
            observer.observe(el);
        });
    } else {
        // Fallback pour les navigateurs qui ne supportent pas IntersectionObserver
        document.querySelectorAll('.timeline-track, .timeline-point, .timeline-card-wrapper').forEach(el => {
            el.classList.add('animate-in');
        });
    }
}

// Fonction pour gérer les swipes sur mobile
function addSwipeNavigation() {
    const timelineContainers = document.querySelectorAll('.parallax-timeline');
    
    timelineContainers.forEach(container => {
        let touchStartX = 0;
        let touchEndX = 0;
        
        container.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, false);
        
        container.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe(container);
        }, false);
        
        function handleSwipe(container) {
            const swipeThreshold = 50; // Seuil minimum pour détecter un swipe
            const diff = touchStartX - touchEndX;
            
            if (Math.abs(diff) < swipeThreshold) return; // Ignorer les petits mouvements
            
            const prevBtn = container.querySelector('.prev-btn');
            const nextBtn = container.querySelector('.next-btn');
            
            if (diff > 0) {
                // Swipe vers la gauche (suivant)
                if (nextBtn && !nextBtn.disabled) {
                    nextBtn.click();
                }
            } else {
                // Swipe vers la droite (précédent)
                if (prevBtn && !prevBtn.disabled) {
                    prevBtn.click();
                }
            }
        }
    });
}

// Fonction principale d'initialisation
function initTimeline() {
    console.log('Initialisation de la timeline parallaxe...');
    
    // Initialiser la timeline avec effet parallaxe
    initParallaxTimeline();
    
    // Initialiser les onglets
    initTimelineTabs();
    
    // Ajouter les effets avancés
    addAdvancedParallaxEffects();
    
    // Ajouter les animations au défilement
    addScrollAnimations();
    
    // Ajouter la navigation par swipe sur mobile
    addSwipeNavigation();
    
    // Réinitialiser lors du redimensionnement de la fenêtre
    window.addEventListener('resize', () => {
        console.log('Redimensionnement détecté, réinitialisation de la timeline...');
        initParallaxTimeline();
    });
}

// Exécuter l'initialisation quand le DOM est chargé
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM chargé, initialisation de la timeline...');
    initTimeline();
});