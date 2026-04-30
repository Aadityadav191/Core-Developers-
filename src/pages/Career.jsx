import { useEffect } from "react";
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Coffee, 
  Monitor, 
  Users, 
  Rocket, 
  ArrowUpRight,
  Code2
} from 'lucide-react';

const Career = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  
  const openRoles = [
    {
      title: "Senior Full-Stack Engineer",
      type: "Full-Time",
      location: "Remote / Hybrid",
      stack: ["React", "Node.js", "AWS"]
    },
    {
      title: "UI/UX Designer",
      type: "Contract",
      location: "Remote",
      stack: ["Figma", "Prototyping", "Branding"]
    },
    {
      title: "SEO Specialist",
      type: "Remote",
      location: "Silicon Sector",
      stack: ["SEO Audits", "Content Strategy", "Google Analytics"]
    }
  ];

  const perks = [
    { icon: <Monitor size={24} />, title: "High-End Gear", desc: "Top-tier MacBooks and ergonomic setups for every dev." },
    { icon: <Coffee size={24} />, title: "Work-Life Balance", desc: "Flexible hours because we care about output, not clock-ins." },
    { icon: <Users size={24} />, title: "Core Culture", desc: "Collaborative sprints and monthly developer meetups." },
    { icon: <Rocket size={24} />, title: "Growth Fund", desc: "Annual budget for courses, certifications, and conferences." }
  ];

  return (
    <div className="min-h-screen bg-[#031c36] text-white pt-20 pb-20 px-6 selection:bg-[#de8f32] selection:text-[#031c36]">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[15%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#015aae] blur-[130px] opacity-10"></div>
        <div className="absolute bottom-[10%] left-[-10%] w-[35%] h-[35%] rounded-full bg-[#de8f32] blur-[130px] opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Hero Section */}
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#de8f32] text-xs font-bold uppercase tracking-widest mb-6"
          >
            We're Hiring the Best
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-8 leading-tight"
          >
            Join the <span className="text-[#015aae]">Core</span> Team
          </motion.h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Build the future of digital infrastructure with a team of elite developers, designers, and visionaries.
          </p>
        </div>

        {/* Perks Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {perks.map((perk, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-[#015aae]/30 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-[#031c36] border border-white/10 flex items-center justify-center text-[#de8f32] mb-6">
                {perk.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{perk.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{perk.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Current Openings */}
        <div className="mb-32">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Open Positions</h2>
              <p className="text-gray-400">Find your place in our high-performance ecosystem.</p>
            </div>
            <div className="px-6 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-gray-400">
              {openRoles.length} Available Roles
            </div>
          </div>

          <div className="space-y-4">
            {openRoles.map((role, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group flex flex-col md:flex-row md:items-center justify-between p-8 rounded-[2rem] bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-[#de8f32]/20 transition-all cursor-pointer"
              >
                <div className="mb-6 md:mb-0">
                  <h3 className="text-2xl font-bold group-hover:text-[#de8f32] transition-colors mb-2">{role.title}</h3>
                  <div className="flex gap-4 text-xs font-bold text-gray-500 uppercase tracking-widest">
                    <span className="flex items-center gap-1"><Briefcase size={14} /> {role.type}</span>
                    <span className="flex items-center gap-1 font-black text-[#015aae] italic">{role.location}</span>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="hidden lg:flex gap-2">
                    {role.stack.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-md bg-black/20 border border-white/5 text-[10px] text-gray-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#de8f32] group-hover:text-[#031c36] transition-all">
                    <ArrowUpRight size={20} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Culture CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative p-12 md:p-20 rounded-[3rem] bg-gradient-to-br from-[#015aae]/20 to-transparent border border-[#015aae]/30 overflow-hidden"
        >
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-4xl font-bold mb-6">Don't see a fit?</h2>
            <p className="text-gray-400 text-lg mb-10">
              We are always looking for "Core" talent. Send your resume and a brief intro about your favorite tech stack to our talent team.
            </p>
            <button className="px-10 py-4 bg-[#de8f32] text-[#031c36] font-black rounded-2xl hover:scale-105 transition-all shadow-xl shadow-[#de8f32]/20">
              Submit Open Application
            </button>
          </div>
          <div className="absolute right-[-5%] bottom-[-10%] opacity-10">
            <Code2 size={400} className="text-white" />
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Career;