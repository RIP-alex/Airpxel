/**
 * ===== DONNÉES ÉDUCATION ET FORMATION =====
 * Contient l'historique complet des formations et certifications
 * Données basées sur le parcours éducatif réel d'Alexandre Rippling
 */

// ===== CONFIGURATION DE L'ÉDUCATION =====
const educationConfig = {
  // Types de formations
  types: {
    degree: { label: "Diplôme", icon: "fas fa-graduation-cap", color: "#4CAF50" },
    certification: { label: "Certification", icon: "fas fa-certificate", color: "#2196F3" },
    training: { label: "Formation", icon: "fas fa-book", color: "#FF9800" },
    course: { label: "Cours", icon: "fas fa-laptop", color: "#9C27B0" },
    workshop: { label: "Atelier", icon: "fas fa-tools", color: "#607D8B" }
  },
  
  // Niveaux d'éducation
  levels: {
    bep: { label: "BEP", level: 3, description: "Brevet d'Études Professionnelles" },
    cap: { label: "CAP", level: 3, description: "Certificat d'Aptitude Professionnelle" },
    bac: { label: "BAC", level: 4, description: "Baccalauréat" },
    bts: { label: "BTS", level: 5, description: "Brevet de Technicien Supérieur" },
    bachelor: { label: "Bachelor", level: 6, description: "Licence / Bachelor" },
    master: { label: "Master", level: 7, description: "Master" },
    engineer: { label: "Ingénieur", level: 7, description: "Diplôme d'Ingénieur" }
  },
  
  // Domaines d'études
  fields: {
    technology: { label: "Technologie", icon: "fas fa-microchip" },
    design: { label: "Design", icon: "fas fa-palette" },
    mechanics: { label: "Mécanique", icon: "fas fa-wrench" },
    electronics: { label: "Électronique", icon: "fas fa-bolt" },
    web: { label: "Développement Web", icon: "fas fa-code" },
    communication: { label: "Communication", icon: "fas fa-bullhorn" }
  },
  
  // Statuts
  status: {
    completed: { label: "Terminé", color: "#4CAF50" },
    current: { label: "En cours", color: "#2196F3" },
    planned: { label: "Prévu", color: "#FF9800" },
    paused: { label: "Suspendu", color: "#9E9E9E" }
  }
};

