// import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Smartphone, 
  ShieldCheck, 
  Cloud, 
  Layers, 
  Database
} from 'lucide-react';

const Services = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-[#031c36] text-white pt-32 pb-20 px-6 selection:bg-[#de8f32] selection:text-[#031c36]">
      {/* Dynamic Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[5%] left-[10%] w-[35%] h-[35%] rounded-full bg-[#015aae] blur-[120px] opacity-20"></div>
        <div className="absolute bottom-[10%] right-[5%] w-[40%] h-[40%] rounded-full bg-[#de8f32] blur-[150px] opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={fadeInUp} 
          className="max-w-3xl mb-20"
        >
          <h2 className="text-[#de8f32] font-bold tracking-[0.3em] uppercase text-sm mb-4">Our Expertise</h2>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight">
            Solutions That <span className="text-[#015aae]">Scale</span> With Your Ambition.
          </h1>
          <p className="text-gray-400 text-xl leading-relaxed">
            We don't just provide services; we engineer digital foundations. From "Core" architecture to user-facing excellence, we cover the full stack of modern IT.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceBlock 
            icon={<Globe size={32} />} 
            title="Web Development" 
            desc="Building lightning-fast, SEO-optimized web applications using Next.js, React, and high-end animations."
            tags={["React", "Node.js", "Tailwind"]}
            accent="#015aae"
          />
          <ServiceBlock 
            icon={<Smartphone size={32} />} 
            title="App Development" 
            desc="Native-feel cross-platform mobile apps for iOS and Android that users actually love to open."
            tags={["Flutter", "React Native", "Swift"]}
            accent="#de8f32"
          />
          <ServiceBlock 
            icon={<Database size={32} />} 
            title="Custom Software" 
            desc="Tailor-made ERP, CRM, and management tools designed specifically for your internal workflow."
            tags={["Python", "Go", "PostgreSQL"]}
            accent="#015aae"
          />
          <ServiceBlock 
            icon={<Cloud size={32} />} 
            title="Digital Marketing" 
            desc="Moving your business to the cloud with secure, scalable AWS, Azure, or Google Cloud setups."
            tags={["AWS", "Docker", "Kubernetes"]}
            accent="#de8f32"
          />
          <ServiceBlock 
            icon={<ShieldCheck size={32} />} 
            title="Social Media Handlling " 
            desc="Protecting your core assets with advanced encryption, vulnerability testing, and 24/7 monitoring."
            tags={["Pentesting", "SSL", "IAM"]}
            accent="#015aae"
          />
          <ServiceBlock 
            icon={<Layers size={32} />} 
            title="UI/UX Design" 
            desc="Clean, modern, and high-converting interface designs that make your product stand out."
            tags={["Figma", "Prototyping", "Branding"]}
            accent="#de8f32"
          />
        </div>

        {/* Bottom CTA / Workflow Preview */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-32 p-12 rounded-[3rem] bg-gradient-to-br from-[#042545] to-[#031c36] border border-white/10 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#015aae] blur-[120px] opacity-20 -mr-20 -mt-20"></div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need a custom solution?</h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto">
            Our architects are ready to discuss your specific technical requirements. Let’s build something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-[#de8f32] text-[#031c36] px-10 py-4 rounded-full font-black hover:scale-105 transition-all">
              Book a Strategy Call
            </button>
            <button className="bg-white/5 border border-white/10 px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
              View Team
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Sub-component for individual service blocks
const ServiceBlock = ({ icon, title, desc, tags, accent }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-white/20 transition-all flex flex-col h-full group"
  >
    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 border border-white/10 transition-all group-hover:shadow-[0_0_30px_rgba(1,90,174,0.2)]`} style={{ color: accent }}>
      {icon}
    </div>
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
      {desc}
    </p>
    <div className="flex flex-wrap gap-2 mb-6">
      {tags.map((tag, i) => (
        <span key={i} className="text-[10px] font-bold uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full border border-white/5 text-[#015aae]">
          {tag}
        </span>
      ))}
    </div>
  </motion.div>
);

export default Services;