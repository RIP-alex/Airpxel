/* ===== ORCHESTRATEUR TUNNEL DE VENTE ===== */
/* Chef d'orchestre de l'expérience émotionnelle Alexandre */

class TunnelOrchestrator {
  constructor() {
    this.currentPhase = 'attention';
    this.emotionScore = 0;
    this.engagementLevel = 0;
    this.conversionReadiness = 0;
    this.userBehavior = new Map();
    this.psychologyTimer = null;
  }

  async initTunnelExperience() {
    await this.setupPsychologyTracking();
    this.startAttentionPhase();
    this.monitorEngagement();
    console.log('🎯 Tunnel de vente Alexandre activé - Mode séduction ON');
  }

  startAttentionPhase() {
    document.body.setAttribute('data-tunnel-phase', 'attention');
    this.triggerHologramExplosion();
    this.startCuriosityTimer();
    setTimeout(() => this.transitionToInterest(), 3000);
  }

  transitionToInterest() {
    this.currentPhase = 'interest';
    document.body.setAttribute('data-tunnel-phase', 'interest');
    this.revealUniqueValue();
    this.buildCuriosity();
  }

  calculateConversionReadiness() {
    const timeSpent = performance.now() / 1000;
    const interactions = this.userBehavior.get('clicks') || 0;
    const scrollDepth = this.userBehavior.get('maxScroll') || 0;
    
    this.conversionReadiness = Math.min(100, 
      (timeSpent * 2) + (interactions * 10) + (scrollDepth * 0.5)
    );
    
    return this.conversionReadiness > 75;
  }
}