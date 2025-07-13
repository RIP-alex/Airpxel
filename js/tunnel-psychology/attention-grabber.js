/* ===== CAPTEUR D'ATTENTION - PSYCHOLOGY FIRST ===== */
/* Système de captation et maintien de l'attention utilisateur */

class AttentionGrabber {
  constructor() {
    this.attentionScore = 0;
    this.focusStartTime = Date.now();
    this.isUserFocused = true;
    this.attentionHooks = [];
    this.urgencyTriggers = new Map();
  }

  initAttentionCapture() {
    this.setupVisibilityTracking();
    this.triggerInitialShock();
    this.setupMouseTracking();
    this.scheduleAttentionBoosters();
    console.log('👁️ Système de captation d\'attention activé');
  }

  triggerInitialShock() {
    // Explosion visuelle immédiate - 3 secondes critiques
    document.body.classList.add('shock-entrance');
    this.playImpactSound();
    this.generateParticleExplosion();
    
    setTimeout(() => {
      this.transitionToStoryHook();
    }, 3000);
  }

  generateParticleExplosion() {
    const explosionCenter = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    for (let i = 0; i < 50; i++) {
      window.particleEngine?.createParticle(
        explosionCenter.x + (Math.random() - 0.5) * 100,
        explosionCenter.y + (Math.random() - 0.5) * 100,
        ['cyber', 'electric', 'fire'][Math.floor(Math.random() * 3)]
      );
    }
  }

  calculateAttentionDecay() {
    const timeElapsed = (Date.now() - this.focusStartTime) / 1000;
    // Attention decay formula: 100% at 0s, 50% at 30s, 20% at 60s
    const baseDecay = Math.max(20, 100 - (timeElapsed * 1.3));
    return this.isUserFocused ? baseDecay : baseDecay * 0.3;
  }
}