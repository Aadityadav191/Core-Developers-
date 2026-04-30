import  { useEffect } from "react";
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Cpu } from 'lucide-react';
import Testimonials from './../components/Testimonials';

const About = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="bg-[#031c36] text-white py-20 px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Header Section --- */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-[#de8f32] font-bold tracking-[0.2em] uppercase text-sm mb-4">Our Identity</h2>
          <h1 className="text-4xl md:text-6xl font-bold">
            The <span className="text-[#015aae]">Core</span> of Innovation
          </h1>
          <div className="w-24 h-1 bg-[#de8f32] mx-auto mt-6"></div>
        </motion.div>

        {/* --- Story Section --- */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                alt="Our Team" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Decorative background box */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#015aae] rounded-2xl -z-0"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6">We don't just write code. <br/><span className="text-[#de8f32]">We build legacies.</span></h3>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              At Core Developers, we believe that the best software isn't just functional—it's transformative. Founded on the principles of high-performance architecture and user-centric design, we bridge the gap between complex ideas and seamless digital experiences.
            </p>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Our team consists of senior developers, creative designers, and strategic thinkers who are obsessed with "Clean Code" and "Scalable Systems."
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-4xl font-bold text-[#015aae]">99%</h4>
                <p className="text-sm text-gray-500 uppercase tracking-widest mt-1">Client Satisfaction</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-[#de8f32]">150+</h4>
                <p className="text-sm text-gray-500 uppercase tracking-widest mt-1">Projects Delivered</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* --- Core Values Grid --- */}
        <div className="grid md:grid-cols-3 gap-8">
          <ValueCard 
            icon={<Zap className="text-[#de8f32]" size={32} />}
            title="Speed to Market"
            description="We use agile methodologies to ensure your product launches faster without compromising on security."
          />
          <ValueCard 
            icon={<ShieldCheck className="text-[#015aae]" size={32} />}
            title="Bulletproof Security"
            description="Security isn't an afterthought; it's baked into every line of code we write for your peace of mind."
          />
          <ValueCard 
            icon={<Cpu className="text-white" size={32} />}
            title="Modern Tech Stack"
            description="From AI integration to Cloud Native apps, we only use the most stable and modern technologies."
          />
        </div>

        <section>
          <Testimonials/>
        </section>

        {/* --- Bottom CTA --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-32 p-12 rounded-3xl bg-gradient-to-r from-[#015aae] to-[#031c36] border border-white/10 text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Ready to see the "Core" difference?</h2>
          <button className="bg-[#de8f32] text-[#031c36] px-10 py-4 rounded-full font-bold hover:shadow-[0_0_20px_rgba(222,143,50,0.4)] transition-all">
            Meet the Team
          </button>
        </motion.div>

      </div>
    </div>
  );
};

// Helper Component for Values
const ValueCard = ({ icon, title, description }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="p-10 rounded-2xl bg-white/5 border border-white/5 hover:border-[#015aae]/50 transition-all"
  >
    <div className="mb-6">{icon}</div>
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </motion.div>
);

export default About;