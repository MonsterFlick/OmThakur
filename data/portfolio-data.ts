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
    slug: 'intro',
    title: 'Om Thakur — Overview',
    subtitle: 'Backend Engineer | Distributed Systems | Scalable APIs',
    category: 'Overview',
    plateNumber: 'Chapter 01',
    accent: '#C4604A',
  },
  {
    id: 1,
    slug: 'principles',
    title: 'Core Principles & Performance Metrics',
    subtitle: '15 min → 4 s Queue Sync · ~700 ms GPU WebSocket Pipeline · < 10 ms Stateless SVG API',
    category: 'Engineering Principles',
    plateNumber: 'Chapter 02',
    accent: '#566449',
  },
  {
    id: 2,
    slug: 'digital-commerce',
    title: 'Project 01: Digital Commerce Platform',
    subtitle: 'Dual HMAC-SHA256 Webhook Verification & AES-256-GCM Asset Encryption at Rest',
    category: 'Distributed Systems',
    plateNumber: 'Chapter 03',
    accent: '#C4604A',
  },
  {
    id: 3,
    slug: 'devpic',
    title: 'Project 02: devpic SVG API',
    subtitle: 'Sub-10ms Stateless Mathematical SVG & Geometric Mesh REST API on Edge Runtime',
    category: 'Developer Tooling',
    plateNumber: 'Chapter 04',
    accent: '#7A3B3B',
  },
  {
    id: 4,
    slug: 'agni',
    title: 'Project 03: Agni AI Agent',
    subtitle: 'Local Ollama AI Automation Engine with Command Blacklisting & Repair Loop',
    category: 'AI & Automation',
    plateNumber: 'Chapter 05',
    accent: '#C4604A',
  },
  {
    id: 5,
    slug: 'fin-read',
    title: 'Project 04: Fin Read',
    subtitle: 'Offline-First Android Finance Tracker with Room Database & Supabase Sync',
    category: 'Mobile Systems',
    plateNumber: 'Chapter 06',
    accent: '#566449',
  },
  {
    id: 6,
    slug: 'gitfool',
    title: 'Project 05: GitFool',
    subtitle: 'Edge-Runtime Markdown Engine Powered by GitHub Repositories',
    category: 'Distributed Web',
    plateNumber: 'Chapter 07',
    accent: '#7A3B3B',
  },
  {
    id: 7,
    slug: 'skills',
    title: 'Technical Skills & Architecture Stack',
    subtitle: 'TypeScript, Python, PostgreSQL, Qdrant, Flexbase Queues & Self-Hosted Infra',
    category: 'Technical Stack',
    plateNumber: 'Chapter 08',
    accent: '#C4604A',
  },
  {
    id: 8,
    slug: 'experience',
    title: 'Work Experience & History',
    subtitle: 'Krishora Technologies, CIARL & Sumeru Technology Solutions',
    category: 'Career History',
    plateNumber: 'Chapter 09',
    accent: '#566449',
  },
  {
    id: 9,
    slug: 'contact',
    title: 'Education, Honors & Contact',
    subtitle: 'University First Rank (CGPA 8.55/10), Data Science Credentials & Contact',
    category: 'Education & Contact',
    plateNumber: 'Chapter 10',
    accent: '#632F2F',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'digital-commerce',
    name: 'Digital Commerce & Entitlement Platform',
    edition: 'Edition I · Cryptographic Commerce',
    category: 'Distributed Web',
    purpose: 'Digital commerce platform with dual payment verification and encrypted digital asset access control.',
    feature: 'Dual-verification checkout (sync API + HMAC-SHA256 webhook) and AES-256-GCM encryption at rest with randomized IVs.',
    url: 'https://store.sowebuild.in',
    github: 'https://github.com/MonsterFlick',
    image: '/terminal-optimized.webp',
    stats: [
      { label: 'Encryption', value: 'AES-256-GCM' },
      { label: 'Webhook Auth', value: 'HMAC-SHA256' },
      { label: 'Key Derivation', value: 'SHA-256 + IV' },
    ],
    techStack: ['Next.js 15', 'TypeScript', 'Supabase', 'Razorpay', 'AES-256-GCM', 'HMAC-SHA256'],
    problemStatement:
      'Digital commerce platforms often suffer from race conditions between synchronous checkout callbacks and webhooks, as well as plaintext exposure of digital products in storage.',
    solutionDetails: [
      'Built a digital commerce platform with payment verification and asset-access control.',
      'Implemented dual-verification checkout combining synchronous API verification with HMAC-SHA256 webhook verification.',
      'Encrypted digital products at rest using AES-256-GCM authenticated encryption, utilizing SHA-256 key derivation and randomized IVs to prevent plaintext exposure.',
    ],
    codeSpecimen: {
      filename: 'entitlement-crypto.ts',
      language: 'typescript',
      code: `export function verifyAndDecryptAsset(payload: string, sig: string, cipher: Buffer, iv: Buffer, tag: Buffer) {
  const hmac = crypto.createHmac('sha256', process.env.RAZORPAY_WEBHOOK_SECRET!).update(payload).digest('hex');
  if (!crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(hmac))) throw new Error('Invalid HMAC');
  const key = crypto.createHash('sha256').update(process.env.ASSET_MASTER_SECRET!).digest();
  const decipher = crypto.createDecipheriv('aes-256-gcm', key, iv);
  decipher.setAuthTag(tag);
  return Buffer.concat([decipher.update(cipher), decipher.final()]);
}`,
    },
  },
  {
    id: 'devpic',
    name: 'devpic — Stateless Mathematical SVG API',
    edition: 'Edition II · Stateless Edge API',
    category: 'Low-Level Tools',
    purpose: 'Open-source, stateless REST API that generates deterministic SVG patterns, geometric meshes, and UI assets using mathematical algorithms.',
    feature: 'Achieved sub-10 ms response times on Next.js Edge Runtime with no database or persistent storage dependencies.',
    url: 'https://github.com/MonsterFlick/devpic',
    github: 'https://github.com/MonsterFlick/devpic',
    image: '/monsterfps-optimized.webp',
    stats: [
      { label: 'Response Time', value: '< 10 ms' },
      { label: 'Storage Deps', value: 'Zero (Stateless)' },
      { label: 'Runtime', value: 'Next.js Edge' },
    ],
    techStack: ['TypeScript', 'Next.js Edge Runtime', 'REST API', 'Mathematical SVG', 'Deterministic Algorithms'],
    problemStatement:
      'Generating dynamic geometric placeholders, avatars, and UI meshes typically relies on heavy image rendering servers or database-backed storage buckets.',
    solutionDetails: [
      'Built an open-source, stateless REST API that generates deterministic SVG patterns, geometric meshes, and UI assets using mathematical algorithms.',
      'Achieved sub-10 ms response times with no database or persistent storage dependencies.',
      'Designed zero-side-effect endpoints optimized for instant edge execution.',
    ],
    codeSpecimen: {
      filename: 'svg-engine.ts',
      language: 'typescript',
      code: `export const runtime = 'edge';

export async function GET(req: Request): Promise<Response> {
  const { searchParams } = new URL(req.url);
  const seed = searchParams.get('seed') ?? 'default';
  const svg = generateDeterministicMeshSVG(seed);
  return new Response(svg, {
    headers: { 'Content-Type': 'image/svg+xml', 'Cache-Control': 'public, max-age=31536000, immutable' },
  });
}`,
    },
  },
  {
    id: 'agni',
    name: 'Agni — Local AI Automation Agent',
    edition: 'Edition III · Autonomous AI',
    category: 'Autonomous AI',
    purpose: 'Offline automation agent that translates natural-language instructions into structured Windows actions.',
    feature: 'Command blacklisting, destructive operation protection, execution logging, script caching, and an automated error-driven repair loop.',
    url: 'https://github.com/MonsterFlick/Agni',
    github: 'https://github.com/MonsterFlick/Agni',
    image: '/agni-optimized.webp',
    stats: [
      { label: 'Model', value: 'Local Ollama' },
      { label: 'Safety Gate', value: 'Command Blacklist' },
      { label: 'Recovery', value: 'Auto Repair Loop' },
    ],
    techStack: ['Python', 'Ollama', 'PowerShell', 'Windows APIs', 'Script Caching'],
    problemStatement:
      'Autonomous desktop AI assistants often hallucinate destructive shell commands or fail when generated scripts encounter local environment errors.',
    solutionDetails: [
      'Developed an offline automation agent that translates natural-language instructions into structured Windows actions.',
      'Built an authenticated API that processes user intent and executes permitted local commands.',
      'Implemented command blacklisting, protection against destructive operations, execution logging, script caching, and an automated repair loop driven by execution errors.',
    ],
    codeSpecimen: {
      filename: 'safety_evaluator.py',
      language: 'python',
      code: `class SecurityBoundary:
    BLOCKED_PATTERNS = [r"rm\\s+-rf", r"del\\s+/f", r"format\\s+", r"Remove-Item.*-Recurse"]
    
    def evaluate_payload(self, plan: ExecutionPlan) -> bool:
        return not any(re.search(p, plan.command, re.I) for p in self.BLOCKED_PATTERNS)`,
    },
  },
  {
    id: 'fin-read',
    name: 'Fin Read — Offline-First Finance Tracker',
    edition: 'Edition IV · Mobile Engine',
    category: 'Mobile Systems',
    purpose: 'Android finance application that extracts transaction information from SMS and payment notifications to automate expense categorization.',
    feature: 'Offline-first persistence with Room Database, cloud synchronization with Supabase, and Material 3 interface.',
    url: 'https://github.com/MonsterFlick/Fin-Read',
    github: 'https://github.com/MonsterFlick/Fin-Read',
    image: '/fin-read-optimized.webp',
    stats: [
      { label: 'Architecture', value: 'Offline-First' },
      { label: 'Local Store', value: 'Room Database' },
      { label: 'Cloud Sync', value: 'Supabase' },
    ],
    techStack: ['Kotlin', 'Android SDK', 'Room Database', 'Supabase', 'Material 3'],
    problemStatement:
      'Manual expense tracking is tedious, while cloud-only finance apps fail during intermittent connectivity or require intrusive bank credential linking.',
    solutionDetails: [
      'Built an Android finance application that extracts transaction information from SMS and payment notifications to automate expense categorization.',
      'Implemented offline-first persistence with Room Database and cloud synchronization with Supabase.',
      'Developed the interface using Material 3.',
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
      { label: 'Runtime', value: 'Next.js Edge' },
    ],
    techStack: ['Next.js', 'Edge Runtime', 'TypeScript', 'Tailwind CSS', 'MDX'],
    problemStatement:
      'Traditional headless CMS setups add unnecessary complexity, cold starts, and database subscription costs for developer publications.',
    solutionDetails: [
      'Leveraged GitHub repository webhooks to trigger instant cache revalidation at edge nodes.',
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
    name: 'TypeScript, JavaScript, Node.js & Deno',
    level: '98% Proficiency',
    category: 'Languages & Protocols',
    experience: 'Core Stack',
    specimenNote: 'Node.js/PM2 service routers, Deno Edge Functions, Next.js Edge Runtime, and TypeScript type-inference debugging.',
  },
  {
    name: 'Python, Pipecat & CUDA Pipelines',
    level: '95% Proficiency',
    category: 'Languages & Protocols',
    experience: '~700 ms Turnaround',
    specimenNote: 'Low-latency Python processing pipelines integrating Pipecat, Exotel WebSockets, model inference, and CUDA GPUs.',
  },
  {
    name: 'SQL & Bash / PowerShell',
    level: '94% Proficiency',
    category: 'Languages & Protocols',
    experience: 'Production Ops',
    specimenNote: 'Complex relational queries, Linux shell automation, Windows API scripting, and automated command execution.',
  },
  {
    name: 'Flexbase Message Queues & Async',
    level: '96% Proficiency',
    category: 'Backend & Concurrency',
    experience: '15 min → 4 s Sync',
    specimenNote: 'Replaced polling-based cron workflows with Flexbase message queues, reducing sync time by ~99.5%.',
  },
  {
    name: 'REST APIs, WebSockets & Matrix',
    level: '95% Proficiency',
    category: 'Backend & Concurrency',
    experience: 'Real-Time Pipelines',
    specimenNote: 'Bidirectional Exotel WebSockets, stateless sub-10ms REST APIs, and Matrix real-time chat, voice, and video apps.',
  },
  {
    name: 'Webhooks, RBAC & AES-256-GCM',
    level: '95% Proficiency',
    category: 'Backend & Concurrency',
    experience: 'Security & Auth',
    specimenNote: 'Dual checkout verification with HMAC-SHA256 webhooks, role-based access control (RBAC), and AES-256-GCM encryption.',
  },
  {
    name: 'PostgreSQL, Supabase & RLS',
    level: '95% Proficiency',
    category: 'Databases & Storage',
    experience: 'Primary Data Layer',
    specimenNote: 'Production outage RCA, Drizzle ORM integration with Supabase Row-Level Security (RLS), and MySQL.',
  },
  {
    name: 'Qdrant Vector DB & RAG Pipelines',
    level: '92% Proficiency',
    category: 'Databases & Storage',
    experience: 'Sevak AI & Legal RAG',
    specimenNote: 'Qdrant vector search with nomic-embed-text embeddings, semantic retrieval, and citation-backed legal RAG.',
  },
  {
    name: 'SQLite, Room DB & Redis',
    level: '92% Proficiency',
    category: 'Databases & Storage',
    experience: 'Offline-First Storage',
    specimenNote: 'Kotlin/Java Android encrypted SQLite background queues and Room Database preventing field data loss.',
  },
  {
    name: 'Docker, Linux, Nginx & PM2',
    level: '92% Proficiency',
    category: 'Infrastructure & Cloud',
    experience: 'Self-Hosted Infra',
    specimenNote: 'Deployed and maintained Dograh, Mailcow, Nginx, Cloudflare SSL, PM2 process clusters, and Linux servers.',
  },
  {
    name: 'Deno Edge & Next.js Edge Runtime',
    level: '93% Proficiency',
    category: 'Infrastructure & Cloud',
    experience: '< 10 ms Stateless',
    specimenNote: 'Developed and tested backend APIs using Deno Edge Functions, Next.js Edge Runtime, and Postman.',
  },
  {
    name: 'Ollama & Prompt Orchestration',
    level: '91% Proficiency',
    category: 'Infrastructure & Cloud',
    experience: 'Local AI Agents',
    specimenNote: 'Local LLM inference with Ollama, vector embeddings, and automated execution error repair loops.',
  },
];

