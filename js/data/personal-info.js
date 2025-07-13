/**
 * ===== DONNÉES PERSONNELLES =====
 * Fichier : js/data/personal-info.js
 * 
 * Contient toutes les informations personnelles et de contact
 * Données basées sur le profil réel d'Alexandre Rippling
 */

// ===== INFORMATIONS PRINCIPALES =====
const personalInfo = {
  // Identité
  identity: {
    firstName: "Alexandre",
    lastName: "Rippling", 
    fullName: "Alexandre Rippling",
    title: "Développeur Fullstack",
    subtitle: "En formation à Metz Numérique School",
    tagline: "Coder avec créativité, réussir avec détermination",
    
    // Variantes pour différents contextes
    shortTitle: "Dev Fullstack",
    longTitle: "Développeur Fullstack & Expert Communication",
    professionalTitle: "Développeur Web et Web Mobile"
  },

  // Contact
  contact: {
    email: "alexandre.rippling@gmail.com",
    phone: "+33669591434",
    phoneDisplay: "06.69.59.14.34",
    
    // Adresse
    address: {
      street: "4 B Quai de Sélestat",
      city: "Lunéville",
      postalCode: "54300",
      country: "France",
      region: "Grand Est",
      fullAddress: "4 B Quai de Sélestat, 54300 LUNEVILLE"
    },
    
    // Disponibilité
    availability: {
      status: "Disponible",
      type: "Recherche stage/alternance",
      startDate: "2024-03-01",
      location: "Grand Est, France",
      remote: true,
      travel: true
    }
  },

  // Présence en ligne
  online: {
    website: {
      url: "https://www.handietdev.fr",
      display: "www.handietdev.fr",
      title: "Portfolio Personnel"
    },
    
    social: {
      linkedin: {
        url: "https://linkedin.com/in/arippling/",
        username: "arippling",
        display: "linkedin.com/in/arippling"
      },
      github: {
        url: "https://github.com/RIP-alex",
        username: "RIP-alex", 
        display: "github.com/RIP-alex"
      }
    },
    
    // Portfolio
    portfolio: {
      url: "https://rip-alex.github.io/cv-portfolio/",
      title: "CV Interactif",
      description: "Portfolio professionnel en ligne"
    }
  },

  // Profil professionnel
  profile: {
    // Description courte (pour hero)
    shortDescription: "Développeur passionné avec un parcours atypique combinant design, communication et mécanique. Cette diversité d'expériences me donne une perspective unique pour résoudre des problèmes complexes avec créativité.",
    
    // Description longue (pour about)
    longDescription: `Développeur passionné avec un parcours atypique qui allie créativité, technique et sens du relationnel. Mon expérience diversifiée en design, communication et mécanique me donne une perspective unique pour aborder les défis du développement web moderne.

Actuellement en formation Développeur Fullstack à Metz Numérique School, je combine mes compétences acquises avec ma soif d'apprendre les technologies les plus récentes. Mon engagement : coder avec créativité, réussir avec détermination.`,

    // Pitch elevator
    elevatorPitch: "Développeur Fullstack en formation avec 15+ années d'expérience diversifiée. Expert en communication digitale, passionné par les technologies web modernes. Polyvalent, créatif et déterminé à relever de nouveaux défis techniques.",

    // Valeurs personnelles
    values: [
      {
        id: "listening",
        title: "Écoute",
        description: "Fort sens de l'écoute et de l'adaptation aux besoins",
        icon: "fas fa-ear-listen"
      },
      {
        id: "creativity", 
        title: "Créativité",
        description: "Approche créative pour résoudre les problèmes complexes",
        icon: "fas fa-lightbulb"
      },
      {
        id: "resilience",
        title: "Résilience", 
        description: "Détermination face aux défis et aux obstacles",
        icon: "fas fa-mountain"
      },
      {
        id: "collaboration",
        title: "Collaboration",
        description: "Travail d'équipe et communication efficace", 
        icon: "fas fa-users"
      }
    ],

    // Qualités principales
    qualities: [
      "Polyvalent",
      "Organisé", 
      "Créatif",
      "Autonome",
      "À l'écoute",
      "Adaptable",
      "Résilient",
      "Déterminé"
    ],

    // Domaines d'expertise
    expertise: [
      "Développement Web",
      "Communication Digitale",
      "Design Graphique",
      "Gestion de Projet",
      "Relations Client",
      "Formation Technique"
    ]
  },

  // Statistiques personnelles
  stats: {
    experience: {
      total: 15,
      unit: "années",
      label: "Années d'expérience professionnelle",
      description: "Expérience diversifiée"
    },
    formation: {
      total: 2024,
      unit: "année",
      label: "Année de début en développement",
      description: "Reconversion réussie"
    },
    domains: {
      total: 3,
      unit: "domaines",
      label: "Domaines d'expertise",
      description: "Polyvalence confirmée"
    },
    engagement: {
      total: 100,
      unit: "%",
      label: "Engagement dans mes projets", 
      description: "Implication totale"
    }
  },

  // Langues
  languages: [
    {
      name: "Français",
      code: "fr",
      level: "Natif",
      proficiency: 100
    },
    {
      name: "Anglais",
      code: "en", 
      level: "Intermédiaire",
      proficiency: 65
    }
  ],

  // Centres d'intérêt
  interests: [
    {
      category: "Technologie",
      items: ["Développement Web", "Intelligence Artificielle", "Nouvelles Technologies", "Open Source"]
    },
    {
      category: "Créatif",
      items: ["Design Graphique", "Photo", "Musique", "Écriture"]
    },
    {
      category: "Pratique", 
      items: ["Mécanique", "Bricolage", "Jardinage", "Cuisine"]
    },
    {
      category: "Personnel",
      items: ["Lecture", "Cinéma", "Voyage", "Sport"]
    }
  ],

  // Configuration pour le CV
  settings: {
    // Préférences d'affichage
    display: {
      showAge: false,
      showPhone: true,
      showAddress: true,
      showAvailability: true,
      showStats: true,
      showInterests: true
    },
    
    // Options de contact
    contact: {
      preferredMethod: "email",
      responseTime: "24h",
      availability: "Lun-Ven 9h-18h"
    },
    
    // Métadonnées SEO
    meta: {
      description: "CV en ligne d'Alexandre Rippling - Développeur Fullstack en formation, expert en communication et design",
      keywords: [
        "Alexandre Rippling",
        "Développeur Fullstack", 
        "Développeur Web",
        "Metz Numérique School",
        "JavaScript", 
        "React",
        "Node.js",
        "PHP",
        "Communication Digitale"
      ]
    }
  }
};

