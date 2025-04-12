/**
 * hero.js - Gestion de l'animation du hero
 * Ce module initialise l'animation du canvas hero en utilisant le module hero-animation.js
 */

import { state } from './main.js';

/**
 * Initialise le canvas du hero
 */
function initHeroCanvas() {
    console.log('Initialisation du canvas hero');
    
    // Vérifier que le module hero-animation est chargé
    if (window.heroAnimation && typeof window.heroAnimation.init === 'function') {
        // Passer les couleurs actuelles à l'animation
        window.heroAnimation.init(state.colors);
        console.log('Animation hero démarrée');
    } else {
        console.warn('Module hero-animation non trouvé ou non initialisé');
    }
}

// Exporter la fonction d'initialisation
export { initHeroCanvas };