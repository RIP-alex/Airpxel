/* ===== SYSTÈME DE RECONNAISSANCE GESTUELLE ===== */
/* Interface gestuelle avancée pour l'immersion tactile */

class GestureRecognition {
  constructor() {
    this.isActive = false;
    this.touchStartPos = { x: 0, y: 0 };
    this.touchEndPos = { x: 0, y: 0 };
    this.gestureThreshold = 50;
    this.gestures = new Map();
    this.multiTouchActive = false;
  }

  initGestureSystem() {
    this.setupTouchListeners();
    this.setupMouseGestures();
    this.registerGestureActions();
    this.isActive = true;
    console.log('👋 Système gestuel activé - Interface futuriste ON');
  }

  setupTouchListeners() {
    document.addEventListener('touchstart', (e) => this.handleTouchStart(e), { passive: false });
    document.addEventListener('touchmove', (e) => this.handleTouchMove(e), { passive: false });
    document.addEventListener('touchend', (e) => this.handleTouchEnd(e), { passive: false });
  }

  handleTouchStart(event) {
    const touch = event.touches[0];
    this.touchStartPos = { x: touch.clientX, y: touch.clientY };
    this.multiTouchActive = event.touches.length > 1;
    
    if (this.multiTouchActive) {
      this.triggerMultiTouchEffect();
    }
  }

  detectSwipeGesture() {
    const deltaX = this.touchEndPos.x - this.touchStartPos.x;
    const deltaY = this.touchEndPos.y - this.touchStartPos.y;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    
    if (distance > this.gestureThreshold) {
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        return deltaX > 0 ? 'swipe-right' : 'swipe-left';
      } else {
        return deltaY > 0 ? 'swipe-down' : 'swipe-up';
      }
    }
    return null;
  }
}