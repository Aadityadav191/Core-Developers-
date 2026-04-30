// import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Cpu, Rocket, Terminal, Layers } from 'lucide-react';

export default function Team() {
  const members = [
    {
      name: "Aadit Yadav ",
      role: "Software Engineer & Founder",
      bio: "Visionary behind the Core infrastructure. Expert in scalable systems and cloud-native solutions.",
      image: "https://lh3.googleusercontent.com/a/ACg8ocKAsPdf8uU2GJLzS8eMWidJR4tpzM2XS-8-EJT9pHF0DG6d8euh=s576-c-no",
      social: { github: "#", linkedin: "#", twitter: "#" }
    },
    {
      name: "Dipak Raj Sharma ",
      role: "Head of Engineering & Co-Founder",
      bio: "Polyglot developer specializing in React ecosystems and performance optimization.",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQGUyMT3VSrovA/profile-displayphoto-shrink_800_800/B4DZiA4ht3G8Ac-/0/1754508959469?e=1779321600&v=beta&t=9d0AuaEBQGpCfSDPAKOf9Vf_FI6JR0uoclHYZo5Jwgk",
      social: { github: "#", linkedin: "#", twitter: "#" }
    },
    {
      name: "Avash Chaudhari",
      role: "Senior UI/UX Designer",
      bio: "Crafting digital experiences that balance technical complexity with intuitive simplicity.",
      image: "https://i.pravatar.cc/150?u=david",
      social: { github: "#", linkedin: "#", twitter: "#" }
    },
    {
      name: "Sarah Jenkins",
      role: "DevOps Specialist",
      bio: "Automating the future. Master of Kubernetes, Docker, and CI/CD pipelines.",
      image: "https://i.pravatar.cc/150?u=sarahj",
      social: { github: "#", linkedin: "#", twitter: "#" }
    }
  ];

  return (
    <div className="min-h-screen bg-[#031c36] text-white pt-20 pb-20 px-6 selection:bg-[#de8f32] selection:text-[#031c36] overflow-x-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-[#015aae] blur-[120px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[#de8f32] blur-[120px] opacity-15"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1 rounded-full border border-[#de8f32]/30 bg-[#de8f32]/5 mb-6"
          >
             <span className="text-[#de8f32] font-bold tracking-[0.2em] uppercase text-[10px]">
              The Intelligence Behind the Code
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black mb-8 tracking-tighter"
          >
            Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#015aae] to-cyan-400">Core</span> Team
          </motion.h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            A specialized collective of engineers and designers operating at the bleeding edge of digital performance.
          </p>
        </div>

        {/* --- Section 1: Team Grid --- */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {members.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-b from-[#015aae] to-[#de8f32] rounded-[2.5rem] opacity-0 group-hover:opacity-20 transition duration-500 blur"></div>
              
              <div className="relative h-full overflow-hidden rounded-[2.5rem] bg-[#042444]/50 backdrop-blur-xl border border-white/10 p-6 transition-all duration-500">
                <div className="relative mb-6 aspect-square overflow-hidden rounded-3xl border border-white/5">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#031c36] via-transparent to-transparent opacity-40"></div>
                </div>

                <div className="space-y-3">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#de8f32] transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-[#015aae] text-[10px] font-black uppercase tracking-[0.2em] mt-1">
                      {member.role}
                    </p>
                  </div>
                  
                  <p className="text-gray-400 text-sm leading-relaxed min-h-[60px]">
                    {member.bio}
                  </p>

                  <div className="flex gap-4 pt-5 border-t border-white/10">
                    <a href={member.social.github} className="text-gray-500 hover:text-white transition-all transform hover:-translate-y-1">Github</a>
                    <a href={member.social.linkedin} className="text-gray-500 hover:text-[#015aae] transition-all transform hover:-translate-y-1">LinkedIn</a>
                    <a href={member.social.twitter} className="text-gray-500 hover:text-[#de8f32] transition-all transform hover:-translate-y-1">Twitter</a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- Section 2: Technical Arsenal (New Content) --- */}
        <div className="mb-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-black mb-6 leading-tight">Our Collective <br /><span className="text-[#de8f32]">Technical Arsenal</span></h2>
              <p className="text-gray-400 mb-8">We don't just use tools; we master ecosystems. Our team spends 20% of their time researching emerging technologies to ensure your project stays ahead of the curve.</p>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Terminal size={16}/>, label: "Low-Latency Code" },
                  { icon: <Layers size={16}/>, label: "Microservices" },
                  { icon: <Cpu size={16}/>, label: "AI Integration" },
                  { icon: <Globe size={16}/>, label: "Global Edge" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-[#015aae]/50 transition-colors">
                    <span className="text-[#015aae]">{item.icon}</span>
                    <span className="text-xs font-bold uppercase tracking-widest">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
               <div className="aspect-video rounded-[2rem] bg-gradient-to-br from-[#015aae]/20 to-transparent border border-white/10 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                  <div className="text-center p-8">
                    <p className="text-6xl font-black text-white/10 mb-2">124k+</p>
                    <p className="text-[#de8f32] font-bold text-xs uppercase tracking-[0.3em]">Commits in 2025</p>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* --- Section 3: Mission Bar --- */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="p-8 rounded-[2rem] bg-gradient-to-r from-white/[0.03] to-transparent border border-white/10 flex flex-wrap justify-around items-center gap-12 mb-32"
        >
          <div className="flex items-center gap-4 group">
            <div className="p-3 rounded-xl bg-[#de8f32]/10 group-hover:bg-[#de8f32]/20 transition-colors">
              <Code2 className="text-[#de8f32]" size={28} />
            </div>
            <div className="text-left">
              <p className="text-white font-bold text-sm tracking-tight">100% In-House</p>
              <p className="text-gray-500 text-[10px] uppercase tracking-widest">No Outsourcing</p>
            </div>
          </div>

          <div className="flex items-center gap-4 group">
            <div className="p-3 rounded-xl bg-[#015aae]/10 group-hover:bg-[#015aae]/20 transition-colors">
              <Globe className="text-[#015aae]" size={28} />
            </div>
            <div className="text-left">
              <p className="text-white font-bold text-sm tracking-tight">Remote Excellence</p>
              <p className="text-gray-500 text-[10px] uppercase tracking-widest">Global Talent</p>
            </div>
          </div>

          <div className="flex items-center gap-4 group">
            <div className="p-3 rounded-xl bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors">
              <Cpu className="text-purple-400" size={28} />
            </div>
            <div className="text-left">
              <p className="text-white font-bold text-sm tracking-tight">Next-Gen Stack</p>
              <p className="text-gray-500 text-[10px] uppercase tracking-widest">AI-Integrated</p>
            </div>
          </div>
        </motion.div>

        {/* --- Section 4: Join the Core (New Content) --- */}
        <div className="relative p-12 md:p-20 rounded-[3.5rem] bg-white/[0.02] border border-white/10 overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#de8f32] blur-[140px] opacity-10"></div>
          <div className="relative z-10">
            <Rocket className="text-[#de8f32] mx-auto mb-6" size={48} />
            <h2 className="text-4xl md:text-5xl font-black mb-6">Want to join the <span className="text-[#015aae]">Core</span>?</h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-10">
              We’re always looking for obsessed engineers and pixel-perfect designers. If you live and breathe code, we want to hear from you.
            </p>
            <button className="px-10 py-4 bg-white text-[#031c36] font-black rounded-2xl hover:bg-[#de8f32] transition-all duration-300 hover:scale-105">
              VIEW OPEN ROLES
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}