// ===== DONNÉES DES FORMATIONS =====
const educationData = [
  {
    id: "fullstack-developer-2024",
    institution: {
      name: "Metz Numérique School",
      fullName: "École Numérique de Metz",
      type: "École spécialisée",
      location: {
        city: "Metz",
        region: "Grand Est",
        country: "France"
      },
      website: "https://www.metz-numerique-school.fr",
      description: "École spécialisée dans les métiers du numérique et du développement web"
    },
    
    program: {
      title: "Formation Développeur Fullstack",
      subtitle: "Développeur Web et Web Mobile",
      type: "training",
      level: "bachelor",
      field: "web",
      duration: "12 mois",
      intensity: "Temps plein",
      format: "Présentiel + Distanciel"
    },
    
    period: {
      startDate: "2024-01-15",
      endDate: "2024-12-20",
      current: true,
      status: "current",
      displayPeriod: "Janvier 2024 - Décembre 2024"
    },
    
    description: {
      summary: "Formation intensive couvrant l'ensemble des technologies du développement web moderne.",
      detailed: `Formation complète et intensive au développement web fullstack, alliant théorie et pratique sur des projets concrets. Le programme couvre l'ensemble de la stack technologique moderne, depuis les fondamentaux du web jusqu'aux frameworks avancés.
      
      L'approche pédagogique privilégie la mise en pratique à travers des projets réels, le travail en équipe selon les méthodes agiles, et l'acquisition d'une méthodologie professionnelle de développement.`
    },
    
    curriculum: {
      frontend: [
        "HTML5 sémantique et accessibilité",
        "CSS3 avancé (Grid, Flexbox, animations)",
        "JavaScript ES6+ et programmation asynchrone",
        "React.js et écosystème (Redux, React Router)",
        "Vue.js et framework progressif",
        "Responsive Design et Mobile First",
        "Outils de build (Webpack, Vite)",
        "Tests frontend (Jest, Testing Library)"
      ],
      backend: [
        "Node.js et architecture serveur",
        "Express.js et création d'API REST",
        "PHP et programmation orientée objet",
        "Bases de données SQL (MySQL, PostgreSQL)",
        "Bases de données NoSQL (MongoDB)",
        "Architecture MVC et patterns",
        "Authentification et sécurité",
        "Tests backend et API"
      ],
      tools: [
        "Git et GitHub (workflow collaboratif)",
        "Docker et conteneurisation",
        "Déploiement et CI/CD",
        "Linux et ligne de commande",
        "Environnements de développement",
        "Debugging et optimisation",
        "Documentation technique",
        "Veille technologique"
      ],
      methodology: [
        "Méthodes Agiles (Scrum, Kanban)",
        "Gestion de projet digital",
        "Travail en équipe développeur",
        "Code review et pair programming",
        "Clean Code et bonnes pratiques",
        "Architecture logicielle",
        "Performance et optimisation",
        "Accessibilité web (WCAG)"
      ]
    },
    
    projects: [
      {
        name: "RestauScan",
        description: "Application de gestion restaurant avec QR code",
        technologies: ["React", "Node.js", "MongoDB", "Express"],
        role: "Développeur Fullstack",
        duration: "6 semaines"
      },
      {
        name: "E-commerce Platform",
        description: "Plateforme e-commerce complète",
        technologies: ["Vue.js", "PHP", "MySQL", "Stripe"],
        role: "Lead Developer",
        duration: "4 semaines"
      },
      {
        name: "Social Network API",
        description: "API REST pour réseau social",
        technologies: ["Node.js", "MongoDB", "JWT", "Socket.io"],
        role: "Backend Developer",
        duration: "3 semaines"
      }
    ],
    
    skills: {
      acquired: [
        "Développement Frontend moderne",
        "Développement Backend robuste",
        "Architecture d'applications web",
        "Bases de données relationnelles et NoSQL",
        "Intégration continue et déploiement",
        "Tests automatisés",
        "Sécurité des applications web",
        "Optimisation et performance"
      ],
      certifications: [
        "Certification développeur web",
        "Certification React avancé",
        "Certification Node.js",
        "Certification Git/GitHub"
      ]
    },
    
    achievements: [
      "Projet RestauScan sélectionné comme projet exemplaire",
      "Mention Très Bien sur les évaluations techniques",
      "Participation active aux code reviews",
      "Mentorat des nouveaux apprenants",
      "Présentation technique devant jury professionnel",
      "Stage en entreprise validé avec succès"
    ],
    
    context: {
      classSize: 24,
      teachingMethod: "Pédagogie active et projets",
      tools: ["VS Code", "GitHub", "Figma", "Trello", "Slack"],
      assessment: "Projets pratiques + Évaluations techniques"
    },
    
    featured: true,
    priority: 1
  },
  
  {
    id: "cap-mechanic-agricultural-2018",
    institution: {
      name: "AFPA Verdun",
      fullName: "Association pour la Formation Professionnelle des Adultes - Verdun",
      type: "Centre de formation professionnelle",
      location: {
        city: "Verdun",
        region: "Grand Est", 
        country: "France"
      },
      website: "https://www.afpa.fr",
      description: "Premier organisme de formation professionnelle continue en France"
    },
    
    program: {
      title: "CAP Mécanicien Agricole",
      subtitle: "Option Parc et Jardin",
      type: "degree",
      level: "cap",
      field: "mechanics",
      duration: "10 mois",
      intensity: "Temps plein",
      format: "Présentiel + Stage"
    },
    
    period: {
      startDate: "2017-09-01",
      endDate: "2018-06-30",
      current: false,
      status: "completed",
      displayPeriod: "Septembre 2017 - Juin 2018"
    },
    
    description: {
      summary: "Formation diplômante en mécanique agricole et maintenance d'espaces verts.",
      detailed: `Formation complète aux métiers de la mécanique agricole avec spécialisation dans l'entretien des espaces verts. Programme alliant enseignements théoriques approfondis et pratique intensive sur matériel professionnel.
      
      Cette formation m'a permis d'acquérir une solide expertise technique et une méthodologie rigoureuse de diagnostic et de résolution de problèmes, compétences transférables dans le développement logiciel.`
    },
    
    curriculum: {
      theoretical: [
        "Mécanique générale et spécialisée",
        "Hydraulique et pneumatique",
        "Électricité et électronique embarquée",
        "Moteurs thermiques et systèmes",
        "Technologie des matériaux",
        "Normes de sécurité et environnement",
        "Lecture de plans et schémas techniques",
        "Gestion de maintenance préventive"
      ],
      practical: [
        "Diagnostic et réparation de pannes",
        "Entretien et révision de matériel",
        "Utilisation d'outillage spécialisé",
        "Soudure et assemblage mécanique",
        "Tests et contrôles qualité",
        "Réglages et mise au point",
        "Remplacement de pièces d'usure",
        "Respect des procédures de sécurité"
      ],
      specialization: [
        "Matériel d'entretien d'espaces verts",
        "Tondeuses et tracteurs-tondeuses",
        "Outillage électroportatif",
        "Systèmes d'arrosage automatique",
        "Maintenance saisonnière",
        "Conseils techniques aux utilisateurs"
      ]
    },
    
    skills: {
      acquired: [
        "Diagnostic technique systématique",
        "Maintenance préventive et curative",
        "Utilisation d'outils de diagnostic",
        "Respect des procédures de sécurité",
        "Relation client et conseil technique",
        "Gestion des pièces détachées",
        "Organisation du travail",
        "Autonomie et prise d'initiative"
      ],
      certifications: [
        "CAP Mécanicien en Matériels Agricoles",
        "Certification option Parc et Jardin",
        "Habilitation sécurité",
        "CACES (Certificat d'aptitude)"
      ]
    },
    
    achievements: [
      "CAP obtenu avec mention Bien",
      "Stage en entreprise validé avec félicitations",
      "Projet de fin de formation réussi",
      "Maîtrise de l'ensemble de l'outillage",
      "Zéro accident pendant la formation",
      "Recommandation pour l'emploi"
    ],
    
    context: {
      classSize: 16,
      teachingMethod: "Alternance théorie/pratique",
      duration: "1400 heures de formation",
      internship: "8 semaines en entreprise"
    },
    
    featured: true,
    priority: 2
  },
  
  {
    id: "bac-graphic-designer-2011",
    institution: {
      name: "AFPA Vandœuvre",
      fullName: "Association pour la Formation Professionnelle des Adultes - Vandœuvre",
      type: "Centre de formation professionnelle",
      location: {
        city: "Vandœuvre-lès-Nancy",
        region: "Grand Est",
        country: "France"
      },
      website: "https://www.afpa.fr",
      description: "Centre de formation spécialisé dans les métiers du graphisme et de la communication"
    },
    
    program: {
      title: "BAC Infographiste Metteur en Page",
      subtitle: "Communication visuelle et édition",
      type: "degree",
      level: "bac",
      field: "design",
      duration: "12 mois",
      intensity: "Temps plein",
      format: "Présentiel + Projets"
    },
    
    period: {
      startDate: "2010-09-01",
      endDate: "2011-07-15",
      current: false,
      status: "completed",
      displayPeriod: "Septembre 2010 - Juillet 2011"
    },
    
    description: {
      summary: "Formation diplômante en infographie et mise en page print/digital.",
      detailed: `Formation complète aux métiers de l'infographie et de la communication visuelle. Programme couvrant l'ensemble de la chaîne graphique, de la conception créative à la finalisation pour l'impression.
      
      Cette formation a développé ma sensibilité artistique, ma maîtrise des outils créatifs et ma compréhension des enjeux de communication visuelle, compétences précieuses dans l'UX/UI design.`
    },
    
    curriculum: {
      design: [
        "Théorie des couleurs et harmonie",
        "Typographie et mise en page",
        "Composition et hiérarchie visuelle",
        "Identité visuelle et branding",
        "Communication graphique",
        "Histoire de l'art et du design",
        "Psychologie de la perception",
        "Tendances et styles graphiques"
      ],
      software: [
        "Adobe Photoshop (retouche et création)",
        "Adobe Illustrator (création vectorielle)",
        "Adobe InDesign (mise en page éditoriale)",
        "QuarkXPress (édition professionnelle)",
        "CorelDRAW (dessin vectoriel)",
        "Gestion des profils couleur",
        "Préparation fichiers impression",
        "Optimisation pour le web"
      ],
      technical: [
        "Chaîne graphique complète",
        "Impression offset et numérique",
        "Façonnage et finition",
        "Colorimétrie et calibrage",
        "Formats et supports d'impression",
        "Contraintes techniques print",
        "Gestion des couleurs Pantone",
        "Résolution et définition"
      ],
      professional: [
        "Relation client et brief créatif",
        "Gestion de projets graphiques",
        "Respect des délais et budgets",
        "Présentation de concepts",
        "Adaptation aux contraintes",
        "Veille créative et concurrentielle",
        "Droit d'auteur et propriété intellectuelle",
        "Devis et facturation"
      ]
    },
    
    projects: [
      {
        name: "Identité visuelle complète",
        description: "Création d'une identité pour une start-up locale",
        deliverables: ["Logo", "Charte graphique", "Papeterie", "Signalétique"],
        duration: "4 semaines"
      },
      {
        name: "Magazine culturel",
        description: "Mise en page d'un magazine de 32 pages",
        deliverables: ["Maquette", "Mise en page", "Préparation print"],
        duration: "6 semaines"
      },
      {
        name: "Campagne publicitaire",
        description: "Déclinaison multi-supports d'une campagne",
        deliverables: ["Affiches", "Flyers", "Bannières web", "Encarts presse"],
        duration: "3 semaines"
      }
    ],
    
    skills: {
      acquired: [
        "Maîtrise de la Suite Adobe Creative",
        "Création d'identités visuelles",
        "Mise en page éditoriale avancée",
        "Préparation fichiers impression",
        "Gestion de la couleur professionnelle",
        "Communication visuelle efficace",
        "Respect des contraintes techniques",
        "Créativité et innovation graphique"
      ],
      certifications: [
        "BAC Infographiste Metteur en Page",
        "Certification Adobe Photoshop",
        "Certification Adobe Illustrator",
        "Certification QuarkXPress"
      ]
    },
    
    achievements: [
      "BAC obtenu avec mention Très Bien",
      "Portfolio reconnu par les professionnels",
      "Stage en agence de communication validé",
      "Projets primés en concours étudiants",
      "Maîtrise experte des outils créatifs",
      "Recommandation pour poursuite d'études"
    ],
    
    context: {
      classSize: 18,
      teachingMethod: "Projets créatifs et workshops",
      equipment: "Stations Mac avec Suite Adobe",
      internship: "6 semaines en agence"
    },
    
    featured: true,
    priority: 3
  },
  
  {
    id: "bac-sti-electronics-2010",
    institution: {
      name: "Lycée Pierre de Coubertin",
      fullName: "Lycée Technique Pierre de Coubertin",
      type: "Lycée technique",
      location: {
        city: "Nancy",
        region: "Grand Est",
        country: "France"
      },
      description: "Établissement d'enseignement technique spécialisé en sciences et technologies"
    },
    
    program: {
      title: "BAC STI Électronique",
      subtitle: "Sciences et Technologies Industrielles",
      type: "degree",
      level: "bac",
      field: "electronics",
      duration: "2 ans",
      intensity: "Temps plein",
      format: "Présentiel"
    },
    
    period: {
      startDate: "2008-09-01",
      endDate: "2010-06-30",
      current: false,
      status: "completed",
      displayPeriod: "Septembre 2008 - Juin 2010"
    },
    
    description: {
      summary: "Formation technique en électronique et systèmes automatisés.",
      detailed: `Formation technique approfondie en électronique, systèmes numériques et automatisme. Cette formation a posé les bases de ma compréhension des systèmes techniques et de la logique informatique.
      
      Les compétences acquises en analyse de systèmes, résolution de problèmes techniques et programmation constituent le socle de ma reconversion vers le développement web.`
    },
    
    curriculum: {
      electronics: [
        "Électronique analogique et numérique",
        "Composants électroniques et circuits",
        "Amplification et filtrage",
        "Oscillateurs et générateurs",
        "Convertisseurs analogique-numérique",
        "Microprocesseurs et microcontrôleurs",
        "Interfaces et communications",
        "Systèmes embarqués"
      ],
      programming: [
        "Algorithmique et logique",
        "Programmation en langage C",
        "Assembleur et bas niveau",
        "Automates programmables",
        "Systèmes temps réel",
        "Protocoles de communication",
        "Debugging et test",
        "Documentation technique"
      ],
      systems: [
        "Automatisme industriel",
        "Régulation et asservissement",
        "Capteurs et actionneurs",
        "Systèmes de mesure",
        "Acquisition de données",
        "Traitement du signal",
        "Réseaux industriels",
        "Maintenance préventive"
      ]
    },
    
    skills: {
      acquired: [
        "Analyse de systèmes complexes",
        "Programmation de microcontrôleurs",
        "Conception de circuits électroniques",
        "Utilisation d'instruments de mesure",
        "Résolution méthodique de problèmes",
        "Lecture de schémas techniques",
        "Tests et validation de systèmes",
        "Documentation et reporting"
      ],
      certifications: [
        "BAC STI Électronique",
        "BEP Électronique (2008)",
        "Habilitation électrique",
        "Certificat de sécurité"
      ]
    },
    
    achievements: [
      "BAC STI obtenu avec mention",
      "BEP Électronique validé en 2008",
      "Projet technique de fin d'études réussi",
      "Stage industriel validé",
      "Bases solides en programmation",
      "Compréhension des systèmes numériques"
    ],
    
    context: {
      classSize: 32,
      teachingMethod: "Cours magistraux + TP pratiques",
      equipment: "Laboratoires équipés",
      projectWork: "Projet technique final"
    },
    
    featured: false,
    priority: 4
  }
];

