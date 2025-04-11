/**
 * Animation du fond de la section Hero
 * Crée une animation fluide et moderne avec des particules interactives
 */

// Variables globales pour l'animation
let heroCanvas, heroContext;
let heroParticles = [];
let heroAnimationActive = false;
let heroAnimationFrame;
let mouseX = null;
let mouseY = null;
let waveAngle = 0;
let attractors = [];

/**
 * Initialise l'animation du hero
 * @param {Object} colors - Palette de couleurs à utiliser dans l'animation
 */
function initHeroAnimation(colors) {
    // Récupérer le canvas et son contexte
    heroCanvas = document.getElementById('hero-canvas');
    if (!heroCanvas) return;
    
    heroContext = heroCanvas.getContext('2d');
    
    // Redimensionner le canvas pour qu'il occupe tout son conteneur
    resizeHeroCanvas();
    
    // Créer les particules
    createHeroParticles(colors);
    
    // Initialiser les attracteurs
    attractors = [
        { x: heroCanvas.width * 0.2, y: heroCanvas.height * 0.2, strength: 0.2 },
        { x: heroCanvas.width * 0.8, y: heroCanvas.height * 0.8, strength: 0.15 }
    ];
    
    // Ajouter les écouteurs d'événements
    setupHeroEventListeners();
    
    // Lancer l'animation
    if (!heroAnimationActive) {
        heroAnimationActive = true;
        animateHero(colors);
    }
}

/**
 * Redimensionne le canvas pour qu'il occupe tout son conteneur
 */
function resizeHeroCanvas() {
    if (!heroCanvas) return;
    
    heroCanvas.width = heroCanvas.offsetWidth;
    heroCanvas.height = heroCanvas.offsetHeight;
}

/**
 * Crée les particules pour l'animation
 * @param {Object} colors - Palette de couleurs à utiliser
 */
function createHeroParticles(colors) {
    heroParticles = [];
    
    // Calculer le nombre de particules en fonction de la taille du canvas
    const particleCount = Math.floor(heroCanvas.width * heroCanvas.height / 8000);
    
    for (let i = 0; i < particleCount; i++) {
        // Déterminer aléatoirement le type de particule (points ou polygones)
        const particleType = Math.random() > 0.8 ? 'polygon' : 'circle';
        const size = particleType === 'polygon' ? 
                    Math.random() * 5 + 3 : // Taille pour les polygones
                    Math.random() * 2 + 1;  // Taille pour les cercles
        
        // Créer une particule avec des propriétés aléatoires
        heroParticles.push({
            x: Math.random() * heroCanvas.width,
            y: Math.random() * heroCanvas.height,
            radius: size,
            color: [colors.accent, colors.accentSecondary, colors.accentTertiary][Math.floor(Math.random() * 3)],
            speedX: Math.random() * 0.5 - 0.25,
            speedY: Math.random() * 0.5 - 0.25,
            opacity: Math.random() * 0.5 + 0.3, // Opacité variable
            type: particleType,
            sides: Math.floor(Math.random() * 3) + 3, // 3 à 5 côtés
            rotation: 0,
            rotationSpeed: (Math.random() * 0.02) - 0.01,
            proximity: []
        });
    }
}

/**
 * Dessine un polygone sur le canvas
 * @param {CanvasRenderingContext2D} ctx - Contexte du canvas
 * @param {number} x - Position X du centre du polygone
 * @param {number} y - Position Y du centre du polygone
 * @param {number} radius - Rayon du polygone
 * @param {number} sides - Nombre de côtés
 * @param {number} rotation - Angle de rotation (en radians)
 */
function drawPolygon(ctx, x, y, radius, sides, rotation) {
    ctx.beginPath();
    const angle = (Math.PI * 2) / sides;
    
    for (let i = 0; i < sides; i++) {
        const currAngle = rotation + (i * angle);
        const currX = x + radius * Math.cos(currAngle);
        const currY = y + radius * Math.sin(currAngle);
        
        if (i === 0) {
            ctx.moveTo(currX, currY);
        } else {
            ctx.lineTo(currX, currY);
        }
    }
    
    ctx.closePath();
}

/**
 * Configure les écouteurs d'événements pour l'interaction
 */
function setupHeroEventListeners() {
    // Interaction avec la souris
    heroCanvas.addEventListener('mousemove', (e) => {
        const rect = heroCanvas.getBoundingClientRect();
        mouseX = e.clientX - rect.left;
        mouseY = e.clientY - rect.top;
        
        // Ajouter un attracteur temporaire à la position de la souris
        attractors[0] = { x: mouseX, y: mouseY, strength: 0.3 };
    });
    
    heroCanvas.addEventListener('mouseleave', () => {
        mouseX = null;
        mouseY = null;
        // Réinitialiser les attracteurs
        attractors[0] = { x: heroCanvas.width * 0.2, y: heroCanvas.height * 0.2, strength: 0.2 };
    });
    
    // Redimensionnement de la fenêtre
    window.addEventListener('resize', () => {
        if (!heroCanvas) return;
        
        resizeHeroCanvas();
        
        // Ajuster les attracteurs
        attractors[0] = { x: heroCanvas.width * 0.2, y: heroCanvas.height * 0.2, strength: 0.2 };
        attractors[1] = { x: heroCanvas.width * 0.8, y: heroCanvas.height * 0.8, strength: 0.15 };
        
        // Recréer les particules pour qu'elles soient bien réparties
        createHeroParticles(window.colors || {
            accent: '#3B82F6',
            accentSecondary: '#10B981',
            accentTertiary: '#F59E0B'
        });
    });
}

