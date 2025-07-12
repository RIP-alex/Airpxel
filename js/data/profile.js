/**
 * Configuration du profil personnel
 * Toutes les données centralisées pour le CV
 */
const PROFILE_DATA = {
    // ===== INFORMATIONS PERSONNELLES =====
    personal: {
        firstName: "Alexandre",
        lastName: "Rippling",
        fullName: "Alexandre Rippling",
        title: "Développeur Fullstack & Designer Créatif",
        tagline: "Handi&Dev : Coder avec créativité, réussir avec détermination",
        description: "Développeur Fullstack en formation chez Metz Numérique School, expert en communication et design. Mon parcours atypique me donne une perspective unique pour créer des solutions innovantes et accessibles.",
        
        // Localisation
        location: {
            address: "4 B Quai de Sélestat",
            city: "Lunéville", 
            postalCode: "54300",
            region: "Grand Est",
            country: "France"
        },
        
        // Contact
        contact: {
            email: "alexandre.rippling@gmail.com",
            phone: "06.69.59.14.34",
            phoneFormatted: "+33 6 69 59 14 34"
        },
        
        // Liens sociaux et professionnels
        links: {
            website: "https://www.handietdev.fr",
            linkedin: "https://linkedin.com/in/alexandrerippling",
            github: "https://github.com/arippling",
            portfolio: "https://arippling.github.io"
        }
    },

    // ===== PARCOURS PROFESSIONNEL =====
    experience: [
        {
            id: "dev-fullstack-2024",
            type: "formation",
            title: "Développeur Fullstack",
            company: "Metz Numérique School",
            location: "Metz, France",
            period: {
                start: "2024-01",
                end: "ongoing",
                display: "2024 - En cours"
            },
            status: "current",
            description: "Formation intensive en développement web et web mobile couvrant les technologies frontend et backend modernes. Projets pratiques et méthodologies agiles.",
            achievements: [
                "Maîtrise des technologies frontend : HTML5, CSS3, JavaScript ES6+, React",
                "Développement backend : PHP, Node.js, bases de données SQL/NoSQL", 
                "Méthodologies agiles et gestion de projets",
                "Création d'applications web complètes et responsives"
            ],
            technologies: ["HTML5", "CSS3", "JavaScript", "React", "PHP", "Node.js", "MySQL", "Git"],
            skills: ["Développement web", "Programmation", "Design", "Gestion de projet"]
        },
        {
            id: "responsable-comm-2023",
            type: "experience",
            title: "Responsable Communication",
            company: "CASI Lorraine",
            location: "Lorraine, France",
            period: {
                start: "2023-01",
                end: "ongoing",
                display: "2023 - Aujourd'hui"
            },
            status: "current",
            description: "Élaboration et mise en œuvre de la stratégie de communication globale. Création de contenus numériques et imprimés, animation des réseaux sociaux, organisation d'événements.",
            achievements: [
                "Développement de la stratégie de communication digitale",
                "Création de supports multimédia (print et digital)",
                "Animation des réseaux sociaux et community management",
                "Coordination avec partenaires et prestataires externes",
                "Organisation d'événements internes et externes"
            ],
            technologies: ["Adobe Creative Suite", "WordPress", "Réseaux sociaux", "Mailchimp"],
            skills: ["Communication", "Design graphique", "Marketing digital", "Événementiel"]
        },
        {
            id: "mecanicien-2019",
            type: "experience", 
            title: "Mécanicien Agricole",
            company: "SARL Voutrin-Cherrier",
            location: "Région Grand Est, France",
            period: {
                start: "2019-01",
                end: "2021-12",
                display: "2019 - 2021"
            },
            status: "completed",
            description: "Réparation, intervention et installation sur véhicules agricoles et machinerie de parc et jardin. Développement de compétences techniques et de résolution de problèmes.",
            achievements: [
                "Diagnostic et réparation de véhicules agricoles",
                "Maintenance préventive et curative",
                "Installation et paramétrage d'équipements",
                "Relation client et conseil technique"
            ],
            technologies: ["Diagnostic électronique", "Hydraulique", "Mécanique"],
            skills: ["Mécanique", "Diagnostic", "Maintenance", "Résolution de problèmes"]
        },
        {
            id: "president-asso-2015",
            type: "experience",
            title: "Président d'Association / Bénévolat",
            company: "Association Hurrikane Crew",
            location: "Bassin Nancéen, France",
            period: {
                start: "2015-01",
                end: "2019-12",
                display: "2015 - 2019"
            },
            status: "completed",
            description: "Organisation d'événements musicaux et culturels sur le bassin nancéen. Gestion d'équipe, logistique, communication et sécurité événementielle.",
            achievements: [
                "Management d'équipes bénévoles",
                "Organisation d'événements culturels majeurs",
                "Gestion budgétaire et partenariats",
                "Coordination logistique et sécurité"
            ],
            events: [
                "Festière aux artistes",
                "Épi curieux festival", 
                "CHILL UP Festival",
                "Expositions de l'orrery"
            ],
            skills: ["Management", "Événementiel", "Logistique", "Communication"]
        },
        {
            id: "infographiste-2015",
            type: "experience",
            title: "Infographiste / Chargé de Communication",
            company: "Union Régionale des SCOP de l'Est",
            location: "Grand Est, France",
            period: {
                start: "2015-01",
                end: "2016-12",
                display: "2015 - 2016"
            },
            status: "completed",
            description: "Création de supports de communication multiples, gestion des réseaux sociaux, photographie et newsletters.",
            achievements: [
                "Conception graphique de supports print et digital",
                "Gestion des réseaux sociaux et community management",
                "Photographie événementielle et corporate",
                "Création de newsletters et campagnes emailing"
            ],
            technologies: ["Adobe Creative Suite", "WordPress", "Photographie"],
            skills: ["Infographie", "Communication", "Photographie", "Marketing"]
        },
        {
            id: "comm-chateau-2013",
            type: "experience",
            title: "Chargé de Communication",
            company: "Conseil Régional - Château de Lunéville",
            location: "Lunéville, France",
            period: {
                start: "2013-01",
                end: "2014-12",
                display: "2013 - 2014"
            },
            status: "completed",
            description: "Création de supports de communication pour le patrimoine historique, gestion des réseaux sociaux et promotion culturelle.",
            achievements: [
                "Communication patrimoine et culture",
                "Création de supports touristiques",
                "Animation des réseaux sociaux",
                "Photographie du patrimoine"
            ],
            technologies: ["Adobe Creative Suite", "CMS", "Photographie"],
            skills: ["Communication", "Patrimoine", "Tourisme", "Design"]
        }
    ],

    // ===== FORMATION =====
    education: [
        {
            id: "formation-dev-2024",
            degree: "Formation Développeur Fullstack",
            specialization: "Développeur Web et Web Mobile",
            institution: "Metz Numérique School",
            location: "Metz, France",
            period: {
                start: "2024-01",
                end: "ongoing",
                display: "2024 - En cours"
            },
            status: "ongoing",
            description: "Formation intensive aux métiers du développement web avec focus sur les technologies modernes et les bonnes pratiques.",
            curriculum: [
                "Développement Frontend (HTML5, CSS3, JavaScript, React)",
                "Développement Backend (PHP, Node.js, Express)",
                "Bases de données (MySQL, MongoDB)",
                "Gestion de versions (Git, GitHub)",
                "Méthodologies agiles",
                "Accessibilité web (WCAG)"
            ]
        },
        {
            id: "cap-mecanique-2018",
            degree: "CAP Mécanicien Agricole",
            specialization: "Option Parc et Jardin",
            institution: "AFPA Verdun",
            location: "Verdun, France",
            period: {
                start: "2018-01",
                end: "2018-12",
                display: "2018"
            },
            status: "completed",
            description: "Formation diplômante en mécanique agricole avec spécialisation dans les équipements de parc et jardin."
        },
        {
            id: "bac-infographiste-2011",
            degree: "BAC Infographiste Metteur en Page",
            institution: "AFPA Vandœuvre",
            location: "Vandœuvre-lès-Nancy, France",
            period: {
                start: "2011-01",
                end: "2011-12",
                display: "2011"
            },
            status: "completed",
            description: "Formation en infographie et mise en page, bases du design graphique et de la communication visuelle."
        },
        {
            id: "bac-sti-2010",
            degree: "BAC STI Électronique",
            institution: "Lycée Pierre de Coubertin",
            location: "Nancy, France",
            period: {
                start: "2008-09",
                end: "2010-06",
                display: "2008 - 2010"
            },
            status: "completed",
            description: "Baccalauréat Sciences et Technologies Industrielles spécialité Électronique."
        },
        {
            id: "bep-electronique-2008",
            degree: "BEP Électronique",
            institution: "Lycée Pierre de Coubertin",
            location: "Nancy, France",
            period: {
                start: "2006-09",
                end: "2008-06",
                display: "2006 - 2008"
            },
            status: "completed",
            description: "Brevet d'Études Professionnelles en Électronique."
        }
    ],

    // ===== COMPÉTENCES PERSONNELLES =====
    personalSkills: [
        {
            category: "Traits de personnalité",
            skills: [
                {
                    name: "Polyvalence",
                    description: "Capacité d'adaptation à différents environnements et technologies"
                },
                {
                    name: "Organisation",
                    description: "Gestion efficace des projets et des priorités"
                },
                {
                    name: "Créativité", 
                    description: "Approche innovante dans la résolution de problèmes"
                },
                {
                    name: "Autonomie",
                    description: "Capacité de travail en indépendance et prise d'initiative"
                }
            ]
        },
        {
            category: "Soft Skills",
            skills: [
                {
                    name: "Sens de l'écoute",
                    description: "Compréhension des besoins client et travail d'équipe"
                },
                {
                    name: "Logique",
                    description: "Approche structurée et méthodique des problèmes"
                },
                {
                    name: "Pratique",
                    description: "Orientation résultats avec approche pragmatique"
                },
                {
                    name: "Adaptabilité",
                    description: "Flexibilité face aux changements et nouveaux défis"
                }
            ]
        },
        {
            category: "Communication",
            skills: [
                {
                    name: "Adaptation au public",
                    description: "Ajustement du discours selon l'interlocuteur"
                },
                {
                    name: "Relationnel",
                    description: "Facilité d'établissement de relations professionnelles"
                },
                {
                    name: "Pédagogie",
                    description: "Capacité de transmission et d'explication"
                },
                {
                    name: "Leadership",
                    description: "Expérience de management et de coordination d'équipes"
                }
            ]
        }
    ],

    // ===== LANGUES =====
    languages: [
        {
            name: "Français",
            level: "Native",
            proficiency: 100,
            description: "Langue maternelle"
        },
        {
            name: "Anglais",
            level: "Intermédiaire",
            proficiency: 65,
            description: "Lecture technique, communication de base"
        }
    ],

    // ===== CENTRES D'INTÉRÊT =====
    interests: [
        {
            category: "Technologie",
            items: [
                "Développement web et mobile",
                "Intelligence artificielle",
                "Open source",
                "Accessibilité numérique",
                "Nouvelles technologies"
            ]
        },
        {
            category: "Créativité",
            items: [
                "Design graphique",
                "Photographie",
                "Musique électronique",
                "Arts numériques"
            ]
        },
        {
            category: "Engagement",
            items: [
                "Événements culturels",
                "Inclusion et accessibilité",
                "Formation et mentorat",
                "Communautés tech"
            ]
        },
        {
            category: "Personnel",
            items: [
                "Mécanique",
                "Bricolage",
                "Résolution de problèmes",
                "Apprentissage continu"
            ]
        }
    ],

    // ===== VALEURS ET PHILOSOPHIE =====
    values: {
        mission: "Démontrer que les défis personnels peuvent être une source d'innovation et de créativité dans le développement technologique.",
        vision: "Devenir un développeur fullstack reconnu qui inspire par son parcours atypique et contribue à rendre la technologie plus accessible.",
        principles: [
            {
                title: "Accessibilité",
                description: "Créer des solutions numériques accessibles à tous, sans exception"
            },
            {
                title: "Innovation",
                description: "Transformer les contraintes en opportunités créatives"
            },
            {
                title: "Persévérance", 
                description: "Maintenir la détermination face aux obstacles"
            },
            {
                title: "Excellence",
                description: "Viser la qualité et la performance dans chaque réalisation"
            },
            {
                title: "Partage",
                description: "Transmettre connaissances et expériences à la communauté"
            }
        ]
    },

    // ===== DISPONIBILITÉ =====
    availability: {
        status: "available", // available, busy, unavailable
        type: "full-time", // full-time, part-time, freelance, internship
        startDate: "2025-09",
        location: ["remote", "luneville", "nancy", "metz"],
        workPreferences: [
            "Équipe collaborative",
            "Projets innovants",
            "Technologies modernes",
            "Accessibilité prioritaire",
            "Formation continue"
        ]
    },

    // ===== CERTIFICATIONS ET ACHIEVEMENTS =====
    achievements: [
        {
            title: "Handi&Dev - Marque personnelle",
            year: "2024",
            description: "Création d'une identité professionnelle axée sur l'innovation inclusive"
        },
        {
            title: "Président d'association culturelle",
            year: "2015-2019",
            description: "Management bénévole et organisation d'événements majeurs"
        },
        {
            title: "Reconversion professionnelle réussie",
            year: "2024",
            description: "Transition réussie vers le développement web après parcours atypique"
        }
    ],

    // ===== PORTFOLIO HIGHLIGHTS =====
    portfolioHighlights: [
        {
            title: "Architecture Microservices",
            description: "Conception et développement d'une architecture modulaire",
            impact: "Amélioration de la maintenabilité et scalabilité"
        },
        {
            title: "Accessibilité WCAG",
            description: "Intégration des normes d'accessibilité dans tous les projets",
            impact: "Inclusion numérique et conformité réglementaire"
        },
        {
            title: "Communication multicanale",
            description: "Stratégies de communication intégrées print/digital",
            impact: "Amélioration de la visibilité et engagement"
        }
    ],

    // ===== MÉTADONNÉES =====
    metadata: {
        lastUpdated: "2025-01-12",
        version: "2.0",
        source: "profile.js",
        author: "Alexandre Rippling"
    }
};

