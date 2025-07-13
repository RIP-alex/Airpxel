/* ===== MOTIVATEUR D'ACTION - SYSTÈME DE CONVERSION ===== */
/* Orchestration finale pour déclencher l'action de contact */

class ActionMotivator {
  constructor() {
    this.conversionIntention = 0;
    this.urgencyLevel = 0;
    this.scarcityTriggers = new Map();
    this.socialProofCounter = 0;
    this.isConversionReady = false;
  }

  initConversionSystem() {
    this.setupUrgencyTriggers();
    this.activateScarcityElements();
    this.trackConversionSignals();
    this.setupMagneticCTAs();
    console.log('🎯 Système de conversion activé - Mode persuasion MAX');
  }

  triggerUrgencySequence() {
    this.urgencyLevel += 20;
    this.showLimitedAvailability();
    this.activatePulsingCTAs();
    setTimeout(() => this.escalateUrgency(), 15000);
  }

  showLimitedAvailability() {
    const availabilityElement = document.querySelector('.availability-counter');
    if (availabilityElement) {
      availabilityElement.textContent = `⚡ Disponible pour ${Math.floor(Math.random() * 3) + 2} projets ce mois`;
      availabilityElement.classList.add('urgency-blink');
    }
  }

  calculateConversionProbability() {
    const timeSpent = performance.now() / 1000;
    const scrollDepth = window.pageYOffset / document.body.scrollHeight;
    const interactions = this.getInteractionCount();
    
    return Math.min(95, (timeSpent * 2) + (scrollDepth * 30) + (interactions * 10));
  }
}