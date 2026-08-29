export interface Project {
  id: string;
  name: string;
  edition: string;
  category: 'Distributed Web' | 'Low-Level Tools' | 'Autonomous AI' | 'Mobile Systems';
  purpose: string;
  feature: string;
  url: string;
  github?: string;
  image: string;
  stats: { label: string; value: string }[];
  techStack: string[];
  problemStatement: string;
  solutionDetails: string[];
  codeSpecimen?: {
    filename: string;
    language: string;
    code: string;
  };
}

export interface MonographPlate {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  plateNumber: string;
  accent: string;
}

export interface CareerEntry {
  company: string;
  role: string;
  period: string;
  location: string;
  classification: string;
  description: string;
  deliverables: string[];
  techUsed: string[];
}

export interface SkillItem {
  name: string;
  level: string;
  category: 'Backend & Concurrency' | 'Databases & Storage' | 'Infrastructure & Cloud' | 'Languages & Protocols';
  experience: string;
  specimenNote: string;
}

export interface AcademicHonor {
  id: number;
  title: string;
  organization: string;
  description: string;
  date: string;
  verified?: boolean;
  link?: string;
  linkText?: string;
  badge: string;
}

export const MONOGRAPH_PLATES: MonographPlate[] = [
  {
    id: 0,
    slug: 'frontispiece',
    title: 'Om Thakur — The Author’s Monograph',
    subtitle: 'Distributed Systems, Real-time APIs & Scalable Backend Architecture',
    category: 'Frontispiece & Colophon',
    plateNumber: 'Plate I',
    accent: '#C4604A',
  },
  {
    id: 1,
    slug: 'manifesto',
    title: 'The Engineering Manifesto',
    subtitle: 'Pillars of Resilient Systems: Concurrency, Fault-Isolation & Determinism',
    category: 'Doctrine & Philosophy',
    plateNumber: 'Plate II',
    accent: '#566449',
  },
  {
    id: 2,
    slug: 'terminal-portfolio',
    title: 'Blueprint I: Terminal Portfolio',
    subtitle: 'Interactive CLI Engine with AI Prompt Processing & Edge Rendering',
    category: 'System Architecture',
    plateNumber: 'Plate III',
    accent: '#C4604A',
  },
  {
    id: 3,
    slug: 'monsterfps',
    title: 'Blueprint II: MonsterFPS',
    subtitle: 'Low-Level Windows Tuning Utility with Safe-Revert Kernel Profiles',
    category: 'System Optimization',
    plateNumber: 'Plate IV',
    accent: '#7A3B3B',
  },
  {
    id: 4,
    slug: 'agni',
    title: 'Blueprint III: Agni Agent',
    subtitle: 'Local Autonomous Automation Engine with Sandboxed Security Policies',
    category: 'Autonomous AI',
    plateNumber: 'Plate V',
    accent: '#C4604A',
  },
  {
    id: 5,
    slug: 'fin-read',
    title: 'Blueprint IV: Fin Read',
    subtitle: 'Offline-First SMS Financial Parser with Zero-Leakage Privacy',
    category: 'Mobile Engine',
    plateNumber: 'Plate VI',
    accent: '#566449',
  },
  {
    id: 6,
    slug: 'gitfool',
    title: 'Blueprint V: GitFool',
    subtitle: 'Edge-Runtime Markdown Engine Powered by GitHub Repositories',
    category: 'Distributed Web',
    plateNumber: 'Plate VII',
    accent: '#7A3B3B',
  },
  {
    id: 7,
    slug: 'taxonomy',
    title: 'The Technical Specimen Taxonomy',
    subtitle: 'Categorized Matrix of Protocols, Engines, Relational Stores & Clouds',
    category: 'Engineering Matrix',
    plateNumber: 'Plate VIII',
    accent: '#C4604A',
  },
  {
    id: 8,
    slug: 'chronology',
    title: 'Chronology of Dispatches',
    subtitle: 'Professional Engineering Appointments & Proprietary Backend Systems',
    category: 'Career Ledger',
    plateNumber: 'Plate IX',
    accent: '#566449',
  },
  {
    id: 9,
    slug: 'colophon',
    title: 'Academic Honors & Grand Colophon',
    subtitle: 'University First Rank, Data Science Credentials & Postal Dispatch',
    category: 'Attestation & Epilogue',
    plateNumber: 'Plate X',
    accent: '#632F2F',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'terminal-portfolio',
    name: 'Terminal Portfolio',
    edition: 'Edition I · CLI Instrument',
    category: 'Distributed Web',
    purpose: 'Interactive terminal-style digital portfolio with custom command parsing and AI responses.',
    feature: 'AI-prompt integration for contextual inquiry alongside simulated shell commands.',
    url: 'https://om-thakur.vercel.app/',
    github: 'https://github.com/MonsterFlick/omthakur',
    image: '/terminal-optimized.webp',
    stats: [
      { label: 'Latency', value: '< 45ms' },
      { label: 'Runtime', value: 'Edge V8' },
      { label: 'Engine', value: 'Custom Parser' },
    ],
    techStack: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'OpenAI API'],
    problemStatement:
      'Standard developer portfolios suffer from cookie-cutter visual fatigue. Technical recruiters and senior engineers crave interactive, low-latency proof of developer capability.',
    solutionDetails: [
      'Designed an in-browser virtual filesystem with command history, autocomplete, and piped outputs.',
      'Integrated an AI prompt parser that routes conversational queries to an LLM while maintaining strict shell aesthetic.',
      'Optimized asset loading and state tree to achieve sub-50ms execution on all virtual commands.',
    ],
    codeSpecimen: {
      filename: 'command-dispatcher.ts',
      language: 'typescript',
      code: `export async function dispatchCommand(cmd: string, args: string[]): Promise<CommandResult> {
  const normalized = cmd.trim().toLowerCase();
  if (COMMAND_REGISTRY.has(normalized)) {
    const handler = COMMAND_REGISTRY.get(normalized)!;
    return await handler.execute(args);
  }
  return queryAIAgent({ prompt: [cmd, ...args].join(' ') });
}`,
    },
  },
  {
    id: 'monsterfps',
    name: 'MonsterFPS',
    edition: 'Edition II · Windows Instrument',
    category: 'Low-Level Tools',
    purpose: 'Low-overhead Windows operating system optimization suite engineered for stable frame pacing.',
    feature: 'Deterministic safe-revert architecture guaranteeing zero permanent registry corruption.',
    url: 'https://monsterfps.netlify.app/',
    github: 'https://github.com/MonsterFlick/MonsterFPS',
    image: '/monsterfps-optimized.webp',
    stats: [
      { label: 'FPS Gain', value: '+18-32%' },
      { label: 'Footprint', value: '< 12MB' },
      { label: 'Profiles', value: 'Instant Revert' },
    ],
    techStack: ['Batch / PowerShell', 'C# / .NET', 'Win32 APIs', 'Registry Subsystem'],
    problemStatement:
      'Aggressive system optimization scripts frequently leave behind corrupted Windows services and unrecoverable registry edits.',
    solutionDetails: [
      'Engineered an atomic backup and shadow-copy snapshot mechanism prior to applying any kernel or service tweaks.',
      'Profiled DPC latency spikes, CPU core unparking, and GPU interrupt handling to eliminate 1% low frame stutter.',
      'Provided single-click restore points allowing gamers and workstations to return to factory state instantly.',
    ],
    codeSpecimen: {
      filename: 'RegistrySnapshot.cs',
      language: 'csharp',
      code: `public sealed class RegistrySnapshot {
    public static void CreateAtomicRestorePoint(string profileKey) {
        using var backup = Registry.LocalMachine.OpenSubKey(@"SYSTEM\\CurrentControlSet", false);
        ExportSubtreeToVolatileStore(backup, $"restore_{profileKey}.reg");
    }
}`,
    },
  },
  {
    id: 'agni',
    name: 'Agni Automation Agent',
    edition: 'Edition III · Autonomous AI',
    category: 'Autonomous AI',
    purpose: 'Autonomous local machine automation system executing complex system commands via natural language.',
    feature: 'Strict rule-based security boundary preventing destructive system alterations.',
    url: 'https://github.com/MonsterFlick/Agni',
    github: 'https://github.com/MonsterFlick/Agni',
    image: '/agni-optimized.webp',
    stats: [
      { label: 'Model', value: 'Local LLM' },
      { label: 'Isolation', value: 'Sandboxed' },
      { label: 'Safety Rules', value: '100% Verified' },
    ],
    techStack: ['Python', 'LangChain', 'FastAPI', 'OS Shell Interop', 'Security Policies'],
    problemStatement:
      'Autonomous AI desktop assistants often suffer from hallucinated shell commands that can inadvertently delete files or compromise security.',
    solutionDetails: [
      'Constructed a multi-stage validation pipeline where each intent is converted to AST and checked against a deterministic whitelist.',
      'Implemented dry-run confirmation modal for all non-idempotent operations.',
      'Developed native OS hooks for cross-platform automation across macOS and Windows.',
    ],
    codeSpecimen: {
      filename: 'safety_evaluator.py',
      language: 'python',
      code: `class SecurityBoundary:
    BLOCKED_PATTERNS = [r"rm\\s+-rf", r"del\\s+/f", r"format\\s+", r":\\(\\)\\{:.*"]
    
    def evaluate_payload(self, plan: ExecutionPlan) -> bool:
        return not any(re.search(p, plan.command) for p in self.BLOCKED_PATTERNS)`,
    },
  },
  {
    id: 'fin-read',
    name: 'Fin Read',
    edition: 'Edition IV · Mobile Engine',
    category: 'Mobile Systems',
    purpose: 'Autonomous personal finance tracker that extracts transactions from transactional SMS notifications.',
    feature: 'Zero-cloud transmission, offline-first parsing engine running completely on-device.',
    url: 'https://github.com/MonsterFlick/Fin-Read',
    github: 'https://github.com/MonsterFlick/Fin-Read',
    image: '/fin-read-optimized.webp',
    stats: [
      { label: 'Privacy', value: '100% Local' },
      { label: 'Regex Accuracy', value: '99.4%' },
      { label: 'Bank Formats', value: '30+ Banks' },
    ],
    techStack: ['Kotlin / Android', 'Jetpack Compose', 'Room DB', 'Regex Engine'],
    problemStatement:
      'Modern financial tracker apps require intrusive third-party cloud connections and bank account syncs that expose banking credentials.',
    solutionDetails: [
      'Built a high-performance local regex parser trained on 30+ major Indian bank SMS notification syntaxes.',
      'Stores all transactions in an encrypted local Room Database with biometric device-level locks.',
      'Generates automated monthly spending graphs and budget alerts without emitting a single byte over the network.',
    ],
    codeSpecimen: {
      filename: 'SmsTransactionParser.kt',
      language: 'kotlin',
      code: `class SmsTransactionParser {
    fun parse(smsBody: String): Transaction? {
        val amount = AMOUNT_REGEX.find(smsBody)?.groupValues?.get(1)?.toDoubleOrNull() ?: return null
        val merchant = MERCHANT_REGEX.find(smsBody)?.groupValues?.get(1) ?: "Unknown"
        return Transaction(amount = amount, entity = merchant, timestamp = System.currentTimeMillis())
    }
}`,
    },
  },
  {
    id: 'gitfool',
    name: 'GitFool',
    edition: 'Edition V · Distributed Web',
    category: 'Distributed Web',
    purpose: 'High-performance edge-rendered publication platform sourced straight from GitHub markdown repositories.',
    feature: 'Sub-30ms TTFB worldwide with automated markdown compilation and SEO tag generation.',
    url: 'https://blogs.omthakur.in',
    github: 'https://github.com/MonsterFlick',
    image: '/gitfool-optimized.webp',
    stats: [
      { label: 'TTFB', value: '< 28ms' },
      { label: 'Data Source', value: 'GitHub API' },
      { label: 'Runtime', value: 'Cloudflare Edge' },
    ],
    techStack: ['Next.js', 'Cloudflare Workers', 'Edge Runtime', 'Tailwind CSS', 'MDX'],
    problemStatement:
      'Traditional headless CMS setups add unnecessary complexity, cold starts, and database subscription costs for developer publications.',
    solutionDetails: [
      'Leveraged GitHub repository webhooks to trigger instant ISR cache revalidation at Cloudflare edge nodes.',
      'Engineered an on-the-fly syntax highlighter and table-of-contents generator with zero runtime JavaScript bloat.',
      'Achieved a perfect 100/100 Google Lighthouse score across Performance, SEO, and Accessibility.',
    ],
    codeSpecimen: {
      filename: 'edge-fetcher.ts',
      language: 'typescript',
      code: `export const runtime = 'edge';

export async function fetchMarkdownPost(slug: string): Promise<PostRecord> {
  const raw = await fetch(\`https://raw.githubusercontent.com/MonsterFlick/articles/main/\${slug}.md\`, {
    headers: { Authorization: \`Bearer \${process.env.GITHUB_TOKEN}\` },
    next: { revalidate: 3600 }
  });
  return parseMarkdownContent(await raw.text());
}`,
    },
  },
];

