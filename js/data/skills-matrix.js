/* ===== MATRICE DE COMPÉTENCES ALEXANDRE ===== */
/* Base de données des capacités techniques et transversales */

const SkillsMatrix = {
  technical: {
    frontend: [
      { name: "HTML5/CSS3", level: 85, category: "web", trend: "stable" },
      { name: "JavaScript ES6+", level: 80, category: "language", trend: "rising" },
      { name: "React", level: 75, category: "framework", trend: "rising" },
      { name: "Responsive Design", level: 90, category: "ux", trend: "stable" }
    ],
    backend: [
      { name: "PHP", level: 70, category: "language", trend: "stable" },
      { name: "Node.js", level: 65, category: "runtime", trend: "rising" },
      { name: "SQL/NoSQL", level: 75, category: "database", trend: "stable" },
      { name: "API REST", level: 80, category: "architecture", trend: "stable" }
    ],
    tools: [
      { name: "Git/GitHub", level: 85, category: "versioning", trend: "stable" },
      { name: "VS Code", level: 90, category: "ide", trend: "stable" },
      { name: "Docker", level: 60, category: "devops", trend: "learning" }
    ]
  },

  creative: [
    { name: "Communication Digitale", level: 95, category: "marketing", trend: "expert" },
    { name: "Infographie", level: 90, category: "design", trend: "stable" },
    { name: "Storytelling", level: 85, category: "content", trend: "rising" },
    { name: "UX/UI Design", level: 80, category: "design", trend: "rising" }
  ],

  transversal: [
    { name: "Résolution Problèmes", level: 95, category: "cognitive", trend: "core" },
    { name: "Adaptation Rapide", level: 90, category: "behavioral", trend: "core" },
    { name: "Leadership Technique", level: 75, category: "management", trend: "rising" },
    { name: "Pédagogie", level: 85, category: "social", trend: "stable" }
  ],

  uniqueValue: "Vision 360° : Mécanique → Design → Code = Solutions holistiques"
};