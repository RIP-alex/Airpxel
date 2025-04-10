// Fonction principale pour initialiser les onglets de compétences
function initSkillTabs() {
    console.log("Initialisation des onglets de compétences");
    const categories = document.querySelectorAll('.skill-category');
    
    if (categories.length === 0) {
        console.log("Aucune catégorie de compétences trouvée");
        return;
    }
    
    console.log(`${categories.length} catégories trouvées`);
    
    categories.forEach(category => {
        category.addEventListener('click', () => {
            const categoryId = category.getAttribute('data-category');
            console.log(`Clic sur la catégorie: ${categoryId}`);
            
            // Retirer la classe active de toutes les catégories
            categories.forEach(c => c.classList.remove('active'));
            // Ajouter la classe active à la catégorie cliquée
            category.classList.add('active');
            
            // Afficher le contenu des compétences correspondant
            const contents = document.querySelectorAll('.skill-details-content');
            contents.forEach(content => {
                content.classList.remove('active');
            });
            
            const targetContent = document.querySelector(`.skill-details-content[data-category="${categoryId}"]`);
            if (targetContent) {
                targetContent.classList.add('active');
                console.log(`Contenu activé pour: ${categoryId}`);
                
                // Animation d'apparition des icônes une par une
                animateSkillIcons(targetContent);
            } else {
                console.error(`Contenu non trouvé pour la catégorie: ${categoryId}`);
            }
        });
    });
}

// Fonction pour animer l'apparition des icônes de compétences
function animateSkillIcons(container) {
    const icons = container.querySelectorAll('.skill-icon-item');
    console.log(`Animation de ${icons.length} icônes`);
    
    // Réinitialiser les styles d'animation pour toutes les icônes
    icons.forEach(icon => {
        icon.style.opacity = '0';
        icon.style.transform = 'translateY(20px)';
    });
    
    // Animer chaque icône avec un délai progressif
    icons.forEach((icon, index) => {
        setTimeout(() => {
            icon.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            icon.style.opacity = '1';
            icon.style.transform = 'translateY(0)';
        }, 50 + index * 50); // Délai de base + délai progressif
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