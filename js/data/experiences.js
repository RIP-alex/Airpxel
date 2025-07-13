/**
 * ===== DONNÉES EXPÉRIENCES PROFESSIONNELLES =====
 * Fichier : js/data/experiences.js
 * 
 * Contient l'historique complet des expériences professionnelles
 * Données basées sur le parcours réel d'Alexandre Rippling
 */

// ===== CONFIGURATION DES EXPÉRIENCES =====
const experiencesConfig = {
  // Types d'expériences
  types: {
    fulltime: { label: "Temps plein", icon: "fas fa-briefcase", color: "#4CAF50" },
    parttime: { label: "Temps partiel", icon: "fas fa-clock", color: "#2196F3" },
    freelance: { label: "Freelance", icon: "fas fa-user-tie", color: "#FF9800" },
    internship: { label: "Stage", icon: "fas fa-graduation-cap", color: "#9C27B0" },
    training: { label: "Formation", icon: "fas fa-book", color: "#607D8B" }
  },
  
  // Secteurs d'activité
  sectors: {
    communication: { label: "Communication", icon: "fas fa-bullhorn" },
    mechanical: { label: "Mécanique", icon: "fas fa-wrench" },
    design: { label: "Design", icon: "fas fa-palette" },
    tech: { label: "Technologie", icon: "fas fa-code" },
    association: { label: "Associatif", icon: "fas fa-users" }
  },
  
  // Niveaux de responsabilité
  responsibilities: {
    entry: { label: "Débutant", level: 1 },
    junior: { label: "Junior", level: 2 },
    intermediate: { label: "Intermédiaire", level: 3 },
    senior: { label: "Senior", level: 4 },
    lead: { label: "Lead", level: 5 },
    manager: { label: "Manager", level: 6 }
  }
};

