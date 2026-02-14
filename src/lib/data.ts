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
  title: "Software Engineer (Full Stack | AI/ML)",
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
    href: "https://www.linkedin.com/in/dtharun/",
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
    role: "Software Engineer",
    company: "HubSpot",
    location: "USA",
    period: "Jan 2024 – Present",
    achievements: [
      "Led architecture and development of HubSpot's Smart CRM pipeline experience using React, TypeScript, and GraphQL, improving sales productivity by 30%",
      "Built and optimized REST and GraphQL APIs for a shared micro-frontend ecosystem, reducing peak response time from 320ms to 85ms using Redis caching and connection pooling",
      "Architected 12 Java Spring Boot microservices with Kafka and PostgreSQL for contact management, handling 200M+ buyer and company profiles and reducing enrichment latency by 45%",
      "Designed an event-driven ingestion pipeline using Kafka, AWS Lambda, and Elasticsearch to process 2B+ CRM events per day with 99.9% uptime",
      "Migrated 8 legacy monolith services to cloud-native microservices on AWS ECS and Kubernetes with Terraform and Docker, cutting deployment time from 4 hours to 18 minutes",
      "Built CI/CD pipelines with GitHub Actions, Docker, and Kubernetes, increasing deployment frequency by 3x and reducing rollback incidents by 60%",
      "Integrated LLM-powered AI agents into CRM workflows using Java, Python, OpenAI APIs, and AWS SQS to automate 50% of tier-1 support workflows",
      "Mentored 6 junior engineers and established TDD practices with JUnit and React Testing Library, increasing coverage from 52% to 89% and reducing production defects by 40%",
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
      "Developed enterprise applications with Java Spring Boot and Angular, delivering real-time analytics dashboards for 100K+ daily active users",
      "Built high-performance REST APIs with Spring Boot and Hibernate, processing 10M+ records per day from SQL Server with 99.8% uptime",
      "Designed responsive Angular and RxJS dashboards, reducing data load times by 50% through lazy loading and API optimization",
      "Engineered Java microservices to automate ETL workflows, processing 5TB+ monthly data volume and reducing manual effort by 65%",
      "Implemented CI/CD with Jenkins and Maven, containerized services using Docker, and deployed to Azure to reduce deployment time by 70%",
      "Optimized query performance with indexing and Redis caching, improving throughput by 45% and reducing infrastructure cost by $80K annually",
      "Collaborated in Agile/Scrum delivery, conducted code reviews, and maintained 90%+ test coverage with JUnit and Jasmine",
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
      "Developed and maintained full-stack applications with Java Spring Boot and React for banking and e-commerce clients serving 50K+ users with 99.5% uptime",
      "Built REST APIs with Spring MVC and integrated MySQL and PostgreSQL data layers for client-facing business workflows",
      "Implemented responsive React UI components in close collaboration with UX teams, improving user engagement by 30%",
      "Developed authentication and authorization modules using Spring Security and JWT for secure enterprise access control",
      "Delivered 85%+ test coverage using JUnit and Mockito with consistent integration test automation",
      "Reduced production defects by 40% through stronger testing practices and structured code reviews",
      "Participated in Agile/Scrum planning and delivery cycles, using JIRA for task tracking and predictable sprint execution",
      "Supported CI/CD setup with Jenkins and Docker to automate builds and streamline deployments",
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
  { name: "AWS Cloud Practitioner", issuer: "Amazon Web Services" },
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
  { value: 3, suffix: "x", label: "Deploy Frequency" },
];