// ===== FONCTIONS UTILITAIRES =====

/**
 * Obtient toutes les formations triées par date
 * @param {boolean} currentFirst - Mettre les formations actuelles en premier
 * @returns {Array} Liste des formations
 */
function getAllEducation(currentFirst = true) {
  let education = [...educationData];
  
  if (currentFirst) {
    education.sort((a, b) => {
      // Formations actuelles en premier
      if (a.period.current && !b.period.current) return -1;
      if (!a.period.current && b.period.current) return 1;
      
      // Puis par priorité
      return a.priority - b.priority;
    });
  } else {
    // Tri chronologique inverse (plus récent en premier)
    education.sort((a, b) => {
      const dateA = new Date(a.period.startDate);
      const dateB = new Date(b.period.startDate);
      return dateB - dateA;
    });
  }
  
  return education;
}

/**
 * Obtient les formations mises en avant
 * @returns {Array} Formations featured
 */
function getFeaturedEducation() {
  return educationData
    .filter(edu => edu.featured)
    .sort((a, b) => a.priority - b.priority);
}

/**
 * Filtre les formations par domaine
 * @param {string} field - Domaine à filtrer
 * @returns {Array} Formations du domaine
 */
function getEducationByField(field) {
  return educationData
    .filter(edu => edu.program.field === field)
    .sort((a, b) => a.priority - b.priority);
}