// ===== DONNÉES DES EXPÉRIENCES =====
const experiencesData = [
  {
    id: "casi-communication-2021",
    company: {
      name: "CASI Lorraine",
      fullName: "Comité d'Action Social Inter-entreprises de Lorraine",
      sector: "association",
      size: "1200+ adhérents",
      website: "https://www.casi-lorraine.fr",
      location: {
        city: "Nancy",
        region: "Grand Est",
        country: "France"
      },
      description: "Association offrant des avantages sociaux et culturels aux salariés d'entreprises de Lorraine"
    },
    
    position: {
      title: "Responsable de Communication",
      type: "fulltime",
      level: "senior",
      department: "Communication"
    },
    
    period: {
      startDate: "2021-03-01",
      endDate: null, // Poste actuel
      duration: "3+ ans",
      current: true,
      displayPeriod: "Mars 2021 - Actuellement"
    },
    
    description: {
      summary: "Gestion complète de la communication digitale et print pour une association de 1200+ adhérents.",
      detailed: `En charge de l'ensemble de la stratégie de communication de CASI Lorraine, j'ai modernisé la présence digitale de l'association tout en maintenant les supports traditionnels. 
      
      Ma mission couvre la création de contenus, la gestion des sites web, l'animation des réseaux sociaux, et la coordination des événements. J'ai notamment dirigé la refonte complète du site institutionnel et mis en place une stratégie de communication multi-canaux efficace.`
    },
    
    responsibilities: [
      "Étude des systèmes électroniques",
      "Programmation de microcontrôleurs",
      "Conception de circuits électroniques",
      "Tests et mesures électriques",
      "Maintenance d'équipements automatisés",
      "Projets techniques en équipe",
      "Documentation technique",
      "Respect des normes électriques"
    ],
    
    achievements: [
      "BAC STI Électronique obtenu",
      "BEP Électronique validé",
      "Projet de fin d'études réussi",
      "Stage en entreprise validé",
      "Bases solides en programmation",
      "Compréhension des systèmes numériques"
    ],
    
    skills: {
      technical: [
        "Électronique analogique",
        "Électronique numérique",
        "Programmation de base",
        "Automatisme",
        "Mesures électriques",
        "Lecture de schémas",
        "Soudure électronique",
        "Logique binaire"
      ],
      professional: [
        "Analyse technique",
        "Résolution de problèmes",
        "Travail en équipe",
        "Rigueur scientifique",
        "Documentation",
        "Respect des procédures",
        "Curiosité technique",
        "Apprentissage autonome"
      ]
    },
    
    challenges: [
      "Complexité des systèmes électroniques",
      "Transition vers le numérique",
      "Projets techniques aboutis",
      "Acquisition de l'autonomie"
    ],
    
    learnings: [
      "Bases de la logique informatique",
      "Importance de la méthodologie",
      "Travail en équipe technique",
      "Curiosité pour les nouvelles technologies"
    ],
    
    context: {
      teamSize: 4,
      tools: ["Oscilloscope", "Multimètre", "Logiciels de simulation", "Kits électroniques"],
      methodology: "Pédagogie par projet"
    },
    
    featured: false,
    priority: 4
  },
  {
    id: "casi-communication-2021",
    company: {
      name: "CASI Lorraine",
      fullName: "Comité d'Action Social Inter-entreprises de Lorraine",
      sector: "association",
      size: "1200+ adhérents",
      website: "https://www.casi-lorraine.fr",
      location: {
        city: "Nancy",
        region: "Grand Est",
        country: "France"
      },
      description: "Association offrant des avantages sociaux et culturels aux salariés d'entreprises de Lorraine"
    },
    position: {
      title: "Responsable de Communication",
      type: "fulltime",
      level: "senior",
      department: "Communication"
    },
    period: {
      startDate: "2021-03-01",
      endDate: null,
      duration: "3+ ans",
      current: true,
      displayPeriod: "Mars 2021 - Actuellement"
    },
    description: {
      summary: "Gestion complète de la communication digitale et print pour une association de 1200+ adhérents.",
      detailed: `En charge de l'ensemble de la stratégie de communication de CASI Lorraine, j'ai modernisé la présence digitale de l'association tout en maintenant les supports traditionnels. 
      
      Ma mission couvre la création de contenus, la gestion des sites web, l'animation des réseaux sociaux, et la coordination des événements. J'ai notamment dirigé la refonte complète du site institutionnel et mis en place une stratégie de communication multi-canaux efficace.`
    },
    responsibilities: [
      "Création et gestion du site web institutionnel",
      "Développement de la stratégie de communication digitale",
      "Gestion des réseaux sociaux et newsletters",
      "Conception graphique (affiches, flyers, supports visuels)",
      "Coordination des événements et communication externe",
      "Relations presse et partenariats",
      "Formation et encadrement de l'équipe communication",
      "Analyse des performances et reporting"
    ],
    achievements: [
      "Refonte complète du site web avec augmentation de 150% du trafic",
      "Modernisation de la charte graphique de l'association",
      "Mise en place d'une stratégie réseaux sociaux (+300% d'engagement)",
      "Création d'un système de newsletter automatisé",
      "Digitalisation des processus de communication interne",
      "Coordination de 50+ événements par an"
    ],
    skills: {
      technical: [
        "WordPress",
        "PHP",
        "HTML/CSS",
        "JavaScript",
        "Adobe Creative Suite",
        "Canva",
        "Mailchimp",
        "Google Analytics"
      ],
      professional: [
        "Communication digitale",
        "Stratégie de contenu",
        "Gestion de projet",
        "Relations publiques",
        "Design graphique",
        "Rédaction web",
        "Community management",
        "Event management"
      ]
    },
    challenges: [
      "Modernisation de la communication tout en préservant l'identité",
      "Gestion d'une communauté multi-générationnelle",
      "Coordination avec 50+ entreprises partenaires",
      "Adaptation aux nouveaux outils digitaux"
    ],
    learnings: [
      "Stratégie de communication 360°",
      "Gestion de communauté large et diversifiée",
      "Conduite du changement digital",
      "Management d'équipe créative"
    ],
    context: {
      teamSize: 3,
      budget: "Budget communication annuel",
      tools: ["WordPress", "Adobe CC", "Office 365", "Mailchimp", "Canva"],
      methodology: "Agile/Kanban pour la gestion des projets"
    },
    featured: true,
    priority: 1
  },
  {
    id: "mechanic-agricultural-2018",
    company: {
      name: "Diverses entreprises",
      fullName: "Secteur mécanique agricole - Région Grand Est",
      sector: "mechanical",
      size: "PME locales",
      location: {
        city: "Région Grand Est",
        region: "Grand Est", 
        country: "France"
      },
      description: "Entreprises spécialisées dans la maintenance et réparation de matériel agricole et d'espaces verts"
    },
    position: {
      title: "Mécanicien Agricole",
      type: "fulltime",
      level: "intermediate",
      department: "Maintenance"
    },
    period: {
      startDate: "2018-06-01",
      endDate: "2021-02-28",
      duration: "2 ans 8 mois",
      current: false,
      displayPeriod: "Juin 2018 - Février 2021"
    },
    description: {
      summary: "Maintenance et réparation de matériel agricole et d'espaces verts.",
      detailed: `Spécialisé dans la maintenance préventive et curative de machines agricoles complexes, j'ai développé une expertise technique solide tout en cultivant d'excellentes relations client.
      
      Cette expérience m'a permis d'acquérir une méthodologie rigoureuse de diagnostic et de résolution de problèmes, des compétences transférables que j'applique aujourd'hui dans le développement web.`
    },
    responsibilities: [
      "Diagnostic et réparation de machines agricoles complexes",
      "Maintenance préventive et curative",
      "Gestion de l'outillage et des pièces de rechange", 
      "Relation client et conseil technique",
      "Respect des normes de sécurité et environnementales",
      "Formation des apprentis",
      "Rédaction de rapports d'intervention"
    ],
    achievements: [
      "Certification en mécanique agricole avec mention",
      "Spécialisation option Parc et Jardin",
      "Taux de satisfaction client de 95%+",
      "Réduction de 20% du temps moyen d'intervention",
      "Formation de 5+ apprentis",
      "Zéro accident de travail sur la période"
    ],
    skills: {
      technical: [
        "Mécanique générale",
        "Hydraulique",
        "Électricité/Électronique",
        "Diagnostic informatisé",
        "Soudure",
        "Pneumatique",
        "Outillage spécialisé"
      ],
      professional: [
        "Diagnostic de panne",
        "Méthologie de résolution",
        "Relation client",
        "Gestion du stress",
        "Travail en autonomie",
        "Respect des délais",
        "Sécurité au travail"
      ]
    },
    challenges: [
      "Complexité croissante des machines modernes",
      "Urgences en période de récolte",
      "Adaptation aux nouvelles technologies",
      "Gestion de la pression temporelle"
    ],
    learnings: [
      "Méthodologie de diagnostic systématique",
      "Gestion de la relation client sous pression",
      "Importance de la formation continue",
      "Transfert de compétences techniques"
    ],
    context: {
      teamSize: 5,
      tools: ["Outillage spécialisé", "Systèmes de diagnostic", "ERP maintenance"],
      methodology: "Méthodes de maintenance industrielle"
    },
    featured: true,
    priority: 2
  },
  {
    id: "graphic-designer-2011",
    company: {
      name: "Freelance & Entreprises",
      fullName: "Missions d'infographie et mise en page",
      sector: "design",
      size: "Clients divers",
      location: {
        city: "Région Grand Est",
        region: "Grand Est",
        country: "France"
      },
      description: "Missions freelance et salariées en infographie et communication visuelle"
    },
    position: {
      title: "Infographiste Metteur en Page",
      type: "freelance",
      level: "intermediate",
      department: "Communication"
    },
    period: {
      startDate: "2011-09-01",
      endDate: "2018-05-31",
      duration: "6 ans 9 mois",
      current: false,
      displayPeriod: "Septembre 2011 - Mai 2018"
    },
    description: {
      summary: "Création graphique et mise en page pour supports print et digital.",
      detailed: `Période riche en créativité où j'ai développé mon expertise en design graphique et communication visuelle. Travaillant en freelance et pour diverses entreprises, j'ai géré des projets variés allant de la création d'identités visuelles complètes aux supports de communication événementielle.
      
      Cette expérience a forgé ma sensibilité esthétique et ma capacité à traduire des concepts abstraits en visuels impactants, compétences précieuses dans l'UX/UI design.`
    },
    responsibilities: [
      "Conception de supports de communication (brochures, affiches)",
      "Mise en page de documents complexes",
      "Création d'identités visuelles",
      "Retouche photo et illustration",
      "Gestion de projets créatifs de A à Z",
      "Relation client et brief créatif",
      "Préparation fichiers pour impression",
      "Veille créative et tendances"
    ],
    achievements: [
      "BAC Infographiste Metteur en Page (AFPA)",
      "Portfolio de 100+ créations",
      "Fidélisation de 80% des clients",
      "Création de 20+ identités visuelles complètes",
      "Collaboration avec imprimeurs et façonneurs",
      "Maîtrise complète de la chaîne graphique"
    ],
    skills: {
      technical: [
        "Adobe Photoshop",
        "Adobe Illustrator", 
        "Adobe InDesign",
        "QuarkXPress",
        "CorelDRAW",
        "Préparation fichiers print",
        "Colorimétrie",
        "Typographie"
      ],
      professional: [
        "Création graphique",
        "Mise en page",
        "Identité visuelle",
        "Communication visuelle",
        "Gestion créative",
        "Brief client",
        "Respect des délais",
        "Sens esthétique"
      ]
    },
    challenges: [
      "Adaptation aux évolutions technologiques",
      "Gestion simultanée de multiples projets",
      "Contraintes budget vs. créativité",
      "Évolution vers le digital"
    ],
    learnings: [
      "Processus créatif structuré",
      "Gestion de la relation client créative",
      "Importance du brief et de la validation",
      "Évolution des supports de communication"
    ],
    context: {
      teamSize: 1,
      tools: ["Adobe Creative Suite", "QuarkXPress", "Appareils photo"],
      methodology: "Processus créatif itératif"
    },
    featured: true,
    priority: 3
  },
  {
    id: "electronics-technician-2008",
    company: {
      name: "Lycée Pierre de Coubertin",
      fullName: "Formation initiale en électronique",
      sector: "tech",
      size: "Établissement scolaire",
      location: {
        city: "Nancy",
        region: "Grand Est",
        country: "France"
      },
      description: "Formation technique en électronique et systèmes automatisés"
    },
    position: {
      title: "Étudiant - Technicien Électronique",
      type: "training",
      level: "entry",
      department: "Formation"
    },
    period: {
      startDate: "2008-09-01", 
      endDate: "2010-06-30",
      duration: "2 ans",
      current: false,
      displayPeriod: "Septembre 2008 - Juin 2010"
    },
    description: {
      summary: "Formation technique en électronique et systèmes automatisés.",
      detailed: `Formation fondamentale qui a éveillé ma passion pour la technique et la logique. Les bases acquises en programmation, systèmes numériques et résolution de problèmes techniques constituent le socle de ma reconversion vers le développement web.
      
      Cette période a développé ma rigueur technique et ma capacité d'analyse, qualités essentielles dans le développement logiciel.`
    },
    responsibilities: [
      "Étude des systèmes électroniques",
      "Programmation de microcontrôleurs",
      "Conception de circuits électroniques",
      "Tests et mesures électriques",
      "Maintenance d'équipements automatisés",
      "Projets techniques en équipe",
      "Documentation technique",
      "Respect des normes électriques"
    ],
    achievements: [
      "BAC STI Électronique obtenu",
      "BEP Électronique validé",
      "Projet de fin d'études réussi",
      "Stage en entreprise validé",
      "Bases solides en programmation",
      "Compréhension des systèmes numériques"
    ],
    skills: {
      technical: [
        "Électronique analogique",
        "Électronique numérique",
        "Programmation de base",
        "Automatisme",
        "Mesures électriques",
        "Lecture de schémas",
        "Soudure électronique",
        "Logique binaire"
      ],
      professional: [
        "Analyse technique",
        "Résolution de problèmes",
        "Travail en équipe",
        "Rigueur scientifique",
        "Documentation",
        "Respect des procédures",
        "Curiosité technique",
        "Apprentissage autonome"
      ]
    },
    challenges: [
      "Complexité des systèmes électroniques",
      "Transition vers le numérique",
      "Projets techniques aboutis",
      "Acquisition de l'autonomie"
    ],
    learnings: [
      "Bases de la logique informatique",
      "Importance de la méthodologie",
      "Travail en équipe technique",
      "Curiosité pour les nouvelles technologies"
    ],
    context: {
      teamSize: 4,
      tools: ["Oscilloscope", "Multimètre", "Logiciels de simulation", "Kits électroniques"],
      methodology: "Pédagogie par projet"
    },
    featured: false,
    priority: 4
  }
];

