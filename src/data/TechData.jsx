
import {
  Database,
  Server,
  Smartphone,
  Layout,
  Terminal,
  ShieldCheck,
} from "lucide-react";
export const categories = [
    {
      title: "Frontend Development",
      icon: <Layout className="text-[#015aae]" />,
      description:
        "We build immersive, high-speed user interfaces that are SEO-ready and accessibility-compliant.",
      tools: [
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "TypeScript",
        "Framer Motion",
        "Redux",
      ],
    },
    {
      title: "Backend & APIs",
      icon: <Server className="text-[#de8f32]" />,
      description:
        "Robust server-side logic designed for high concurrency and secure data handling.",
      tools: ["Node.js", "Express", "Python", "Django", "GraphQL", "REST APIs"],
    },
    {
      title: "Database Solutions",
      icon: <Database className="text-[#015aae]" />,
      description:
        "Scalable data architecture tailored for speed, consistency, and long-term integrity.",
      tools: ["MongoDB", "PostgreSQL", "Firebase", "MySQL", "Prisma"],
    },
    {
      title: "DevOps & Cloud",
      icon: <Terminal className="text-[#de8f32]" />,
      description:
        "Automated deployment pipelines and cloud infrastructure built for 99.9% uptime.",
      tools: ["Docker", "Kubernetes", "Vercel", "GitHub Actions", "Terraform"],
    },
    {
      title: "Mobile Solutions",
      icon: <Smartphone className="text-[#015aae]" />,
      description:
        "Cross-platform excellence allowing for a single codebase with native-level performance.",
      tools: ["React Native", "Kotlin"],
    },
    {
      title: "Quality & Security",
      icon: <ShieldCheck className="text-[#de8f32]" />,
      description:
        "Rigorous testing and encryption standards to protect your core business logic.",
      tools: ["Jest", "Cypress", "Auth0", "JWT", "Postman", "Sentry"],
    },
  ];