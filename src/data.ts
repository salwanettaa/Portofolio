import { Project, EducationItem, SkillCategory, LeadershipItem, CaseStudy } from './types';

export const projects: Project[] = [
  {
    id: 'doorlock',
    name: 'Anti-Replay Attack Smart Door Lock',
    category: 'IoT Security & Cryptographic Access Control System',
    role: 'Project Leader',
    purposeHook: 'A hardware-integrated smart lock prototype engineered with rolling counter protocols, AES-128 CTR encryption, and HMAC-SHA256 validation to defend smart locks against wireless Sub-GHz (433.92 MHz) signal interception and replay attacks.',
    bullets: [
      'Embedded Firmware (C/C++ & ESP32): Engineered custom receiver and transmitter firmware using the Arduino framework, SPI-based CC1101 Sub-GHz transceivers, mbedtls cryptographic engines, and RF burst retransmission mechanisms for link reliability.',
      'Full-Stack Monitoring Infrastructure: Developed an Express.js & Node.js backend integration server paired with a persistent MySQL database schema (INCIDENT_LOG, LIVE_TELEMETRY, MONITOR_STATE, EXECUTED_QUERY).',
      'High-Fidelity Dashboard Console: Built a React 19 + TypeScript monitoring interface (Vite, Tailwind CSS, Framer Motion) providing live lock state visualization (LOCKED / UNLOCKED), link health monitoring (CONNECTED / DISCONNECTED), hex payload decoders, and security audit log feeds.'
    ],
    features: [
      'Rolling Counter & Cryptographic Authentication Engine: Replaces static key-fob signals with dynamic sequence numbers encrypted using AES-128 (CTR mode) and authenticated via SHA-256 HMAC tags.',
      'Dual-Mode Security Architecture: Supports real-time switching between legacy STATIC protocol mode (vulnerable baseline testing) and ROLLING protocol mode (secure production defense).',
      'Real-Time Telemetry & WebSocket Streaming Pipeline: Streams 28-byte raw Sub-GHz RF payloads, AES ciphertext blocks, and HMAC verification tags from ESP32 hardware to a web dashboard over Wi-Fi and WebSockets.',
      'Automated Replay Attack Defense & Actuator Control: Instantly blocks stale or repeated sequence tokens, triggers visual alert indicators on the web console, and controls a physical servo deadbolt actuator with automatic 5-second relocking.'
    ],
    securityImplementation: [
      'Rolling Counter Sequence Verification: Implemented server-side and hardware-side verification enforcing sequence checks to neutralize recorded radio signal playbacks (SDR / CC1101 captures).',
      'AES-128 CTR Encryption & HMAC-SHA256 Authenticity: Encrypted 32-bit sequence nonces with counter-derived initialization vectors (IVs) and validated payload authenticity via SHA-256 HMAC tags using pre-shared symmetric keys.',
      'Resilient Non-Blocking Wi-Fi Logging & Auto-Relock: Implemented non-blocking HTTP POST telemetry logging to ensure local door locking/unlocking operations remain uninterrupted during Wi-Fi latency, backed by a server-managed 5-second automatic deadbolt relock timer.'
    ],
    techStack: [
      'C/C++', 'Arduino Core', 'ESP32', 'CC1101 RF', 'AES-128 (CTR)', 'HMAC-SHA256', 'Node.js', 'Express.js', 'WebSockets', 'MySQL', 'React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion'
    ],
    cybersecurityNote: 'Engineered with rolling counter protocols, AES-128 CTR encryption, and HMAC-SHA256 validation to defend smart locks against wireless Sub-GHz signal replay attacks.',
    image: 'smartlock',
    demoUrl: '',
    githubUrl: 'https://github.com/BOOTCAMP-20253/Smart-Door-Lock-Monitoring-Web',
    domains: ['iot', 'cybersecurity'],
    images: [
      '/images/projects/iot/figma.png'
    ]
  },
  {
  id: 'nebwork',
  name: 'Nebwork Knowledge Platform',
  category: 'Enterprise Knowledge Management & Retention System',
  role: 'Full-Stack Developer',
  purposeHook: 'An interactive web-based knowledge management platform designed to capture, preserve, and retrieve institutional knowledge. The platform optimizes team onboarding and process retention by centralizing work logs, rich-text documentation, and AI-assisted search across distributed teams.',
  bullets: [
    'Interactive Work Log & Rich Text Engine: Developed a full-featured blog and work log management module using Tiptap Editor, supporting rich media handling, version history, and dynamic content tagging for seamless discovery.',
    'RESTful API & Auth Architecture: Designed secure Express.js REST endpoints integrated with MongoDB, enforcing JWT-based authentication, protected routes, and granular role-based access control (RBAC).',
    'AI-Powered Knowledge Retrieval: Integrated an intelligent AI chatbot interface to streamline document search and automate knowledge retrieval across archived institutional assets.'
  ],
  features: [
    'Interactive Work Log & Tiptap Rich Text Editor',
    'AI-Powered Chatbot & Intelligent Search Retrieval',
    'JWT Authentication & Role-Based Access Control (RBAC)',
  ],
  securityImplementation: [
    'Implemented JWT authentication with protected API routing under /api/auth and /api/admin namespaces.',
    'Enforced strict input validation and DOM sanitation using DOMPurify to mitigate Cross-Site Scripting (XSS) in rich-text content.',
    'Secured data persistence layer and RESTful endpoints using token-based session management and environment variable isolation.'
  ],
  techStack: [
    'React 18', 'Vite', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'shadcn/ui', 'Tiptap'
  ],
  cybersecurityNote: 'Secured administrative endpoints and work log submissions using JWT token verification and client-side sanitization to prevent XSS payloads in user-generated content.',
  image: 'nebwork',
  demoUrl: 'https://nebwork.app',
  githubUrl: 'https://github.com/kada-hackathon',
  domains: ['web'],
  images: [
    '/images/projects/nebwork/image (10).png',
    '/images/projects/nebwork/image (11).png',
    '/images/projects/nebwork/image (12).png',
    '/images/projects/nebwork/image (13).png',
  ]
},
  {
    id: 'scholarzpath',
    name: 'ScholarzPath Indonesia',
    category: 'Centralized Scholarship Aggregator & Roadmapping Platform',
    role: 'Lead Technical & Full-Stack Developer',
    purposeHook: 'Coordinated the architectural design and full-stack deployment of "ScholarzPath Indonesia," an intelligent, centralized scholarship aggregator dashboard. The platform automates academic funding discovery for Indonesian students by integrating multi-criteria deadline filtering, real-time localized timeline syncs, and an advanced AI engine providing structured profile-matching, custom application roadmaps, and automated essay feedback.',
    bullets: [
      'AI Integration & Service Engineering: Developed a specialized backend interface leveraging the Groq SDK to process complex, requirement-driven prompts. Engineered stateful automated routines mapping user profile gaps against scholarship criteria to deliver structured JSON outputs for fit scoring, essay reviews, and dynamic 10–15 step preparation roadmaps.',
      'Predictive Re-routing Logic: Authored a robust data rerouting service (rerouteRoadmap) that uses AI to analyze task dependencies. When a user modifies inline dates, the system calculates optimal rescheduling recommendations across the roadmap layer, applying instant single-click updates directly to Firestore.',
      'Data Integrity & State Immutability: Fixed a critical in-place array mutation bug inside the dynamic scholarship deadline and category sorting logic. Enforced proper React state immutability conventions to guarantee highly predictable UI re-renders and optimized data loading workflows.',
      'Timezone & Identifier Standardization: Mitigated cross-device date rendering failures by shifting date formatting protocols from UTC ISO strings to localized calculations (YYYY-MM-DD). Integrated secure token handling via crypto.randomUUID to establish stable, persistent unique identifiers for nested roadmap task nodes.'
    ],
    features: [
      'Centralized Scholarship Aggregator Dashboard',
      'AI-Powered Essay Feedback & Structured Profile-Matching',
      'Dynamic 10–15 Step Preparation Roadmaps',
      'Predictive Re-routing Logic (rerouteRoadmap) via AI dependency analysis'
    ],
    securityImplementation: [
      'Access Control & Premium Workflow: Built a rigid three-tier Role-Based Access Control (RBAC) system separating Free, Premium, and Admin profiles via advanced Firestore Security Rules.',
      'Developed the admin validation pipeline managing proof-of-payment URL processing, manual role upgrades, and automated text-carving models for raw scholarship entries.',
      'Timezone & Identifier Standardization: Mitigated cross-device date rendering failures by shifting date formatting protocols from UTC ISO strings to localized calculations (YYYY-MM-DD).'
    ],
    techStack: [
      'React 19', 'TypeScript', 'Vite', 'React Router', 'Tailwind CSS', 'Radix UI', 'Framer Motion (framer-motion)',
      'Firebase Auth', 'Cloud Firestore', 'Firebase Storage', 'Groq SDK', 'Llama 3.3 70B', 'Google Calendar API', 'sonner'
    ],
    cybersecurityNote: 'Built rigid three-tier Role-Based Access Control (RBAC) separating Free, Premium, and Admin profiles via advanced Firestore Security Rules.',
    image: 'scholarzpath',
    demoUrl: 'https://scholarz-path.vercel.app/',
    githubUrl: 'https://github.com/sholarz/Scholarz-Path',
    domains: ['web'],
    images: [
      '/images/projects/scholar/image6.png',
      '/images/projects/scholar/image (8).png',
      '/images/projects/scholar/image (9).png'
    ]
  },
  {
    id: 'biometric-auth',
    name: 'Secure Biometric Auth Application',
    category: 'Biometric Security Mobile Application',
    role: 'Mobile Developer & Security Analyst',
    purposeHook: 'Developed a secure biometric authentication application in Flutter, integrating real-time camera previews with on-device face detection and ML inference pipelines. Enhanced data privacy by implementing cryptographic hashing and secure template storage within the authentication services. Configured native Android and iOS environments while writing unit tests to validate the reliability of the cross-platform biometric flows.',
    bullets: [
      'Biometric & Camera Integration: Developed a secure biometric authentication application in Flutter, integrating real-time camera previews with on-device face detection and ML inference pipelines.',
      'Data Privacy & Secure Storage: Enhanced data privacy by implementing cryptographic hashing and secure template storage within the local authentication services.',
      'Cross-Platform Platform Integration: Configured native Android and iOS environments while writing unit tests to validate the reliability of the cross-platform biometric flows.'
    ],
    features: [
      'Real-time Camera Previews & Live Feeds',
      'On-Device Face Detection & ML Inference Pipelines',
      'Cryptographic Hashing & Secure Template Storage',
      'Cross-Platform Native Android & iOS Configurations'
    ],
    securityImplementation: [
      'Enhanced user data privacy by implementing robust cryptographic hashing before local matching.',
      'Implemented isolated template storage utilizing secure native keychains (Keychain for iOS and Keystore for Android).',
      'Built automated unit and integration tests validating platform-specific biometric flow handlers.'
    ],
    techStack: ['Flutter', 'Dart', 'ML Kit', 'Android Native', 'iOS Native', 'Cryptography', 'Secure Storage', 'Unit Testing'],
    cybersecurityNote: 'Implemented on-device cryptographic hashing and isolated biometric template storage using native Android Keystore and iOS Keychain interfaces.',
    image: 'biometric-auth',
    demoUrl: '',
    githubUrl: 'https://github.com/29syarifa/Biometric-project',
    domains: ['mobile', 'cybersecurity'],
    images: [
      '/images/projects/biometric/image (1).png',
      '/images/projects/biometric/image (2).png',
      '/images/projects/biometric/image (3).png'
    ]
  },
  {
    id: 'srm-audit',
    name: 'Full-Stack GRC Platform',
    category: 'Governance, Risk, and Compliance (GRC) Platform',
    role: 'Lead Full-Stack Developer & GRC Engineer',
    purposeHook: 'Build a full-stack GRC platform implementing the NIST Cybersecurity Framework (36 controls) and a direct OWASP Top 10 vulnerability bridge.',
    bullets: [
      'NIST & OWASP Framework Integration: Built a full-stack GRC platform implementing the NIST Cybersecurity Framework (36 controls) and a direct OWASP Top 10 vulnerability bridge using vanilla PHP and MySQL.',
      'Automated Risk Calculation: Engineered automated calculation engines for exposure metrics, CIA (Confidentiality, Integrity, Availability) asset criticality, and mathematical risk-compliance scoring to replace broken manual security audits.',
      'AI Summaries & PDF Reporting: Integrated the Gemini API for automated AI executive summaries alongside Dompdf for real-time risk matrix rendering and compliant audit opinion reporting.'
    ],
    features: [
      'NIST Cybersecurity Framework compliance engine (36 controls)',
      'OWASP Top 10 automated vulnerability bridge',
      'CIA asset criticality & mathematical risk scoring',
      'Gemini AI-powered executive summary & Dompdf report generation'
    ],
    securityImplementation: [
      'Replaced legacy compliance checks with deterministic, database-driven risk calculation algorithms.',
      'Enforced rigorous backend authorization to secure sensitive CIA asset classification logs.',
      'Implemented parameterized MySQL queries to entirely prevent SQL Injection vulnerabilities across GRC reporting tables.'
    ],
    techStack: ['PHP', 'MySQL', 'Gemini API', 'Dompdf', 'Bootstrap', 'JavaScript', 'HTML5', 'CSS3'],
    cybersecurityNote: 'Replaced manual security compliance checks with standardized mathematical calculations mapping NIST and OWASP vulnerabilities.',
    image: 'srm-audit',
    demoUrl: '',
    githubUrl: 'https://github.com/AuditTools/AuditRiskTools',
    domains: ['web', 'cybersecurity'],
    images: [
      '/images/projects/audit/image.png'
    ]
  }
];

