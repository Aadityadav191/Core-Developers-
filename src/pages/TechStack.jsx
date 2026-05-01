import { useEffect } from "react";
import { motion } from "framer-motion";
import { IconCloud } from "./../Components/IconCloud/IconCloud.jsx";
import {
  Server,
  Layout,
  Terminal,
  ShieldCheck,
  Cpu,
  Zap,
  ArrowRight,
} from "lucide-react";

const TechStack = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const slugs = [
    "typescript",
    "javascript",
    "dart",
    "openjdk", 
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonwebservices", 
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
  ];

  const categories = [
    {
      title: "Frontend Engineering",
      icon: <Layout className="text-[#015aae]" size={28} />,
      description:
        "High-fidelity, performant UIs optimized for Vitally-Core web metrics and accessibility.",
      tools: ["React.js", "Next.js", "TypeScript", "Framer Motion"],
      accent: "from-[#015aae]/20 to-transparent",
    },
    {
      title: "Scalable Backend",
      icon: <Server className="text-[#de8f32]" size={28} />,
      description:
        "Distributed architectures designed to handle millions of concurrent requests seamlessly.",
      tools: ["Node.js", "Go", "Python", "GraphQL"],
      accent: "from-[#de8f32]/20 to-transparent",
    },
    {
      title: "Cloud & Infrastructure",
      icon: <Terminal className="text-[#015aae]" size={28} />,
      description:
        "Automated CI/CD pipelines and containerized orchestration for 99.99% reliability.",
      tools: ["AWS", "Docker", "Kubernetes", "Terraform"],
      accent: "from-[#015aae]/20 to-transparent",
    },
    {
      title: "Security & QA",
      icon: <ShieldCheck className="text-[#de8f32]" size={28} />,
      description:
        "Enterprise-grade encryption and end-to-end testing protecting your digital assets.",
      tools: ["Sentry", "Cypress", "Auth0", "JWT"],
      accent: "from-[#de8f32]/20 to-transparent",
    },
  ];

  return (
    <div className="min-h-screen bg-[#031c36] text-white pt-10 pb-20 px-6 selection:bg-[#de8f32] selection:text-[#031c36] overflow-x-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-125 h-125 bg-[#015aae] blur-[150px] opacity-10 rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-125 h-125  opacity-10 rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* --- Hero Section --- */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#015aae]/10 border border-[#015aae]/20 px-4 py-1.5 rounded-full mb-6">
              <Zap size={14} className="text-[#de8f32]" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#de8f32]">
                Production Ready
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight tracking-tighter">
              The{" "}
              <span className="text-[#015aae] bg-clip-text ">
                Core
              </span>{" "}
              Stack
            </h1>
            <p className="text-gray-400 text-xl leading-relaxed max-w-xl">
              Our engineering philosophy is simple: we use technologies that
              scale. No fluff—just elite tools for complex problems.
            </p>
          </motion.div>

          {/* Interactive Icon Cloud Wrapper */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative flex items-center justify-center group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#015aae] blur-[100px] opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative z-10 w-full max-w-md aspect-square flex items-center justify-center">
              <IconCloud iconSlugs={slugs} />
            </div>
          </motion.div>
        </div>

        {/* --- Engineering Categories (Bento Grid) --- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-32">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative overflow-hidden bg-white/[0.03] border border-white/10 p-8 rounded-[2rem] hover:bg-white/[0.06] transition-all`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${cat.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>

              <div className="relative z-10">
                <div className="mb-6 inline-block p-3 rounded-2xl bg-[#031c36] border border-white/5 shadow-xl">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{cat.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-6">
                  {cat.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {cat.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-black uppercase tracking-widest text-[#015aae]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- Stats / Logic Bar --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-y border-white/5 mb-32">
          {[
            { label: "Uptime", val: "99.9%" },
            { label: "Deployment", val: "Fast" },
            { label: "Latency", val: "<100ms" },
            { label: "Type-Safe", val: "100%" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-[#de8f32] text-3xl font-black mb-1">
                {stat.val}
              </p>
              <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* --- Bottom CTA Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden p-1 rounded-[3.5rem] bg-gradient-to-r from-[#015aae] via-[#bb7c34] to-[#015aae]"
        >
          <div className="bg-[#031c36] rounded-[3.4rem] px-8 py-16 flex flex-col items-center text-center">
            <Cpu size={48} className="text-[#de8f32] mb-8" />
            <h2 className="text-4xl md:text-5xl font-black mb-6 max-w-2xl leading-tight">
              Does your project need a{" "}
              <span className="text-[#015aae]">Hardened</span> Stack?
            </h2>
            <p className="text-gray-400 mb-10 max-w-lg">
              Talk to our technical architects to define the optimal
              architecture for your unique requirements.
            </p>
            <button className="group flex items-center gap-3 px-10 py-5 bg-white text-[#031c36] font-black rounded-2xl hover:bg-[#de8f32] hover:text-white transition-all transform hover:scale-105">
              CONSULT AN ARCHITECT
              <ArrowRight
                size={20}
                className="group-hover:translate-x-2 transition-transform"
              />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TechStack;
