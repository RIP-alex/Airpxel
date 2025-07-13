/**
 * ===== DONNÉES DES PROJETS =====
 * 
 * Contient toutes les informations sur les projets et réalisations
 * Données basées sur le profil réel d'Alexandre Rippling
 */

// ===== CONFIGURATION DES PROJETS =====
const projectsConfig = {
  // Catégories disponibles pour le filtrage
  categories: [
    { id: 'all', label: 'Tous', icon: 'fas fa-th' },
    { id: 'web', label: 'Web', icon: 'fas fa-globe' },
    { id: 'design', label: 'Design', icon: 'fas fa-palette' },
    { id: 'communication', label: 'Communication', icon: 'fas fa-bullhorn' },
    { id: 'fullstack', label: 'Fullstack', icon: 'fas fa-code' }
  ],
  
  // Technologies disponibles avec couleurs
  technologies: {
    // Frontend
    'HTML5': { color: '#E34F26', category: 'frontend' },
    'CSS3': { color: '#1572B6', category: 'frontend' },
    'JavaScript': { color: '#F7DF1E', category: 'frontend' },
    'React': { color: '#61DAFB', category: 'frontend' },
    'Vue.js': { color: '#4FC08D', category: 'frontend' },
    
    // Backend
    'Node.js': { color: '#339933', category: 'backend' },
    'PHP': { color: '#777BB4', category: 'backend' },
    'Express': { color: '#000000', category: 'backend' },
    'MongoDB': { color: '#47A248', category: 'database' },
    'MySQL': { color: '#4479A1', category: 'database' },
    
    // CMS & Frameworks
    'WordPress': { color: '#21759B', category: 'cms' },
    'Shopify': { color: '#7AB55C', category: 'cms' },
    
    // Design
    'Figma': { color: '#F24E1E', category: 'design' },
    'Adobe XD': { color: '#FF61F6', category: 'design' },
    'Photoshop': { color: '#31A8FF', category: 'design' },
    'Illustrator': { color: '#FF9A00', category: 'design' },
    
    // Autres
    'Git': { color: '#F05032', category: 'tools' },
    'GitHub': { color: '#181717', category: 'tools' },
    'SEO': { color: '#4285F4', category: 'marketing' }
  }
};

