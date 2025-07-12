/**
 * Configuration des projets portfolio
 * Données réelles des projets d'Alexandre Rippling
 */
const PROJECTS_DATA = {
    // ===== PROJETS PRINCIPAUX =====
    projects: [
        {
            id: "bugtracker-system",
            title: "Système de Gestion de Tickets - Bugtracker",
            subtitle: "Application Web de Suivi des Problèmes",
            description: "Application complète de gestion et suivi de tickets pour résoudre efficacement les problèmes signalés. Interface intuitive avec système de notifications en temps réel, gestion des priorités et workflow automatisé.",
            type: "Application Web",
            category: "fullstack",
            status: "completed",
            featured: true,
            
            // Détails techniques
            technologies: [
                "PHP", "JavaScript", "MySQL", "CSS3", "HTML5", "AJAX", "Bootstrap"
            ],
            
            // Fonctionnalités principales
            features: [
                "Création et assignation de tickets",
                "Système de priorités et statuts",
                "Notifications en temps réel",
                "Dashboard de suivi avancé",
                "Gestion des utilisateurs et permissions",
                "Historique complet des modifications",
                "Recherche et filtres avancés",
                "Rapports et statistiques"
            ],
            
            // Défis techniques relevés
            challenges: [
                "Architecture MVC pour la scalabilité",
                "Système de notifications temps réel",
                "Interface responsive multi-device",
                "Sécurisation des données sensibles"
            ],
            
            // Résultats obtenus
            results: [
                "Réduction de 60% du temps de résolution",
                "Interface utilisateur intuitive adoptée rapidement",
                "Système scalable supportant 500+ tickets simultanés",
                "Zéro incident de sécurité depuis le déploiement"
            ],
            
            // Liens et ressources
            links: {
                demo: "https://arippling.github.io/bugtracker-demo",
                github: "https://github.com/arippling/bugtracker",
                documentation: "https://github.com/arippling/bugtracker/wiki"
            },
            
            // Médias
            images: [
                {
                    src: "assets/projects/bugtracker/dashboard.png",
                    alt: "Dashboard principal du bugtracker",
                    caption: "Vue d'ensemble du tableau de bord avec statistiques en temps réel"
                },
                {
                    src: "assets/projects/bugtracker/ticket-detail.png", 
                    alt: "Détail d'un ticket",
                    caption: "Interface de gestion détaillée d'un ticket"
                },
                {
                    src: "assets/projects/bugtracker/mobile-view.png",
                    alt: "Version mobile responsive",
                    caption: "Interface mobile optimisée pour la consultation"
                }
            ],
            
            // Métadonnées
            metadata: {
                startDate: "2024-03",
                endDate: "2024-06",
                duration: "3 mois",
                teamSize: 1,
                role: "Développeur Fullstack",
                client: "Projet d'étude - Formation Metz Numérique School"
            }
        },
        
        {
            id: "microservices-architecture",
            title: "Architecture Microservices",
            subtitle: "Modules de Gestion d'Entreprises et Cartes",
            description: "Conception et développement d'une architecture modulaire avec microservices pour la gestion d'entreprises et de cartes QR cryptées. Système distribué avec API REST et base de données dédiées.",
            type: "Backend API",
            category: "backend",
            status: "in-progress",
            featured: true,
            
            technologies: [
                "Node.js", "Express", "MongoDB", "Docker", "JWT", "API REST", "Microservices"
            ],
            
            features: [
                "Architecture microservices modulaire",
                "API REST sécurisées avec JWT",
                "Gestion d'entreprises multi-tenant",
                "Cartes QR cryptées avec AES-256",
                "Base de données dédiées par module",
                "Conteneurisation Docker",
                "Monitoring et logs centralisés",
                "Scalabilité horizontale"
            ],
            
            challenges: [
                "Communication inter-services",
                "Gestion de la cohérence des données",
                "Sécurité des communications",
                "Déploiement et orchestration"
            ],
            
            results: [
                "Architecture scalable et maintenable",
                "Réduction de 40% des temps de développement",
                "Isolation des responsabilités par service",
                "Tests unitaires et d'intégration automatisés"
            ],
            
            links: {
                github: "https://github.com/arippling/microservices-architecture",
                documentation: "https://github.com/arippling/microservices-architecture/docs"
            },
            
            images: [
                {
                    src: "assets/projects/microservices/architecture-diagram.png",
                    alt: "Diagramme d'architecture microservices",
                    caption: "Vue d'ensemble de l'architecture distribuée"
                },
                {
                    src: "assets/projects/microservices/api-endpoints.png",
                    alt: "Documentation API",
                    caption: "Endpoints API REST documentés"
                }
            ],
            
            metadata: {
                startDate: "2024-08",
                endDate: null,
                duration: "En cours",
                teamSize: 1,
                role: "Architecte Backend",
                client: "Projet personnel - Étude d'architecture"
            }
        },
        
        {
            id: "cv-portfolio-moderne",
            title: "Portfolio Professionnel",
            subtitle: "Site Vitrine Responsive et Accessible",
            description: "Développement d'un portfolio professionnel moderne avec animations fluides, conformité WCAG AA et architecture PWA. Design système Airpxel avec mode sombre/clair automatique.",
            type: "Site Web",
            category: "frontend",
            status: "in-progress",
            featured: true,
            
            technologies: [
                "HTML5", "CSS3", "JavaScript ES6+", "PWA", "WCAG", "Responsive Design"
            ],
            
            features: [
                "Design moderne avec animations fluides",
                "Conformité WCAG AA pour l'accessibilité",
                "Progressive Web App (PWA)",
                "Mode sombre/clair automatique",
                "Navigation SPA avec animation",
                "Formulaire de contact fonctionnel",
                "Optimisations performance",
                "SEO et métadonnées complètes"
            ],
            
            challenges: [
                "Performance et fluidité des animations",
                "Accessibilité complète WCAG AA",
                "Compatibilité multi-navigateurs",
                "Optimisation mobile-first"
            ],
            
            results: [
                "Score Lighthouse 95+ sur tous critères",
                "Conformité WCAG AA validée",
                "Temps de chargement < 2 secondes",
                "Interface utilisateur hautement ergonomique"
            ],
            
            links: {
                demo: "https://www.handietdev.fr",
                github: "https://github.com/arippling/cv-portfolio"
            },
            
            images: [
                {
                    src: "assets/projects/portfolio/hero-desktop.png",
                    alt: "Page d'accueil desktop",
                    caption: "Landing page avec animations et design moderne"
                },
                {
                    src: "assets/projects/portfolio/mobile-responsive.png",
                    alt: "Version mobile",
                    caption: "Interface mobile responsive et optimisée"
                }
            ],
            
            metadata: {
                startDate: "2024-12",
                endDate: null,
                duration: "En cours",
                teamSize: 1,
                role: "Développeur Frontend",
                client: "Portfolio personnel"
            }
        },
        
        {
            id: "communication-casi",
            title: "Stratégie Communication CASI Lorraine",
            subtitle: "Refonte Digitale et Community Management",
            description: "Élaboration et mise en œuvre d'une stratégie de communication globale pour l'association CASI Lorraine. Création de contenus multimédia, gestion des réseaux sociaux et organisation d'événements.",
            type: "Communication Digitale",
            category: "communication",
            status: "ongoing",
            featured: false,
            
            technologies: [
                "WordPress", "Adobe Creative Suite", "Mailchimp", "Social Media", "Canva", "Analytics"
            ],
            
            features: [
                "Stratégie de communication intégrée",
                "Création de contenus multimédia",
                "Animation des réseaux sociaux",
                "Newsletters et campagnes emailing",
                "Organisation d'événements",
                "Suivi de performance et analytics"
            ],
            
            challenges: [
                "Cohérence de la communication multi-canal",
                "Engagement de la communauté",
                "Mesure de l'impact des actions",
                "Coordination avec partenaires externes"
            ],
            
            results: [
                "Augmentation de 150% de l'engagement social",
                "Taux d'ouverture newsletters 35% (vs 22% moyenne)",
                "Organisation de 12 événements annuels",
                "Partenariats renforcés avec acteurs locaux"
            ],
            
            links: {
                website: "https://casi-lorraine.fr"
            },
            
            metadata: {
                startDate: "2023-01",
                endDate: null,
                duration: "2 ans+",
                teamSize: 3,
                role: "Responsable Communication",
                client: "CASI Lorraine"
            }
        }
    ],
    
    // ===== PROJETS SECONDAIRES =====
    sideProjects: [
        {
            id: "hurrikane-events",
            title: "Gestion d'Événements Culturels",
            subtitle: "Organisation Association Hurrikane Crew",
            description: "Management d'équipes bénévoles et organisation d'événements musicaux majeurs sur le bassin nancéen.",
            type: "Management Événementiel",
            category: "management",
            status: "completed",
            
            technologies: ["Logistique", "Coordination", "Sécurité", "Communication"],
            
            achievements: [
                "Festière aux artistes - 2000+ participants",
                "Épi curieux festival - 1500+ participants", 
                "CHILL UP Festival - 3000+ participants",
                "Expositions de l'orrery - 500+ visiteurs"
            ],
            
            metadata: {
                startDate: "2015-01",
                endDate: "2019-12",
                duration: "5 ans",
                role: "Président d'Association"
            }
        }
    ],
    
    // ===== CONFIGURATION D'AFFICHAGE =====
    display: {
        featuredProjects: 3,
        projectsPerPage: 6,
        categoriesFilter: ["all", "fullstack", "frontend", "backend", "communication"],
        sortBy: "featured", // featured, date, title
        showFilters: true,
        showSearch: true
    },
    
    // ===== MÉTADONNÉES =====
    metadata: {
        totalProjects: 4,
        totalSideProjects: 1,
        lastUpdated: "2025-01-12",
        version: "2.0"
    }
};