export const educationHistory: EducationItem[] = [
  {
    id: 'presuniv',
    source: 'President University',
    duration: '2024 - Present',
    degree: 'Undergraduate Information Technology',
    gpa: '3.87 / 4.00',
    highlights: [
      'Maintained a strong academic standing with a current cumulative GPA of 3.87.',
      'Significantly expanded core IT competencies through extensive practical application and hand-on end-to-end software engineering projects.',
      'Actively demonstrated leadership and structured coordination skills across major campus events, professional exhibitions, and organizational frameworks.'
    ],
    themeColor: 'pink'
  },
  {
    id: 'sma1yogyakarta',
    source: 'SMA Negeri 1 Yogyakarta',
    duration: 'July 2021 – May 2024',
    degree: 'Natural Sciences Major (IPA)',
    gpa: 'Final Grade: 89.7 / 100',
    highlights: [
      'Graduated from SMA Negeri 1 Yogyakarta, specializing in the Natural Sciences (IPA) academic stream.',
      'Built foundational IT and networking competencies through structured IT class modules, practicing basic Python programming, PHP web scripts, and Cisco networking configurations.',
      'Actively demonstrated leadership and administrative coordination skills as the Head of Secretary for the Nila Pangkaja Theatre organization.'
    ],
    themeColor: 'yellow'
  }
];

