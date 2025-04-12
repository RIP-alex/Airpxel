/**
 * form.js - Gestion des formulaires et animations associées
 * Ce module gère les interactions avec le formulaire de contact
 */

/**
 * Initialise les animations du formulaire de contact
 */
function initFormAnimations() {
    console.log('Initialisation des animations du formulaire');
    
    const formInputs = document.querySelectorAll('.form-input');
    if (formInputs.length === 0) {
        console.warn('Aucun champ de formulaire trouvé');
        return;
    }
    
    formInputs.forEach(input => {
        // Gérer l'état initial
        if (input.value) {
            input.classList.add('has-content');
        }
        
        // Ajouter des écouteurs d'événements
        input.addEventListener('focus', () => {
            input.classList.add('focused');
        });
        
        input.addEventListener('blur', () => {
            input.classList.remove('focused');
            updateInputState(input);
        });
        
        input.addEventListener('input', () => {
            updateInputState(input);
        });
    });
    
    // Gérer la soumission du formulaire
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    } else {
        console.warn('Formulaire de contact non trouvé');
    }
}

/**
 * Met à jour l'état visuel d'un champ de formulaire en fonction de son contenu
 * @param {HTMLElement} input - L'élément input à mettre à jour
 */
function updateInputState(input) {
    if (input.value) {
        input.classList.add('has-content');
    } else {
        input.classList.remove('has-content');
    }
}

/**
 * Gère la soumission du formulaire de contact
 * @param {Event} e - L'événement de soumission
 */
function handleFormSubmit(e) {
    // Vous pouvez décommenter cette ligne pour empêcher la soumission par défaut
    // e.preventDefault();
    
    const submitBtn = e.target.querySelector('.submit-btn');
    if (submitBtn) {
        submitBtn.classList.add('loading');
        
        // Simuler l'envoi (à remplacer par votre logique réelle)
        setTimeout(() => {
            submitBtn.classList.remove('loading');
            
            // Vous pouvez ajouter ici un message de succès ou une redirection
            console.log('Formulaire envoyé avec succès');
        }, 2000);
    }
}

/**
 * Valide un formulaire avant soumission
 * @param {HTMLFormElement} form - Le formulaire à valider
 * @returns {boolean} - True si le formulaire est valide, false sinon
 */
function validateForm(form) {
    let isValid = true;
    const requiredFields = form.querySelectorAll('[required]');
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            isValid = false;
            // Ajouter une classe d'erreur ou un message
            field.classList.add('error');
        } else {
            field.classList.remove('error');
        }
    });
    
    // Validation spécifique pour l'email
    const emailField = form.querySelector('input[type="email"]');
    if (emailField && emailField.value) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailField.value)) {
            isValid = false;
            emailField.classList.add('error');
        }
    }
    
    return isValid;
}

// Exporter les fonctions
export { initFormAnimations, validateForm };