// ===== FONCTIONS UTILITAIRES =====

/**
 * Obtient l'expérience actuelle
 * @returns {Object} Expérience en cours
 */
function getCurrentExperience() {
    return PROFILE_DATA.experience.filter(exp => exp.status === 'current');
}

/**
 * Obtient les compétences par catégorie
 * @param {string} category - Catégorie de compétences
 * @returns {Array} Liste des compétences
 */
function getSkillsByCategory(category) {
    const skillCategory = PROFILE_DATA.personalSkills.find(cat => cat.category === category);
    return skillCategory ? skillCategory.skills : [];
}

/**
 * Calcule l'âge professionnel (années d'expérience)
 * @returns {number} Nombre d'années d'expérience
 */
function getProfessionalAge() {
    const firstJob = PROFILE_DATA.experience
        .filter(exp => exp.type === 'experience')
        .sort((a, b) => new Date(a.period.start) - new Date(b.period.start))[0];
    
    if (!firstJob) return 0;
    
    const startYear = new Date(firstJob.period.start).getFullYear();
    const currentYear = new Date().getFullYear();
    return currentYear - startYear;
}

/**
 * Génère un résumé automatique du profil
 * @returns {string} Résumé du profil
 */
function generateProfileSummary() {
    const yearsExp = getProfessionalAge();
    const currentRoles = getCurrentExperience();
    const mainRole = currentRoles[0]?.title || "Professionnel";
    
    return `${mainRole} avec ${yearsExp} ans d'expérience dans des domaines variés. 
            Spécialisé en développement web, communication et design. 
            Approche unique combinant technique et créativité pour des solutions innovantes et accessibles.`;
}

