/* ===== INITIALISATION APPLICATION CV ALEXANDRE ===== */
/* Orchestration des modules et démarrage de l'application */

import { PersonalInfo } from '../data/personal-info.js';
import { NavigationManager } from '../modules/navigation.js';
import { ThemeSwitcher } from '../modules/theme-switcher.js';
import { ScrollEffects } from '../modules/scroll-effects.js';
import { AnimationManager } from '../modules/animations.js';

class CVApp {
    constructor() {
        this.init();
    }

    init() {
        // Initialisation des modules core
        this.personalInfo = new PersonalInfo();
        this.navigation = new NavigationManager();
        this.themeSwitcher = new ThemeSwitcher();
        this.scrollEffects = new ScrollEffects();
        this.animations = new AnimationManager();
        
        // Démarrage de l'application
        this.start();
    }

    start() {
        // Application prête, retirer le loader
        document.body.classList.remove('loading');
        console.log('CV Alexandre Rippling - Application initialisée');
    }
}

// Démarrage au chargement du DOM
document.addEventListener('DOMContentLoaded', () => new CVApp());