/**
 * Filtre les formations par type
 * @param {string} type - Type à filtrer
 * @returns {Array} Formations du type
 */
function getEducationByType(type) {
  return educationData
    .filter(edu => edu.program.type === type)
    .sort((a, b) => a.priority - b.priority);
}

/**
 * Filtre les formations par niveau
 * @param {string} level - Niveau à filtrer
 * @returns {Array} Formations du niveau
 */
function getEducationByLevel(level) {
  return educationData
    .filter(edu => edu.program.level === level)
    .sort((a, b) => a.priority - b.priority);
}

/**
 * Obtient une formation par ID
 * @param {string} id - ID de la formation
 * @returns {Object|null} Formation trouvée ou null
 */
function getEducationById(id) {
  return educationData.find(edu => edu.id === id) || null;
}

/**
 * Obtient toutes les compétences acquises uniques
 * @returns {Array} Liste des compétences
 */
function getAllAcquiredSkills() {
  const skillsSet = new Set();
  
  educationData.forEach(edu => {
    if (edu.skills && edu.skills.acquired) {
      edu.skills.acquired.forEach(skill => skillsSet.add(skill));
    }
  });
  
  return Array.from(skillsSet).sort();
}

/**
 * Obtient toutes les certifications
 * @returns {Array} Liste des certifications
 */
