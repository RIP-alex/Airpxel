/**
 * Utilitaires DOM - Manipulation et sélection d'éléments
 */
const DOM = {
    /**
     * Sélecteur universel avec support des sélecteurs complexes
     * @param {string} selector - Sélecteur CSS
     * @param {Element} context - Contexte de recherche (défaut: document)
     * @returns {Element|null} Premier élément trouvé
     */
    select(selector, context = document) {
        return context.querySelector(selector);
    },

    /**
     * Sélecteur multiple
     * @param {string} selector - Sélecteur CSS
     * @param {Element} context - Contexte de recherche
     * @returns {NodeList} Liste des éléments trouvés
     */
    selectAll(selector, context = document) {
        return context.querySelectorAll(selector);
    },

    /**
     * Vérification d'existence d'un élément
     * @param {string} selector - Sélecteur CSS
     * @returns {boolean} True si l'élément existe
     */
    exists(selector) {
        return this.select(selector) !== null;
    },

    /**
     * Création d'élément avec attributs et contenu
     * @param {string} tag - Nom de la balise
     * @param {Object} attributes - Attributs HTML
     * @param {string} content - Contenu textuel
     * @returns {Element} Nouvel élément créé
     */
    create(tag, attributes = {}, content = '') {
        const element = document.createElement(tag);
        
        Object.entries(attributes).forEach(([key, value]) => {
            if (key === 'class') {
                element.className = value;
            } else if (key === 'data') {
                Object.entries(value).forEach(([dataKey, dataValue]) => {
                    element.dataset[dataKey] = dataValue;
                });
            } else {
                element.setAttribute(key, value);
            }
        });
        
        if (content) {
            element.textContent = content;
        }
        
        return element;
    },

    /**
     * Ajout/suppression de classes avec support multiple
     * @param {Element|string} element - Élément ou sélecteur
     * @param {string|Array} classes - Classe(s) à ajouter
     */
    addClass(element, classes) {
        const el = typeof element === 'string' ? this.select(element) : element;
        if (!el) return;
        
        const classList = Array.isArray(classes) ? classes : [classes];
        el.classList.add(...classList);
    },

    removeClass(element, classes) {
        const el = typeof element === 'string' ? this.select(element) : element;
        if (!el) return;
        
        const classList = Array.isArray(classes) ? classes : [classes];
        el.classList.remove(...classList);
    },

    toggleClass(element, classes) {
        const el = typeof element === 'string' ? this.select(element) : element;
        if (!el) return;
        
        const classList = Array.isArray(classes) ? classes : [classes];
        classList.forEach(cls => el.classList.toggle(cls));
    },

    /**
     * Vérification de classe
     * @param {Element|string} element - Élément ou sélecteur
     * @param {string} className - Nom de la classe
     * @returns {boolean} True si la classe existe
     */
    hasClass(element, className) {
        const el = typeof element === 'string' ? this.select(element) : element;
        return el ? el.classList.contains(className) : false;
    }
};

/**
 * Utilitaires d'événements - Gestion avancée des événements
 */
const Events = {
    /**
     * Ajout d'écouteur d'événement avec options avancées
     * @param {Element|string} element - Élément ou sélecteur
     * @param {string} event - Type d'événement
     * @param {Function} handler - Gestionnaire d'événement
     * @param {Object} options - Options d'écoute
     */
    on(element, event, handler, options = {}) {
        const el = typeof element === 'string' ? DOM.select(element) : element;
        if (!el) return;
        
        el.addEventListener(event, handler, options);
    },

    /**
     * Suppression d'écouteur d'événement
     */
    off(element, event, handler) {
        const el = typeof element === 'string' ? DOM.select(element) : element;
        if (!el) return;
        
        el.removeEventListener(event, handler);
    },

    /**
     * Événement unique (se déclenche une seule fois)
     */
    once(element, event, handler) {
        this.on(element, event, handler, { once: true });
    },

    /**
     * Délégation d'événement
     * @param {Element|string} parent - Élément parent
     * @param {string} selector - Sélecteur des enfants cibles
     * @param {string} event - Type d'événement
     * @param {Function} handler - Gestionnaire
     */
    delegate(parent, selector, event, handler) {
        this.on(parent, event, (e) => {
            if (e.target.matches(selector)) {
                handler(e);
            }
        });
    },

    /**
     * Déclenchement d'événement personnalisé
     * @param {Element|string} element - Élément cible
     * @param {string} eventName - Nom de l'événement
     * @param {Object} detail - Données de l'événement
     */
    trigger(element, eventName, detail = {}) {
        const el = typeof element === 'string' ? DOM.select(element) : element;
        if (!el) return;
        
        const event = new CustomEvent(eventName, { detail, bubbles: true });
        el.dispatchEvent(event);
    }
};

/**
 * Utilitaires d'animation et transitions
 */
