// Fonction pour initialiser les onglets de compétences
function initSkillsTabs() {
    const categories = document.querySelectorAll('.skill-category');
    
    categories.forEach(category => {
        category.addEventListener('click', () => {
            // Retirer la classe active de toutes les catégories
            categories.forEach(c => c.classList.remove('active'));
            
            // Ajouter la classe active à la catégorie cliquée
            category.classList.add('active');
            
            // Récupérer l'ID de la catégorie
            const categoryId = category.getAttribute('data-category');
            
            // Masquer tous les contenus de compétences
            document.querySelectorAll('.skill-details-content').forEach(content => {
                content.classList.remove('active');
            });
            
            // Afficher le contenu correspondant
            document.querySelector(`.skill-details-content[data-category="${categoryId}"]`).classList.add('active');
            
            // Animer l'apparition des icônes
            animateSkillIcons(categoryId);
        });
    });
}

// Fonction pour animer l'apparition des icônes
function animateSkillIcons(categoryId) {
    const icons = document.querySelectorAll(`.skill-details-content[data-category="${categoryId}"] .skill-icon-item`);
    
    icons.forEach((icon, index) => {
        // Réinitialiser l'animation
        icon.style.opacity = 0;
        icon.style.transform = 'translateY(20px)';
        
        // Appliquer l'animation avec un délai échelonné
        setTimeout(() => {
            icon.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            icon.style.opacity = 1;
            icon.style.transform = 'translateY(0)';
        }, 50 * index);
    });
}

// Initialiser les onglets au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    initSkillsTabs();
    
    // Animer les icônes de la première catégorie
    setTimeout(() => {
        animateSkillIcons('dev');
    }, 500);
});