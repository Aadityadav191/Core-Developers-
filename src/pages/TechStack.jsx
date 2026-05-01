import { useEffect } from "react";
import { motion } from 'framer-motion';

import { 
  Database, 
  Server, 
  Smartphone, 
  Layout, 
  Terminal, 
  ShieldCheck, 
} from 'lucide-react';

const TechStack = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);


  
  const categories = [
    {
      title: "Frontend Development",
      icon: <Layout className="text-[#015aae]" />,
      description: "We build immersive, high-speed user interfaces that are SEO-ready and accessibility-compliant.",
      tools: ["React.js", "Next.js", "Tailwind CSS", "TypeScript", "Framer Motion", "Redux"]
    },
    {
      title: "Backend & APIs",
      icon: <Server className="text-[#de8f32]" />,
      description: "Robust server-side logic designed for high concurrency and secure data handling.",
      tools: ["Node.js", "Express", "Python", "Django", "GraphQL", "REST APIs"]
    },
    {
      title: "Database Solutions",
      icon: <Database className="text-[#015aae]" />,
      description: "Scalable data architecture tailored for speed, consistency, and long-term integrity.",
      tools: ["MongoDB", "PostgreSQL", "Firebase", "MySQL", "Prisma"]
    },
    {
      title: "DevOps & Cloud",
      icon: <Terminal className="text-[#de8f32]" />,
      description: "Automated deployment pipelines and cloud infrastructure built for 99.9% uptime.",
      tools: [ "Docker", "Kubernetes", "Vercel", "GitHub Actions", "Terraform"]
    },
    {
      title: "Mobile Solutions",
      icon: <Smartphone className="text-[#015aae]" />,
      description: "Cross-platform excellence allowing for a single codebase with native-level performance.",
      tools: ["React Native", "Kotlin"]
    },
    {
      title: "Quality & Security",
      icon: <ShieldCheck className="text-[#de8f32]" />,
      description: "Rigorous testing and encryption standards to protect your core business logic.",
      tools: ["Jest", "Cypress", "Auth0", "JWT", "Postman", "Sentry"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#031c36] text-white pt-20 pb-20 px-6 selection:bg-[#de8f32] selection:text-[#031c36]">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#015aae] blur-[120px] opacity-10"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#de8f32] blur-[120px] opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-6"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-gray-300">Our Powerhouse</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-6"
          >
            The <span className="text-[#015aae]">Core</span> Stack
          </motion.h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We don't chase every trend. We master the tools that offer the best balance of speed, security, and scalability for our clients.
          </p>
        </div>

        {/* Tech Categories Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group flex flex-col md:flex-row gap-8 bg-white/[0.02] border border-white/5 p-8 rounded-[2.5rem] hover:bg-white/[0.05] hover:border-white/10 transition-all"
            >
              {/* Icon Side */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-[#031c36] border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {cat.icon}
                </div>
              </div>

              {/* Content Side */}
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-3">{cat.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {cat.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {cat.tools.map((tool, i) => (
                    <span 
                      key={i} 
                      className="px-4 py-1.5 rounded-lg bg-white/5 border border-white/5 text-[11px] font-bold tracking-wider text-gray-300 hover:text-[#de8f32] hover:border-[#de8f32]/30 transition-colors"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Callout */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-24 p-1 rounded-[3rem] bg-gradient-to-r from-[#015aae] via-[#de8f32] to-[#015aae]"
        >
          <div className="bg-[#031c36] rounded-[2.9rem] p-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-left">
              <h2 className="text-2xl font-bold mb-2">Need a specific technology?</h2>
              <p className="text-gray-400">Our senior architects are experts in polyglot programming.</p>
            </div>
            <button className="whitespace-nowrap px-8 py-4 bg-white text-[#031c36] font-bold rounded-2xl hover:bg-[#de8f32] hover:text-white transition-all">
              Consult an Architect
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TechStack;