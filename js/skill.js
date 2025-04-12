// Fonction principale pour initialiser les onglets de compétences
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


// Fonction améliorée pour animer l'apparition des icônes de compétences
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
// Fonction pour initialiser la première catégorie par défaut
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

// Initialisation au chargement du document
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM chargé - Initialisation des skills");
    initSkillTabs();
    initDefaultCategory();
});