export const CAREER_CHRONOLOGY: CareerEntry[] = [
  {
    company: 'Krishora Technologies',
    role: 'Founding Software Engineer',
    period: 'Apr 2026 — Present',
    location: 'Mumbai, India',
    classification: 'Founding Engineer · Full-Time',
    description:
      'Engineered low-latency Python/CUDA WebSocket voice pipelines, built the Node.js/PM2 vector retrieval router for Sevak AI, and deployed self-hosted production infrastructure.',
    deliverables: [
      'Engineered a low-latency Python processing pipeline integrating Pipecat, Exotel WebSockets, model inference, and CUDA-accelerated processing, achieving approximately 700 ms turnaround.',
      'Built the Node.js/PM2 service router for Sevak AI, using Qdrant and the nomic-embed-text embedding model for retrieval.',
      'Deployed and maintained infrastructure including Dograh, Mailcow, Nginx, Cloudflare SSL, and a ProGuard-protected Expo application.',
    ],
    techUsed: ['Python', 'Pipecat', 'Exotel WebSockets', 'CUDA', 'Node.js / PM2', 'Qdrant', 'nomic-embed-text', 'Dograh', 'Mailcow', 'Nginx', 'Cloudflare SSL', 'Expo / ProGuard'],
  },
  {
    company: 'Cyber Intelligence and Research Lab (CIARL)',
    role: 'Software Developer',
    period: 'Aug 2025 — Apr 2026',
    location: 'Thane, India',
    classification: 'Secure Systems & Legal RAG',
    description:
      'Developed offline-first Android background services with encrypted SQLite queues, React/PostgreSQL RBAC applications, citation-backed legal RAG pipelines, and Matrix real-time communication systems.',
    deliverables: [
      'Developed Kotlin/Java Android background services with encrypted SQLite queues to prevent field data loss during intermittent connectivity.',
      'Implemented secure backend integrations for managed environments.',
      'Developed React/PostgreSQL applications with authentication, role-based access control (RBAC), and user management.',
      'Built a legal-domain RAG pipeline with document ingestion, semantic retrieval, and citation-backed responses.',
      'Developed Matrix-based real-time communication applications supporting chat, voice, and video.',
    ],
    techUsed: ['Kotlin / Java', 'Encrypted SQLite', 'React', 'PostgreSQL', 'RBAC', 'Legal RAG', 'Matrix Protocol', 'Background Services'],
  },
  {
    company: 'Sumeru Technology Solutions Pvt. Ltd.',
    role: 'Software Development Engineer Intern',
    period: 'Aug 2024 — Feb 2025',
    location: 'Bengaluru, India',
    classification: 'Production Internship',
    description:
      'Replaced polling-based cron workflows with Flexbase message queues (reducing sync time from 15 minutes to 4 seconds), participated in production database crash RCA, and migrated legacy PHP to TypeScript/Deno.',
    deliverables: [
      'Replaced polling-based cron workflows with the Flexbase message-queue service, reducing synchronization time from 15 minutes to 4 seconds (approximately 99.5%).',
      'Participated in the root cause analysis of a production database crash, helping identify that a payment-related cron job repeatedly retried failed requests, producing simultaneous request bursts that overwhelmed the database.',
      'Migrated legacy PHP functionality to JavaScript and TypeScript; developed and tested backend APIs using Deno Edge Functions and Postman.',
      'Debugged and resolved Deno/TypeScript type-inference problems.',
      'Investigated Drizzle ORM integration with Supabase Row-Level Security (RLS).',
      'Led a team of four in evaluating Novu against a custom notification-system implementation.',
    ],
    techUsed: ['TypeScript', 'JavaScript', 'Flexbase Message Queues', 'Deno Edge Functions', 'Supabase RLS', 'Drizzle ORM', 'Novu', 'Postman'],
  },
  {
    company: 'Bhimrao Pradhan College, University of Mumbai',
    role: 'Assistant Professor (Volunteer)',
    period: 'Jun 2024 — Aug 2024',
    location: 'Mumbai, India',
    classification: 'Academic Volunteering',
    description:
      'Taught core subjects to B.Sc. IT students; mentored students and created structured educational content.',
    deliverables: [
      'Taught core subjects to B.Sc. IT students.',
      'Mentored students and created structured educational content.',
    ],
    techUsed: ['B.Sc. IT Curriculum', 'Database Systems', 'Software Architecture', 'Mentorship'],
  },
];