/**
 * Valide les données du profil
 * @returns {boolean} True si les données sont valides
 */
function validateProfileData() {
    const required = ['personal', 'experience', 'education'];
    return required.every(key => PROFILE_DATA[key] && PROFILE_DATA[key].length !== undefined ? PROFILE_DATA[key].length > 0 : true);
}

// ===== EXPORT =====
// Export pour utilisation dans les modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        PROFILE_DATA,
        getCurrentExperience,
        getSkillsByCategory,
        getProfessionalAge,
        generateProfileSummary,
        validateProfileData
    };
}

// Export global pour le navigateur
if (typeof window !== 'undefined') {
    window.PROFILE_DATA = PROFILE_DATA;
    window.ProfileUtils = {
        getCurrentExperience,
        getSkillsByCategory,
        getProfessionalAge,
        generateProfileSummary,
        validateProfileData
    };
}

// ===== CONSOLE DEBUG =====
// Affichage des informations en mode développement
if (typeof console !== 'undefined' && window.location?.hostname === 'localhost') {
    console.group('🔍 PROFILE DATA LOADED');
    console.log('👤 Profil:', PROFILE_DATA.personal.fullName);
    console.log('💼 Expériences:', PROFILE_DATA.experience.length);
    console.log('🎓 Formations:', PROFILE_DATA.education.length);
    console.log('✅ Validation:', validateProfileData() ? 'PASS' : 'FAIL');
    console.groupEnd();
}