export type Project = {
  id: string;
  title: string;
  category: "SaaS" | "GovTech" | "Enterprise" | "Open Source" | "HealthTech";
  tech: string[];
  description: string;
  link?: string;
}

export const projects: Project[] = [
  {
    id: "benning",
    title: "Benning Clinic ERP",
    category: "HealthTech",
    tech: ["Laravel", "FHIR"],
    description: "HealthTech SaaS with SatuSehat (FHIR) Integration.",
  },
  {
    id: "upframework",
    title: "Upframework",
    category: "Open Source",
    tech: ["Go", "Fiber", "OTEL"],
    description: "High-concurrency Psychometric Engine.",
  },
  {
    id: "uptoday",
    title: "Uptoday",
    category: "SaaS",
    tech: ["Laravel", "MySQL"],
    description: "EdTech SaaS with State Machine for timed assessments.",
  },
  {
    id: "rahina",
    title: "Rahina",
    category: "SaaS",
    tech: ["Next.js", "TS"],
    description: "Digital Balinese Calendar with Lunisolar Algorithms.",
  },
  {
    id: "uptoo",
    title: "Uptoo",
    category: "Enterprise",
    tech: ["Laravel", "Oracle"],
    description: "Hybrid POS & Accounting System for Retail.",
  },
  {
    id: "mceasy",
    title: "McEasy TMS",
    category: "SaaS",
    tech: ["Golang", "Docker"],
    description: "Logistics API & Microservices.",
  }
]