export const ACADEMIC_HONORS: AcademicHonor[] = [
  {
    id: 1,
    title: 'First Rank — B.Sc. in Information Technology (CGPA: 8.55/10)',
    organization: 'Sonubhau Baswant College, University of Mumbai',
    description: 'Graduated with First Rank in the college (CGPA: 8.55/10) and led the final-year project team as project head.',
    date: 'Aug 2021 – Apr 2024',
    badge: 'Rank I · CGPA 8.55/10',
  },
  {
    id: 2,
    title: 'Data Science Training Certification',
    organization: 'Internshala',
    description: 'Completed professional Data Science training covering Python, statistical analysis, and data workflows.',
    date: 'Oct 2023',
    verified: true,
    link: 'https://trainings.internshala.com/verify-certificate/?certificate_number=263gl7b3rur',
    linkText: 'Verify Certificate ID 263gl7b3rur',
    badge: 'Verified · 263gl7b3rur',
  },
  {
    id: 3,
    title: 'Assistant Professor (Volunteer)',
    organization: 'Bhimrao Pradhan College, University of Mumbai',
    description: 'Taught core subjects to B.Sc. IT students; mentored students and created structured educational content.',
    date: 'Jun – Aug 2024',
    badge: 'Volunteer Service',
  },
];

export interface ArchitectureBenchmark {
  domain: string;
  conventionalApproach: string;
  engineeredArchitecture: string;
  measuredOutcome: string;
  verificationContext: string;
}

