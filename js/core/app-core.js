/* ===== APPLICATION CORE - NOYAU CENTRAL ===== */
/* Orchestrateur principal du CV tunnel de vente Alexandre */

class AlexandreCVApp {
  constructor() {
    this.isInitialized = false;
    this.modules = new Map();
    this.performanceMetrics = new Map();
    this.userJourney = [];
    this.conversionScore = 0;
  }

  async init() {
    console.log('🚀 Initialisation du CV tunnel de vente Alexandre');
    this.startPerformanceTracking();
    
    await this.loadCriticalModules();
    this.setupEventOrchestration();
    this.initializeExperience();
    
    this.isInitialized = true;
    console.log('✅ Alexandre CV App - Prêt à impressionner !');
  }

  async loadCriticalModules() {
    try {
      // Chargement des modules critiques pour l'impact immédiat
      this.modules.set('orchestrator', new TunnelOrchestrator());
      this.modules.set('attention', new AttentionGrabber());
      this.modules.set('curiosity', new CuriosityBuilder());
      this.modules.set('particles', new ParticleEngine(this.createCanvas()));
      this.modules.set('gestures', new GestureRecognition());
      this.modules.set('action', new ActionMotivator());
      
      await Promise.all([
        this.modules.get('orchestrator').initTunnelExperience(),
        this.modules.get('attention').initAttentionCapture(),
        this.modules.get('curiosity').initCuriositySystem(),
        this.modules.get('gestures').initGestureSystem(),
        this.modules.get('action').initConversionSystem()
      ]);
    } catch (error) {
      console.error('⚠️ Erreur chargement modules:', error);
    }
  }

  createCanvas() {
    const canvas = document.createElement('canvas');
    canvas.id = 'alexandre-particles';
    document.body.appendChild(canvas);
    return canvas;
  }
}