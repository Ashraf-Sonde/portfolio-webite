export const siteConfig = {
  name: 'Ashraf Sonde',
  initials: 'AS',
  domain: 'ashrafsonde.me',
  title: 'Senior Software Engineer',
  tagline: 'Building scalable backend systems & distributed infrastructure',
  description:
    'Senior Software Engineer specializing in scalable distributed systems, backend architecture, and platform reliability.',
  status: 'Open to backend & platform roles',
  github: 'https://github.com/Ashraf-Sonde',
  linkedin: 'https://linkedin.com/in/ashraf-sonde',
  email: 'outreach.ashraf@gmail.com',
  resume: '#',
};

export const aboutStats = [
  { number: '5+', label: 'Years' },
  { number: '4', label: 'Companies' },
  { number: '12+', label: 'Projects' },
];

export const experience = [
  {
    company: 'Apex Systems',
    icon: 'https://techstalwarts.com/assets/images/favicon.png',
    active: true,
    roles: [
      {
        title: 'Staff Backend Engineer',
        type: 'Full-time',
        period: '03.2022 – Present',
        icon: '⚙️',
        bullets: [
          'Rearchitected the core payments pipeline from a monolith to event-driven microservices, reducing p99 latency from 1.8s to 210ms under peak load.',
          'Led system design for a multi-region failover setup that brought downtime from ~4 hours/year to under 12 minutes.',
          'Introduced internal platform tooling that cut new service onboarding time from 2 weeks to under a day.',
        ],
        tags: [
          'Go',
          'Kafka',
          'PostgreSQL',
          'Redis',
          'Kubernetes',
          'AWS',
          'gRPC',
        ],
      },
    ],
  },
  {
    company: 'Meridian Labs',
    icon: 'https://www.cloudesign.com/favicon.ico',
    active: false,
    roles: [
      {
        title: 'Senior Backend Engineer',
        type: 'Full-time',
        period: '06.2019 – 02.2022',
        icon: '⚡',
        bullets: [
          'Designed and shipped a real-time notification system serving 2M+ users with sub-50ms delivery via WebSockets and Redis pub/sub.',
          'Built a data aggregation pipeline that replaced 12 manual reporting scripts, reducing analyst query time by 90%.',
          'Owned backend for a public-facing API used by 80+ enterprise clients; maintained 99.95% uptime over 3 years.',
        ],
        tags: [
          'Node.js',
          'TypeScript',
          'PostgreSQL',
          'Redis',
          'Docker',
          'GCP',
          'REST',
        ],
      },
    ],
  },
  {
    company: 'Cornerstone Digital',
    icon: '🌐',
    active: false,
    roles: [
      {
        title: 'Backend Developer',
        type: 'Full-time',
        period: '08.2017 – 05.2019',
        icon: '🔧',
        bullets: [
          'Built RESTful APIs supporting a SaaS billing platform used by 5,000+ SMBs, integrating Stripe and PayPal payment providers.',
          'Migrated a legacy PHP codebase to Node.js, reducing server costs by 40% and cutting deployment cycles from 2 weeks to daily.',
        ],
        tags: ['Node.js', 'PHP', 'MySQL', 'Stripe', 'AWS EC2'],
      },
    ],
  },
];