export const skillCategories: SkillCategory[] = [
  {
    id: 'web-mobile',
    title: 'Web & Mobile Development',
    iconName: 'CodeXml',
    description: 'Developing highly interactive, production-ready interfaces paired with rugged, performant backend engines.',
    colorScheme: {
      bg: 'bg-rose-50/50',
      border: 'border-rose-100',
      badgeBg: 'bg-rose-100/70',
      badgeText: 'text-rose-700',
      accent: 'fill-rose-500 stroke-rose-500'
    },
    skills: [
      { name: 'React / Next.js', level: 95, info: 'Advanced component composition, Custom Hooks, State Engine design.' },
      { name: 'TypeScript', level: 90, info: 'Strict typing structures, Generics, module decoupling.' },
      { name: 'Node.js & Express', level: 85, info: 'RESTful API architectures, JWT authorization, rate-limiting.' },
      { name: 'Tailwind CSS', level: 95, info: 'Responsive spacing ratios, grid alignments, micro-theme configurations.' },
      { name: 'JavaScript (ES6+)', level: 95, info: 'Asynchronous event queues, DOM APIs, memory cleanup habits.' }
    ]
  },
  {
    id: 'app-security',
    title: 'Application Security & Audit',
    iconName: 'ShieldAlert',
    description: 'Auditing codebases, formulating threat matrices, and hardcoding defenses against real-world vulnerabilities.',
    colorScheme: {
      bg: 'bg-amber-50/50',
      border: 'border-[#F8D27C]/40',
      badgeBg: 'bg-[#FDF1D3]',
      badgeText: 'text-[#B45309]',
      accent: 'fill-amber-500 stroke-amber-500'
    },
    skills: [
      { name: 'OWASP Top 10 Auditing', level: 90, info: 'Mitigating SQLi, XSS, SSRF, IDOR, and broken access controls.' },
      { name: 'Threat Modeling & Risk Calc', level: 85, info: 'Building STRIDE vectors and scoring risk maps for cloud portfolios.' },
      { name: 'Secure API Gateways', level: 85, info: 'Hardening token validation, CORS configurations, rate limits.' },
      { name: 'Source Code Auditing', level: 80, info: 'Static analysis, manual security inspection, code-dependency audit.' },
      { name: 'Web Cryptography', level: 80, info: 'Salting structures, AES payload encryption, hashing methodologies.' }
    ]
  },
  {
    id: 'db-cloud',
    title: 'Database & Cloud Systems',
    iconName: 'Database',
    description: 'Engineering highly durable relational databases and containerized pipelines to secure modern application runs.',
    colorScheme: {
      bg: 'bg-emerald-50/50',
      border: 'border-emerald-100',
      badgeBg: 'bg-emerald-100/70',
      badgeText: 'text-emerald-700',
      accent: 'fill-emerald-500 stroke-emerald-500'
    },
    skills: [
      { name: 'Postgres & SQLite', level: 88, info: 'Index optimization, foreign key constraints, connection pools.' },
      { name: 'REST & GraphQL APIs', level: 90, info: 'Declarative schemas, payload validation, quick dispatch.' },
      { name: 'Docker Containers', level: 80, info: 'Multi-stage dockerfiles, image optimization, local networking.' },
      { name: 'Firebase & Firestore', level: 85, info: 'Real-time sync, Firestore Security Rules configuration.' },
      { name: 'Git & Secure CI/CD', level: 88, info: 'Branch protections, automated lint checking, secret isolation.' }
    ]
  }
];


