/* ===== MOTEUR DE PARTICULES INTERACTIVES ===== */
/* Système de particules réactives pour l'immersion émotionnelle */

class ParticleEngine {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.particles = [];
    this.mousePosition = { x: 0, y: 0 };
    this.isActive = true;
    this.maxParticles = 100;
  }

  createParticle(x, y, type = 'default') {
    const particle = {
      x, y,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.5 + 0.5,
      color: this.getParticleColor(type),
      life: 1.0,
      decay: Math.random() * 0.01 + 0.005,
      type
    };
    this.particles.push(particle);
  }

  getParticleColor(type) {
    const colors = {
      default: '#00ff88',
      cyber: '#ff0080', 
      electric: '#00d4ff',
      fire: '#ff6b00'
    };
    return colors[type] || colors.default;
  }

  updateParticles() {
    this.particles = this.particles.filter(particle => {
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.life -= particle.decay;
      particle.opacity = particle.life;
      return particle.life > 0;
    });
  }
}