export const projects = [
  {
    id: 'distroq',
    title: 'DistroQ',
    icon: '🔁',
    tagline: 'Lightweight distributed task queue built on Redis Streams',
    defaultOpen: true,
    github: 'https://github.com',
    bullets: [
      'Handles <strong>50k+ jobs/sec</strong> with at-least-once delivery guarantees and automatic retries.',
      'Built-in dead-letter queue, job inspection dashboard, and CLI for ops teams.',
      'Zero dependencies beyond Redis — drop-in for any Go service in under 10 minutes.',
    ],
    tags: ['Go', 'Redis Streams', 'Open Source', 'CLI'],
    screenshots: [
      {
        src: 'https://placehold.co/820x500/111111/2a2a2a?text=DistroQ+%E2%80%94+Dashboard',
        caption: 'Queue dashboard overview',
      },
      {
        src: 'https://placehold.co/820x500/111111/2a2a2a?text=DistroQ+%E2%80%94+Job+Detail',
        caption: 'Job detail & retry view',
      },
      {
        src: 'https://placehold.co/820x500/111111/2a2a2a?text=DistroQ+%E2%80%94+CLI',
        caption: 'CLI output',
      },
    ],
  },
  {
    id: 'queryflow',
    title: 'Queryflow',
    icon: '📊',
    tagline: 'Self-hosted analytics pipeline over Postgres + ClickHouse',
    defaultOpen: false,
    github: 'https://github.com',
    bullets: [
      'Replaces ad-hoc SQL dashboards with a structured query layer and reusable metric definitions.',
      'Reduced report generation from <strong>12s to under 300ms</strong> via materialized views and incremental aggregation.',
      'Ships with a Next.js dashboard UI — self-hostable with a single Docker command.',
    ],
    tags: ['TypeScript', 'PostgreSQL', 'ClickHouse', 'Next.js'],
    screenshots: [
      {
        src: 'https://placehold.co/820x500/111111/2a2a2a?text=Queryflow+%E2%80%94+Overview',
        caption: 'Analytics overview',
      },
      {
        src: 'https://placehold.co/820x500/111111/2a2a2a?text=Queryflow+%E2%80%94+Query+Builder',
        caption: 'Query builder UI',
      },
      {
        src: 'https://placehold.co/820x500/111111/2a2a2a?text=Queryflow+%E2%80%94+Charts',
        caption: 'Chart visualizations',
      },
      {
        src: 'https://placehold.co/820x500/111111/2a2a2a?text=Queryflow+%E2%80%94+Settings',
        caption: 'Pipeline settings',
      },
    ],
  },
  {
    id: 'vaultkey',
    title: 'VaultKey',
    icon: '🔐',
    tagline: 'Minimal secrets management API for small teams',
    defaultOpen: false,
    github: 'https://github.com',
    bullets: [
      'Lightweight alternative to Vault/Doppler — no enterprise overhead, no cloud lock-in.',
      'AES-256 encryption at rest, full audit log, and env-file export for CI/CD pipelines.',
      '<strong>Self-hosted in under 5 minutes</strong> via Docker; single binary with no external deps.',
    ],
    tags: ['Go', 'SQLite', 'Docker', 'AES-256'],
    screenshots: [
      {
        src: 'https://placehold.co/820x500/111111/2a2a2a?text=VaultKey+%E2%80%94+Secrets+List',
        caption: 'Secrets list view',
      },
      {
        src: 'https://placehold.co/820x500/111111/2a2a2a?text=VaultKey+%E2%80%94+Audit+Log',
        caption: 'Audit log',
      },
    ],
  },
  {
    id: 'edgecache',
    title: 'EdgeCache',
    icon: '⚡',
    tagline: 'CDN-aware HTTP cache middleware for Node.js',
    defaultOpen: false,
    github: 'https://github.com',
    bullets: [
      'Drop-in Express/Fastify middleware that sets Cache-Control headers automatically based on route patterns.',
      'Cut origin server load by <strong>~60%</strong> in production by maximising CDN hit rates without config sprawl.',
      'Published to npm — 1.2k weekly downloads, zero peer dependencies.',
    ],
    tags: ['Node.js', 'TypeScript', 'NPM Package', 'HTTP'],
    screenshots: [
      {
        src: 'https://placehold.co/820x500/111111/2a2a2a?text=EdgeCache+%E2%80%94+Middleware',
        caption: 'Middleware config example',
      },
      {
        src: 'https://placehold.co/820x500/111111/2a2a2a?text=EdgeCache+%E2%80%94+Benchmark',
        caption: 'Benchmark results',
      },
    ],
  },
];

export const skills = [
  {
    label: 'Backend',
    tags: ['Go', 'Node.js', 'TypeScript', 'Python', 'REST', 'gRPC', 'GraphQL'],
  },
  {
    label: 'Databases',
    tags: ['PostgreSQL', 'MySQL', 'Redis', 'ClickHouse', 'MongoDB', 'SQLite'],
  },
  {
    label: 'Cloud / Infra',
    tags: ['AWS', 'GCP', 'Kubernetes', 'Docker', 'Kafka', 'NGINX', 'Terraform'],
  },
  {
    label: 'Frontend',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
  },
];

export const writingTopics = [
  'distributed systems',
  'database internals',
  'API design',
  'observability',
  'Go concurrency',
  'system design',
  'platform engineering',
  'kafka patterns',
];
