// Fonction pour initialiser la timeline horizontale
function initHorizontalTimeline() {
    const timelineContainers = document.querySelectorAll('.horizontal-timeline');
    
    timelineContainers.forEach(container => {
        const timelineItems = container.querySelectorAll('.timeline-item.horizontal');
        const prevBtn = container.querySelector('.prev-btn');
        const nextBtn = container.querySelector('.next-btn');
        
        // Position initiale et nombre d'items visibles
        let currentPosition = 0;
        const itemsPerView = window.innerWidth < 768 ? 1 : 3;
        const totalItems = timelineItems.length;
        
        // Rendre visibles les premiers éléments
        updateVisibleItems(timelineItems, currentPosition, itemsPerView);
        
        // Gestionnaires d'événements pour les boutons
        if (prevBtn && nextBtn) {
            prevBtn.addEventListener('click', () => {
                if (currentPosition > 0) {
                    currentPosition--;
                    updateVisibleItems(timelineItems, currentPosition, itemsPerView);
                }
            });
            
            nextBtn.addEventListener('click', () => {
                if (currentPosition < totalItems - itemsPerView) {
                    currentPosition++;
                    updateVisibleItems(timelineItems, currentPosition, itemsPerView);
                }
            });
        }
        
        // Rendre tous les éléments visibles lorsque la timeline devient active
        setTimeout(() => {
            if (container.closest('.timeline-container.active')) {
                timelineItems.forEach(item => {
                    item.classList.add('visible');
                });
            }
        }, 100);
    });
}

// Mettre à jour les éléments visibles
function updateVisibleItems(items, position, itemsPerView) {
    // Masquer tous les éléments
    items.forEach((item, index) => {
        const isVisible = index >= position && index < position + itemsPerView;
        item.style.display = isVisible ? 'flex' : 'none';
        
        // Si l'élément est visible, l'animer
        if (isVisible) {
            setTimeout(() => {
                item.classList.add('visible');
            }, 100 * (index - position));
        } else {
            item.classList.remove('visible');
        }
    });
}

// Initialiser la navigation entre les onglets (expériences/formation)
function initJourneyTabs() {
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
            document.getElementById(`${target}-timeline`).classList.add('active');
            
            // Initialiser les éléments de la timeline active
            const activeTimelineItems = document.querySelectorAll(`#${target}-timeline .timeline-item.horizontal`);
            activeTimelineItems.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add('visible');
                }, index * 100);
            });
        });
    });
}

// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function() {
    // Initialiser les timelines horizontales
    initHorizontalTimeline();
    
    // Initialiser les onglets
    initJourneyTabs();
    
    // Gérer le redimensionnement de la fenêtre
    window.addEventListener('resize', function() {
        initHorizontalTimeline();
    });
});