// ===== FONCTIONS UTILITAIRES =====

/**
 * Obtient le nom complet formaté
 * @param {string} format - Format de sortie ('full', 'first-last', 'last-first')
 * @returns {string} Nom formaté
 */
function getFormattedName(format = 'full') {
  const { firstName, lastName } = personalInfo.identity;
  
  switch(format) {
    case 'first-last':
      return `${firstName} ${lastName}`;
    case 'last-first':
      return `${lastName}, ${firstName}`;
    case 'initials':
      return `${firstName.charAt(0)}.${lastName.charAt(0)}.`;
    default:
      return personalInfo.identity.fullName;
  }
}

/**
 * Obtient l'adresse formatée
 * @param {string} format - Format de sortie ('full', 'city', 'short')
 * @returns {string} Adresse formatée
 */
function getFormattedAddress(format = 'full') {
  const { address } = personalInfo.contact;
  
  switch(format) {
    case 'city':
      return `${address.city}, ${address.country}`;
    case 'short':
      return `${address.city} (${address.postalCode})`;
    case 'region':
      return `${address.region}, ${address.country}`;
    default:
      return address.fullAddress;
  }
}

/**
 * Obtient les informations de contact pour un type donné
 * @param {string} type - Type de contact ('email', 'phone', 'address', 'all')
 * @returns {Object|string} Informations de contact
 */