function getAllCertifications() {
  const certificationsSet = new Set();
  
  educationData.forEach(edu => {
    if (edu.skills && edu.skills.certifications) {
      edu.skills.certifications.forEach(cert => certificationsSet.add(cert));
    }
  });
  
  return Array.from(certificationsSet).sort();
}

/**
 * Recherche dans les formations
 * @param {string} query - Terme de recherche
 * @returns {Array} Formations correspondantes
 */
function searchEducation(query) {
  const searchTerm = query.toLowerCase();
  
  return educationData.filter(edu => 
    edu.program.title.toLowerCase().includes(searchTerm) ||
    edu.institution.name.toLowerCase().includes(searchTerm) ||
    edu.description.summary.toLowerCase().includes(searchTerm) ||
    (edu.skills && edu.skills.acquired && 
     edu.skills.acquired.some(skill => skill.toLowerCase().includes(searchTerm)))
  );
}

/**
 * Obtient les statistiques des formations
 * @returns {Object} Statistiques complètes
 */
function getEducationStats() {
  const fields = [...new Set(educationData.map(edu => edu.program.field))];
  const types = [...new Set(educationData.map(edu => edu.program.type))];
  const levels = [...new Set(educationData.map(edu => edu.program.level))];
  
  return {
    total: educationData.length,
    fields: fields.length,
    types: types.length,
    levels: levels.length,
    featured: educationData.filter(edu => edu.featured).length,
    current: educationData.filter(edu => edu.period.current).length,
    completed: educationData.filter(edu => edu.period.status === 'completed').length,
    totalSkills: getAllAcquiredSkills().length,
    totalCertifications: getAllCertifications().length,
    fieldsBreakdown: fields.map(field => ({
      field,
      count: getEducationByField(field).length,
      label: educationConfig.fields[field]?.label || field
    }))
  };
}