export const ARCHITECTURE_BENCHMARKS: ArchitectureBenchmark[] = [
  {
    domain: 'Database & Queue Synchronization',
    conventionalApproach: 'Scheduled 15-minute cron polling jobs triggering simultaneous retry bursts',
    engineeredArchitecture: 'Event-driven Flexbase asynchronous message queues with idempotent worker consumers',
    measuredOutcome: '15 min → 4 s (~99.5% latency reduction)',
    verificationContext: 'Sumeru Technology Solutions (Production Migration)',
  },
  {
    domain: 'Real-Time AI Voice Streaming',
    conventionalApproach: 'Sequential HTTP REST transcription and cloud TTS round-trips (>2,000 ms)',
    engineeredArchitecture: 'Bidirectional Exotel WebSockets + Python Pipecat + CUDA GPU inference pipeline',
    measuredOutcome: '~700 ms end-to-end voice turnaround',
    verificationContext: 'Krishora Technologies (Founding Software Engineer)',
  },
  {
    domain: 'Dynamic Vector & SVG Generation',
    conventionalApproach: 'Heavyweight headless browser / Canvas rendering with object storage buckets',
    engineeredArchitecture: 'devpic stateless mathematical SVG REST API on Next.js Edge Runtime',
    measuredOutcome: '< 10 ms TTFB · Zero storage dependencies',
    verificationContext: 'Open-Source Edge Tooling (github.com/MonsterFlick/devpic)',
  },
  {
    domain: 'Digital Commerce & Asset Security',
    conventionalApproach: 'Single-path browser callback verification and plaintext cloud bucket storage',
    engineeredArchitecture: 'Dual checkout verification (Sync API + HMAC-SHA256 webhook) & AES-256-GCM at rest',
    measuredOutcome: 'Zero plaintext exposure · Timing-safe auth',
    verificationContext: 'Digital Commerce Platform (store.sowebuild.in)',
  },
  {
    domain: 'Mobile Field Data & Expense Sync',
    conventionalApproach: 'Network-dependent REST mutations prone to packet loss during intermittent 4G/5G',
    engineeredArchitecture: 'Offline-first Android Room Database / encrypted SQLite queues + Supabase sync',
    measuredOutcome: '100% offline availability · Zero packet loss',
    verificationContext: 'CIARL & Fin Read Android Engine',
  },
];