// ===== FONCTIONS UTILITAIRES =====

/**
 * Obtient toutes les expériences triées par date
 * @param {boolean} currentFirst - Mettre les postes actuels en premier
 * @returns {Array} Liste des expériences
 */
function getAllExperiences(currentFirst = true) {
  let experiences = [...experiencesData];
  
  if (currentFirst) {
    experiences.sort((a, b) => {
      // Postes actuels en premier
      if (a.period.current && !b.period.current) return -1;
      if (!a.period.current && b.period.current) return 1;
      
      // Puis par priorité
      return a.priority - b.priority;
    });
  } else {
    // Tri chronologique inverse (plus récent en premier)
    experiences.sort((a, b) => {
      const dateA = new Date(a.period.startDate);
      const dateB = new Date(b.period.startDate);
      return dateB - dateA;
    });
  }
  
  return experiences;
}

/**
 * Obtient les expériences mises en avant
 * @returns {Array} Expériences featured
 */
function getFeaturedExperiences() {
  return experiencesData
    .filter(exp => exp.featured)
    .sort((a, b) => a.priority - b.priority);
}

/**
 * Filtre les expériences par secteur
 * @param {string} sector - Secteur à filtrer
 * @returns {Array} Expériences du secteur
 */
function getExperiencesBySector(sector) {
  return experiencesData
    .filter(exp => exp.company.sector === sector)
    .sort((a, b) => a.priority - b.priority);
}