/**
 * Formate une période de formation
 * @param {Object} period - Objet période
 * @returns {string} Période formatée
 */
function formatEducationPeriod(period) {
  const startDate = new Date(period.startDate);
  const endDate = period.current ? null : new Date(period.endDate);
  
  const formatYear = (date) => {
    return date.getFullYear().toString();
  };
  
  const start = formatYear(startDate);
  const end = period.current ? 'En cours' : formatYear(endDate);
  
  return start === end ? start : `${start} - ${end}`;
}

/**
 * Génère les données pour l'affichage timeline
 * @returns {Array} Données timeline
 */
function generateEducationTimeline() {
  return getAllEducation(false).map((edu, index) => ({
    id: edu.id,
    title: edu.program.title,
    institution: edu.institution.name,
    period: formatEducationPeriod(edu.period),
    level: educationConfig.levels[edu.program.level]?.label || edu.program.level,
    field: educationConfig.fields[edu.program.field]?.label || edu.program.field,
    icon: educationConfig.fields[edu.program.field]?.icon || 'fas fa-graduation-cap',
    color: educationConfig.types[edu.program.type]?.color || '#4CAF50',
    status: edu.period.status,
    featured: edu.featured,
    animationDelay: index * 0.1
  }));
}

/**
 * Obtient le niveau d'éducation le plus élevé
 * @returns {Object} Information sur le niveau le plus élevé
 */
