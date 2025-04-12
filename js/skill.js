/**
 * skill.js - Gestion des onglets de compétences
 * Ce module gère l'affichage et l'interaction avec la section des compétences
 */

/**
 * Initialise les onglets de compétences
 */
function initSkillTabs() {
    console.log("Initialisation des onglets de compétences");
    const categories = document.querySelectorAll('.skill-category');
    
    if (categories.length === 0) {
        console.log("Aucune catégorie de compétences trouvée");
        return;
    }
    
    console.log(`${categories.length} catégories trouvées`);
    
    // Cacher toutes les sections de contenu au démarrage
    document.querySelectorAll('.skill-details-content').forEach(content => {
        content.classList.remove('active');
    });
    
    categories.forEach(category => {
        category.addEventListener('click', () => {
            const categoryId = category.getAttribute('data-category');
            console.log(`Clic sur la catégorie: ${categoryId}`);
            
            // Retirer la classe active de toutes les catégories
            categories.forEach(c => c.classList.remove('active'));
            // Ajouter la classe active à la catégorie cliquée
            category.classList.add('active');
            
            // Masquer tous les contenus
            const contents = document.querySelectorAll('.skill-details-content');
            contents.forEach(content => {
                content.classList.remove('active');
            });
            
            // Afficher le contenu correspondant
            const targetContent = document.querySelector(`.skill-details-content[data-category="${categoryId}"]`);
            if (targetContent) {
                // Attendre un court instant avant d'afficher pour permettre la transition
                setTimeout(() => {
                    targetContent.classList.add('active');
                    console.log(`Contenu activé pour: ${categoryId}`);
                    
                    // Animation d'apparition des icônes une par une
                    animateSkillIcons(targetContent);
                }, 50);
            } else {
                console.error(`Contenu non trouvé pour la catégorie: ${categoryId}`);
            }
        });
    });
}

/**
 * Anime l'apparition des icônes de compétences
 * @param {HTMLElement} container - Le conteneur contenant les icônes
 */
function animateSkillIcons(container) {
    const icons = container.querySelectorAll('.skill-icon-item');
    console.log(`Animation de ${icons.length} icônes`);
    
    // Réinitialiser les styles d'animation pour toutes les icônes
    icons.forEach(icon => {
        // Supprimer la classe revealed pour réinitialiser l'animation
        icon.classList.remove('revealed');
    });
    
    // Animer chaque icône avec un délai progressif
    icons.forEach((icon, index) => {
        setTimeout(() => {
            // Ajouter la classe pour déclencher l'animation
            icon.classList.add('revealed');
        }, 100 + index * 80); // Délai progressif plus prononcé
    });
}

/**
 * Initialise la première catégorie par défaut
 */
function initDefaultCategory() {
    console.log("Initialisation de la catégorie par défaut");
    const firstCategory = document.querySelector('.skill-category');
    if (firstCategory) {
        // Simuler un clic sur la première catégorie
        firstCategory.click();
        console.log("Première catégorie activée");
    } else {
        console.error("Aucune catégorie trouvée pour l'initialisation par défaut");
    }
}

/**
 * Initialise les barres de progression de compétences
 */
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-bar');
    
    if (skillBars.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const width = bar.dataset.width || bar.style.width;
                
                // Réinitialiser d'abord
                bar.style.width = '0';
                
                // Puis animer après un court délai
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
                
                observer.unobserve(bar);
            }
        });
    }, { threshold: 0.2 });
    
    skillBars.forEach(bar => {
        observer.observe(bar);
    });
}

// Exporter les fonctions
export { initSkillTabs, initDefaultCategory, initSkillBars, animateSkillIcons };