/* ===== DIRECTEUR D'ENTRÉES SPECTACULAIRES ===== */
/* Orchestration des animations d'entrée pour impact maximum */

class EntranceDirector {
  constructor() {
    this.sequences = new Map();
    this.currentSequence = null;
    this.entranceComplete = false;
    this.impactMoments = [];
  }

  async initEntranceSequence() {
    this.setupSequences();
    await this.executeOpeningBlast();
    this.choreographEntries();
    console.log('🎬 Directeur d\'entrées activé - Spectacle commencé !');
  }

  async executeOpeningBlast() {
    // PHASE 1: Explosion initiale (0-1 sec)
    document.body.classList.add('entrance-loading');
    this.triggerScreenFlash();
    
    setTimeout(() => {
      // PHASE 2: Révélation hero (1-3 sec)
      this.revealHeroSection();
      this.startParticleExplosion();
    }, 1000);

    setTimeout(() => {
      // PHASE 3: Cascade éléments (3-6 sec)
      this.cascadeElements();
      this.entranceComplete = true;
    }, 3000);
  }

  revealHeroSection() {
    const hero = document.querySelector('.hero-impact');
    if (hero) {
      hero.classList.add('entrance-glitch');
      this.typewriterEffect('.hero-title', AlexandreStory.identity.name);
      this.pulseEffect('.impact-subtitle', AlexandreStory.identity.tagline);
    }
  }

  typewriterEffect(selector, text) {
    const element = document.querySelector(selector);
    if (element) {
      element.textContent = '';
      element.classList.add('entrance-typewriter');
      let i = 0;
      const timer = setInterval(() => {
        element.textContent += text[i];
        i++;
        if (i >= text.length) clearInterval(timer);
      }, 100);
    }
  }
}