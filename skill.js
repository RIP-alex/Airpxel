// skill.js - Gestion des fonctionnalités de la section compétences

// Fonction principale pour initialiser les onglets de compétences
function initSkillTabs() {
    const categories = document.querySelectorAll('.skill-category');
    
    categories.forEach(category => {
        category.addEventListener('click', () => {
            // Retirer la classe active de toutes les catégories
            categories.forEach(c => c.classList.remove('active'));
            // Ajouter la classe active à la catégorie cliquée
            category.classList.add('active');
            
            // Afficher le contenu des compétences correspondant
            const categoryId = category.getAttribute('data-category');
            document.querySelectorAll('.skill-details-content').forEach(content => {
                content.classList.remove('active');
            });
            
            const targetContent = document.querySelector(`.skill-details-content[data-category="${categoryId}"]`);
            if (targetContent) {
                targetContent.classList.add('active');
                
                // Animation d'apparition des icônes une par une
                animateSkillIcons(targetContent);
            }
        });
    });
}

// Fonction pour animer l'apparition des icônes de compétences
function animateSkillIcons(container) {
    const icons = container.querySelectorAll('.skill-icon-item');
    
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
    const firstCategory = document.querySelector('.skill-category');
    if (firstCategory) {
        // Simuler un clic sur la première catégorie
        firstCategory.click();
    }
}

// Initialisation au chargement du document
document.addEventListener('DOMContentLoaded', function() {
    initSkillTabs();
    initDefaultCategory();
});