/**
 * Animation des particules
 * @param {Object} colors - Palette de couleurs à utiliser
 */
function animateHero(colors) {
    if (!heroCanvas || !heroContext) return;
    
    // Nettoyer le canvas
    heroContext.clearRect(0, 0, heroCanvas.width, heroCanvas.height);
    
    // Mettre à jour l'angle de vague
    waveAngle += 0.01;
    
    // Animer les attracteurs pour qu'ils se déplacent lentement
    attractors.forEach(attractor => {
        attractor.x += Math.sin(waveAngle) * 0.5;
        attractor.y += Math.cos(waveAngle) * 0.5;
        
        // Garder les attracteurs dans les limites du canvas
        if (attractor.x < 0 || attractor.x > heroCanvas.width) {
            attractor.x = Math.random() * heroCanvas.width;
        }
        if (attractor.y < 0 || attractor.y > heroCanvas.height) {
            attractor.y = Math.random() * heroCanvas.height;
        }
    });
    
    // Mettre à jour et dessiner chaque particule
    heroParticles.forEach(particle => {
        // Appliquer une force d'attraction vers les points d'attraction
        attractors.forEach(attractor => {
            const dx = attractor.x - particle.x;
            const dy = attractor.y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < heroCanvas.width / 3) {
                particle.speedX += (dx / distance) * attractor.strength * 0.01;
                particle.speedY += (dy / distance) * attractor.strength * 0.01;
            }
        });
        
        // Ajouter un léger mouvement de vague
        particle.speedX += Math.sin(waveAngle + particle.y * 0.01) * 0.01;
        particle.speedY += Math.cos(waveAngle + particle.x * 0.01) * 0.01;
        
        // Limiter la vitesse
        const maxSpeed = 0.8;
        const speed = Math.sqrt(particle.speedX * particle.speedX + particle.speedY * particle.speedY);
        if (speed > maxSpeed) {
            particle.speedX = (particle.speedX / speed) * maxSpeed;
            particle.speedY = (particle.speedY / speed) * maxSpeed;
        }
        
        // Déplacer la particule
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Faire tourner les polygones
        particle.rotation += particle.rotationSpeed;
        
        // Rebondir sur les bords
        if (particle.x < 0 || particle.x > heroCanvas.width) {
            particle.speedX *= -1;
            // Petite perturbation
            particle.speedY += (Math.random() * 0.2) - 0.1;
        }
        if (particle.y < 0 || particle.y > heroCanvas.height) {
            particle.speedY *= -1;
            // Petite perturbation
            particle.speedX += (Math.random() * 0.2) - 0.1;
        }
        
        // Dessiner la particule selon son type
        heroContext.globalAlpha = particle.opacity;
        
        if (particle.type === 'polygon') {
            drawPolygon(heroContext, particle.x, particle.y, particle.radius, particle.sides, particle.rotation);
            heroContext.fillStyle = particle.color;
            heroContext.fill();
        } else {
            heroContext.beginPath();
            heroContext.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            heroContext.fillStyle = particle.color;
            heroContext.fill();
        }
        
        heroContext.globalAlpha = 1;
        
        // Réinitialiser les particules proches
        particle.proximity = [];
    });
    
    // Connecter les particules proches
    for (let i = 0; i < heroParticles.length; i++) {
        for (let j = i + 1; j < heroParticles.length; j++) {
            const dx = heroParticles[i].x - heroParticles[j].x;
            const dy = heroParticles[i].y - heroParticles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            // Distance de connexion plus adaptative selon la taille de l'écran
            const connectionDistance = Math.min(150, heroCanvas.width * 0.1);
            
            if (distance < connectionDistance) {
                // Opacité qui diminue avec la distance
                const opacity = 1 - (distance / connectionDistance);
                heroContext.beginPath();
                heroContext.moveTo(heroParticles[i].x, heroParticles[i].y);
                heroContext.lineTo(heroParticles[j].x, heroParticles[j].y);
                
                // Dégradé de couleur pour les connexions
                const gradient = heroContext.createLinearGradient(
                    heroParticles[i].x, heroParticles[i].y,
                    heroParticles[j].x, heroParticles[j].y
                );
                
                gradient.addColorStop(0, heroParticles[i].color);
                gradient.addColorStop(1, heroParticles[j].color);
                
                heroContext.strokeStyle = gradient;
                heroContext.lineWidth = opacity * 0.8;
                heroContext.stroke();
            }
        }
    }
    
    // Continuer l'animation si elle est active
    if (heroAnimationActive) {
        heroAnimationFrame = requestAnimationFrame(() => animateHero(colors));
    }
}

/**
 * Arrête l'animation du hero
 */
function stopHeroAnimation() {
    heroAnimationActive = false;
    if (heroAnimationFrame) {
        cancelAnimationFrame(heroAnimationFrame);
    }
}

// Exposer les fonctions pour pouvoir les utiliser depuis l'extérieur
window.heroAnimation = {
    init: initHeroAnimation,
    stop: stopHeroAnimation
};