/**
 * Filtre les expériences par type
 * @param {string} type - Type à filtrer
 * @returns {Array} Expériences du type
 */
function getExperiencesByType(type) {
  return experiencesData
    .filter(exp => exp.position.type === type)
    .sort((a, b) => a.priority - b.priority);
}

/**
 * Obtient une expérience par ID
 * @param {string} id - ID de l'expérience
 * @returns {Object|null} Expérience trouvée ou null
 */
function getExperienceById(id) {
  return experiencesData.find(exp => exp.id === id) || null;
}

/**
 * Calcule la durée totale d'expérience
 * @param {string} sector - Secteur spécifique (optionnel)
 * @returns {Object} Durée totale
 */
function getTotalExperience(sector = null) {
  let experiences = experiencesData;
  
  if (sector) {
    experiences = experiences.filter(exp => exp.company.sector === sector);
  }
  
  let totalMonths = 0;
  const currentDate = new Date();
  
  experiences.forEach(exp => {
    const startDate = new Date(exp.period.startDate);
    const endDate = exp.period.current ? currentDate : new Date(exp.period.endDate);
    
    const diffTime = Math.abs(endDate - startDate);
    const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
    totalMonths += diffMonths;
  });
  
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  
  return {
    totalMonths,
    years,
    months,
    display: months > 0 ? `${years} ans ${months} mois` : `${years} ans`
  };
}