export interface EngineeringFaq {
  question: string;
  answer: string;
  category: string;
}

export const ENGINEERING_FAQS: EngineeringFaq[] = [
  {
    category: 'Identity & Core Expertise',
    question: 'Who is Om Thakur and what backend systems does he specialize in?',
    answer:
      'Om Thakur is a Backend and Distributed Systems Engineer based in Mumbai, India, specializing in high-concurrency APIs, asynchronous message queues, real-time WebSocket pipelines, and database reliability. Building primarily with TypeScript, Python, Node.js, Deno, PostgreSQL, and Qdrant, he currently serves as Founding Software Engineer at Krishora Technologies and graduated First Rank in B.Sc. IT from the University of Mumbai (CGPA 8.55/10).',
  },
  {
    category: 'Queue Architecture & RCA',
    question: 'How did Om Thakur reduce queue synchronization latency from 15 minutes to 4 seconds?',
    answer:
      'At Sumeru Technology Solutions, Om Thakur replaced legacy 15-minute polling cron workflows with an event-driven Flexbase message-queue architecture. This eliminated periodic polling delays and simultaneous retry bursts that had previously overwhelmed PostgreSQL connection pools during payment failures, cutting end-to-end data synchronization time from 15 minutes to 4 seconds (~99.5% reduction).',
  },
  {
    category: 'Real-Time AI & WebSockets',
    question: 'How does Om Thakur’s 700ms Python and CUDA WebSocket voice pipeline work?',
    answer:
      'At Krishora Technologies, Om Thakur engineered a low-latency voice processing pipeline that streams bidirectional audio over Exotel WebSockets into a Python Pipecat orchestration layer backed by self-hosted CUDA GPUs. By processing audio frames and model inference in a continuous asynchronous stream rather than blocking REST requests, the system achieves an approximate 700 ms turnaround.',
  },
  {
    category: 'Cryptographic Security',
    question: 'How does the Digital Commerce & Entitlement Platform prevent webhook race conditions and plaintext exposure?',
    answer:
      'The Digital Commerce & Entitlement Platform (store.sowebuild.in) uses dual-verification checkout that reconciles synchronous Razorpay API confirmations with timing-safe HMAC-SHA256 webhook signatures. All digital products are encrypted at rest using authenticated AES-256-GCM with SHA-256 key derivation and randomized initialization vectors (IVs), ensuring zero plaintext exposure in storage.',
  },
  {
    category: 'Open Source & Systems',
    question: 'What open-source developer tools and offline-first mobile apps has Om Thakur built?',
    answer:
      'Om Thakur created devpic (an open-source, sub-10ms stateless mathematical SVG REST API on Next.js Edge Runtime), Agni (an offline Windows AI automation agent powered by local Ollama models with command blacklisting and self-repair loops), Fin Read (an offline-first Android expense tracker using Kotlin, Room Database SMS parsing, and Supabase sync), and GitFool (a sub-30ms edge markdown publication engine).',
  },
  {
    category: 'Hiring & Availability',
    question: 'Is Om Thakur available for Backend Engineer and Distributed Systems roles?',
    answer:
      'Yes, Om Thakur is actively available for full-time Backend Engineer, Distributed Systems Engineer, and Founding Engineer roles, as well as high-concurrency architecture consulting. Based in Mumbai, India (IST / UTC+5:30), he can be reached directly at omthakur2366@gmail.com, via LinkedIn (linkedin.com/in/omthakur2366), or through his verified resume at omthakur.in/resume.',
  },
];