/**
 * Fonctions utilitaires pour la gestion des projets
 */
const ProjectsUtils = {
    /**
     * Obtenir les projets en vedette
     * @returns {Array} Projets featured
     */
    getFeaturedProjects() {
        return PROJECTS_DATA.projects.filter(project => project.featured);
    },
    
    /**
     * Obtenir les projets par catégorie
     * @param {string} category - Catégorie de projets
     * @returns {Array} Projets filtrés
     */
    getProjectsByCategory(category) {
        if (category === 'all') return PROJECTS_DATA.projects;
        return PROJECTS_DATA.projects.filter(project => project.category === category);
    },
    
    /**
     * Obtenir un projet par ID
     * @param {string} projectId - ID du projet
     * @returns {Object|null} Projet trouvé
     */
    getProjectById(projectId) {
        return PROJECTS_DATA.projects.find(project => project.id === projectId) || null;
    },
    
    /**
     * Obtenir les technologies utilisées
     * @returns {Array} Liste unique des technologies
     */
    getAllTechnologies() {
        const technologies = new Set();
        PROJECTS_DATA.projects.forEach(project => {
            project.technologies.forEach(tech => technologies.add(tech));
        });
        return Array.from(technologies).sort();
    },
    
    /**
     * Obtenir les projets par statut
     * @param {string} status - Statut (completed, in-progress, ongoing)
     * @returns {Array} Projets filtrés
     */
    getProjectsByStatus(status) {
        return PROJECTS_DATA.projects.filter(project => project.status === status);
    },
    
    /**
     * Recherche dans les projets
     * @param {string} query - Terme de recherche
     * @returns {Array} Projets correspondants
     */
    searchProjects(query) {
        const searchTerm = query.toLowerCase();
        return PROJECTS_DATA.projects.filter(project => 
            project.title.toLowerCase().includes(searchTerm) ||
            project.description.toLowerCase().includes(searchTerm) ||
            project.technologies.some(tech => tech.toLowerCase().includes(searchTerm))
        );
    },
    
    /**
     * Obtenir les statistiques des projets
     * @returns {Object} Statistiques
     */
    getProjectsStats() {
        const projects = PROJECTS_DATA.projects;
        const technologies = this.getAllTechnologies();
        
        return {
            total: projects.length,
            completed: projects.filter(p => p.status === 'completed').length,
            inProgress: projects.filter(p => p.status === 'in-progress').length,
            ongoing: projects.filter(p => p.status === 'ongoing').length,
            featured: projects.filter(p => p.featured).length,
            technologies: technologies.length,
            categories: [...new Set(projects.map(p => p.category))].length
        };
    }
};

// Export pour utilisation globale
window.PROJECTS_DATA = PROJECTS_DATA;
window.ProjectsUtils = ProjectsUtils;

// Export pour modules ES6
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PROJECTS_DATA, ProjectsUtils };
}

console.log('✅ Données des projets chargées avec succès:', ProjectsUtils.getProjectsStats());