/**
 * Obtient toutes les compétences techniques uniques
 * @returns {Array} Liste des compétences techniques
 */
function getAllTechnicalSkills() {
  const skillsSet = new Set();
  
  experiencesData.forEach(exp => {
    exp.skills.technical.forEach(skill => skillsSet.add(skill));
  });
  
  return Array.from(skillsSet).sort();
}

/**
 * Obtient toutes les compétences professionnelles uniques
 * @returns {Array} Liste des compétences professionnelles
 */
function getAllProfessionalSkills() {
  const skillsSet = new Set();
  
  experiencesData.forEach(exp => {
    exp.skills.professional.forEach(skill => skillsSet.add(skill));
  });
  
  return Array.from(skillsSet).sort();
}

/**
 * Recherche dans les expériences
 * @param {string} query - Terme de recherche
 * @returns {Array} Expériences correspondantes
 */
function searchExperiences(query) {
  const searchTerm = query.toLowerCase();
  
  return experiencesData.filter(exp => 
    exp.position.title.toLowerCase().includes(searchTerm) ||
    exp.company.name.toLowerCase().includes(searchTerm) ||
    exp.description.summary.toLowerCase().includes(searchTerm) ||
    exp.skills.technical.some(skill => skill.toLowerCase().includes(searchTerm)) ||
    exp.skills.professional.some(skill => skill.toLowerCase().includes(searchTerm))
  );
}

/**
 * Obtient les statistiques des expériences
 * @returns {Object} Statistiques complètes
 */
function getExperiencesStats() {
  const totalExp = getTotalExperience();
  const sectors = [...new Set(experiencesData.map(exp => exp.company.sector))];
  const types = [...new Set(experiencesData.map(exp => exp.position.type))];
  
  return {
    total: experiencesData.length,
    totalDuration: totalExp,
    sectors: sectors.length,
    types: types.length,
    featured: experiencesData.filter(exp => exp.featured).length,
    current: experiencesData.filter(exp => exp.period.current).length,
    technicalSkills: getAllTechnicalSkills().length,
    professionalSkills: getAllProfessionalSkills().length,
    sectorsBreakdown: sectors.map(sector => ({
      sector,
      count: getExperiencesBySector(sector).length,
      duration: getTotalExperience(sector)
    }))
  };
}

