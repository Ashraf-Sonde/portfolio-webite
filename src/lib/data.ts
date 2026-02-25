export const siteConfig = {
  name: 'Ashraf Sonde',
  initials: 'AS',
  domain: 'ashrafsonde.me',
  title: 'Senior Software Engineer',
  tagline: 'Building solutions that matter.',
  description:
    'Senior Software Engineer specializing in scalable distributed systems, backend architecture, and platform reliability.',
  status: 'Open to backend & platform roles',
  github: 'https://github.com/Ashraf-Sonde',
  linkedin: 'https://linkedin.com/in/ashraf-sonde',
  email: 'b3V0cmVhY2guYXNocmFmQGdtYWlsLmNvbQ==',
  resume: '#',
};

export const aboutStats = [
  { number: '5+', label: 'Years' },
  { number: '4', label: 'Companies' },
  { number: '12+', label: 'Projects' },
];

export const experience = [
  {
    company: 'Cloudesign Technology Pvt Ltd',
    icon: '/assets/experience/logos/cloudesign.png',
    active: true,
    roles: [
      {
        title: 'Software Engineer II',
        type: 'Full-time',
        period: '03.2024 – Present',
        icon: '⚙️',
        bullets: [
          'Rearchitected the core payments pipeline from a monolith to event-driven microservices, reducing p99 latency from 1.8s to 210ms under peak load.',
          'Led system design for a multi-region failover setup that brought downtime from ~4 hours/year to under 12 minutes.',
          'Introduced internal platform tooling that cut new service onboarding time from 2 weeks to under a day.',
        ],
        tags: [
          'Next.js',
          'RabbitMQ',
          'MongoDB',
          'Redis',
          'Next.js',
          'AWS',
          'Event Driven Architecture',
          'Microservices',
          'API Design',
          'System Design',
          'Performance Optimization',
        ],
      },
    ],
  },
  {
    company: 'Karma AI',
    icon: '/assets/experience/logos/karma.png',
    active: false,
    roles: [
      {
        title: 'Senior Software Engineer',
        type: 'Contract role',
        period: '12.2024 – 02.2025',
        icon: '⚡',
        bullets: [
          'Designed and implemented a scalable microservices architecture with NestJS, TypeScript, and PostgreSQL, enhancing system efficiency and maintainability.',
          'Optimized GCP cloud infrastructure, improving deployment speed, scalability, and cost efficiency.',
          'Established SDLC best practices and mentored the tech team, ensuring long-term development continuity and accelerating product execution.',
        ],
        tags: [
          'Node.js',
          'Next.js',
          'TypeScript',
          'PostgreSQL',
          'React',
          'REST',
          'API Design',
          'System Design',
          'Performance Optimization',
          'Microservices',
        ],
      },
    ],
  },
  {
    company: 'Techstalwarts',
    icon: '/assets/experience/logos/techstalwarts.png',
    active: false,
    roles: [
      {
        title: 'Software Engineer',
        type: 'Full-time',
        period: '03.2023 – 02.2024',
        icon: '⚡',
        bullets: [
          'Executed large-scale software projects across fintech, EV infrastructure, AI-driven stock investment, and real estate analytics, delivering scalable and high-impact solutions.',
          'Architected and developed complex platforms, including JARVIS (stock investment) and Cstore IQ (cloud-based retail management), optimizing automation and efficiency.',
          'Built and deployed mission-critical applications, such as Techpaathshala (student attendance management) and Aditya Birla’s real estate analysis tool, enhancing operational workflows.',
        ],
        tags: [
          'Node.js',
          'JavaScript',
          'TypeScript',
          'PostgreSQL',
          'MySQL',
          'React',
          'Angular',
          'REST',
          'API Design',
        ],
      },
      {
        title: 'Associate Software Engineer',
        type: 'Full-time',
        period: '04.2022 – 03.2023',
        icon: '⚡',
        bullets: [
          'Designed and shipped a real-time notification system serving 2M+ users with sub-50ms delivery via WebSockets and Redis pub/sub.',
          'Built a data aggregation pipeline that replaced 12 manual reporting scripts, reducing analyst query time by 90%.',
          'Owned backend for a public-facing API used by 80+ enterprise clients; maintained 99.95% uptime over 3 years.',
        ],
        tags: [
          'Node.js',
          'JavaScript',
          'TypeScript',
          'PostgreSQL',
          'MySQL',
          'React',
          'Angular',
          'REST',
          'API Design',
        ],
      },
    ],
  },
  {
    company: 'Techpaathshala',
    icon: '/assets/experience/logos/techpaathshala.png',
    active: false,
    roles: [
      {
        title: 'Technical Consultant',
        type: 'Part-time',
        period: '06.2023 – 12.2023',
        icon: '⚡',
        bullets: [
          'Mentored students in React and Node.js, enhancing their technical proficiency and confidence through personalized guidance.',
          'Conducted hands-on sessions on JavaScript fundamentals and problem-solving, fostering critical thinking and full-stack development expertise.',
        ],
        tags: [
          'Problem Solving',
          'Critical Thinking',
          'DSA',
          'JavaScript',
          'React',
          'Node.js',
          'Full-stack Development',
          'Mentoring',
          'Teaching',
          'Training',
        ],
      },
    ],
  },
  {
    company: 'DzineBee',
    icon: '/assets/experience/logos/dzinebee.png',
    active: false,
    roles: [
      {
        title: 'Junior Software Engineer',
        type: 'Full-time',
        period: '04.2021 – 04.2022',
        icon: '⚡',
        bullets: [
          'Developed and deployed scalable e-commerce platforms, driving a 34% increase in client store sales through optimized web solutions.',
          'Designed and implemented high-performance web applications using WordPress, WooCommerce, PHP, JavaScript, SCSS, and Docker, ensuring seamless functionality.',
        ],
        tags: [
          'PHP',
          'Wordpress',
          'WooCommerce',
          'MySQL',
          'Web Development',
          'HTML5',
          'CSS3',
          'JavaScript',
          'SCSS',
          'Docker',
          'SEO',
          'AWS',
          'Cloudflare',
        ],
      },
    ],
  },
];