export const SKILL_SPECIMENS: SkillItem[] = [
  {
    name: 'Node.js & Express',
    level: '98% Proficiency',
    category: 'Backend & Concurrency',
    experience: '3+ Years',
    specimenNote: 'Event-loop optimization, asynchronous stream pipelines, and clustering.',
  },
  {
    name: 'REST & GraphQL APIs',
    level: '95% Proficiency',
    category: 'Backend & Concurrency',
    experience: '3+ Years',
    specimenNote: 'Strict API contracts, schema federation, rate limiting, and RBAC authentication.',
  },
  {
    name: 'WebSockets & Real-time',
    level: '90% Proficiency',
    category: 'Backend & Concurrency',
    experience: '2+ Years',
    specimenNote: 'Low-latency bidirectional socket channels, pub/sub broadcasting, and presence.',
  },
  {
    name: 'Python Systems',
    level: '88% Proficiency',
    category: 'Languages & Protocols',
    experience: '3+ Years',
    specimenNote: 'FastAPI microservices, concurrency with AsyncIO, data processing scripts.',
  },
  {
    name: 'Go & Rust Explorations',
    level: '82% Proficiency',
    category: 'Languages & Protocols',
    experience: '1+ Years',
    specimenNote: 'High-throughput network proxies, goroutine worker pools, memory safety.',
  },
  {
    name: 'PostgreSQL & Supabase',
    level: '94% Proficiency',
    category: 'Databases & Storage',
    experience: '3+ Years',
    specimenNote: 'Advanced index tuning, row-level security (RLS), ACID transaction isolation.',
  },
  {
    name: 'Redis In-Memory Store',
    level: '92% Proficiency',
    category: 'Databases & Storage',
    experience: '2+ Years',
    specimenNote: 'Distributed locks, Redis streams, caching layers, token bucket rate limiters.',
  },
  {
    name: 'MongoDB & NoSQL',
    level: '88% Proficiency',
    category: 'Databases & Storage',
    experience: '2+ Years',
    specimenNote: 'Document aggregation pipelines, sharding keys, geospatial queries.',
  },
  {
    name: 'Docker & Containerization',
    level: '90% Proficiency',
    category: 'Infrastructure & Cloud',
    experience: '2+ Years',
    specimenNote: 'Multi-stage lean Dockerfiles, docker-compose orchestration, container networking.',
  },
  {
    name: 'AWS & Cloudflare Edge',
    level: '86% Proficiency',
    category: 'Infrastructure & Cloud',
    experience: '2+ Years',
    specimenNote: 'S3, Lambda, CloudFront distributions, and Cloudflare Workers runtime.',
  },
  {
    name: 'Linux Kernel & Shell',
    level: '92% Proficiency',
    category: 'Infrastructure & Cloud',
    experience: '4+ Years',
    specimenNote: 'Bash scripting, systemd service daemon management, TCP socket inspection.',
  },
  {
    name: 'Auth, RBAC & Cryptography',
    level: '94% Proficiency',
    category: 'Backend & Concurrency',
    experience: '3+ Years',
    specimenNote: 'JWT rotation, bcrypt/argon2 hashing, OAuth2 PKCE flows, hardware token validation.',
  },
];

