import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import type { IconType } from "react-icons";

// ─── Interfaces ──────────────────────────────────────────

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: IconType;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
  tech: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Education {
  degree: string;
  university: string;
  gpa: string;
  period: string;
}

export interface Certification {
  name: string;
  issuer: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

// ─── Personal ────────────────────────────────────────────

export const personal = {
  name: "Tharun Derangula",
  title: "Senior Software Engineer",
  company: "HubSpot",
  location: "San Francisco Bay Area",
  email: "tharunderangula1@gmail.com",
  phone: "+1 (470) 502-4947",
  tagline:
    "I architect high-scale distributed systems and craft pixel-perfect interfaces — bridging backend resilience with frontend finesse to ship products that millions rely on daily.",
  siteUrl: "https://tharunderangula.com",
} as const;

// ─── Navigation ──────────────────────────────────────────

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

// ─── Social Links ────────────────────────────────────────

export const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/tharunderangula",
    icon: FaLinkedinIn,
  },
  {
    label: "GitHub",
    href: "https://github.com/tharunderangula",
    icon: FaGithub,
  },
  {
    label: "Email",
    href: "mailto:tharunderangula1@gmail.com",
    icon: HiOutlineMail,
  },
];

// ─── Experience ──────────────────────────────────────────

export const experiences: Experience[] = [
  {
    role: "Senior Software Engineer",
    company: "HubSpot",
    location: "USA",
    period: "Jan 2024 – Present",
    achievements: [
      "Architected and scaled RESTful microservices handling 5M+ API requests/day across distributed systems, ensuring 99.9% uptime for mission-critical CRM operations",
      "Drove a 40% performance improvement across core platform services through JVM tuning, caching strategies, and query optimization",
      "Reduced database query response times by 35% through advanced indexing strategies and query plan optimization across PostgreSQL and MySQL clusters",
      "Spearheaded CI/CD pipeline modernization, reducing release cycles by 50% while maintaining zero-downtime deployments via blue-green strategies",
      "Delivered enterprise-grade features adopted by 10K+ customers, collaborating with product, design, and QA in agile sprints",
      "Built proactive monitoring and alerting dashboards with Grafana, resolving 95% of production issues before customer impact",
      "Engineered infrastructure cost optimization strategies saving $150K annually through resource right-sizing and auto-scaling policies",
      "Mentored 3 junior engineers through code reviews, pair programming, and architectural design sessions",
    ],
    tech: [
      "Java",
      "Spring Boot",
      "React",
      "TypeScript",
      "PostgreSQL",
      "MySQL",
      "Redis",
      "Docker",
      "Kubernetes",
      "AWS",
      "Jenkins",
      "JUnit",
      "Grafana",
    ],
  },
  {
    role: "Software Engineer",
    company: "Aveva",
    location: "India",
    period: "Aug 2021 – Dec 2022",
    achievements: [
      "Developed and maintained full-stack industrial IoT platform serving 100K+ daily active users with real-time data visualization",
      "Designed event-driven data pipelines processing 10M+ records/day with 99.8% uptime using message queues and stream processing",
      "Reduced frontend loading times by 50% through lazy loading, code splitting, and optimized Angular change detection strategies",
      "Built automated ETL workflows processing 5TB+ of industrial telemetry data monthly with fault-tolerant retry mechanisms",
      "Implemented containerized deployment pipelines reducing deployment time by 70% with Docker and Azure DevOps",
      "Achieved $80K annual cost savings through database query optimization and cloud resource consolidation",
      "Led migration of legacy monolith to microservices architecture, improving team velocity and system maintainability",
    ],
    tech: [
      "Java",
      "Spring Boot",
      "Angular",
      "TypeScript",
      "RxJS",
      "SQL Server",
      "MongoDB",
      "Redis",
      "Docker",
      "Azure",
      "Jenkins",
    ],
  },
  {
    role: "Software Engineer",
    company: "Xebia",
    location: "India",
    period: "May 2019 – Aug 2021",
    achievements: [
      "Built and launched customer-facing web applications serving 50K+ users with responsive, accessible interfaces",
      "Maintained 99.5% application uptime through robust error handling, circuit breakers, and graceful degradation patterns",
      "Improved user engagement by 30% through A/B tested UI enhancements and performance optimizations",
      "Implemented secure authentication and authorization using Spring Security and JWT, protecting sensitive user data",
      "Achieved 85%+ test coverage through comprehensive unit, integration, and E2E testing strategies",
      "Reduced production bugs by 40% through implementation of static analysis tools and automated code quality gates",
      "Collaborated with cross-functional teams in Agile/Scrum environment, delivering features across 2-week sprint cycles",
      "Contributed to internal developer tooling that improved team onboarding time by 25%",
    ],
    tech: [
      "Java",
      "Spring Boot",
      "React",
      "JavaScript",
      "MySQL",
      "PostgreSQL",
      "Docker",
      "AWS",
      "Git",
      "Jenkins",
    ],
  },
];

// ─── Skills ──────────────────────────────────────────────

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["Java", "TypeScript", "JavaScript", "SQL", "HTML", "CSS"],
  },
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "Angular",
      "Tailwind CSS",
      "Redux",
      "RxJS",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Spring Boot",
      "Node.js",
      "REST APIs",
      "GraphQL",
      "Microservices",
      "Kafka",
    ],
  },
  {
    title: "Databases",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "SQL Server",
      "Elasticsearch",
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      "Docker",
      "Kubernetes",
      "AWS",
      "Azure",
      "Jenkins",
      "Git",
      "Grafana",
      "Terraform",
    ],
  },
  {
    title: "Software Engineering Competencies",
    skills: [
      "System Design",
      "Distributed Systems",
      "Event-Driven Architecture",
      "Performance Optimization",
      "CI/CD Pipelines",
      "Agile/Scrum",
      "Code Reviews",
      "Technical Mentorship",
    ],
  },
];

// ─── Education ───────────────────────────────────────────

export const education: Education[] = [
  {
    degree: "MS Information Technology",
    university: "Kennesaw State University",
    gpa: "3.9 / 4.0",
    period: "2023 – 2024",
  },
  {
    degree: "BS Computer Science & Engineering",
    university: "Lovely Professional University",
    gpa: "3.7 / 4.0",
    period: "2015 – 2019",
  },
];

// ─── Certifications ──────────────────────────────────────

export const certifications: Certification[] = [
  { name: "AWS Cloud Practitioner", issuer: "Amazon Web Services" },
  { name: "Google UX Design Professional", issuer: "Google" },
  { name: "Meta Full-Stack Developer Professional", issuer: "Meta" },
  {
    name: "Microsoft Full-Stack Developer Professional",
    issuer: "Microsoft",
  },
];

// ─── Stats ───────────────────────────────────────────────

export const stats: Stat[] = [
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 5, suffix: "M+", label: "API Requests / Day" },
  { value: 10, suffix: "K+", label: "Enterprise Customers" },
  { value: 150, suffix: "K+", label: "Cost Savings ($)" },
];
