/* ===== CONSTRUCTEUR DE CURIOSITÉ - PSYCHOLOGY ENGINE ===== */
/* Système de génération et maintien de la curiosité utilisateur */

class CuriosityBuilder {
  constructor() {
    this.curiosityLevel = 0;
    this.mysteryElements = new Map();
    this.revealTimers = [];
    this.maxCuriosity = 100;
  }

  initCuriositySystem() {
    this.setupMysteryElements();
    this.scheduleProgressiveReveals();
    this.trackCuriosityMetrics();
    console.log('🔍 Système de curiosité activé - Mode mystère ON');
  }

  createMysteryGap(element, secretContent, delay = 3000) {
    element.classList.add('mystery-blur');
    element.setAttribute('data-secret', secretContent);
    element.addEventListener('mouseenter', () => this.triggerCuriositySpike(element));
    
    setTimeout(() => {
      this.revealSecret(element);
      this.curiosityLevel += 15;
    }, delay);
  }

  revealSecret(element) {
    element.classList.remove('mystery-blur');
    element.classList.add('secret-revealed');
    const secret = element.getAttribute('data-secret');
    this.showRevealEffect(element, secret);
  }

  triggerCuriositySpike(element) {
    this.curiosityLevel = Math.min(this.maxCuriosity, this.curiosityLevel + 5);
    element.style.filter = 'brightness(1.2) contrast(1.1)';
  }
}