function getContactInfo(type = 'all') {
  const { contact } = personalInfo;
  
  switch(type) {
    case 'email':
      return contact.email;
    case 'phone':
      return contact.phoneDisplay;
    case 'address':
      return getFormattedAddress();
    default:
      return {
        email: contact.email,
        phone: contact.phoneDisplay,
        address: getFormattedAddress('city')
      };
  }
}

/**
 * Obtient les liens sociaux sous forme d'array
 * @returns {Array} Liste des liens sociaux
 */
function getSocialLinks() {
  const { social } = personalInfo.online;
  
  return Object.entries(social).map(([platform, data]) => ({
    platform: platform.charAt(0).toUpperCase() + platform.slice(1),
    url: data.url,
    username: data.username,
    display: data.display,
    icon: `fab fa-${platform}`
  }));
}

/**
 * Obtient les statistiques sous forme d'array
 * @returns {Array} Liste des statistiques
 */
function getStats() {
  return Object.entries(personalInfo.stats).map(([key, stat]) => ({
    id: key,
    value: stat.total,
    unit: stat.unit,
    label: stat.label,
    description: stat.description
  }));
}

/**
 * Génère les données structurées Schema.org
 * @returns {Object} Données structurées JSON-LD
 */
function generateSchemaOrg() {
  const info = personalInfo;
  
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": info.identity.fullName,
    "givenName": info.identity.firstName,
    "familyName": info.identity.lastName,
    "jobTitle": info.identity.title,
    "description": info.profile.shortDescription,
    "url": info.online.portfolio.url,
    "sameAs": [
      info.online.social.linkedin.url,
      info.online.social.github.url
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": info.contact.address.street,
      "addressLocality": info.contact.address.city,
      "postalCode": info.contact.address.postalCode,
      "addressCountry": info.contact.address.country
    },
    "email": info.contact.email,
    "telephone": info.contact.phone,
    "knowsAbout": info.profile.expertise,
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Metz Numérique School"
    }
  };
}

/**
 * Valide les données personnelles
 * @returns {Object} Résultat de validation
 */
function validatePersonalInfo() {
  const errors = [];
  const warnings = [];
  
  // Vérifications obligatoires
  if (!personalInfo.identity.fullName) {
    errors.push("Le nom complet est obligatoire");
  }
  
  if (!personalInfo.contact.email) {
    errors.push("L'email est obligatoire");
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(personalInfo.contact.email)) {
    errors.push("Format d'email invalide");
  }
  
  if (!personalInfo.identity.title) {
    warnings.push("Le titre professionnel est recommandé");
  }
  
  if (!personalInfo.profile.shortDescription) {
    warnings.push("Une description courte est recommandée");
  }
  
  return {
    isValid: errors.length === 0,
    errors,
    warnings
  };
}

// ===== EXPORT POUR UTILISATION GLOBALE =====
if (typeof window !== 'undefined') {
  // Environnement navigateur
  window.PersonalInfo = {
    data: personalInfo,
    getFormattedName,
    getFormattedAddress,
    getContactInfo,
    getSocialLinks,
    getStats,
    generateSchemaOrg,
    validatePersonalInfo
  };
} else {
  // Environnement Node.js (si nécessaire)
  module.exports = {
    personalInfo,
    getFormattedName,
    getFormattedAddress,
    getContactInfo,
    getSocialLinks,
    getStats,
    generateSchemaOrg,
    validatePersonalInfo
  };
}

// ===== INITIALISATION AUTOMATIQUE =====
document.addEventListener('DOMContentLoaded', function() {
  // Validation automatique au chargement
  const validation = validatePersonalInfo();
  
  if (!validation.isValid) {
    console.error('Erreurs dans les données personnelles:', validation.errors);
  }
  
  if (validation.warnings.length > 0) {
    console.warn('Avertissements pour les données personnelles:', validation.warnings);
  }
  
  console.log('Données personnelles chargées:', personalInfo.identity.fullName);
});