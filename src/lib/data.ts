export const siteConfig = {
  name: 'Ashraf Sonde',
  initials: 'AS',
  domain: 'ashrafsonde.me',
  title: 'Senior Software Engineer',
  tagline: [
    'Software Engineer',
    'Building solutions that matter',
    'Designing reliable systems',
  ],
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
    icon: '/assets/experience/logos/cloudesign.webp',
    active: true,
    roles: [
      {
        title: 'Software Engineer II',
        type: 'Full-time',
        period: '03.2025 – Present',
        icon: 'DraftingCompass',
        bullets: [
          'Owned end-to-end product development of CloudTrack, a cloud-native SaaS TMS — translating logistics business requirements into a fully functional multi-tenant platform spanning transporter auctions, trip management, real-time tracking, agreement management, and automated billing & invoicing.',
          'Architected a scalable microservices ecosystem with enterprise-grade RBAC and multi-channel communication (WhatsApp, Email, SMS), enabling independent deployability, fault isolation, and fine-grained access control across all platform modules.',
          'Led a lean team of 3 from zero to production in ~10 months, driving an estimated ~40% improvement in logistics operational efficiency by replacing manual workflows with visibility and end-to-end automated trip lifecycle and billing management.',
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
      {
        title: 'Software Engineer II',
        type: '',
        period: 'Load and route optimization engine',
        icon: 'DraftingCompass',
        bullets: [
          'Led the design and development of an intelligent load & route optimization engine, solving a multi-constraint vehicle routing problem (VRP) to minimize cost, time, and trip count across dynamic delivery networks.',
          'Engineered a 3D bin-packing algorithm to handle variable box dimensions, automatically computing optimal cargo arrangement per vehicle and maximizing load utilization.',
          'Integrated time-window constraint handling, ensuring time-bound deliveries are scheduled and routed with precision without manual intervention.',
          'Delivered a system capable of ingesting fleet, cargo, and destination data and outputting vehicle count, load plans, and optimized routes — turning a complex operations problem into a single API call for business teams.',
        ],
        tags: [
          'Python',
          'FastAPI',
          'Pandas',
          'SciPy',
          'Google OR-Tools',
          'Google maps API',
          'RabbitMQ',
          'MongoDB',
          'Redis',
          'AWS',
          'API Design',
        ],
      },
    ],
  },
  {
    company: 'Karma AI',
    icon: '/assets/experience/logos/karma.webp',
    active: false,
    roles: [
      {
        title: 'Senior Software Engineer',
        type: 'Contract',
        period: '03.2024 – 02.2025',
        icon: 'DraftingCompass',
        bullets: [
          'Designed and implemented a scalable microservices architecture with NestJS, TypeScript, and PostgreSQL, enhancing system efficiency and maintainability.',
          'Developed the collaborative workbench for lawyers and clients to manage their cases and documents.',
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
    icon: '/assets/experience/logos/techstalwarts.webp',
    active: false,
    roles: [
      {
        title: 'Software Engineer',
        type: 'Full-time',
        period: '03.2023 – 02.2024',
        icon: 'CodeXml',
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
        icon: 'CodeXml',
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
    icon: '/assets/experience/logos/techpaathshala.webp',
    active: false,
    roles: [
      {
        title: 'Technical Consultant',
        type: 'Part-time',
        period: '06.2023 – 12.2023',
        icon: 'GraduationCap',
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
    icon: '/assets/experience/logos/dzinebee.webp',
    active: false,
    roles: [
      {
        title: 'Junior Software Engineer',
        type: 'Full-time',
        period: '04.2021 – 04.2022',
        icon: 'CodeXml',
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
    tagline:
      'A fully offline, privacy-first personal finance manager — right in your browser.',
    defaultOpen: true,
    github: '',
    website: 'https://bemymunshi.com',
    bullets: [
      'Built for people who value their privacy and want complete control over their finances.',
      'A complete personal finance toolkit, designed for simplicity and power.',
      'Generate beautiful PDF reports of your financial analytics',
    ],
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Shadcn/UI', 'Browser API'],
    screenshots: [
      {
        src: '/assets/projects/screenshots/bemymunshi/passphrase.webp',
        caption: 'Set passphrase to encrypt your data',
      },
      {
        src: '/assets/projects/screenshots/bemymunshi/dashboard.webp',
        caption: 'Dashboard to overview your finances',
      },
      {
        src: '/assets/projects/screenshots/bemymunshi/transactions.webp',
        caption: 'Track your transactions',
      },
      {
        src: '/assets/projects/screenshots/bemymunshi/add-transaction.webp',
        caption: 'Add a transaction',
      },
      {
        src: '/assets/projects/screenshots/bemymunshi/accounts.webp',
        caption: 'Manage your accounts',
      },
      {
        src: '/assets/projects/screenshots/bemymunshi/goals.webp',
        caption: 'Set your financial goals',
      },
      {
        src: '/assets/projects/screenshots/bemymunshi/settings.webp',
        caption: 'Manage your settings',
      },
    ],
  },
  {
    id: 'coralreef',
    title: 'Coral Reef (VS Code Theme)',
    icon: '/assets/projects/logos/coralreeftheme.png',
    tagline:
      'Carefully crafted Visual Studio Code theme designed for developers',
    defaultOpen: false,
    github: 'https://github.com/Ashraf-Sonde/coral_reef_vscode_theme',
    website:
      'https://marketplace.visualstudio.com/items?itemName=TheOrangeCat.coral-reef-dark-theme',
    bullets: [
      'Comfortable dark interface with calm teal and coral accents.',
      'Balances readable code colors with subtle UI highlights to reduce eye strain during long coding sessions.',
      'Distinct token colors for keywords, strings, functions, and variables.',
    ],
    tags: ['VS Code', 'Dark Theme', 'UI/UX', 'JSON'],
    screenshots: [
      {
        src: '/assets/projects/screenshots/coralreef/script.webp',
        caption: 'Coral Reef Dark Theme',
      },
      {
        src: '/assets/projects/screenshots/coralreef/html.webp',
        caption: 'Coral Reef Dark Theme 2',
      },
      {
        src: '/assets/projects/screenshots/coralreef/css.webp',
        caption: 'Coral Reef Dark Theme 3',
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
        src: '/assets/projects/screenshots/ngdashboard/bookmark.webp',
        caption: 'Manage your bookmarks',
      },
      {
        src: '/assets/projects/screenshots/ngdashboard/add-bookmark.webp',
        caption: 'Add a new bookmark',
      },
      {
        src: '/assets/projects/screenshots/ngdashboard/todo.webp',
        caption: 'Manage your todos',
      },
      {
        src: '/assets/projects/screenshots/ngdashboard/notes.webp',
        caption: 'Manage your notes',
      },
    ],
  },
];

export const skills = [
  {
    label: 'Backend',
    tags: [
      {
        name: 'Node.js',
        url: 'https://en.wikipedia.org/wiki/Node.js',
        icon: 'https://cdn.simpleicons.org/nodedotjs/339933',
      },
      {
        name: 'Nest.js',
        url: 'https://en.wikipedia.org/wiki/NestJS',
        icon: 'https://cdn.simpleicons.org/nestjs/E0234E',
      },
      {
        name: 'REST',
        url: 'https://en.wikipedia.org/wiki/Representational_state_transfer',
        icon: 'Workflow',
      },
      {
        name: 'TypeScript',
        url: 'https://en.wikipedia.org/wiki/TypeScript',
        icon: 'https://cdn.simpleicons.org/typescript/3178C6',
      },
      {
        name: 'Microservices',
        url: '',
        icon: 'Network',
      },
      {
        name: 'Python',
        url: 'https://en.wikipedia.org/wiki/Python_(programming_language)',
        icon: 'https://cdn.simpleicons.org/python/3776AB',
      },
      {
        name: 'FastAPI',
        url: 'https://en.wikipedia.org/wiki/FastAPI',
        icon: 'https://cdn.simpleicons.org/fastapi/009688',
      },
      {
        name: 'PHP',
        url: 'https://en.wikipedia.org/wiki/PHP',
        icon: 'https://cdn.simpleicons.org/php/777BB4',
      },
      {
        name: 'Wordpress',
        url: 'https://en.wikipedia.org/wiki/Google_OR-Tools',
        icon: 'https://cdn.simpleicons.org/wordpress/21759B',
      }
    ],
  },
  {
    label: 'Frontend',
    tags: [
      {
        name: 'React',
        url: 'https://en.wikipedia.org/wiki/React_(software)',
        icon: 'https://cdn.simpleicons.org/react/61DAFB',
      },
      {
        name: 'Next.js',
        url: 'https://en.wikipedia.org/wiki/Next.js',
        icon: 'https://cdn.simpleicons.org/nextdotjs/ffffff',
      },
      {
        name: 'TypeScript',
        url: 'https://en.wikipedia.org/wiki/TypeScript',
        icon: 'https://cdn.simpleicons.org/typescript/3178C6',
      },
      {
        name: 'Shadcn/UI',
        url: 'https://ui.shadcn.com/',
        icon: 'https://cdn.simpleicons.org/shadcnui/ffffff',
      },
      {
        name: 'Tailwind',
        url: 'https://en.wikipedia.org/wiki/Tailwind_CSS',
        icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4',
      },
      {
        name: 'Angular',
        url: 'https://en.wikipedia.org/wiki/Angular_(web_framework)',
        icon: 'https://cdn.simpleicons.org/angular/DD0031',
      },
      {
        name: 'Material UI',
        url: 'https://en.wikipedia.org/wiki/Material_Design',
        icon: 'https://cdn.simpleicons.org/mui/007FFF',
      },
    ],
  },
  {
    label: 'Database',
    tags: [
      {
        name: 'PostgreSQL',
        url: 'https://en.wikipedia.org/wiki/PostgreSQL',
        icon: 'https://cdn.simpleicons.org/postgresql/4169E1',
      },
      {
        name: 'MySQL',
        url: 'https://en.wikipedia.org/wiki/MySQL',
        icon: 'https://cdn.simpleicons.org/mysql/4479A1',
      },
      {
        name: 'Redis',
        url: 'https://en.wikipedia.org/wiki/Redis',
        icon: 'https://cdn.simpleicons.org/redis/DC382D',
      },
      {
        name: 'MongoDB',
        url: 'https://en.wikipedia.org/wiki/MongoDB',
        icon: 'https://cdn.simpleicons.org/mongodb/47A248',
      },
    ],
  },
  {
    label: 'Cloud / Infra',
    tags: [
      {
        name: 'AWS',
        url: 'https://en.wikipedia.org/wiki/Amazon_Web_Services',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/500px-Amazon_Web_Services_Logo.svg.png',
      },
      {
        name: 'GCP',
        url: 'https://en.wikipedia.org/wiki/Google_Cloud_Platform',
        icon: 'https://cdn.simpleicons.org/googlecloud/4285F4',
      },
      {
        name: 'Docker',
        url: 'https://en.wikipedia.org/wiki/Docker_(software)',
        icon: 'https://cdn.simpleicons.org/docker/2496ED',
      },
      {
        name: 'RabbitMQ',
        url: 'https://en.wikipedia.org/wiki/RabbitMQ',
        icon: 'https://cdn.simpleicons.org/rabbitmq/FF6600',
      },
      {
        name: 'Linux',
        url: 'https://en.wikipedia.org/wiki/Linux',
        icon: 'https://cdn.simpleicons.org/linux/FCC624',
      },
      {
        name: 'Nginx',
        url: 'https://en.wikipedia.org/wiki/Nginx',
        icon: 'https://cdn.simpleicons.org/nginx/009639',
      },
      {
        name: 'Apache2',
        url: 'https://en.wikipedia.org/wiki/Apache_HTTP_Server',
        icon: 'https://cdn.simpleicons.org/apache/EA2D2E',
      },
      {
        name: 'PM2',
        url: 'https://en.wikipedia.org/wiki/PM2_(software)',
        icon: 'https://cdn.simpleicons.org/pm2/2B037A',
      },
    ],
  },
  {
    label: 'Automation / AI Tools',
    tags: [
      {
        name: 'Claude code',
        url: 'https://en.wikipedia.org/wiki/TensorFlow',
        icon: 'https://cdn.simpleicons.org/claude/D97757',
      },
      {
        name: 'Cursor',
        url: 'https://en.wikipedia.org/wiki/TensorFlow',
        icon: 'https://cdn.simpleicons.org/cursor/ffffff',
      },
      {
        name: 'n8n',
        url: 'https://en.wikipedia.org/wiki/TensorFlow',
        icon: 'https://cdn.simpleicons.org/n8n/EA4B71',
      },
    ],
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
