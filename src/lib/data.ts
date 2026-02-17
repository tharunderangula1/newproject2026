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
  title: "Senior Software Engineer (Full Stack | AI/ML)",
  company: "HubSpot",
  location: "San Francisco Bay Area, California",
  email: "tderangula1@gmail.com",
  phone: "+1 (650) 933-4427",
  tagline:
    "I build scalable full-stack platforms and AI-powered workflows, from high-throughput microservices to performant React and Next.js interfaces.",
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
    href: "https://www.linkedin.com/in/tderangula",
    icon: FaLinkedinIn,
  },
  {
    label: "GitHub",
    href: "https://github.com/tharunderangula1",
    icon: FaGithub,
  },
  {
    label: "Email",
    href: "mailto:tderangula1@gmail.com",
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
      "Led architecture and development of HubSpot's Smart CRM pipeline experience using React, TypeScript, and GraphQL, improving sales productivity by 30%",
      "Built and optimized REST and GraphQL APIs for HubSpot's micro-frontend ecosystem used by 400+ frontend engineers, reducing peak response time from 320ms to 85ms with Redis caching and connection pooling",
      "Architected 12 Java Spring Boot microservices with Kafka and PostgreSQL for contact management, handling 200M+ buyer and company profiles and reducing enrichment latency by 45%",
      "Designed an event-driven ingestion pipeline using Kafka, AWS Lambda, and Elasticsearch to process 2B+ CRM events per day with 99.9% uptime",
      "Migrated 8 legacy monolith services to cloud-native microservices on AWS ECS and Kubernetes with Terraform and Docker, cutting deployment time from 4 hours to 18 minutes and lowering infrastructure costs by 35%",
      "Built CI/CD pipelines with GitHub Actions, Docker, and Kubernetes, increasing deployment frequency by 3x and reducing rollback incidents by 60%",
      "Integrated LLM-powered AI agents into CRM workflows using Java, Python, OpenAI APIs, and AWS SQS to automate 50% of tier-1 support workflows",
      "Mentored junior engineers and established TDD practices with JUnit and React Testing Library, increasing coverage from 52% to 89% and reducing production defects by 40%",
    ],
    tech: [
      "Java",
      "Spring Boot",
      "React",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "Kafka",
      "Docker",
      "Kubernetes",
      "AWS",
      "Terraform",
      "GitHub Actions",
      "GraphQL",
      "OpenAI API",
      "RAG",
    ],
  },
  {
    role: "Software Engineer",
    company: "Aveva",
    location: "India",
    period: "Aug 2021 – Dec 2022",
    achievements: [
      "Architected and developed enterprise-grade web applications with Java Spring Boot and Angular, delivering real-time analytics platforms for 150K+ daily active users",
      "Designed and optimized REST microservices with Spring Boot and Hibernate, processing 10M+ records daily from SQL Server with 99.7% uptime and sub-200ms latency",
      "Built high-performance Angular and RxJS dashboards with lazy loading and optimized API integration, reducing frontend data load time by 40%",
      "Engineered scalable data integration services with Java Spring Boot, automating ETL workflows for 5TB+ monthly data volume and reducing manual effort by 60%",
      "Implemented cloud-native CI/CD pipelines with Jenkins and Maven, containerized services using Docker, and deployed to Azure, cutting deployment time by 71%",
      "Improved performance through query optimization, indexing, and Redis caching, increasing throughput by 40% and reducing infrastructure costs by $85K annually",
      "Strengthened code quality with JUnit and Jasmine coverage above 90%, code reviews, and consistent Agile/Scrum delivery",
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
      "Maven",
      "JUnit",
      "Jasmine",
    ],
  },
  {
    role: "Software Engineer",
    company: "Xebia",
    location: "India",
    period: "Jan 2020 – Aug 2021",
    achievements: [
      "Architected and delivered full-stack web applications with Java Spring Boot and React for banking and e-commerce platforms serving 75K+ active users with 99.7% uptime",
      "Designed and optimized REST microservices with Spring Boot and Spring MVC, integrating MySQL and PostgreSQL to process 8M+ transactions monthly",
      "Built scalable React components in collaboration with UX teams, increasing user engagement by 35%",
      "Implemented secure authentication and authorization with Spring Security and JWT, enforcing role-based access control for financial applications",
      "Improved reliability with JUnit and Mockito unit and integration tests, increasing automated coverage to 90%+ and reducing production defects by 45%",
      "Contributed to cloud-native deployments on GCP, containerizing services with Docker and supporting automated release pipelines that reduced deployment effort by 60%",
      "Optimized MySQL and PostgreSQL queries and indexing, improving backend response times by 30% under peak load",
      "Collaborated in Agile/Scrum teams to deliver sprint commitments consistently, with active code reviews and API design improvements",
    ],
    tech: [
      "Java",
      "Spring Boot",
      "React",
      "JavaScript",
      "MySQL",
      "PostgreSQL",
      "Docker",
      "GCP",
      "Git",
      "Jenkins",
      "JUnit",
      "Mockito",
      "Spring Security",
    ],
  },
];

// ─── Skills ──────────────────────────────────────────────

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["Java", "TypeScript", "Python", "JavaScript", "Go", "SQL"],
  },
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "Angular",
      "Redux",
      "Tailwind CSS",
      "GraphQL",
      "Jest",
      "React Testing Library",
      "RxJS",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Spring Boot",
      "Node.js",
      "Express.js",
      "REST APIs",
      "GraphQL",
      "Microservices",
      "Kafka",
      "gRPC",
    ],
  },
  {
    title: "Databases",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "DynamoDB",
      "Snowflake",
      "Elasticsearch",
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "Docker",
      "Kubernetes",
      "AWS",
      "GCP",
      "Azure",
      "Terraform",
      "GitHub Actions",
      "Helm",
      "Prometheus",
      "Grafana",
      "Datadog",
    ],
  },
  {
    title: "AI/ML & Engineering",
    skills: [
      "LLM Integration",
      "RAG",
      "LangChain",
      "OpenAI API",
      "Anthropic API",
      "Prompt Engineering",
      "System Design",
      "Distributed Systems",
      "Event-Driven Architecture",
      "Domain-Driven Design",
      "TDD",
      "Agile/Scrum",
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
    period: "2018 – 2022",
  },
];

// ─── Certifications ──────────────────────────────────────

export const certifications: Certification[] = [
  { name: "AWS Solutions Architect", issuer: "Amazon Web Services" },
  { name: "Databricks Generative AI Fundamentals", issuer: "Databricks" },
  { name: "Meta Full-Stack Developer Professional", issuer: "Meta" },
  {
    name: "Microsoft Full-Stack Developer Professional",
    issuer: "Microsoft",
  },
];

// ─── Stats ───────────────────────────────────────────────

export const stats: Stat[] = [
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 2, suffix: "B+", label: "CRM Events / Day" },
  { value: 200, suffix: "M+", label: "Profiles Managed" },
  { value: 400, suffix: "+", label: "Frontend Engineers Supported" },
];