// ===== DONNÉES DES PROJETS =====
const projectsData = [
  {
    id: 'restauscan',
    title: 'RestauScan',
    subtitle: 'Application de Gestion Restaurant',
    description: 'Application complète de gestion de restaurant avec système de commande par QR code. Développée en entreprise avec une approche fullstack moderne. Interface intuitive pour les clients et tableau de bord complet pour la gestion.',
    longDescription: `
      RestauScan est une solution complète développée en entreprise pour moderniser l'expérience restaurant. 
      L'application permet aux clients de scanner un QR code pour accéder au menu, passer commande et payer directement depuis leur smartphone.
      
      Côté gestion, les restaurateurs disposent d'un tableau de bord en temps réel pour suivre les commandes, 
      gérer le menu, analyser les ventes et optimiser leur service.
    `,
    category: ['web', 'fullstack'],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JavaScript'],
    status: 'private', // private, public, demo
    type: 'Application Web',
    year: '2024',
    duration: '6 mois',
    team: 'Équipe de 4 développeurs',
    role: 'Développeur Fullstack',
    features: [
      'Système de QR code pour commandes',
      'Interface client responsive',
      'Tableau de bord restaurant',
      'Gestion des menus en temps réel',
      'Système de paiement intégré',
      'Analytics et reporting',
      'Notifications en temps réel'
    ],
    challenges: [
      'Synchronisation temps réel',
      'Optimisation pour mobile',
      'Gestion des pics de charge',
      'Interface multi-langues'
    ],
    learnings: [
      'Architecture microservices',
      'WebSocket pour temps réel',
      'Optimisation des performances',
      'Tests automatisés'
    ],
    images: {
      thumbnail: 'assets/images/projects/restauscan-thumb.jpg',
      gallery: [
        'assets/images/projects/restauscan-1.jpg',
        'assets/images/projects/restauscan-2.jpg',
        'assets/images/projects/restauscan-3.jpg'
      ]
    },
    links: {
      demo: null, // Projet privé
      github: null, // Code privé
      live: null
    },
    featured: true,
    priority: 1
  },
  
  {
    id: 'casi-lorraine',
    title: 'Site Web CASI Lorraine',
    subtitle: 'Refonte Site Institutionnel',
    description: 'Refonte complète du site institutionnel de l\'association CASI Lorraine (1200+ adhérents). Design moderne, responsive et optimisé pour l\'accessibilité avec système de gestion de contenu.',
    longDescription: `
      En tant que responsable communication, j'ai dirigé la refonte complète du site web de CASI Lorraine.
      L'objectif était de moderniser la présence en ligne de l'association tout en améliorant l'expérience utilisateur
      et l'accessibilité pour tous nos adhérents.
      
      Le projet incluait la migration des contenus existants, la mise en place d'un nouveau design responsive,
      et l'intégration d'outils de gestion pour l'équipe communication.
    `,
    category: ['web', 'communication'],
    technologies: ['WordPress', 'PHP', 'CSS3', 'JavaScript', 'SEO'],
    status: 'public',
    type: 'Site Institutionnel',
    year: '2021-2024',
    duration: 'Projet continu',
    team: 'Solo + Équipe communication',
    role: 'Chef de projet & Développeur',
    features: [
      'Design responsive moderne',
      'Système de gestion de contenu',
      'Espace adhérents sécurisé',
      'Calendrier d\'événements',
      'Newsletter intégrée',
      'Optimisation SEO',
      'Conformité RGPD'
    ],
    challenges: [
      'Migration de données complexes',
      'Besoins multi-utilisateurs',
      'Performance et référencement',
      'Formation de l\'équipe'
    ],
    learnings: [
      'Gestion de projet web',
      'WordPress avancé',
      'Stratégie de contenu',
      'Conduite du changement'
    ],
    images: {
      thumbnail: 'assets/images/projects/casi-thumb.jpg',
      gallery: [
        'assets/images/projects/casi-1.jpg',
        'assets/images/projects/casi-2.jpg'
      ]
    },
    links: {
      demo: '#', // Remplacer par l'URL réelle
      github: null, // Code privé association
      live: '#' // Remplacer par l'URL réelle
    },
    featured: true,
    priority: 2
  },
  
  {
    id: 'cv-portfolio',
    title: 'CV Portfolio Interactif',
    subtitle: 'Site Web Personnel',
    description: 'Site web personnel développé avec les dernières technologies web. Design moderne avec animations fluides, mode sombre/clair, et optimisé pour l\'accessibilité WCAG 2.1 AA.',
    longDescription: `
      Ce portfolio personnel représente l'aboutissement de ma formation en développement web.
      Conçu comme une vitrine de mes compétences techniques et créatives, il utilise uniquement
      des technologies natives (HTML5, CSS3, JavaScript) pour démontrer une maîtrise des fondamentaux.
      
      L'accent a été mis sur les performances, l'accessibilité et l'expérience utilisateur,
      avec un design moderne qui reflète ma personnalité professionnelle.
    `,
    category: ['web', 'design'],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'GitHub'],
    status: 'public',
    type: 'Portfolio Personnel',
    year: '2024',
    duration: '3 semaines',
    team: 'Solo',
    role: 'Développeur & Designer',
    features: [
      'Design responsive mobile-first',
      'Animations CSS avancées',
      'Mode sombre/clair',
      'Navigation fluide',
      'Formulaire de contact fonctionnel',
      'Optimisation performances',
      'Accessibilité WCAG 2.1 AA'
    ],
    challenges: [
      'Animations performantes',
      'Compatibilité navigateurs',
      'Optimisation mobile',
      'Standards d\'accessibilité'
    ],
    learnings: [
      'CSS Grid et Flexbox avancés',
      'JavaScript ES6+ moderne',
      'Optimisation des performances',
      'Standards web modernes'
    ],
    images: {
      thumbnail: 'assets/images/projects/portfolio-thumb.jpg',
      gallery: [
        'assets/images/projects/portfolio-1.jpg',
        'assets/images/projects/portfolio-2.jpg'
      ]
    },
    links: {
      demo: 'https://rip-alex.github.io/cv-portfolio/',
      github: 'https://github.com/RIP-alex/cv-portfolio',
      live: 'https://rip-alex.github.io/cv-portfolio/'
    },
    featured: true,
    priority: 3
  },
  
  {
    id: 'design-creations',
    title: 'Créations Graphiques',
    subtitle: 'Portfolio Design',
    description: 'Collection de créations graphiques réalisées au fil des ans : identités visuelles, logos, supports de communication print et digital pour diverses organisations.',
    longDescription: `
      Cette collection représente plus de 10 ans d'expérience en design graphique et communication visuelle.
      De la création d'identités visuelles complètes aux supports de communication événementielle,
      chaque projet reflète une approche centrée sur les besoins du client et l'impact visuel.
      
      Les créations couvrent différents secteurs : associatif, culturel, commercial, avec une attention
      particulière portée à l'harmonie des couleurs et à la lisibilité des messages.
    `,
    category: ['design'],
    technologies: ['Illustrator', 'Photoshop', 'InDesign'],
    status: 'public',
    type: 'Design Graphique',
    year: '2011-2024',
    duration: 'Portfolio continu',
    team: 'Solo + Clients',
    role: 'Designer Graphique',
    features: [
      'Identités visuelles complètes',
      'Supports print et digital',
      'Affiches événementielles',
      'Logos et pictogrammes',
      'Mise en page de documents',
      'Retouche photo',
      'Illustrations personnalisées'
    ],
    challenges: [
      'Adaptation multi-supports',
      'Respect des contraintes print',
      'Cohérence graphique',
      'Délais serrés'
    ],
    learnings: [
      'Théorie des couleurs',
      'Typographie avancée',
      'Préparation fichiers print',
      'Relation client'
    ],
    images: {
      thumbnail: 'assets/images/projects/design-thumb.jpg',
      gallery: [
        'assets/images/projects/design-1.jpg',
        'assets/images/projects/design-2.jpg',
        'assets/images/projects/design-3.jpg'
      ]
    },
    links: {
      demo: null,
      github: null,
      live: null // Ou lien vers Behance/Dribbble
    },
    featured: false,
    priority: 4
  },
  
  {
    id: 'communication-campaigns',
    title: 'Campagnes de Communication',
    subtitle: 'Stratégie Digitale',
    description: 'Développement et gestion de campagnes de communication digitale multi-canaux pour CASI Lorraine : réseaux sociaux, newsletters, événements.',
    longDescription: `
      En charge de la communication de CASI Lorraine, j'ai développé une stratégie digitale complète
      pour engager une communauté de plus de 1200 adhérents. Cette approche multi-canaux combine
      présence sur les réseaux sociaux, newsletters régulières, et couverture d'événements.
      
      L'objectif est de maintenir le lien avec les adhérents, valoriser les actions de l'association,
      et attirer de nouveaux membres grâce à une communication moderne et accessible.
    `,
    category: ['communication'],
    technologies: ['WordPress', 'Canva', 'Mailchimp', 'Analytics'],
    status: 'public',
    type: 'Communication Digitale',
    year: '2021-2024',
    duration: 'Mission continue',
    team: 'Équipe communication (3 personnes)',
    role: 'Responsable Communication',
    features: [
      'Stratégie réseaux sociaux',
      'Newsletters bi-mensuelles',
      'Couverture événements',
      'Création de contenus visuels',
      'Analyse des performances',
      'Gestion de communauté',
      'Relations presse'
    ],
    challenges: [
      'Engagement communauté',
      'Régularité des publications',
      'Mesure du ROI',
      'Coordination équipe'
    ],
    learnings: [
      'Stratégie de contenu',
      'Community management',
      'Analytics et métriques',
      'Gestion de projet'
    ],
    images: {
      thumbnail: 'assets/images/projects/communication-thumb.jpg',
      gallery: [
        'assets/images/projects/communication-1.jpg',
        'assets/images/projects/communication-2.jpg'
      ]
    },
    links: {
      demo: null,
      github: null,
      live: null
    },
    featured: false,
    priority: 5
  }
];

