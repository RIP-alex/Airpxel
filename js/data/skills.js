/**
 * Configuration complète des compétences
 * Données réelles des compétences d'Alexandre Rippling
 */
const SKILLS_DATA = {
    // ===== COMPÉTENCES TECHNIQUES =====
    technical: {
        frontend: {
            title: "Développement Frontend",
            icon: "fas fa-laptop-code",
            color: "#3B82F6",
            skills: [
                {
                    name: "HTML5/CSS3",
                    level: 85,
                    experience: "2 ans",
                    description: "Sémantique HTML moderne, CSS Grid/Flexbox, animations CSS",
                    projects: ["Portfolio CV", "Bugtracker UI", "Sites CASI"],
                    certifications: [],
                    lastUsed: "2025-01"
                },
                {
                    name: "JavaScript ES6+",
                    level: 80,
                    experience: "2 ans",
                    description: "JavaScript moderne, DOM manipulation, APIs, async/await",
                    projects: ["Bugtracker", "Portfolio interactif", "Animations"],
                    certifications: [],
                    lastUsed: "2025-01"
                },
                {
                    name: "React",
                    level: 75,
                    experience: "1.5 ans", 
                    description: "Composants, hooks, state management, React Router",
                    projects: ["Applications formation", "Composants réutilisables"],
                    certifications: [],
                    lastUsed: "2024-12"
                },
                {
                    name: "Responsive Design",
                    level: 90,
                    experience: "3 ans",
                    description: "Mobile-first, media queries, design adaptatif",
                    projects: ["Tous les projets web", "Templates responsive"],
                    certifications: [],
                    lastUsed: "2025-01"
                },
                {
                    name: "Accessibilité WCAG",
                    level: 80,
                    experience: "1 an",
                    description: "Normes WCAG AA, ARIA, navigation clavier, lecteurs d'écran",
                    projects: ["Portfolio CV", "Applications accessibles"],
                    certifications: [],
                    lastUsed: "2025-01"
                },
                {
                    name: "Sass/SCSS",
                    level: 70,
                    experience: "1 an",
                    description: "Préprocesseur CSS, variables, mixins, architecture modulaire",
                    projects: ["Frameworks CSS custom", "Projets styling avancé"],
                    certifications: [],
                    lastUsed: "2024-11"
                }
            ]
        },
        
        backend: {
            title: "Développement Backend",
            icon: "fas fa-server",
            color: "#10B981",
            skills: [
                {
                    name: "PHP",
                    level: 75,
                    experience: "2 ans",
                    description: "PHP moderne, OOP, MVC, frameworks, sécurité",
                    projects: ["Bugtracker", "APIs custom", "Applications web"],
                    certifications: [],
                    lastUsed: "2024-12"
                },
                {
                    name: "Node.js",
                    level: 70,
                    experience: "1.5 ans",
                    description: "Express.js, middleware, APIs REST, gestion asynchrone",
                    projects: ["Microservices", "APIs backend", "Serveurs web"],
                    certifications: [],
                    lastUsed: "2024-12"
                },
                {
                    name: "MySQL/PostgreSQL",
                    level: 75,
                    experience: "2 ans",
                    description: "Conception BDD, requêtes complexes, optimisation",
                    projects: ["Bugtracker DB", "Bases données projets"],
                    certifications: [],
                    lastUsed: "2024-12"
                },
                {
                    name: "API REST",
                    level: 80,
                    experience: "2 ans",
                    description: "Conception RESTful, documentation, versioning, sécurité",
                    projects: ["Microservices architecture", "APIs Bugtracker"],
                    certifications: [],
                    lastUsed: "2024-12"
                },
                {
                    name: "Architecture MVC",
                    level: 85,
                    experience: "2 ans",
                    description: "Séparation des responsabilités, patterns, organisation code",
                    projects: ["Bugtracker", "Applications structurées"],
                    certifications: [],
                    lastUsed: "2024-12"
                },
                {
                    name: "MongoDB",
                    level: 65,
                    experience: "1 an",
                    description: "Base NoSQL, documents, agrégations, indexation",
                    projects: ["Microservices", "Projets NoSQL"],
                    certifications: [],
                    lastUsed: "2024-11"
                }
            ]
        },
        
        tools: {
            title: "Outils & Technologies",
            icon: "fas fa-tools",
            color: "#F59E0B",
            skills: [
                {
                    name: "Git/GitHub",
                    level: 85,
                    experience: "3 ans",
                    description: "Versioning, branches, collaboration, workflows",
                    projects: ["Tous les projets de développement"],
                    certifications: [],
                    lastUsed: "2025-01"
                },
                {
                    name: "VS Code",
                    level: 90,
                    experience: "3 ans",
                    description: "Extensions, debugging, configuration, productivité",
                    projects: ["Environnement principal de développement"],
                    certifications: [],
                    lastUsed: "2025-01"
                },
                {
                    name: "Docker",
                    level: 65,
                    experience: "6 mois",
                    description: "Conteneurisation, images, Docker Compose",
                    projects: ["Microservices", "Environnements dev"],
                    certifications: [],
                    lastUsed: "2024-11"
                },
                {
                    name: "Adobe Creative Suite",
                    level: 80,
                    experience: "5 ans",
                    description: "Photoshop, Illustrator, InDesign, design graphique",
                    projects: ["Communication CASI", "Supports visuels"],
                    certifications: [],
                    lastUsed: "2024-12"
                },
                {
                    name: "Figma",
                    level: 75,
                    experience: "2 ans",
                    description: "Maquettage, prototypage, design collaboratif",
                    projects: ["Maquettes applications", "Design système"],
                    certifications: [],
                    lastUsed: "2024-12"
                },
                {
                    name: "WordPress",
                    level: 75,
                    experience: "3 ans",
                    description: "Thèmes, plugins, customisation, maintenance",
                    projects: ["Sites CASI", "Sites clients"],
                    certifications: [],
                    lastUsed: "2024-12"
                }
            ]
        }
    },
    
    // ===== SOFT SKILLS =====
    soft: {
        communication: {
            title: "Communication",
            icon: "fas fa-comments",
            color: "#EC4899",
            skills: [
                {
                    name: "Adaptation au public",
                    level: 90,
                    description: "Capacité d'ajuster le discours selon l'interlocuteur",
                    examples: ["Formations techniques", "Présentations client", "Communication interne"]
                },
                {
                    name: "Écoute active",
                    level: 85,
                    description: "Compréhension des besoins et attentes",
                    examples: ["Recueil besoins client", "Management d'équipe", "Support utilisateur"]
                },
                {
                    name: "Présentation",
                    level: 80,
                    description: "Transmission claire d'idées complexes",
                    examples: ["Soutenances projet", "Formations", "Réunions équipe"]
                },
                {
                    name: "Rédaction technique",
                    level: 85,
                    description: "Documentation claire et structurée",
                    examples: ["Documentation code", "Spécifications", "Guides utilisateur"]
                }
            ]
        },
        
        leadership: {
            title: "Leadership & Management",
            icon: "fas fa-users",
            color: "#8B5CF6",
            skills: [
                {
                    name: "Gestion d'équipe",
                    level: 80,
                    description: "Coordination et motivation d'équipes",
                    examples: ["Président association", "Équipes bénévoles", "Projets collaboratifs"]
                },
                {
                    name: "Prise de décision",
                    level: 85,
                    description: "Analyse et décisions rapides en situation",
                    examples: ["Gestion de crise", "Choix techniques", "Arbitrages projet"]
                },
                {
                    name: "Délégation",
                    level: 75,
                    description: "Attribution de tâches selon les compétences",
                    examples: ["Organisation événements", "Projets développement"]
                },
                {
                    name: "Mentoring",
                    level: 70,
                    description: "Accompagnement et formation d'autres personnes",
                    examples: ["Formation nouvelles recrues", "Partage de connaissances"]
                }
            ]
        },
        
        problem_solving: {
            title: "Résolution de Problèmes",
            icon: "fas fa-puzzle-piece",
            color: "#06B6D4",
            skills: [
                {
                    name: "Analyse critique",
                    level: 85,
                    description: "Décomposition et analyse de problèmes complexes",
                    examples: ["Debug code", "Diagnostic technique", "Analyse de besoins"]
                },
                {
                    name: "Créativité",
                    level: 80,
                    description: "Solutions innovantes et approches originales",
                    examples: ["Architectures techniques", "Solutions UX", "Optimisations"]
                },
                {
                    name: "Persévérance",
                    level: 90,
                    description: "Maintien de l'effort face aux obstacles",
                    examples: ["Débogages complexes", "Projets long terme", "Défis techniques"]
                },
                {
                    name: "Logique",
                    level: 85,
                    description: "Approche structurée et méthodique",
                    examples: ["Algorithmes", "Architecture système", "Résolution bugs"]
                }
            ]
        },
        
        adaptability: {
            title: "Adaptabilité",
            icon: "fas fa-sync-alt",
            color: "#F97316",
            skills: [
                {
                    name: "Flexibilité",
                    level: 85,
                    description: "Adaptation rapide aux changements",
                    examples: ["Nouvelles technologies", "Changements projet", "Contextes variés"]
                },
                {
                    name: "Apprentissage continu",
                    level: 90,
                    description: "Curiosité et soif d'apprendre",
                    examples: ["Autoformation", "Veille technologique", "Nouvelles compétences"]
                },
                {
                    name: "Polyvalence",
                    level: 85,
                    description: "Compétences dans des domaines variés",
                    examples: ["Tech + Communication", "Frontend + Backend", "Management + Technique"]
                },
                {
                    name: "Résilience",
                    level: 80,
                    description: "Capacité de rebond après les échecs",
                    examples: ["Projets difficiles", "Reconversion", "Défis personnels"]
                }
            ]
        }
    },
    
    // ===== LANGUES =====
    languages: [
        {
            name: "Français",
            level: "Natif",
            proficiency: 100,
            certifications: [],
            description: "Langue maternelle, excellent niveau écrit et oral"
        },
        {
            name: "Anglais",
            level: "Intermédiaire (B2)",
            proficiency: 65,
            certifications: [],
            description: "Lecture technique fluide, communication professionnelle"
        }
    ],
    
    // ===== CERTIFICATIONS =====
    certifications: [
        {
            name: "Formation Développeur Web et Web Mobile",
            issuer: "Metz Numérique School",
            date: "2024-2025",
            status: "En cours",
            type: "Formation diplômante",
            skills: ["HTML/CSS", "JavaScript", "PHP", "React", "Node.js"]
        },
        {
            name: "CAP Mécanicien Agricole",
            issuer: "AFPA Verdun",
            date: "2018",
            status: "Obtenu",
            type: "Diplôme professionnel",
            skills: ["Mécanique", "Diagnostic", "Maintenance"]
        },
        {
            name: "BAC Infographiste Metteur en Page",
            issuer: "AFPA Vandœuvre",
            date: "2011",
            status: "Obtenu",
            type: "Diplôme professionnel",
            skills: ["Design graphique", "Mise en page", "Adobe Creative Suite"]
        },
        {
            name: "BAC STI Électronique",
            issuer: "Lycée Pierre de Coubertin",
            date: "2010",
            status: "Obtenu",
            type: "Baccalauréat technologique",
            skills: ["Électronique", "Systèmes embarqués", "Logique"]
        }
    ],
    
    // ===== CENTRES D'INTÉRÊT TECHNIQUES =====
    interests: [
        {
            category: "Technologies Émergentes",
            items: [
                {
                    name: "Intelligence Artificielle",
                    description: "Exploration des applications IA dans le développement web",
                    level: "Débutant"
                },
                {
                    name: "Progressive Web Apps",
                    description: "Développement d'applications web modernes",
                    level: "Intermédiaire"
                },
                {
                    name: "Microservices",
                    description: "Architecture distribuée et scalabilité",
                    level: "Intermédiaire"
                },
                {
                    name: "Cybersécurité",
                    description: "Sécurisation d'applications et données",
                    level: "Débutant"
                }
            ]
        },
        {
            category: "Méthodologies",
            items: [
                {
                    name: "Agile/Scrum",
                    description: "Méthodes de gestion de projet iteratives",
                    level: "Intermédiaire"
                },
                {
                    name: "DevOps",
                    description: "Intégration développement et opérations",
                    level: "Débutant"
                },
                {
                    name: "Test-Driven Development",
                    description: "Développement guidé par les tests",
                    level: "Débutant"
                },
                {
                    name: "Clean Code",
                    description: "Écriture de code propre et maintenable",
                    level: "Intermédiaire"
                }
            ]
        },
        {
            category: "Design & UX",
            items: [
                {
                    name: "Design System",
                    description: "Création de systèmes de design cohérents",
                    level: "Intermédiaire"
                },
                {
                    name: "UI/UX Design",
                    description: "Interface utilisateur et expérience utilisateur",
                    level: "Intermédiaire"
                },
                {
                    name: "Accessibilité Web",
                    description: "Design inclusif et conformité WCAG",
                    level: "Avancé"
                }
            ]
        }
    ],
    
    // ===== OBJECTIFS DE DÉVELOPPEMENT =====
    developmentGoals: {
        shortTerm: [
            {
                goal: "Maîtrise avancée de React",
                timeline: "3 mois",
                progress: 60,
                actions: ["Projets pratiques", "Formation en ligne", "Participation communauté"]
            },
            {
                goal: "Certification Docker/Kubernetes",
                timeline: "6 mois", 
                progress: 30,
                actions: ["Formation officielle", "Projets containerisés", "Labs pratiques"]
            },
            {
                goal: "Expertise en tests automatisés",
                timeline: "4 mois",
                progress: 40,
                actions: ["Jest/Vitest", "Cypress", "TDD practice"]
            }
        ],
        longTerm: [
            {
                goal: "Architecture Cloud Native",
                timeline: "12 mois",
                progress: 20,
                actions: ["Certification AWS/Azure", "Projets cloud", "Microservices avancés"]
            },
            {
                goal: "Leadership technique",
                timeline: "18 mois",
                progress: 35,
                actions: ["Mentorat", "Tech lead sur projets", "Présentation conférences"]
            },
            {
                goal: "Expertise Accessibilité",
                timeline: "8 mois",
                progress: 70,
                actions: ["Certification IAAP", "Audit d'accessibilité", "Formation équipes"]
            }
        ]
    },
    
    // ===== CONFIGURATION D'AFFICHAGE =====
    display: {
        skillLevels: {
            beginner: { min: 0, max: 30, label: "Débutant", color: "#EF4444" },
            intermediate: { min: 31, max: 60, label: "Intermédiaire", color: "#F59E0B" },
            advanced: { min: 61, max: 80, label: "Avancé", color: "#10B981" },
            expert: { min: 81, max: 100, label: "Expert", color: "#3B82F6" }
        },
        animationDelays: {
            skillBars: 200,
            categories: 150,
            cascade: 100
        },
        showProgress: true,
        showProjects: true,
        showCertifications: true
    },
    
    // ===== MÉTADONNÉES =====
    metadata: {
        totalTechnicalSkills: 18,
        totalSoftSkills: 16,
        averageLevel: 78,
        lastUpdated: "2025-01-12",
        version: "2.0",
        yearsOfExperience: 3
    }
};

