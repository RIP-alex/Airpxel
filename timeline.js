/**
 * timeline.js - Version améliorée
 * Ce fichier contient toutes les fonctions pour gérer la timeline horizontale
 */

// Fonction pour initialiser la timeline horizontale
function initHorizontalTimeline() {
    const timelineContainers = document.querySelectorAll('.horizontal-timeline');
    
    timelineContainers.forEach(container => {
        const timelineItems = container.querySelectorAll('.timeline-item.horizontal');
        const prevBtn = container.querySelector('.prev-btn');
        const nextBtn = container.querySelector('.next-btn');
        
        // Si aucun élément n'est trouvé, sortir de la fonction
        if (timelineItems.length === 0) return;
        
        // Position initiale et nombre d'items visibles
        let currentPosition = 0;
        const itemsPerView = window.innerWidth < 768 ? 1 : 3;
        const totalItems = timelineItems.length;
        
        // Fonction pour mettre à jour la visibilité des éléments
        function updateTimelineView() {
            // Définir quels éléments sont visibles
            timelineItems.forEach((item, index) => {
                if (index >= currentPosition && index < currentPosition + itemsPerView) {
                    item.style.display = 'flex';
                    setTimeout(() => {
                        item.classList.add('visible');
                    }, 100 * (index - currentPosition));
                } else {
                    item.style.display = 'none';
                    item.classList.remove('visible');
                }
            });
            
            // Mettre à jour l'état des boutons de navigation
            if (prevBtn && nextBtn) {
                prevBtn.disabled = currentPosition === 0;
                nextBtn.disabled = currentPosition >= totalItems - itemsPerView;
                
                prevBtn.style.opacity = currentPosition === 0 ? '0.5' : '1';
                nextBtn.style.opacity = currentPosition >= totalItems - itemsPerView ? '0.5' : '1';
            }
        }
        
        // Initialiser l'affichage
        updateTimelineView();
        
        // Gestionnaires d'événements pour les boutons
        if (prevBtn && nextBtn) {
            prevBtn.addEventListener('click', () => {
                if (currentPosition > 0) {
                    currentPosition--;
                    updateTimelineView();
                }
            });
            
            nextBtn.addEventListener('click', () => {
                if (currentPosition < totalItems - itemsPerView) {
                    currentPosition++;
                    updateTimelineView();
                }
            });
        }
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
                
                // Initialiser la timeline active après un court délai
                setTimeout(() => {
                    initHorizontalTimeline();
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

// Fonction d'initialisation principale pour la timeline
function initTimeline() {
    // Console log pour débogage
    console.log('Initialisation de la timeline...');
    
    // Initialiser les timelines horizontales
    initHorizontalTimeline();
    
    // Initialiser les onglets
    initTimelineTabs();
    
    // Réinitialiser lors du redimensionnement de la fenêtre
    window.addEventListener('resize', () => {
        console.log('Redimensionnement détecté, réinitialisation de la timeline...');
        initHorizontalTimeline();
    });
}

// Exécuter l'initialisation quand le DOM est chargé
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM chargé, initialisation de la timeline...');
    initTimeline();
});