// ===== FONCTIONS UTILITAIRES =====

/**
 * Obtient tous les projets
 * @returns {Array} Liste de tous les projets
 */
function getAllProjects() {
  return projectsData.sort((a, b) => a.priority - b.priority);
}

/**
 * Obtient les projets mis en avant
 * @returns {Array} Liste des projets featured
 */
function getFeaturedProjects() {
  return projectsData
    .filter(project => project.featured)
    .sort((a, b) => a.priority - b.priority);
}

/**
 * Filtre les projets par catégorie
 * @param {string} category - Catégorie à filtrer
 * @returns {Array} Projets de la catégorie
 */
function getProjectsByCategory(category) {
  if (category === 'all') {
    return getAllProjects();
  }
  return projectsData
    .filter(project => project.category.includes(category))
    .sort((a, b) => a.priority - b.priority);
}

/**
 * Obtient un projet par son ID
 * @param {string} id - ID du projet
 * @returns {Object|null} Projet trouvé ou null
 */
function getProjectById(id) {
  return projectsData.find(project => project.id === id) || null;
}

/**
 * Obtient les technologies utilisées dans tous les projets
 * @returns {Array} Liste unique des technologies
 */
function getAllTechnologies() {
  const techSet = new Set();
  projectsData.forEach(project => {
    project.technologies.forEach(tech => techSet.add(tech));
  });
  return Array.from(techSet).sort();
}