function getHighestEducationLevel() {
  let highestLevel = 0;
  let highestEducation = null;
  
  educationData.forEach(edu => {
    const levelConfig = educationConfig.levels[edu.program.level];
    if (levelConfig && levelConfig.level > highestLevel) {
      highestLevel = levelConfig.level;
      highestEducation = edu;
    }
  });
  
  return highestEducation ? {
    education: highestEducation,
    level: highestLevel,
    label: educationConfig.levels[highestEducation.program.level].label,
    description: educationConfig.levels[highestEducation.program.level].description
  } : null;
}

/**
 * Valide les données d'éducation
 * @returns {Object} Résultat de validation
 */
function validateEducation() {
  const errors = [];
  const warnings = [];
  
  educationData.forEach((edu, index) => {
    // Vérifications obligatoires
    if (!edu.program.title) {
      errors.push(`Formation ${index + 1}: Le titre du programme est obligatoire`);
    }
    
    if (!edu.institution.name) {
      errors.push(`Formation ${index + 1}: Le nom de l'institution est obligatoire`);
    }
    
    if (!edu.period.startDate) {
      errors.push(`Formation ${index + 1}: La date de début est obligatoire`);
    }
    
    if (!edu.period.current && !edu.period.endDate) {
      errors.push(`Formation ${index + 1}: La date de fin est obligatoire pour les formations terminées`);
    }
    
    // Vérifications recommandées
    if (!edu.description.summary) {
      warnings.push(`Formation ${index + 1}: Une description est recommandée`);
    }
    
    if (!edu.curriculum || Object.keys(edu.curriculum).length === 0) {
      warnings.push(`Formation ${index + 1}: Un curriculum est recommandé`);
    }
    
    if (!edu.skills || !edu.skills.acquired || edu.skills.acquired.length === 0) {
      warnings.push(`Formation ${index + 1}: Les compétences acquises sont recommandées`);
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
  window.EducationData = {
    data: educationData,
    config: educationConfig,
    getAllEducation,
    getFeaturedEducation,
    getEducationByField,
    getEducationByType,
    getEducationByLevel,
    getEducationById,
    getAllAcquiredSkills,
    getAllCertifications,
    searchEducation,
    getEducationStats,
    formatEducationPeriod,
    generateEducationTimeline,
    getHighestEducationLevel,
    validateEducation
  };
} else {
  // Environnement Node.js (si nécessaire)
  module.exports = {
    educationData,
    educationConfig,
    getAllEducation,
    getFeaturedEducation,
    getEducationByField,
    getEducationByType,
    getEducationByLevel,
    getEducationById,
    getAllAcquiredSkills,
    getAllCertifications,
    searchEducation,
    getEducationStats,
    formatEducationPeriod,
    generateEducationTimeline,
    getHighestEducationLevel,
    validateEducation
  };
}

// ===== INITIALISATION AUTOMATIQUE =====
document.addEventListener('DOMContentLoaded', function() {
  // Validation automatique au chargement
  const validation = validateEducation();
  
  if (!validation.isValid) {
    console.error('Erreurs dans les données d\'éducation:', validation.errors);
  }
  
  if (validation.warnings.length > 0) {
    console.warn('Avertissements pour l\'éducation:', validation.warnings);
  }
  
  const stats = getEducationStats();
  const highest = getHighestEducationLevel();
  
  console.log('Données d\'éducation chargées:', {
    total: stats.total,
    highestLevel: highest ? highest.label : 'N/A',
    fields: stats.fields,
    certifications: stats.totalCertifications
  });
});