export const projects = [
  {
    id: 'bemymunshi',
    title: 'BeMyMunshi',
    icon: '/assets/projects/logos/bemymunshi.png',
    tagline: 'A fully offline, privacy-first personal finance manager — right in your browser.',
    defaultOpen: true,
    github: '',
    website: 'https://bemymunshi.com',
    bullets: [
      'Built for people who value their privacy and want complete control over their finances.',
      'A complete personal finance toolkit, designed for simplicity and power.',
      'Generate beautiful PDF reports of your financial analytics',
    ],
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Shadcn/UI', 'Browser API'],
    screenshots: [],
  },
  {
    id: 'coralreef',
    title: 'Coral Reef (VS Code Theme)',
    icon: '/assets/projects/logos/coralreeftheme.png',
    tagline: 'Carefully crafted Visual Studio Code theme designed for developers',
    defaultOpen: false,
    github: 'https://github.com/Ashraf-Sonde/coral_reef_vscode_theme',
    website: 'https://marketplace.visualstudio.com/items?itemName=TheOrangeCat.coral-reef-dark-theme',
    bullets: [
      'Comfortable dark interface with calm teal and coral accents.',
      'Balances readable code colors with subtle UI highlights to reduce eye strain during long coding sessions.',
      'Distinct token colors for keywords, strings, functions, and variables.',
    ],
    tags: ['VS Code','Dark Theme', 'UI/UX', 'JSON'],
    screenshots: [
      {
        src: 'https://placehold.co/820x500/111111/2a2a2a?text=Queryflow+%E2%80%94+Overview',
        caption: 'Coral Reef Dark Theme',
      },
    ],
  },
  {
    id: 'ngdashboard',
    title: 'Angular Dashboard',
    icon: 'https://dashboard-angularr.netlify.app/favicon.ico',
    tagline: 'A minimalistic dashboard to manage bookmarks, todo and notes',
    defaultOpen: false,
    github: 'https://github.com/Ashraf-Sonde/personal-dashboard-angular',
    website: 'https://dashboard-angularr.netlify.app/',
    bullets: [
      'Personal dashboard to manage bookmarks, todo and notes',
      'Minimalistic design, clean and modern UI/UX',
      'Offline first, no backend required',
    ],
    tags: ['Angular', 'TypeScript', 'Browser API', 'HTML', 'CSS', 'UI/UX'],
    screenshots: [
      {
        src: 'https://placehold.co/820x500/111111/2a2a2a?text=VaultKey+%E2%80%94+Secrets+List',
        caption: 'Bookmarks view',
      },
    ],
  },
];

export const skills = [
  {
    label: 'Backend',
    tags: [
      'Node.js',
      'Nest.js',
      'TypeScript',
      'REST',
      'Microservices',
      'Python',
      'PHP',
    ],
  },
  {
    label: 'Databases',
    tags: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
  },
  {
    label: 'Cloud / Infra',
    tags: ['AWS', 'GCP', 'Docker', 'RabbitMQ', 'Nginx', 'Apache2', 'PM2'],
  },
  {
    label: 'Frontend',
    tags: ['React', 'Next.js', 'TypeScript', 'Angular', 'Tailwind', 'Material UI', 'Shadcn/UI'],
  },
];

export const writingTopics = [
  'Distributed systems',
  'Database internals',
  'API design',
  'Observability',
  'System design',
  'Platform engineering',
];
