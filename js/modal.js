/**
 * modal.js - Gestion de la fenêtre modale pour les projets
 * Ce module permet d'afficher une fenêtre modale avec les détails d'un projet
 * lorsque l'utilisateur clique sur "Voir le projet"
 */

// Données des projets
const projectsData = {
    'Projet-Bugtracker': {
        title: 'Gestion de tickets (BugTracker)',
        tags: ['C#', 'ASP.NET Core', 'SQL Server', 'Bootstrap'],
        images: [
            'Projet-Bugtracker/Bugtracker-connexion.png',
            'Projet-Bugtracker/Bugtracker-session-admin.png',
            'Projet-Bugtracker/Bugtracker-session-user.png',
            'Projet-Bugtracker/Bugtracker-edit-admin.png',
            'Projet-Bugtracker/Bugtracker-listing-user.png'
        ],
        description: 'Un système de gestion de tickets conçu pour les entreprises afin de suivre et résoudre efficacement les problèmes signalés par les employés ou les clients. Ce projet permet de centraliser la gestion des tâches, d\'attribuer des responsabilités et de suivre l\'état d\'avancement des tickets.\n\nEn tant que développeur full-stack, j\'étais responsable de la conception et de l\'implémentation des fonctionnalités principales, de la gestion des bases de données, et de l\'intégration des contrôleurs et des vues Razor Pages. J\'ai également travaillé sur la sécurisation des accès et l\'optimisation des performances.',
        features: [
            'Gestion des utilisateurs (création, modification, suppression et gestion des rôles)',
            'Authentification et autorisation avec système de connexion sécurisé',
            'Gestion complète des tickets (création, modification, suppression et suivi)',
            'Filtrage des tickets selon le rôle de l\'utilisateur',
            'Suivi des priorités (Faible, Moyen, Urgent, Critique)',
            'Interface utilisateur dynamique adaptée aux rôles',
            'Validation des données pour éviter les doublons'
        ],
        challenges: [
            'Gestion des rôles et des autorisations : Mise en place d\'un système basé sur les sessions',
            'Validation des données : Vérifications côté serveur pour garantir la cohérence',
            'Optimisation des performances : Utilisation de requêtes optimisées avec Entity Framework',
            'Expérience utilisateur : Interface responsive adaptée aux différents appareils'
        ],
        technologies: [
            { name: 'C#', icon: 'fab fa-microsoft' },
            { name: 'ASP.NET Core', icon: 'fab fa-microsoft' },
            { name: 'SQL Server', icon: 'fas fa-database' },
            { name: 'Entity Framework', icon: 'fas fa-database' },
            { name: 'HTML/CSS', icon: 'fab fa-html5' },
            { name: 'Bootstrap', icon: 'fab fa-bootstrap' },
            { name: 'Visual Studio', icon: 'fas fa-code' },
            { name: 'Git', icon: 'fab fa-git-alt' }
        ],
        liveLink: '#', // Remplacez par le lien vers votre démo si disponible
        githubLink: 'https://github.com/rip-alex/GestionTickets' 
    },
    // Ajoutez d'autres projets ici
};

/**
 * Initialise la fonctionnalité de la fenêtre modale pour les projets
 */
