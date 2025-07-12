/**
 * Application Principale du CV
 * Orchestre tous les composants et gère le cycle de vie de l'application
 */
class CVApplication {
    constructor() {
        // État de l'application
        this.isInitialized = false;
        this.isLoading = true;
        this.managers = {};
        this.config = {
            loadingMinDuration: 1000, // Durée minimale du loader en ms
            animationDelay: 150, // Délai entre les animations
            debugMode: window.location.hostname === 'localhost'
        };
        
        // Éléments DOM critiques
        this.loader = Utils.DOM.select('.loader');
        this.body = document.body;
        this.app = Utils.DOM.select('#app') || document.body;
        
        Utils.Debug.log('info', 'CVApplication créée');
    }

    /**
     * Initialisation complète de l'application
     */
    async init() {
        try {
            Utils.Debug.log('info', '🚀 Démarrage de l\'application CV...');
            
            // Marquer le début du chargement
            const startTime = performance.now();
            
            // Initialisation des composants par ordre de priorité
            await this.initializeCore();
            await this.initializeManagers();
            await this.loadContent();
            await this.initializeInteractions();
            
            // Attendre la durée minimale de chargement
            const loadTime = performance.now() - startTime;
            if (loadTime < this.config.loadingMinDuration) {
                await this.delay(this.config.loadingMinDuration - loadTime);
            }
            
            // Finaliser le chargement
            await this.finishLoading();
            
            Utils.Debug.log('info', '✅ Application CV initialisée avec succès');
            
        } catch (error) {
            Utils.Debug.log('error', 'Erreur d\'initialisation de l\'application:', error);
            this.handleInitError(error);
        }
    }

    /**
     * Initialisation des composants de base
     */
    async initializeCore() {
        Utils.Debug.log('info', 'Initialisation des composants de base...');
        
        // Configuration des propriétés CSS dynamiques
        this.setupCSSProperties();
        
        // Initialisation du gestionnaire d'erreurs
        this.setupErrorHandling();
        
        // Configuration de l'accessibilité
        this.setupAccessibility();
        
        // Détection des capacités du navigateur
        this.detectBrowserCapabilities();
        
        Utils.Debug.log('info', '✅ Composants de base initialisés');
    }

    /**
     * Initialisation des gestionnaires principaux
     */
    async initializeManagers() {
        Utils.Debug.log('info', 'Initialisation des gestionnaires...');
        
        try {
            // Gestionnaire de navigation (priorité haute)
            this.managers.navigation = new NavigationManager();
            await this.delay(50);
            
            // Gestionnaire de thème
            this.managers.theme = new ThemeManager();
            await this.delay(50);
            
            // Gestionnaire de révélation au scroll
            this.managers.scrollReveal = new ScrollRevealManager();
            await this.delay(50);
            
            Utils.Debug.log('info', '✅ Gestionnaires initialisés');
            
        } catch (error) {
            Utils.Debug.log('error', 'Erreur d\'initialisation des gestionnaires:', error);
            throw error;
        }
    }

    /**
     * Chargement et génération du contenu dynamique
     */
    async loadContent() {
        Utils.Debug.log('info', 'Chargement du contenu...');
        
        try {
            // Génération du contenu des sections
            await this.generateAboutSection();
            await this.delay(100);
            
            await this.generateExperienceSection();
            await this.delay(100);
            
            await this.generateSkillsSection();
            await this.delay(100);
            
            await this.generateProjectsSection();
            await this.delay(100);
            
            await this.generateContactSection();
            await this.delay(100);
            
            Utils.Debug.log('info', '✅ Contenu chargé');
            
        } catch (error) {
            Utils.Debug.log('error', 'Erreur de chargement du contenu:', error);
            throw error;
        }
    }

    /**
     * Initialisation des interactions et événements
     */
    async initializeInteractions() {
        Utils.Debug.log('info', 'Initialisation des interactions...');
        
        // Formulaire de contact
        this.setupContactForm();
        
        // Interactions des projets
        this.setupProjectInteractions();
        
        // Animations de compétences
        this.setupSkillsAnimations();
        
        // Gestion du redimensionnement
        this.setupResizeHandling();
        
        // Raccourcis clavier
        this.setupKeyboardShortcuts();
        
        Utils.Debug.log('info', '✅ Interactions initialisées');
    }

