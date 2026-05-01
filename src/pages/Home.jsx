import { useEffect } from "react";import { motion } from 'framer-motion';
import { 
  Code2,  ChevronRight,Globe, ShieldCheck, Database, Smartphone 
} from 'lucide-react';
import Testimonials from "../components/Testimonials"; 

// Animation Helper: Fades in content as you scroll
const ScrollReveal = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6 }}
  >
    {children}
  </motion.div>
);

const Home = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className="bg-[#031c36] text-white font-sans selection:bg-[#de8f32] selection:text-[#031c36]">
      
      {/* --- SECTION 1: HERO  --- */}
      <section className="relative min-h-screen flex items-center  overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeInUp} className="inline-block mb-6">
               <div className="text-3xl font-bold tracking-tighter italic border-b-2 border-[#de8f32]">
                {"<"} CORE <span className="text-[#de8f32]"> DEVELOPERS </span> {"/>"}
              </div>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-6xl lg:text-8xl font-extrabold leading-[1.1] mb-6">
              Modern <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#015aae] to-[#de8f32]">IT Power</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-gray-400 text-xl mb-10 max-w-lg leading-relaxed">
              We don't just build software; we engineer digital competitive advantages for the next generation of business.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <button className="group flex items-center gap-2 bg-[#de8f32] text-[#031c36] px-8 py-4 rounded-full font-bold hover:bg-[#c97d28] transition-all">
                Start Journey <ChevronRight size={20} />
              </button>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="relative grid grid-cols-1 md:grid-cols-2 gap-4">
            <ServiceCard icon={<Code2 className="text-[#de8f32]" />} title="Web Apps" desc="Next-gen React/Node ecosystems." />
            <div className="md:mt-12">
              <ServiceCard icon={<Smartphone className="text-[#015aae]" />} title="Mobile" desc="Native iOS & Android performance." />
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 2: STATS BAR --- */}
      <section className="py-20 bg-white/5 border-y border-white/10 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: "Projects Completed", val: "20+" },
            { label: "Global Clients", val: "15+" },
            { label: "Experts", val: "10+" },
            { label: "Uptime Guaranteed", val: "99.9%" }
          ].map((stat, i) => (
            <ScrollReveal key={i}>
              <h3 className="text-4xl font-bold text-[#de8f32]">{stat.val}</h3>
              <p className="text-gray-400 text-sm uppercase tracking-widest mt-2">{stat.label}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* --- SECTION 3: DEEP SERVICES GRID --- */}
      <section className="py-15 px-8 relative">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-[#015aae] font-bold tracking-widest uppercase text-sm mb-4 text-center">Comprehensive Solutions</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-center mb-20">Everything you need to <br/> scale in the <span className="text-[#de8f32]">Digital Age</span></h3>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Database size={40} className="text-[#015aae]" />} 
              title="Backend Architecture" 
              text="Scalable, high-concurrency server solutions using Go, Node, and Python."
            />
            <FeatureCard 
              icon={<ShieldCheck size={40} className="text-[#de8f32]" />} 
              title="Frontend Excellence" 
              text="End-to-end encryption and vulnerability testing to keep your data bulletproof."
            />
            <FeatureCard 
              icon={<Globe size={40} className="text-blue-400" />} 
              title="Online Presence" 
              text="SEO-optimized, lightning-fast web applications built with Next.js and React."
             />
            
          </div>
        </div>
      </section>

      <section>
        <Testimonials/>
      </section>

      {/* --- SECTION 4: CALL TO ACTION (INTERACTIVE) --- */}
      <section className="py-10 px-8">
        <ScrollReveal>
          <div className="max-w-5xl mx-auto rounded-[3rem] bg-linear-to-br from-[#015aae] to-[#031c36] p-12 md:p-20 text-center border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#de8f32] blur-[120px] opacity-20 -mr-32 -mt-32"></div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Have a big idea? <br/> Let's build the <span className="text-[#de8f32]">Core</span> of it.</h2>
            <p className="text-xl text-blue-100/70 mb-10 max-w-2xl mx-auto">
              Our consultation is free. Our strategy is priceless. Join the 50+ companies who have leveled up with us.
            </p>
            <button className="bg-white text-[#031c36] px-12 py-5 rounded-full font-black text-lg hover:scale-110 transition-transform active:scale-95 shadow-2xl">
              GET IN TOUCH
            </button>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

// Sub-components
const ServiceCard = ({ icon, title, desc }) => (
  <motion.div 
    whileHover={{ scale: 1.05 }}
    className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl"
  >
    <div className="mb-4 text-3xl">{icon}</div>
    <h3 className="text-2xl font-bold mb-2">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
  </motion.div>
);

const FeatureCard = ({ icon, title, text }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="p-10 rounded-2xl bg-[#042545] border border-white/5 hover:border-[#de8f32]/50 transition-all shadow-xl"
  >
    <div className="mb-6">{icon}</div>
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{text}</p>
  </motion.div>
);

export default Home;