export const caseStudies: CaseStudy[] = [
  {
    id: 'case-01',
    title: 'Case Study 01: Multi-Column Database Schema Mapping & Exploitation',
    engagement: 'SOLO',
    category: 'Web Application Pentesting',
    timeline: 'Q4 2025',
    context: 'Assessment of a web application built with a database lookup interface utilizing vulnerable string parameters. The input pipeline concatenated data directly into the application query block without tokenized parameterization, triggering a high-severity data extraction avenue.',
    steps: [
      {
        title: 'Step 1: Column Enumeration & Verification',
        description: 'Formulated structured lookup operations to isolate displaying index arrays, discovering exactly which data streams mapped variables onto the front-end screen interfaces.'
      },
      {
        title: 'Step 2: Table Concatenation Discovery',
        description: 'Injected advanced schema reflection parameters (information_schema.tables) utilizing horizontal array aggregators to dump all application tables in a single line, revealing target storage spaces (users and books).'
      },
      {
        title: 'Step 3: Target Column Exfiltration',
        description: 'Shifted the injection target parameters to map structural properties of the target space (information_schema.columns), dumping plaintext administrative record metrics.'
      },
      {
        title: 'Step 4: Route Escalation',
        description: 'Used intercepted administrative session identifiers via interception proxy routing to manually hit restricted end-routes, successfully verifying target asset reclamation.'
      }
    ]
  },
  {
    id: 'case-02',
    title: 'Case Study 02: Dynamic Object Hijacking & Context Rendering Injection',
    engagement: 'SOLO',
    category: 'Web Application Pentesting',
    timeline: 'Q4 2025',
    context: 'Evaluation of an interactive micro-framework logging context displaying serious authentication validation bugs (Insecure Direct Object Reference) alongside deep expression evaluation flaws (Server-Side Template Injection) inside front-end rendering engines.',
    steps: [
      {
        title: 'Step 1: ID Discovery via Response Interception',
        description: 'Intercepted regional application endpoints to profile returned structural parameters, discovering that normal data streams implicitly exposed administrative global identifier strings (UUID tokens).'
      },
      {
        title: 'Step 2: Body Parameter Substitution',
        description: 'Targeted account configuration endpoints by replacing standard validation IDs inside the transaction body parameters with the admin profile identifier token, successfully changing administrative access records.'
      },
      {
        title: 'Step 3: Template Engine Reflection Mapping',
        description: 'Logged into the administrative environment and identified context execution boundaries within post render titles, mapped via a hidden template processing warning inside comments.'
      },
      {
        title: 'Step 4: Remote Environment Exfiltration',
        description: 'Injected a programmatic reflection expression array designed to list application environmental runtime parameters. The target server executed the expression context natively, dumping target configuration flags directly into the response DOM.'
      }
    ]
  },
  {
    id: 'case-03',
    title: 'Case Study 03: Multi-Stage Steganographic Extraction & Layered Cipher Reversal',
    engagement: 'TEAM',
    teamName: 'SKIBIDITOILET TEAM',
    category: 'Steganography & Cryptanalysis',
    timeline: 'Q2 2026',
    context: 'Investigation of an obfuscated challenge landscape distributing structural code libraries (Python definitions) alongside binary graphics carriers (PNG and JPEG profiles) containing cascading cryptographic controls.',
    steps: [
      {
        title: 'Step 1: High-Entropy Carrier Processing',
        description: 'Ran structural diagnostic validation across graphical containers using bit-plane isolation utilities, carving an obfuscated ciphertext payload stream out of raw carrier bytes.'
      },
      {
        title: 'Step 2: Graphical Matrix Passphrase Reconstruction',
        description: 'Processed secondary graphical assets to discover a completely hidden numeric data grid. Calculated mathematical offset adjustments (shifting the decimal structure by exactly +5 positions relative to normal ASCII values) to reconstruct the plain English string mapping the operational passphrase (personanongrata).'
      },
      {
        title: 'Step 3: Algorithmic Logic Mapping',
        description: 'Conducted static code analysis on the core script routines to profile the encryption architecture sequence: Columnar Transposition → Atbash Substitution → Caesar Cipher.'
      },
      {
        title: 'Step 4: Scripted Pipeline Reversal',
        description: 'Engineered a custom Python script to unroll the encryption sequence in precise structural reverse order. Deployed a localized index offset calculation based on the dynamic size metrics of the passphrase string to undo Caesar controls (-15 shift), passed the result through an Atbash map translation, and unrolled the Columnar Transposition blocks to return the original plaintext asset.'
      }
    ]
  },
  {
    id: 'case-04',
    title: 'Case Study 04: Host Artifact Restoration & NTFS Change Journal Analysis',
    engagement: 'TEAM',
    teamName: 'SKIBIDITOILET TEAM',
    category: 'Windows Host Forensics & DFIR',
    timeline: 'Q2 2026',
    context: 'Investigating host incident responses where local systems suffered an anti-forensics wipe, resulting in the permanent operational deletion of sensitive verification storage blocks by a malicious user.',
    steps: [
      {
        title: 'Step 1: Low-Level Image Triage',
        description: 'Processed raw host data replica formats (logical image layers) using filesystem analysis frameworks to map physical partition boundaries.'
      },
      {
        title: 'Step 2: Transaction Logging Extraction',
        description: 'Bypassed the damaged directory indices by targeting hidden filesystem logging structures, isolating the direct transaction data stream of the NTFS Change Journal ($UsnJrnl:$J).'
      },
      {
        title: 'Step 3: Automated Log Parsing & Execution Syntax',
        description: 'Deployed advanced binary command-line parsing utility syntaxes (MFTECmd.exe) via automated PowerShell commands to export structural log behaviors into dynamic timeline matrix formats.'
      },
      {
        title: 'Step 4: Target Filtering & Fingerprint Verification',
        description: 'Evaluated the system timeline for specific sequence fingerprints of commercial data-wiping engines (mapping clustered DataTruncation and FileDelete system adjustments under identical table indices).'
      },
      {
        title: 'Step 5: MFT Epoch Step-Back',
        description: 'Located the precise Master File Table entry index (126638). Identified a last-minute modification renaming attempt trying to obscure trace data into dummy strings at the final transactional epoch. Stepped back exactly one transaction interval to the immediate pre-destruction index, cleanly recovering the authentic timeline validation metadata parameters.'
      }
    ]
  },
  {
    id: 'case-05',
    title: 'Case Study 05: Signature Discrepancy Carving & Visual Decomposer Analysis',
    engagement: 'TEAM',
    teamName: 'SKIBIDITOILET TEAM',
    category: 'Steganography & File Carving',
    timeline: 'Q2 2026',
    context: 'Assessment of a graphical media asset masking malicious structural anomalies, designed to test defensive deep binary analysis and low-level parsing logic.',
    steps: [
      {
        title: 'Step 1: Container Signature Profiling',
        description: 'Ran validation sweeps via automated metadata extraction platforms, revealing an structural mismatch anomaly: the file identifier container reported standard PNG extensions, while the internal byte properties matched real JPEG header arrays.'
      },
      {
        title: 'Step 2: Append Offset Identification',
        description: 'Analyzed binary structures to locate active byte overlap regions, pinpointing a trailing segment containing valid secondary file system markers located directly after the initial end-of-image (IEND) hex boundary at offset 0x12b3d.'
      },
      {
        title: 'Step 3: Low-Level Payload Carving',
        description: 'Executed a precise low-level command-line data copy utility (dd parameters specifying skip-block calculation structures) to carve out the secondary overlapping binary cluster, transforming it into a discrete, standalone graphic layer asset.'
      },
      {
        title: 'Step 4: Color Plane Isolation',
        description: 'Transferred the carved asset layer onto a multi-plane decomposing engine. Isolated individual visual color plane spaces (Red, Green, Blue) to neutralize obfuscated pixel noise parameters, successfully exposing the text variables.'
      }
    ]
  },
  {
    id: 'case-06',
    title: 'Case Study 06: Acoustic Waveform Transcription & Base Conversion Inversion',
    engagement: 'SOLO',
    category: 'Forensic Signal Processing',
    timeline: 'Q4 2025',
    context: 'Analysis of an isolated audio waveform containing high-frequency signal outputs hiding an obfuscated cryptographic variable payload matrix.',
    steps: [
      {
        title: 'Step 1: Audio Signal Transcription',
        description: 'Deployed media processing player layers to isolate the acoustic data stream, programmatically transcribing the voice track coordinates into a raw sequence grid of integer metrics.'
      },
      {
        title: 'Step 2: Character Space Mapping',
        description: 'Evaluated the raw sequence properties to find alignment boundaries matching standard character encoding metrics (specifically targeting boundaries within the Decimal ASCII layout).'
      },
      {
        title: 'Step 3: String Synthesis',
        description: 'Converted the decimal integers directly into system characters, reconstructing a full alphanumeric intermediate text block showing characteristic base-inversion structural padding identifiers (terminal = markers).'
      },
      {
        title: 'Step 4: Structural Base Decoding',
        description: 'Passed the intermediate text through high-throughput automated decoding blocks (CyberChef architecture parsing Base64 profiles), instantly unrolling the structural obfuscation mapping to yield the final plain validation string.'
      }
    ]
  }
];