    /**
     * Configuration des propriétés CSS dynamiques
     */
    setupCSSProperties() {
        // Hauteur de viewport réelle (mobile)
        const setVH = () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        };
        
        setVH();
        Utils.Events.on(window, 'resize', Utils.Performance.debounce(setVH, 100));
        
        // Position de la souris pour les effets parallax
        Utils.Events.on(document, 'mousemove', Utils.Performance.throttle((e) => {
            const x = (e.clientX / window.innerWidth) * 100;
            const y = (e.clientY / window.innerHeight) * 100;
            
            document.documentElement.style.setProperty('--mouse-x', `${x}%`);
            document.documentElement.style.setProperty('--mouse-y', `${y}%`);
        }, 16));
    }

    /**
     * Configuration de la gestion d'erreurs
     */
    setupErrorHandling() {
        // Gestion des erreurs JavaScript
        window.addEventListener('error', (event) => {
            Utils.Debug.log('error', 'Erreur JavaScript:', {
                message: event.message,
                filename: event.filename,
                lineno: event.lineno,
                colno: event.colno,
                error: event.error
            });
        });

        // Gestion des promesses rejetées
        window.addEventListener('unhandledrejection', (event) => {
            Utils.Debug.log('error', 'Promise rejetée:', event.reason);
        });
    }

    /**
     * Configuration de l'accessibilité
     */
    setupAccessibility() {
        // Détection de la navigation au clavier
        Utils.Events.on(document, 'keydown', (e) => {
            if (e.key === 'Tab') {
                Utils.DOM.addClass(this.body, 'keyboard-navigation');
            }
        });

        Utils.Events.on(document, 'mousedown', () => {
            Utils.DOM.removeClass(this.body, 'keyboard-navigation');
        });

        // Annonce pour les lecteurs d'écran
        this.announceToScreenReader('CV d\'Alexandre Rippling chargé', 'polite');
    }

    /**
     * Détection des capacités du navigateur
     */
    detectBrowserCapabilities() {
        const capabilities = {
            intersectionObserver: 'IntersectionObserver' in window,
            webGL: !!window.WebGLRenderingContext,
            touchSupport: 'ontouchstart' in window,
            reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
            darkMode: window.matchMedia('(prefers-color-scheme: dark)').matches
        };

        // Ajout de classes CSS selon les capacités
        Object.entries(capabilities).forEach(([capability, supported]) => {
            Utils.DOM.addClass(this.body, supported ? `supports-${capability}` : `no-${capability}`);
        });

        Utils.Debug.log('info', 'Capacités détectées:', capabilities);
    }

    /**
     * Génération de la section À propos
     */
    async generateAboutSection() {
        const aboutContent = Utils.DOM.select('.about-content');
        if (!aboutContent || !window.PROFILE_DATA) return;

        const profile = window.PROFILE_DATA.personal;
        const strengths = [
            {
                icon: 'fas fa-code',
                title: 'Développement',
                description: 'Création d\'applications web modernes et accessibles'
            },
            {
                icon: 'fas fa-pencil-ruler',
                title: 'Design',
                description: 'Conception graphique et infographie professionnelle'
            },
            {
                icon: 'fas fa-bullhorn',
                title: 'Communication',
                description: 'Stratégie et gestion de contenus digitaux'
            }
        ];

        const aboutHTML = `
            <div class="about-grid">
                <div class="profile-card scroll-reveal">
                    <div class="profile-header">
                        <div class="profile-avatar">
                            ${profile.firstName.charAt(0)}${profile.lastName.charAt(0)}
                        </div>
                        <h3 class="profile-name">${profile.fullName}</h3>
                        <p class="profile-role">${profile.title}</p>
                    </div>
                    <p class="profile-description">
                        ${window.PROFILE_DATA.values.mission}
                    </p>
                    <div class="profile-strengths">
                        ${strengths.map(strength => `
                            <div class="strength-item scroll-reveal-left">
                                <div class="strength-icon">
                                    <i class="${strength.icon}"></i>
                                </div>
                                <div class="strength-text">
                                    <h3>${strength.title}</h3>
                                    <p>${strength.description}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="about-info scroll-reveal-right">
                    <div class="info-card">
                        <div class="info-card-header">
                            <div class="info-card-icon">
                                <i class="fas fa-graduation-cap"></i>
                            </div>
                            <h4 class="info-card-title">Formation Actuelle</h4>
                        </div>
                        <div class="info-card-content">
                            <p><strong>Développeur Fullstack</strong><br>
                            Metz Numérique School - 2024</p>
                        </div>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-card-header">
                            <div class="info-card-icon">
                                <i class="fas fa-briefcase"></i>
                            </div>
                            <h4 class="info-card-title">Expérience Actuelle</h4>
                        </div>
                        <div class="info-card-content">
                            <p><strong>Responsable Communication</strong><br>
                            CASI Lorraine - 2023 à aujourd'hui</p>
                        </div>
                    </div>
                </div>
            </div>
        `;

        aboutContent.innerHTML = aboutHTML;
    }

    /**
     * Génération de la section Expérience
     */
    async generateExperienceSection() {
        const experienceContent = Utils.DOM.select('.experience-content');
        if (!experienceContent || !window.PROFILE_DATA) return;

        const experiences = window.PROFILE_DATA.experience.slice(0, 4); // Top 4 expériences

        const experienceHTML = `
            <div class="timeline">
                ${experiences.map((exp, index) => `
                    <div class="timeline-item scroll-reveal" style="animation-delay: ${index * 0.1}s">
                        <div class="timeline-marker"></div>
                        <div class="timeline-content">
                            <div class="timeline-header">
                                <h3>${exp.title} ${exp.status === 'current' ? '<span class="timeline-status">En cours</span>' : ''}</h3>
                                <p class="timeline-period">${exp.period.display}</p>
                            </div>
                            <p class="timeline-company">${exp.company}</p>
                            <p class="timeline-description">${exp.description}</p>
                            ${exp.technologies ? `
                                <div class="timeline-skills">
                                    ${exp.technologies.map(tech => `<span class="skill-tag">${tech}</span>`).join('')}
                                </div>
                            ` : ''}
                        </div>
                    </div>
                `).join('')}
            </div>
        `;

        experienceContent.innerHTML = experienceHTML;
    }

    /**
     * Génération de la section Compétences
     */
    async generateSkillsSection() {
        const skillsContent = Utils.DOM.select('.skills-content');
        if (!skillsContent || !window.PROFILE_DATA) return;

        const skills = window.PROFILE_DATA.competences || {
            frontend: [
                { nom: "HTML5/CSS3", niveau: 85 },
                { nom: "JavaScript", niveau: 80 },
                { nom: "React", niveau: 75 },
                { nom: "Responsive Design", niveau: 90 }
            ],
            backend: [
                { nom: "PHP", niveau: 75 },
                { nom: "Node.js", niveau: 70 },
                { nom: "MySQL", niveau: 75 },
                { nom: "API REST", niveau: 80 }
            ],
            outils: [
                { nom: "Git/GitHub", niveau: 85 },
                { nom: "VS Code", niveau: 90 },
                { nom: "Figma", niveau: 80 }
            ]
        };

        const skillsHTML = `
            <div class="skills-grid">
                ${Object.entries(skills).map(([category, categorySkills], index) => `
                    <div class="skills-category scroll-reveal" style="animation-delay: ${index * 0.2}s">
                        <div class="category-header">
                            <i class="fas fa-${category === 'frontend' ? 'laptop-code' : category === 'backend' ? 'server' : 'tools'}"></i>
                            <h3>${category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                        </div>
                        <div class="skills-list">
                            ${categorySkills.map((skill, skillIndex) => `
                                <div class="skill-item" style="animation-delay: ${(index * 0.2) + (skillIndex * 0.1)}s">
                                    <div class="skill-info">
                                        <span class="skill-name">${skill.nom}</span>
                                        <span class="skill-level">${skill.niveau}%</span>
                                    </div>
                                    <div class="skill-bar">
                                        <div class="skill-progress" style="width: ${skill.niveau}%" data-progress="${skill.niveau}"></div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        `;

        skillsContent.innerHTML = skillsHTML;
    }

    /**
     * Génération de la section Projets
     */
    async generateProjectsSection() {
        const projectsContent = Utils.DOM.select('.projects-content');
        if (!projectsContent || !window.PROFILE_DATA) return;

        const projects = window.PROFILE_DATA.projets || [];

        const projectsHTML = `
            <div class="projects-grid">
                ${projects.map((project, index) => `
                    <div class="project-card scroll-reveal" style="animation-delay: ${index * 0.1}s" data-project="${project.id}">
                        <div class="project-image">
                            <div class="project-image-placeholder">
                                <i class="fas fa-${project.type === 'Application Web' ? 'globe' : project.type === 'Backend API' ? 'server' : 'code'}"></i>
                            </div>
                            <div class="project-overlay">
                                <div class="project-overlay-content">
                                    <h3>${project.titre}</h3>
                                    <p>${project.description.substring(0, 100)}...</p>
                                    <button class="project-cta">
                                        <i class="fas fa-eye"></i>
                                        <span>Voir les détails</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="project-content">
                            <div class="project-header">
                                <h3 class="project-title">${project.titre}</h3>
                                <p class="project-subtitle">${project.type}</p>
                            </div>
                            <p class="project-description">${project.description}</p>
                            <div class="project-technologies">
                                ${project.technologies.map(tech => `<span class="tech-tag"><span>${tech}</span></span>`).join('')}
                            </div>
                            <div class="project-actions">
                                ${project.liens.demo ? `<a href="${project.liens.demo}" class="project-link" target="_blank"><i class="fas fa-external-link-alt"></i><span>Démo</span></a>` : ''}
                                ${project.liens.github ? `<a href="${project.liens.github}" class="project-link" target="_blank"><i class="fab fa-github"></i><span>Code</span></a>` : ''}
                            </div>
                        </div>
                        <div class="project-status ${project.statut.toLowerCase().replace(' ', '-')}">${project.statut}</div>
                    </div>
                `).join('')}
            </div>
        `;

        projectsContent.innerHTML = projectsHTML;
    }

    /**
     * Génération de la section Contact
     */
    async generateContactSection() {
        const contactContent = Utils.DOM.select('.contact-content');
        if (!contactContent || !window.PROFILE_DATA) return;

        const profile = window.PROFILE_DATA.personal;

        const contactHTML = `
            <div class="contact-info scroll-reveal-left">
                <div class="contact-intro">
                    <h3>Travaillons ensemble</h3>
                    <p>Vous avez un projet ou une opportunité à discuter ? Je serais ravi d'échanger avec vous pour voir comment je peux vous accompagner.</p>
                </div>
                
                <div class="contact-details">
                    <div class="contact-item" data-contact-type="email">
                        <div class="contact-item-header">
                            <div class="contact-icon">
                                <i class="fas fa-envelope"></i>
                            </div>
                            <div class="contact-item-content">
                                <h4>Email</h4>
                                <p>Écrivez-moi directement</p>
                            </div>
                        </div>
                        <div class="contact-item-value">
                            <a href="mailto:${profile.contact.email}">${profile.contact.email}</a>
                        </div>
                    </div>
                    
                    <div class="contact-item" data-contact-type="phone">
                        <div class="contact-item-header">
                            <div class="contact-icon">
                                <i class="fas fa-phone"></i>
                            </div>
                            <div class="contact-item-content">
                                <h4>Téléphone</h4>
                                <p>Appelons-nous</p>
                            </div>
                        </div>
                        <div class="contact-item-value">
                            <a href="tel:${profile.contact.phone}">${profile.contact.phone}</a>
                        </div>
                    </div>
                    
                    <div class="contact-item" data-contact-type="location">
                        <div class="contact-item-header">
                            <div class="contact-icon">
                                <i class="fas fa-map-marker-alt"></i>
                            </div>
                            <div class="contact-item-content">
                                <h4>Localisation</h4>
                                <p>Où me trouver</p>
                            </div>
                        </div>
                        <div class="contact-item-value">
                            ${profile.location.city}, ${profile.location.region}
                        </div>
                    </div>
                </div>
                
                <div class="contact-social">
                    <h4>Réseaux sociaux</h4>
                    <div class="social-links">
                        <a href="${profile.links.linkedin}" class="social-link linkedin" target="_blank" aria-label="LinkedIn">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                        <a href="${profile.links.github}" class="social-link github" target="_blank" aria-label="GitHub">
                            <i class="fab fa-github"></i>
                        </a>
                        <a href="${profile.links.website}" class="social-link website" target="_blank" aria-label="Site web">
                            <i class="fas fa-globe"></i>
                        </a>
                        <a href="mailto:${profile.contact.email}" class="social-link email" aria-label="Email">
                            <i class="fas fa-envelope"></i>
                        </a>
                    </div>
                </div>
                
                <div class="contact-availability">
                    <div class="availability-status">
                        <div class="availability-indicator"></div>
                        <span>Disponible pour de nouveaux projets</span>
                    </div>
                    <p class="availability-text">
                        Actuellement en formation développeur fullstack, je recherche des opportunités à partir de septembre 2025.
                    </p>
                </div>
            </div>
            
            <div class="contact-form scroll-reveal-right">
                <div class="form-header">
                    <h3>Envoyez-moi un message</h3>
                    <p>Remplissez le formulaire ci-dessous et je vous répondrai rapidement.</p>
                </div>
                
                <form id="contact-form" class="form" novalidate>
                    <div class="form-group">
                        <label for="contact-name" class="form-label">Nom complet *</label>
                        <input type="text" id="contact-name" name="name" class="form-input" placeholder="Votre nom complet" required>
                        <div class="form-error">
                            <i class="fas fa-exclamation-triangle"></i>
                            <span>Veuillez entrer votre nom</span>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="contact-email" class="form-label">Email *</label>
                        <input type="email" id="contact-email" name="email" class="form-input" placeholder="votre@email.com" required>
                        <div class="form-error">
                            <i class="fas fa-exclamation-triangle"></i>
                            <span>Veuillez entrer un email valide</span>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="contact-subject" class="form-label">Sujet</label>
                        <input type="text" id="contact-subject" name="subject" class="form-input" placeholder="Sujet de votre message">
                    </div>
                    
                    <div class="form-group">
                        <label for="contact-message" class="form-label">Message *</label>
                        <textarea id="contact-message" name="message" class="form-textarea" placeholder="Votre message..." required></textarea>
                        <div class="form-error">
                            <i class="fas fa-exclamation-triangle"></i>
                            <span>Veuillez entrer votre message</span>
                        </div>
                    </div>
                    
                    <button type="submit" class="form-submit">
                        <span class="submit-text">Envoyer le message</span>
                        <i class="fas fa-paper-plane"></i>
                    </button>
                    
                    <div class="form-message" role="alert">
                        <i class="fas fa-check-circle"></i>
                        <span>Message envoyé avec succès !</span>
                    </div>
                </form>
            </div>
        `;

        contactContent.innerHTML = contactHTML;
    }

    /**
     * Configuration du formulaire de contact
     */
    setupContactForm() {
        const form = Utils.DOM.select('#contact-form');
        if (!form) return;

        Utils.Events.on(form, 'submit', async (e) => {
            e.preventDefault();
            await this.handleFormSubmit(form);
        });

        // Validation en temps réel
        const inputs = form.querySelectorAll('.form-input, .form-textarea');
        inputs.forEach(input => {
            Utils.Events.on(input, 'blur', () => this.validateField(input));
            Utils.Events.on(input, 'input', Utils.Performance.debounce(() => {
                this.validateField(input);
            }, 300));
        });
    }

    /**
     * Validation d'un champ de formulaire
     * @param {Element} field - Champ à valider
     */
    validateField(field) {
        const group = field.closest('.form-group');
        const value = field.value.trim();
        let isValid = true;

        // Validation selon le type de champ
        switch (field.type) {
            case 'email':
                isValid = Utils.Validation.isValidEmail(value);
                break;
            case 'text':
                isValid = field.required ? Utils.Validation.isRequired(value) : true;
                break;
            default:
                isValid = field.required ? Utils.Validation.isRequired(value) : true;
        }

        // Mise à jour des classes CSS
        if (isValid) {
            Utils.DOM.removeClass(group, 'error');
            Utils.DOM.addClass(group, 'success');
        } else {
            Utils.DOM.removeClass(group, 'success');
            Utils.DOM.addClass(group, 'error');
        }

        return isValid;
    }

    /**
     * Soumission du formulaire de contact
     * @param {Element} form - Formulaire
     */
    async handleFormSubmit(form) {
        const submitBtn = form.querySelector('.form-submit');
        const message = form.querySelector('.form-message');
        
        // Validation complète
        const inputs = form.querySelectorAll('.form-input[required], .form-textarea[required]');
        let isFormValid = true;
        
        inputs.forEach(input => {
            if (!this.validateField(input)) {
                isFormValid = false;
            }
        });

        if (!isFormValid) {
            this.showFormMessage(message, 'error', 'Veuillez corriger les erreurs dans le formulaire.');
            return;
        }

        try {
            // État de chargement
            Utils.DOM.addClass(submitBtn, 'loading');
            
            // Simulation d'envoi (remplacer par vraie logique)
            await this.delay(2000);
            
            // Succès
            this.showFormMessage(message, 'success', 'Message envoyé avec succès ! Je vous répondrai rapidement.');
            form.reset();
            
            // Nettoyer les états de validation
            const groups = form.querySelectorAll('.form-group');
            groups.forEach(group => {
                Utils.DOM.removeClass(group, ['error', 'success']);
            });
            
        } catch (error) {
            Utils.Debug.log('error', 'Erreur d\'envoi du formulaire:', error);
            this.showFormMessage(message, 'error', 'Erreur d\'envoi. Veuillez réessayer ou me contacter directement.');
        } finally {
            Utils.DOM.removeClass(submitBtn, 'loading');
        }
    }

    /**
     * Affichage d'un message de formulaire
     * @param {Element} messageEl - Élément de message
     * @param {string} type - Type de message (success/error)
     * @param {string} text - Texte du message
     */
    showFormMessage(messageEl, type, text) {
        messageEl.className = `form-message ${type}`;
        messageEl.querySelector('span').textContent = text;
        Utils.DOM.addClass(messageEl, 'show');
        
        // Masquer après 5 secondes
        setTimeout(() => {
            Utils.DOM.removeClass(messageEl, 'show');
        }, 5000);
    }

    /**
     * Configuration des interactions des projets
     */
    setupProjectInteractions() {
        // Gestion des clics sur les cartes de projet
        Utils.Events.delegate(document, '.project-card', 'click', (e) => {
            const card = e.currentTarget;
            const projectId = card.dataset.project;
            this.showProjectModal(projectId);
        });
    }

    /**
     * Affichage de la modal de projet
     * @param {string} projectId - ID du projet
     */
    showProjectModal(projectId) {
        // Cette fonctionnalité sera étendue dans les modules de projets
        Utils.Debug.log('info', `Ouverture du projet: ${projectId}`);
        
        // Pour l'instant, simple console log
        // TODO: Implémenter la modal de projet détaillée
    }

    /**
     * Configuration des animations de compétences
     */
    setupSkillsAnimations() {
        // Animation des barres de progression au scroll
        const skillBars = Utils.DOM.selectAll('.skill-progress');
        
        const animateSkillBars = Utils.Performance.createScrollObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progressBar = entry.target;
                    const progress = progressBar.dataset.progress;
                    
                    // Animation de la barre
                    setTimeout(() => {
                        progressBar.style.width = `${progress}%`;
                    }, 100);
                }
            });
        });

        skillBars.forEach(bar => {
            bar.style.width = '0%';
            animateSkillBars.observe(bar);
        });
    }

    /**
     * Configuration de la gestion du redimensionnement
     */
    setupResizeHandling() {
        Utils.Events.on(window, 'resize', Utils.Performance.debounce(() => {
            // Recalcul des positions pour la navigation
            if (this.managers.navigation) {
                this.managers.navigation.updateActiveLink();
            }
            
            // Mise à jour des propriétés CSS
            this.setupCSSProperties();
            
        }, 250));
    }

    /**
     * Configuration des raccourcis clavier
     */
    setupKeyboardShortcuts() {
        Utils.Events.on(document, 'keydown', (e) => {
            // Raccourcis avec Ctrl
            if (e.ctrlKey || e.metaKey) {
                switch (e.key) {
                    case 'k':
                        e.preventDefault();
                        // Focus sur la navigation
                        const firstNavLink = Utils.DOM.select('.nav-link');
                        if (firstNavLink) firstNavLink.focus();
                        break;
                    case 'l':
                        e.preventDefault();
                        // Toggle du thème
                        if (this.managers.theme) {
                            this.managers.theme.toggleTheme();
                        }
                        break;
                }
            }
        });
    }

    /**
     * Finalisation du chargement et suppression du loader
     */
    async finishLoading() {
        Utils.Debug.log('info', 'Finalisation du chargement...');
        
        // Suppression de la classe loading du body
        Utils.DOM.removeClass(this.body, 'loading');
        
        // Animation de disparition du loader
        if (this.loader) {
            await Utils.Animation.fadeOut(this.loader, 500);
            Utils.DOM.addClass(this.loader, 'hidden');
        }
        
        // Marquer l'application comme chargée
        this.isLoading = false;
        this.isInitialized = true;
        
        // Déclenchement d'événement d'application prête
        Utils.Events.trigger(document, 'appReady');
        
        // Annonce pour les lecteurs d'écran
        this.announceToScreenReader('Application chargée et prête à l\'utilisation', 'assertive');
        
        Utils.Debug.log('info', '🎉 Application entièrement chargée et opérationnelle');
    }

    /**
     * Gestion des erreurs d'initialisation
     * @param {Error} error - Erreur survenue
     */
    handleInitError(error) {
        Utils.Debug.log('error', 'Erreur critique d\'initialisation:', error);
        
        // Suppression du loader même en cas d'erreur
        if (this.loader) {
            this.loader.innerHTML = `
                <div class="loader-content">
                    <div style="color: var(--color-accent-quaternary); text-align: center;">
                        <i class="fas fa-exclamation-triangle" style="font-size: 2rem; margin-bottom: 1rem;"></i>
                        <p>Erreur de chargement</p>
                        <button onclick="location.reload()" style="margin-top: 1rem; padding: 0.5rem 1rem; background: var(--color-accent-primary); color: white; border: none; border-radius: 0.5rem; cursor: pointer;">
                            Recharger la page
                        </button>
                    </div>
                </div>
            `;
        }
    }

    /**
     * Annonce pour les lecteurs d'écran
     * @param {string} message - Message à annoncer
     * @param {string} priority - Priorité (polite/assertive)
     */
    announceToScreenReader(message, priority = 'polite') {
        const announcement = Utils.DOM.create('div', {
            'aria-live': priority,
            'aria-atomic': 'true',
            class: 'sr-only'
        }, message);
        
        document.body.appendChild(announcement);
        
        // Nettoyer après l'annonce
        setTimeout(() => {
            if (announcement.parentNode) {
                document.body.removeChild(announcement);
            }
        }, 1000);
    }

    /**
     * Utilitaire de délai
     * @param {number} ms - Délai en millisecondes
     * @returns {Promise} Promise de délai
     */
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    /**
     * Nettoyage et destruction de l'application
     */
    destroy() {
        // Destruction des gestionnaires
        Object.values(this.managers).forEach(manager => {
            if (manager && typeof manager.destroy === 'function') {
                manager.destroy();
            }
        });

        // Nettoyage des propriétés CSS
        document.documentElement.style.removeProperty('--vh');
        document.documentElement.style.removeProperty('--mouse-x');
        document.documentElement.style.removeProperty('--mouse-y');
        document.documentElement.style.removeProperty('--scroll-y');

        // Reset de l'état
        this.isInitialized = false;
        this.managers = {};

        Utils.Debug.log('info', 'Application détruite');
    }
}

// Initialisation automatique au chargement du DOM
document.addEventListener('DOMContentLoaded', () => {
    Utils.Debug.log('info', '🌟 DOM chargé - Démarrage de l\'application CV');
    
    // Création et initialisation de l'application
    window.cvApp = new CVApplication();
    window.cvApp.init();
});

// Gestion des états de navigation pour le bouton de retour du navigateur
window.addEventListener('popstate', (event) => {
    if (window.cvApp && window.cvApp.managers.navigation) {
        const section = event.state?.section || 'hero';
        window.cvApp.managers.navigation.navigateToSection(section, { updateUrl: false });
    }
});

// Export pour utilisation globale
window.CVApplication = CVApplication;

// Export pour modules ES6
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CVApplication;
}

Utils.Debug.log('info', '✅ Application CV prête au démarrage');