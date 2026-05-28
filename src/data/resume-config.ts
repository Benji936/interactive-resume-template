import type { ResumeConfig } from './types'
export { getTechColor } from './tech-registry'
export { presets } from './presets'

export const resumeConfig: ResumeConfig = {
  // ===== PERSONAL INFO =====
  personal: {
    name: 'Benjamin Sitbon',
    // Auto-detected: just drop your photo or profile image in public/images/ (any .jpg, .png, .webp)
    // You can also set a specific path here to override auto-detection:
    photo: '/images/photo.jpg',
    photoBackEmoji: '', // Shown when clicking the photo (3D flip)
    title: {
      en: 'Fullstack Developer',
      fr: 'Développeur Fullstack',
    },
    subtitle: {
      en: '2 years of experience',
      fr: '2 ans d\'expérience',
    },
    location: 'Geneva, Switzerland',
  },

  // ===== SEO (used in <head> meta tags) =====
  seo: {
    title: 'Benjamin Sitbon — Fullstack Developer',
    description: 'Interactive resume of Benjamin Sitbon, Fullstack Developer specializing in React and TypeScript.',
  },

  // ===== LANGUAGES =====
  languages: {
    default: 'en',
    available: ['en', 'fr'],
    labels: {
      en: 'EN',
      fr: 'FR',
    },
  },

  // ===== CONTACT =====
  contact: [
    { type: 'github', label: 'benjaminsitbon', href: 'https://github.com/Benji936/' },
    { type: 'linkedin', label: 'Benjamin Sitbon', href: 'https://www.linkedin.com/in/benjamin-sitbon-66a389226/' },
    { type: 'email', label: 'benjsit@gmail.com' },
    { type: 'phone', label: '+41 78 955 58 45' },
    { type: 'location', label: 'Geneva, Switzerland' },
  ],

  // ===== SKILLS =====
  skills: [
    {
      title: { en: 'Languages', fr: 'Langues' },
      type: 'languages',
      items: [
        { name: { en: 'French', fr: 'Français' }, level: { en: 'Native', fr: 'Natif' } },
        { name: { en: 'English', fr: 'Anglais' }, level: { en: 'Professional', fr: 'Professionnel' } },
        { name: { en: 'Hebrew', fr: 'Hébreu' }, level: { en: 'Professional', fr: 'Professionnel' } },
      ],
    },
    {
      title: { en: 'Frontend', fr: 'Frontend' },
      type: 'badges',
      items: [
        { name: 'React' },
        { name: 'TypeScript' },
        { name: 'Vue.js' },
      ],
    },
    {
      title: { en: 'Backend', fr: 'Backend' },
      type: 'badges',
      items: [
        { name: 'Node.js' },
        { name: 'Python' },
        { name: 'Django' },
        { name: 'Java' },

      ],
    },
    {
      title: { en: 'Database', fr: 'Base de données' },
      type: 'badges',
      items: [
        { name: 'PostgreSQL' },
      ],
    },
    {
      title: { en: 'DevOps', fr: 'DevOps' },
      type: 'badges',
      items: [
        { name: 'Docker' },
        { name: 'GitHub Actions' },
      ],
    },
    {
      title: { en: 'Methodologies', fr: 'Méthodologies' },
      type: 'text',
      items: [
        { name: { en: 'Agile/Scrum, TDD, Code Review, CI/CD', fr: 'Agile/Scrum, TDD, Code Review, CI/CD' } },
      ],
    },
  ],

  // ===== PROFESSIONAL EXPERIENCES =====
  experiences: [
  {
    id: 'sitco-partners-2',
    company: { en: 'Sitco Partners', fr: 'Sitco Partners' },
    role: { en: 'Full Stack Developer', fr: 'Développeur Full Stack' },
    type: { en: 'Permanent', fr: 'CDI' },
    period: { en: 'Jan 2025 - Present', fr: 'Jan 2025 - Présent' },
    description: {
      en: 'Development and maintenance of internal web applications used daily across the company. Full-stack ownership from Vue.js frontend to Node.js/Python backend and PostgreSQL databases.',
      fr: 'Développement et maintenance d\'applications web internes utilisées quotidiennement. Ownership full-stack du frontend Vue.js au backend Node.js/Python et bases de données PostgreSQL.',
    },
    techs: ['Vue.js', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'Docker'],
    isHighlighted: true,
    details: {
      context: {
        en: 'Internal tooling team within a talent acquisition firm. Close collaboration with partners and business stakeholders to gather requirements and ship tailored solutions.',
        fr: 'Équipe outillage interne au sein d\'un cabinet de recrutement. Collaboration étroite avec les associés pour recueillir les besoins et livrer des solutions sur mesure.',
      },
      tasks: {
        en: [
          'Developed and maintained internal web applications used across the company',
          'Built full-stack features: Vue.js frontend, Node.js and Python backend',
          'Designed and managed PostgreSQL databases for business-critical data',
          'Collaborated with stakeholders to translate business requirements into technical solutions',
          'Improved performance and code quality of the existing codebase',
        ],
        fr: [
          'Développement et maintenance d\'applications web internes utilisées dans toute la société',
          'Développement de fonctionnalités full-stack : frontend Vue.js, backend Node.js et Python',
          'Conception et gestion de bases de données PostgreSQL pour des données métier critiques',
          'Collaboration avec les parties prenantes pour transformer les besoins métier en solutions techniques',
          'Amélioration des performances et de la qualité du code existant',
        ],
      },
      env: {
        en: 'Vue.js / TypeScript / Node.js / Python / PostgreSQL / Docker / Git',
        fr: 'Vue.js / TypeScript / Node.js / Python / PostgreSQL / Docker / Git',
      },
    },
  },
  {
    id: 'ruag',
    company: { en: 'RUAG', fr: 'RUAG' },
    role: { en: 'Android Developer', fr: 'Développeur Android' },
    type: { en: 'Internship', fr: 'Stage' },
    period: { en: 'May 2024 - Aug 2024', fr: 'Mai 2024 - Août 2024' },
    description: {
      en: 'Developed Android applications for the Guardian Secure Mobile Platform, a secure enterprise mobility solution.',
      fr: 'Développement d\'applications Android pour la plateforme Guardian Secure Mobile, une solution de mobilité d\'entreprise sécurisée.',
    },
    techs: ['Android', 'Java', 'Android Studio', 'Git', 'Scrum'],
    details: {
      context: {
        en: 'Part of the Guardian project team at RUAG, a Swiss technology company specializing in secure communications and defense technology.',
        fr: 'Intégré à l\'équipe du projet Guardian chez RUAG, société technologique suisse spécialisée dans les communications sécurisées.',
      },
      tasks: {
        en: [
          'Developed Android applications for the Guardian Secure Mobile Platform',
          'Applied object-oriented programming (OOP) principles throughout development',
          'Managed source code and releases with Git',
          'Followed Scrum & Agile methodologies across the full project lifecycle',
        ],
        fr: [
          'Développement d\'applications Android pour la plateforme Guardian Secure Mobile',
          'Application des principes de programmation orientée objet (OOP)',
          'Gestion du code source et des releases avec Git',
          'Travail en méthodologie Scrum & Agile sur l\'ensemble du cycle de vie du projet',
        ],
      },
      env: {
        en: 'Android Studio / Java / Git / Scrum / Agile',
        fr: 'Android Studio / Java / Git / Scrum / Agile',
      },
    },
  },
  {
    id: 'sitco-partners-1',
    company: { en: 'Sitco Partners', fr: 'Sitco Partners' },
    role: { en: 'Full Stack Developer', fr: 'Développeur Full Stack' },
    type: { en: 'Internship', fr: 'Stage' },
    period: { en: 'Aug 2023 - Jan 2024', fr: 'Août 2023 - Jan 2024' },
    description: {
      en: 'Designed and built a full-stack web application from scratch. Managed MySQL databases and deployed backend infrastructure on Google Cloud Platform.',
      fr: 'Conception et développement d\'une application web full-stack from scratch. Gestion des bases MySQL et déploiement de l\'infrastructure backend sur Google Cloud Platform.',
    },
    techs: ['Vue.js', 'JavaScript', 'HTML/CSS', 'MySQL', 'Google Cloud'],
    details: {
      context: {
        en: 'First technical internship within the Sitco Partners firm, focused on building internal tooling from the ground up.',
        fr: 'Premier stage technique au sein du cabinet Sitco Partners, centré sur la création d\'outils internes from scratch.',
      },
      tasks: {
        en: [
          'Designed and built a full-stack web application using Vue.js, HTML/CSS/JS',
          'Created and maintained MySQL databases for candidate and client management',
          'Deployed and managed backend infrastructure on Google Cloud Platform',
        ],
        fr: [
          'Conception et développement d\'une application web full-stack avec Vue.js, HTML/CSS/JS',
          'Création et maintenance de bases de données MySQL pour la gestion des candidats et clients',
          'Déploiement et gestion de l\'infrastructure backend sur Google Cloud Platform',
        ],
      },
      env: {
        en: 'Vue.js / JavaScript / HTML / CSS / MySQL / Google Cloud Platform',
        fr: 'Vue.js / JavaScript / HTML / CSS / MySQL / Google Cloud Platform',
      },
    },
  },
  {
    id: 'hinduja',
    company: { en: 'S.P. Hinduja Banque Privée', fr: 'S.P. Hinduja Banque Privée' },
    role: { en: 'Student Software Engineer', fr: 'Ingénieur Logiciel Étudiant' },
    type: { en: 'Part-time', fr: 'Temps partiel' },
    period: { en: 'Jun 2022 - Jul 2023', fr: 'Juin 2022 - Juil 2023' },
    description: {
      en: 'Web development with Django in a private banking environment. Built user management systems, automated testing, and optimized data processing algorithms.',
      fr: 'Développement web avec Django dans un environnement bancaire privé. Création de systèmes de gestion d\'utilisateurs, tests automatisés et algorithmes d\'optimisation.',
    },
    techs: ['Python', 'Django', 'LDAP', 'C', 'pytest', 'Git'],
    details: {
      context: {
        en: 'Private banking environment with strict security and reliability requirements. Worked within a small development team on internal tooling and platform improvements.',
        fr: 'Environnement bancaire privé avec des exigences strictes de sécurité et de fiabilité. Travail au sein d\'une petite équipe de développement sur les outils internes.',
      },
      tasks: {
        en: [
          'Built a user management module with Django: registration, LDAP authentication, and profile management',
          'Implemented CRUD operations and complex business logic for internal tooling',
          'Developed an optimized sorting algorithm in C for large dataset processing',
          'Wrote automated tests with pytest to ensure reliability of web applications and APIs',
          'Managed environments with pipenv and daily use of Git for version control',
        ],
        fr: [
          'Développement d\'un module de gestion des utilisateurs avec Django : inscription, authentification LDAP et gestion des profils',
          'Implémentation d\'opérations CRUD et de logique métier complexe pour les outils internes',
          'Développement d\'un algorithme de tri optimisé en C pour le traitement de grands jeux de données',
          'Rédaction de tests automatisés avec pytest pour garantir la fiabilité des applications et APIs',
          'Gestion des environnements avec pipenv et utilisation quotidienne de Git',
        ],
      },
      env: {
        en: 'Python / Django / LDAP / C / pytest / pipenv / Git',
        fr: 'Python / Django / LDAP / C / pytest / pipenv / Git',
      },
    },
  },
],

  // ===== PROJECTS (optional) =====
  projects: [
    {
      id: 'project-a',
      title: { en: '0nefor.one', fr: '0nefor.one' },
      description: {
        en: 'One for One is a free peer-to-peer Yu-Gi-Oh! card trading platform. Users build a trade pile and a wishlist and the platform surfaces mutual matches automatically',
        fr: 'One for One est une plateforme de commerce de cartes Yu-Gi-Oh! peer-to-peer gratuite. Les utilisateurs construisent une pile d\'échange et une liste de souhaits, et la plateforme propose automatiquement des correspondances mutuelles.',
      },
      techs: ['Vue', 'TypeScript'],
      url: 'https://0nefor.one/',
      github: 'https://github.com/Benji936/0nefor0ne',
    },
    {
      id: 'project-b',
      title: { en: 'Sitco Partners', fr: 'Sitco Partners' },
      description: {
        en: 'Executive Search Company website built with Vue.js. Features a custom CMS for content management and a dynamic team page with employee profiles.',
        fr: 'Site web d\'une société de recherche executive construit avec Vue.js. Propose un CMS personnalisé pour la gestion du contenu et une page d\'équipe dynamique avec les profils des employés.',
      },
      techs: ['Vue', 'Node.js', 'PostgreSQL'],
      url: 'https://www.sitcopartners.ch/',
      github: 'https://github.com/Benji936/sitco',
    },
  ],

  // ===== EDUCATION =====
  education: [
    {
      school: { en: 'HEPIA', fr: 'HEPIA' },
      degree: { en: 'Bachelor in Computer Science', fr: 'Bachelor Informatique' },
      period: '2018 - 2023',
    },
  ],

  // ===== HOBBIES (optional) =====
  hobbies: [
    {
      title: { en: 'Cinema', fr: 'Cinema' },
    },
    {
      title: { en: 'Video Games', fr: 'Jeux Vidéo' },
      details: [
        { en: 'Strategy games', fr: 'Jeux de stratégie' },
      ],
    },
    {
      title: { en: 'Chess', fr: 'Échecs' },
      details: [
        { en: '1000 elo', fr: '1000 elo' },
      ],
    },
    {
      title: { en: 'Guitar', fr: 'Guitare' },
      details: [
        { en: '3 years', fr: '3 ans' },
      ],
    },
  ],


  // ===== PDF (optional) =====
  // Auto-detected: just drop your PDF files in public/cv/fr/ and public/cv/en/
  // The download button will appear automatically — no config needed!
  // Uncomment below only if you need to override the auto-detection:
  // pdf: {
  //   label: { en: 'Download PDF', fr: 'Télécharger le PDF' },
  //   path: { en: '/cv/en/resume-en.pdf', fr: '/cv/fr/resume-fr.pdf' },
  // },

  // ===== THEME =====
  theme: {
    preset: 'forest', // 'minimal' | 'warm' | 'ocean' | 'forest' | 'slate' | 'lilac'
    // You can override individual colors:
    // colors: {
    //   primary: '#8B5A2B',
    //   primaryLight: '#D4A574',
    // },
  },

  // ===== UI LABELS =====
  labels: {
    sections: {
      contact: { en: 'CONTACT', fr: 'CONTACT' },
      skills: { en: 'SKILLS', fr: 'COMPÉTENCES' },
      experience: { en: 'PROFESSIONAL EXPERIENCE', fr: 'EXPÉRIENCES PROFESSIONNELLES' },
      education: { en: 'EDUCATION', fr: 'FORMATION' },
      projects: { en: 'PROJECTS', fr: 'PROJETS' },
      hobbies: { en: 'HOBBIES', fr: 'LOISIRS' },
    },
    experience: {
      mainTasks: { en: 'Main tasks:', fr: 'Tâches principales :' },
      moreTasks: { en: 'more tasks...', fr: 'autres tâches...' },
      training: { en: 'Training:', fr: 'Formations :' },
      techEnv: { en: 'Tech environment:', fr: 'Env. technique :' },
      technologies: { en: 'Technologies', fr: 'Technologies' },
    },
    actions: {
      clickHint: { en: 'Click on experiences to see more details', fr: 'Cliquez sur les expériences pour voir plus de détails' },
      switchTheme: { en: 'Toggle dark mode', fr: 'Changer le thème' },
      downloadPdf: { en: 'Download PDF', fr: 'Télécharger le PDF' },
    },
  },
}