/**
 * Recherche des projets par mot-clé
 * @param {string} query - Terme de recherche
 * @returns {Array} Projets correspondants
 */
function searchProjects(query) {
  const searchTerm = query.toLowerCase();
  return projectsData.filter(project => 
    project.title.toLowerCase().includes(searchTerm) ||
    project.description.toLowerCase().includes(searchTerm) ||
    project.technologies.some(tech => tech.toLowerCase().includes(searchTerm))
  );
}

/**
 * Obtient les statistiques des projets
 * @returns {Object} Statistiques
 */
function getProjectsStats() {
  const stats = {
    total: projectsData.length,
    featured: projectsData.filter(p => p.featured).length,
    byCategory: {},
    technologies: getAllTechnologies().length,
    publicProjects: projectsData.filter(p => p.status === 'public').length
  };
  
  // Compter par catégorie
  projectsConfig.categories.forEach(cat => {
    if (cat.id !== 'all') {
      stats.byCategory[cat.id] = getProjectsByCategory(cat.id).length;
    }
  });
  
  return stats;
}

// ===== EXPORT POUR UTILISATION GLOBALE =====
if (typeof window !== 'undefined') {
  // Environnement navigateur
  window.ProjectsData = {
    projects: projectsData,
    config: projectsConfig,
    getAllProjects,
    getFeaturedProjects,
    getProjectsByCategory,
    getProjectById,
    getAllTechnologies,
    searchProjects,
    getProjectsStats
  };
} else {
  // Environnement Node.js (si nécessaire)
  module.exports = {
    projectsData,
    projectsConfig,
    getAllProjects,
    getFeaturedProjects,
    getProjectsByCategory,
    getProjectById,
    getAllTechnologies,
    searchProjects,
    getProjectsStats
  };
}

// ===== INITIALISATION AUTOMATIQUE =====
document.addEventListener('DOMContentLoaded', function() {
  console.log('Données des projets chargées:', getProjectsStats());
});