/**
 * Fonctions utilitaires pour la gestion des compétences
 */
const SkillsUtils = {
    /**
     * Obtenir toutes les compétences techniques
     * @returns {Array} Compétences techniques aplaties
     */
    getAllTechnicalSkills() {
        const allSkills = [];
        Object.values(SKILLS_DATA.technical).forEach(category => {
            category.skills.forEach(skill => {
                allSkills.push({
                    ...skill,
                    category: category.title,
                    categoryIcon: category.icon,
                    categoryColor: category.color
                });
            });
        });
        return allSkills;
    },

    /**
     * Obtenir les compétences par niveau
     * @param {number} minLevel - Niveau minimum
     * @returns {Array} Compétences filtrées
     */
    getSkillsByLevel(minLevel = 0) {
        return this.getAllTechnicalSkills().filter(skill => skill.level >= minLevel);
    },

    /**
     * Obtenir les compétences les plus récentes
     * @param {number} count - Nombre de compétences à retourner
     * @returns {Array} Compétences récentes
     */
    getRecentSkills(count = 5) {
        return this.getAllTechnicalSkills()
            .sort((a, b) => new Date(b.lastUsed) - new Date(a.lastUsed))
            .slice(0, count);
    },

    /**
     * Obtenir les soft skills par catégorie
     * @param {string} category - Catégorie de soft skills
     * @returns {Array} Soft skills de la catégorie
     */
    getSoftSkillsByCategory(category) {
        return SKILLS_DATA.soft[category]?.skills || [];
    },

    /**
     * Rechercher dans les compétences
     * @param {string} query - Terme de recherche
     * @returns {Array} Compétences correspondantes
     */
    searchSkills(query) {
        const searchTerm = query.toLowerCase();
        return this.getAllTechnicalSkills().filter(skill =>
            skill.name.toLowerCase().includes(searchTerm) ||
            skill.description.toLowerCase().includes(searchTerm) ||
            skill.projects.some(project => project.toLowerCase().includes(searchTerm))
        );
    },

    /**
     * Obtenir les statistiques des compétences
     * @returns {Object} Statistiques
     */
    getSkillsStats() {
        const technicalSkills = this.getAllTechnicalSkills();
        const softSkillsCount = Object.values(SKILLS_DATA.soft)
            .reduce((total, category) => total + category.skills.length, 0);

        const levels = technicalSkills.map(skill => skill.level);
        const averageLevel = levels.reduce((sum, level) => sum + level, 0) / levels.length;

        return {
            totalTechnical: technicalSkills.length,
            totalSoft: softSkillsCount,
            totalLanguages: SKILLS_DATA.languages.length,
            totalCertifications: SKILLS_DATA.certifications.length,
            averageLevel: Math.round(averageLevel),
            expertSkills: technicalSkills.filter(skill => skill.level >= 80).length,
            advancedSkills: technicalSkills.filter(skill => skill.level >= 60 && skill.level < 80).length,
            categories: Object.keys(SKILLS_DATA.technical).length
        };
    },

    /**
     * Obtenir le niveau d'une compétence par nom
     * @param {string} skillName - Nom de la compétence
     * @returns {number|null} Niveau de la compétence
     */
    getSkillLevel(skillName) {
        const skill = this.getAllTechnicalSkills().find(s => 
            s.name.toLowerCase() === skillName.toLowerCase()
        );
        return skill ? skill.level : null;
    },

    /**
     * Obtenir les projets utilisant une compétence
     * @param {string} skillName - Nom de la compétence
     * @returns {Array} Liste des projets
     */
    getProjectsForSkill(skillName) {
        const skill = this.getAllTechnicalSkills().find(s => 
            s.name.toLowerCase() === skillName.toLowerCase()
        );
        return skill ? skill.projects : [];
    },

    /**
     * Obtenir les compétences recommandées à améliorer
     * @returns {Array} Compétences à développer
     */
    getSkillsToImprove() {
        return this.getAllTechnicalSkills()
            .filter(skill => skill.level < 80)
            .sort((a, b) => b.level - a.level)
            .slice(0, 5);
    },

    /**
     * Obtenir la progression des objectifs
     * @returns {Object} Progression des objectifs
     */
    getGoalsProgress() {
        const shortTermAvg = SKILLS_DATA.developmentGoals.shortTerm
            .reduce((sum, goal) => sum + goal.progress, 0) / SKILLS_DATA.developmentGoals.shortTerm.length;
        
        const longTermAvg = SKILLS_DATA.developmentGoals.longTerm
            .reduce((sum, goal) => sum + goal.progress, 0) / SKILLS_DATA.developmentGoals.longTerm.length;

        return {
            shortTerm: Math.round(shortTermAvg),
            longTerm: Math.round(longTermAvg),
            overall: Math.round((shortTermAvg + longTermAvg) / 2)
        };
    },

    /**
     * Obtenir le label du niveau de compétence
     * @param {number} level - Niveau numérique
     * @returns {string} Label du niveau
     */
    getLevelLabel(level) {
        if (level <= 30) return "Débutant";
        if (level <= 60) return "Intermédiaire";
        if (level <= 80) return "Avancé";
        return "Expert";
    },

    /**
     * Obtenir la couleur du niveau de compétence
     * @param {number} level - Niveau numérique
     * @returns {string} Couleur hexadécimale
     */
    getLevelColor(level) {
        if (level <= 30) return "#EF4444";
        if (level <= 60) return "#F59E0B";
        if (level <= 80) return "#10B981";
        return "#3B82F6";
    }
};

// Export pour utilisation globale
window.SKILLS_DATA = SKILLS_DATA;
window.SkillsUtils = SkillsUtils;

// Export pour modules ES6
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { SKILLS_DATA, SkillsUtils };
}

console.log('✅ Données des compétences chargées avec succès:', SkillsUtils.getSkillsStats());