export const CAREER_CHRONOLOGY: CareerEntry[] = [
  {
    company: 'CIARL',
    role: 'Software Developer (Backend & Secure Systems)',
    period: '2024 — Present',
    location: 'Mumbai, India',
    classification: 'Proprietary · NDA Protected',
    description:
      'Engineered high-security Node.js backend infrastructure, role-based access control systems, internal administration dashboards, and hardware integration endpoints.',
    deliverables: [
      'Built a resilient Node.js microservice architecture handling hardware sensor ingestion.',
      'Designed granular role-based access control (RBAC) schemas protecting proprietary data.',
      'Architected internal telemetry dashboards displaying sub-second metrics for operational teams.',
    ],
    techUsed: ['Node.js', 'Express', 'PostgreSQL', 'WebSockets', 'Hardware Serial APIs', 'Docker'],
  },
  {
    company: 'Sumeru Technology Solutions',
    role: 'Software Development Engineering (SDE) Intern',
    period: '2024',
    location: 'Remote',
    classification: 'Production Internship',
    description:
      'Specialized in backend performance engineering, migrating fragile cron job schedules to scalable Redis message queues, and researching Supabase Row-Level Security (RLS).',
    deliverables: [
      'Migrated legacy monolithic cron executions to an asynchronous queue worker system (BullMQ/Redis), eliminating API timeout errors.',
      'Designed and benchmarked RESTful API endpoints for client applications with optimized SQL queries.',
      'Conducted security research into Supabase RLS policies to safeguard multi-tenant datasets.',
    ],
    techUsed: ['Node.js', 'PostgreSQL', 'Supabase', 'Redis / BullMQ', 'REST APIs'],
  },
  {
    company: 'Bhimrao Pradhan College (Mumbai University)',
    role: 'Assistant Professor (Volunteer)',
    period: 'June 2024 — August 2024',
    location: 'Mumbai, India',
    classification: 'Academic Volunteer',
    description:
      'Delivered core computer science and information technology curriculum to B.Sc. IT undergraduates, mentoring students on software architecture and system design.',
    deliverables: [
      'Taught core modules in Database Management Systems, Data Structures, and Web Technologies.',
      'Conducted hands-on workshops on Git version control and modern API design.',
    ],
    techUsed: ['DBMS', 'Data Structures', 'C++', 'System Design', 'Pedagogy'],
  },
];

export const ACADEMIC_HONORS: AcademicHonor[] = [
  {
    id: 1,
    title: 'First Rank — B.Sc. Information Technology',
    organization: 'Sonubhau Baswant College, Mumbai University',
    description: 'Secured the 1st Rank across the entire graduating B.Sc. IT cohort academically with distinction.',
    date: 'April 2024',
    badge: 'Rank I · Gold Distinction',
  },
  {
    id: 2,
    title: 'Data Science Training Certification',
    organization: 'Internshala Trainings',
    description: 'Completed rigorous professional data science curriculum covering Python, statistical analysis, and machine learning projects.',
    date: '2024',
    verified: true,
    link: 'https://trainings.internshala.com/verify-certificate/?certificate_number=263gl7b3rur',
    linkText: 'Verify Certificate Nº 263gl7b3rur',
    badge: 'Verified Credential',
  },
  {
    id: 3,
    title: 'Academic Assistant Professorship (Volunteer)',
    organization: 'Bhimrao Pradhan College',
    description: 'Recognized for distinguished volunteer faculty service teaching undergraduate Information Technology candidates.',
    date: '2024',
    badge: 'Volunteer Service',
  },
];