const Animation = {
    /**
     * Animation de transition fluide
     * @param {Element} element - Élément à animer
     * @param {Object} properties - Propriétés CSS à animer
     * @param {number} duration - Durée en ms
     * @returns {Promise} Promise résolue à la fin de l'animation
     */
    transition(element, properties, duration = 300) {
        return new Promise((resolve) => {
            const originalTransition = element.style.transition;
            element.style.transition = `all ${duration}ms ease`;
            
            Object.entries(properties).forEach(([prop, value]) => {
                element.style[prop] = value;
            });
            
            setTimeout(() => {
                element.style.transition = originalTransition;
                resolve();
            }, duration);
        });
    },

    /**
     * Animation de fadeIn
     * @param {Element} element - Élément à animer
     * @param {number} duration - Durée
     * @returns {Promise} Promise d'animation
     */
    fadeIn(element, duration = 300) {
        element.style.opacity = '0';
        element.style.display = 'block';
        
        return this.transition(element, { opacity: '1' }, duration);
    },

    /**
     * Animation de fadeOut
     */
    fadeOut(element, duration = 300) {
        return this.transition(element, { opacity: '0' }, duration)
            .then(() => {
                element.style.display = 'none';
            });
    },

    /**
     * Animation de slideDown
     */
    slideDown(element, duration = 300) {
        element.style.height = '0';
        element.style.overflow = 'hidden';
        element.style.display = 'block';
        
        const targetHeight = element.scrollHeight + 'px';
        return this.transition(element, { height: targetHeight }, duration)
            .then(() => {
                element.style.height = '';
                element.style.overflow = '';
            });
    },

    /**
     * Animation de slideUp
     */
    slideUp(element, duration = 300) {
        const currentHeight = element.offsetHeight + 'px';
        element.style.height = currentHeight;
        element.style.overflow = 'hidden';
        
        return this.transition(element, { height: '0' }, duration)
            .then(() => {
                element.style.display = 'none';
                element.style.height = '';
                element.style.overflow = '';
            });
    }
};

/**
 * Utilitaires de validation - Validation de formulaires et données
 */
const Validation = {
    /**
     * Validation d'email
     * @param {string} email - Email à valider
     * @returns {boolean} True si valide
     */
    isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    },

    /**
     * Validation de téléphone français
     * @param {string} phone - Numéro à valider
     * @returns {boolean} True si valide
     */
    isValidPhone(phone) {
        const regex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
        return regex.test(phone.replace(/\s/g, ''));
    },

    /**
     * Validation de longueur de texte
     * @param {string} text - Texte à valider
     * @param {number} min - Longueur minimale
     * @param {number} max - Longueur maximale
     * @returns {boolean} True si valide
     */
    isValidLength(text, min = 1, max = 500) {
        const length = text.trim().length;
        return length >= min && length <= max;
    },

    /**
     * Validation requise (champ non vide)
     * @param {string} value - Valeur à valider
     * @returns {boolean} True si non vide
     */
    isRequired(value) {
        return value && value.trim().length > 0;
    }
};

/**
 * Utilitaires de formatage - Formatage de données
 */
const Format = {
    /**
     * Formatage de date en français
     * @param {Date|string} date - Date à formater
     * @param {Object} options - Options de formatage
     * @returns {string} Date formatée
     */
    date(date, options = { year: 'numeric', month: 'long', day: 'numeric' }) {
        const dateObj = typeof date === 'string' ? new Date(date) : date;
        return dateObj.toLocaleDateString('fr-FR', options);
    },

    /**
     * Formatage de numéro de téléphone
     * @param {string} phone - Numéro brut
     * @returns {string} Numéro formaté
     */
    phone(phone) {
        const cleaned = phone.replace(/\D/g, '');
        if (cleaned.length === 10) {
            return cleaned.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, '$1 $2 $3 $4 $5');
        }
        return phone;
    },

    /**
     * Capitalisation de la première lettre
     * @param {string} str - Chaîne à capitaliser
     * @returns {string} Chaîne capitalisée
     */
    capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    },

    /**
     * Truncature de texte avec ellipsis
     * @param {string} text - Texte à tronquer
     * @param {number} length - Longueur maximale
     * @returns {string} Texte tronqué
     */
    truncate(text, length = 100) {
        return text.length > length ? text.substring(0, length) + '...' : text;
    }
};

/**
 * Utilitaires de stockage - LocalStorage et SessionStorage
 */