function initProjectModal() {
    console.log('Initialisation de la fenêtre modale des projets');
    
    const modal = document.getElementById('project-modal');
    if (!modal) {
        console.warn('Élément project-modal non trouvé');
        return;
    }
    
    const modalOverlay = modal.querySelector('.modal-overlay');
    const modalClose = modal.querySelector('.modal-close');
    const projectLinks = document.querySelectorAll('.project-link');
    
    if (projectLinks.length === 0) {
        console.warn('Aucun lien de projet trouvé');
    } else {
        console.log(`${projectLinks.length} liens de projets trouvés`);
    }
    
    // Fonction pour ouvrir la modale avec les données d'un projet
    function openModal(projectId) {
        if (!projectsData[projectId]) {
            console.error(`Données non trouvées pour le projet: ${projectId}`);
            return;
        }
        
        console.log(`Ouverture de la modale pour le projet: ${projectId}`);
        
        const project = projectsData[projectId];
        
        // Mettre à jour le contenu de la modale
        modal.querySelector('.modal-title').textContent = project.title;
        
        // Mettre à jour les tags
        const tagsContainer = modal.querySelector('.modal-tags');
        tagsContainer.innerHTML = '';
        project.tags.forEach(tag => {
            const tagEl = document.createElement('span');
            tagEl.className = 'project-tag';
            tagEl.textContent = tag;
            tagsContainer.appendChild(tagEl);
        });
        
        // Mettre à jour la galerie d'images
        const mainImage = modal.querySelector('.gallery-main-image');
        mainImage.src = project.images[0];
        mainImage.alt = `Image principale de ${project.title}`;
        
        const thumbsContainer = modal.querySelector('.gallery-thumbs');
        thumbsContainer.innerHTML = '';
        project.images.forEach((img, index) => {
            const thumbEl = document.createElement('div');
            thumbEl.className = `gallery-thumb ${index === 0 ? 'active' : ''}`;
            thumbEl.innerHTML = `<img src="${img}" alt="Image ${index+1}" class="thumb-image">`;
            thumbEl.addEventListener('click', () => {
                // Changer l'image principale lorsqu'on clique sur une miniature
                mainImage.src = img;
                modal.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active'));
                thumbEl.classList.add('active');
            });
            thumbsContainer.appendChild(thumbEl);
        });
        
        // Mettre à jour la description (en respectant les sauts de ligne)
        modal.querySelector('.modal-description p').innerHTML = project.description.replace(/\n/g, '<br>');
        
        // Mettre à jour les fonctionnalités
        const featuresList = modal.querySelector('.features-list');
        featuresList.innerHTML = '';
        project.features.forEach(feature => {
            const featureEl = document.createElement('li');
            featureEl.textContent = feature;
            featuresList.appendChild(featureEl);
        });
        
        // Ajouter les défis si présents
        if (project.challenges && project.challenges.length > 0) {
            // Vérifier si la section défis existe déjà, sinon la créer
            let challengesSection = modal.querySelector('.modal-challenges');
            if (!challengesSection) {
                challengesSection = document.createElement('div');
                challengesSection.className = 'modal-challenges';
                const challengesTitle = document.createElement('h3');
                challengesTitle.textContent = 'Défis et solutions';
                challengesSection.appendChild(challengesTitle);
                
                const challengesList = document.createElement('ul');
                challengesList.className = 'challenges-list';
                challengesSection.appendChild(challengesList);
                
                // Insérer après la section des fonctionnalités
                const featuresSection = modal.querySelector('.modal-features');
                if (featuresSection) {
                    featuresSection.parentNode.insertBefore(challengesSection, featuresSection.nextSibling);
                } else {
                    console.warn('Section des fonctionnalités non trouvée');
                    // Fallback: ajouter à la fin du contenu de la modale
                    modal.querySelector('.modal-content').appendChild(challengesSection);
                }
            }
            
            // Mettre à jour la liste des défis
            const challengesList = modal.querySelector('.challenges-list');
            challengesList.innerHTML = '';
            project.challenges.forEach(challenge => {
                const challengeEl = document.createElement('li');
                challengeEl.textContent = challenge;
                challengesList.appendChild(challengeEl);
            });
        }
        
        // Mettre à jour les technologies
        const techContainer = modal.querySelector('.tech-icons');
        techContainer.innerHTML = '';
        project.technologies.forEach(tech => {
            const techEl = document.createElement('span');
            techEl.className = 'tech-icon';
            techEl.innerHTML = `<i class="${tech.icon}"></i> ${tech.name}`;
            techContainer.appendChild(techEl);
        });
        
        // Mettre à jour les liens
        const liveLink = modal.querySelector('.live-link');
        const githubLink = modal.querySelector('.github-link');
        
        if (project.liveLink) {
            liveLink.href = project.liveLink;
            liveLink.style.display = 'flex';
        } else {
            liveLink.style.display = 'none';
        }
        
        if (project.githubLink) {
            githubLink.href = project.githubLink;
            githubLink.style.display = 'flex';
        } else {
            githubLink.style.display = 'none';
        }
        
        // Ouvrir la modale avec animation
        modal.classList.add('active');
        
        // Désactiver le défilement du body
        document.body.style.overflow = 'hidden';
    }
    
    // Fonction pour fermer la modale
    function closeModal() {
        console.log('Fermeture de la modale');
        modal.classList.remove('active');
        
        // Réactiver le défilement du body
        document.body.style.overflow = '';
    }
    
    // Ajouter les écouteurs d'événements
    projectLinks.forEach(link => {
        const projectId = link.getAttribute('data-project-id');
        if (projectId) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                openModal(projectId);
            });
            console.log(`Écouteur ajouté pour le projet: ${projectId}`);
        } else {
            console.warn('Lien de projet sans attribut data-project-id');
        }
    });
    
    // Fermer la modale quand on clique sur le bouton de fermeture ou sur l'overlay
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    
    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeModal);
    }
    
    // Fermer la modale avec la touche Echap
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

/**
 * Ajoute un nouveau projet aux données existantes
 * @param {string} id - Identifiant unique du projet
 * @param {Object} projectData - Données du projet
 */
function addProject(id, projectData) {
    if (projectsData[id]) {
        console.warn(`Un projet avec l'ID ${id} existe déjà et sera écrasé`);
    }
    
    projectsData[id] = projectData;
    console.log(`Projet ajouté: ${id}`);
}

// Exporter les fonctions
export { initProjectModal, addProject, projectsData };