/**
 * Formate une période d'expérience
 * @param {Object} period - Objet période
 * @returns {string} Période formatée
 */
function formatExperiencePeriod(period) {
  const startDate = new Date(period.startDate);
  const endDate = period.current ? null : new Date(period.endDate);
  
  const formatMonth = (date) => {
    return date.toLocaleDateString('fr-FR', { 
      month: 'long', 
      year: 'numeric' 
    });
  };
  
  const start = formatMonth(startDate);
  const end = period.current ? 'Actuellement' : formatMonth(endDate);
  
  return `${start} - ${end}`;
}

/**
 * Génère le CV timeline data pour les animations
 * @returns {Array} Données timeline
 */
function generateTimelineData() {
  return getAllExperiences(false).map((exp, index) => ({
    id: exp.id,
    title: exp.position.title,
    company: exp.company.name,
    period: formatExperiencePeriod(exp.period),
    duration: exp.period.duration,
    icon: experiencesConfig.sectors[exp.company.sector].icon,
    color: experiencesConfig.types[exp.position.type].color,
    featured: exp.featured,
    animationDelay: index * 0.1
  }));
}

/**
 * Valide les données d'expériences
 * @returns {Object} Résultat de validation
 */
function validateExperiences() {
  const errors = [];
  const warnings = [];
  
  experiencesData.forEach((exp, index) => {
    // Vérifications obligatoires
    if (!exp.position.title) {
      errors.push(`Expérience ${index + 1}: Le titre du poste est obligatoire`);
    }
    
    if (!exp.company.name) {
      errors.push(`Expérience ${index + 1}: Le nom de l'entreprise est obligatoire`);
    }
    
    if (!exp.period.startDate) {
      errors.push(`Expérience ${index + 1}: La date de début est obligatoire`);
    }
    
    if (!exp.period.current && !exp.period.endDate) {
      errors.push(`Expérience ${index + 1}: La date de fin est obligatoire pour les postes non actuels`);
    }
    
    // Vérifications recommandées
    if (!exp.description.summary) {
      warnings.push(`Expérience ${index + 1}: Une description est recommandée`);
    }
    
    if (exp.responsibilities.length === 0) {
      warnings.push(`Expérience ${index + 1}: Des responsabilités sont recommandées`);
    }
    
    if (exp.skills.technical.length === 0) {
      warnings.push(`Expérience ${index + 1}: Des compétences techniques sont recommandées`);
    }
  });
  
  return {
    isValid: errors.length === 0,
    errors,
    warnings
  };
}

// ===== EXPORT POUR UTILISATION GLOBALE =====
if (typeof window !== 'undefined') {
  // Environnement navigateur
  window.ExperiencesData = {
    data: experiencesData,
    config: experiencesConfig,
    getAllExperiences,
    getFeaturedExperiences,
    getExperiencesBySector,
    getExperiencesByType,
    getExperienceById,
    getTotalExperience,
    getAllTechnicalSkills,
    getAllProfessionalSkills,
    searchExperiences,
    getExperiencesStats,
    formatExperiencePeriod,
    generateTimelineData,
    validateExperiences
  };
} else {
  // Environnement Node.js (si nécessaire)
  module.exports = {
    experiencesData,
    experiencesConfig,
    getAllExperiences,
    getFeaturedExperiences,
    getExperiencesBySector,
    getExperiencesByType,
    getExperienceById,
    getTotalExperience,
    getAllTechnicalSkills,
    getAllProfessionalSkills,
    searchExperiences,
    getExperiencesStats,
    formatExperiencePeriod,
    generateTimelineData,
    validateExperiences
  };
}

// ===== INITIALISATION AUTOMATIQUE =====
document.addEventListener('DOMContentLoaded', function() {
  // Validation automatique au chargement
  const validation = validateExperiences();
  
  if (!validation.isValid) {
    console.error('Erreurs dans les données d\'expériences:', validation.errors);
  }
  
  if (validation.warnings.length > 0) {
    console.warn('Avertissements pour les expériences:', validation.warnings);
  }
  
  const stats = getExperiencesStats();
  console.log('Données d\'expériences chargées:', {
    total: stats.total,
    duration: stats.totalDuration.display,
    sectors: stats.sectors
  });
});