const Storage = {
    /**
     * Sauvegarde en localStorage avec sérialisation JSON
     * @param {string} key - Clé de stockage
     * @param {any} value - Valeur à stocker
     */
    set(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.warn('Erreur de sauvegarde localStorage:', error);
        }
    },

    /**
     * Récupération depuis localStorage avec désérialisation
     * @param {string} key - Clé de stockage
     * @param {any} defaultValue - Valeur par défaut
     * @returns {any} Valeur récupérée
     */
    get(key, defaultValue = null) {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : defaultValue;
        } catch (error) {
            console.warn('Erreur de lecture localStorage:', error);
            return defaultValue;
        }
    },

    /**
     * Suppression d'une clé
     * @param {string} key - Clé à supprimer
     */
    remove(key) {
        try {
            localStorage.removeItem(key);
        } catch (error) {
            console.warn('Erreur de suppression localStorage:', error);
        }
    },

    /**
     * Nettoyage complet
     */
    clear() {
        try {
            localStorage.clear();
        } catch (error) {
            console.warn('Erreur de nettoyage localStorage:', error);
        }
    },

    /**
     * Stockage temporaire (sessionStorage)
     */
    session: {
        set(key, value) {
            try {
                sessionStorage.setItem(key, JSON.stringify(value));
            } catch (error) {
                console.warn('Erreur sessionStorage:', error);
            }
        },

        get(key, defaultValue = null) {
            try {
                const item = sessionStorage.getItem(key);
                return item ? JSON.parse(item) : defaultValue;
            } catch (error) {
                console.warn('Erreur sessionStorage:', error);
                return defaultValue;
            }
        },

        remove(key) {
            try {
                sessionStorage.removeItem(key);
            } catch (error) {
                console.warn('Erreur sessionStorage:', error);
            }
        }
    }
};

/**
 * Utilitaires de performance et optimisation
 */
const Performance = {
    /**
     * Debounce - Limite la fréquence d'exécution d'une fonction
     * @param {Function} func - Fonction à débouncer
     * @param {number} delay - Délai en ms
     * @returns {Function} Fonction debouncée
     */
    debounce(func, delay = 300) {
        let timeoutId;
        return function (...args) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func.apply(this, args), delay);
        };
    },

    /**
     * Throttle - Limite le nombre d'exécutions par période
     * @param {Function} func - Fonction à throttler
     * @param {number} interval - Intervalle en ms
     * @returns {Function} Fonction throttlée
     */
    throttle(func, interval = 100) {
        let lastExecution = 0;
        return function (...args) {
            const now = Date.now();
            if (now - lastExecution >= interval) {
                lastExecution = now;
                func.apply(this, args);
            }
        };
    },

    /**
     * Intersection Observer pour animations au scroll
     * @param {Function} callback - Callback d'intersection
     * @param {Object} options - Options d'observation
     * @returns {IntersectionObserver} Observer configuré
     */
    createScrollObserver(callback, options = {}) {
        const defaultOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        return new IntersectionObserver(callback, { ...defaultOptions, ...options });
    }
};

/**
 * Utilitaires réseau - Requêtes HTTP et gestion d'erreurs
 */
const Network = {
    /**
     * Requête HTTP simplifiée avec gestion d'erreurs
     * @param {string} url - URL cible
     * @param {Object} options - Options de requête
     * @returns {Promise} Réponse de la requête
     */
    async request(url, options = {}) {
        const defaultOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        };

        try {
            const response = await fetch(url, { ...defaultOptions, ...options });
            
            if (!response.ok) {
                throw new Error(`Erreur HTTP: ${response.status} ${response.statusText}`);
            }

            const contentType = response.headers.get('content-type');
            if (contentType && contentType.includes('application/json')) {
                return await response.json();
            }
            
            return await response.text();
        } catch (error) {
            console.error('Erreur de requête:', error);
            throw error;
        }
    },

    /**
     * Requête GET simplifiée
     * @param {string} url - URL cible
     * @returns {Promise} Données récupérées
     */
    get(url) {
        return this.request(url);
    },

    /**
     * Requête POST simplifiée
     * @param {string} url - URL cible
     * @param {Object} data - Données à envoyer
     * @returns {Promise} Réponse du serveur
     */
    post(url, data) {
        return this.request(url, {
            method: 'POST',
            body: JSON.stringify(data)
        });
    }
};

/**
 * Utilitaires de développement et debug
 */
const Debug = {
    /**
     * Logger avec niveaux
     * @param {string} level - Niveau de log (info, warn, error)
     * @param {string} message - Message
     * @param {any} data - Données additionnelles
     */
    log(level, message, data = null) {
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            const timestamp = new Date().toISOString();
            const logMessage = `[${timestamp}] [${level.toUpperCase()}] ${message}`;
            
            switch (level) {
                case 'error':
                    console.error(logMessage, data);
                    break;
                case 'warn':
                    console.warn(logMessage, data);
                    break;
                default:
                    console.log(logMessage, data);
            }
        }
    },

    /**
     * Mesure de performance
     * @param {string} label - Label de la mesure
     * @param {Function} fn - Fonction à mesurer
     * @returns {any} Résultat de la fonction
     */
    async measure(label, fn) {
        const start = performance.now();
        const result = await fn();
        const end = performance.now();
        
        this.log('info', `Performance [${label}]: ${(end - start).toFixed(2)}ms`);
        return result;
    }
};

// Export des utilitaires pour utilisation globale
window.Utils = {
    DOM,
    Events,
    Animation,
    Validation,
    Format,
    Storage,
    Performance,
    Network,
    Debug
};

// Export pour modules ES6 si supporté
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { DOM, Events, Animation, Validation, Format, Storage, Performance, Network, Debug };
}

// Debug log pour confirmer le chargement
console.log('✅ Utilitaires CV chargés avec succès');