import { motion } from "framer-motion";
import { Smartphone, Shield, Zap, Layers, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
// Importing the assets using your paths
import WebAppShow1 from "../../assets/WebAppShow1.png";
import WebAppShow2 from "../../assets/WebAppShow2.png";

const ProductShowcase = () => {
  const features = [
    {
      icon: <Zap size={18} />,
      title: "Ultra-Performance Infrastructure",
      desc: "Sub-100ms response times engineered via advanced edge-caching networks.",
    },
    {
      icon: <Shield size={18} />,
      title: "Enterprise Grade Security",
      desc: "End-to-end encryption protocols keeping user architecture completely bulletproof.",
    },
    {
      icon: <Layers size={18} />,
      title: "Universal Cross-Platform Sync",
      desc: "Real-time state synchronization seamlessly active between native mobile environments and web backends.",
    },
  ];

  return (
    <section className="bg-[#031c36] text-white py-2 px-6 relative overflow-hidden">
      {/* Background Lighting Elements */}
      <div className="absolute top-1/3 left-[-10%] w-[50%] h-[50%] rounded-full bg-[#015aae] blur-[150px] opacity-10 pointer-events-none"></div>
      <div className="absolute bottom-0 right-[-10%] w-[40%] h-[40%] rounded-full bg-[#de8f32] blur-[150px] opacity-5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center relative z-10">
        
        {/* --- LEFT COLUMN: CONTENT ACCENTS --- */}
        <div className="lg:col-span-5 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#de8f32] text-xs font-bold uppercase tracking-widest">
            <Smartphone size={14} /> Next-Gen Mobile Ecosystem
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Seamless Apps. <br />
            Built for <span className="text-[#015aae]">Scale</span> & Speed.
          </h2>
          
          <p className="text-gray-400 text-base leading-relaxed">
            We architect robust custom mobile applications tailored to maximize engagement. 
            By merging high-end fluid UI design with reliable backend systems, your product 
            delivers an native software experience across any hardware layout.
          </p>

          {/* Micro Feature Bullet Points */}
          <div className="space-y-6 pt-4">
            {features.map((feat, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-lg bg-[#015aae]/10 border border-[#015aae]/20 flex items-center justify-center text-[#de8f32] shrink-0 mt-1">
                  {feat.icon}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">{feat.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed max-w-sm">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="pt-4">
          <Link to="/Services">
            <button className="group flex items-center gap-2 bg-[#de8f32] text-[#031c36] font-black px-8 py-4 rounded-xl text-sm transition-all transform hover:scale-105 hover:bg-[#015aae] hover:text-white cursor-pointer">
              EXPLORE OUR SERVICES 
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            </Link>
          </div>
        </div>

        {/* --- RIGHT COLUMN: LAYERED HARDWARE OVERFLOW MOCKUPS --- */}
        <div className="lg:col-span-7 flex items-center justify-center relative min-h-125 md:min-h-150 w-full mt-10 lg:mt-0">
          
          {/* Base Decorative Tech Halo */}
          <div className="absolute w-[80%] h-[80%] border border-white/5 rounded-full animate-[spin_100s_linear_infinite] pointer-events-none"></div>
          <div className="absolute w-[60%] h-[60%] border border-dashed border-white/10 rounded-full animate-[spin_60s_linear_infinite_reverse] pointer-events-none"></div>

          {/* Primary Main Interface Image */}
          <motion.div 
            initial={{ opacity: 0, x: 40, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="w-[70%] md:w-[65%] z-20 relative rounded-3xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] "
          >
            <img 
              src={WebAppShow1} 
              alt="Core Developers Application Frontend interface view" 
              className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105 "
            />
          </motion.div>

          {/* Overlapping Secondary Pop-out Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50, y: -30 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            whileHover={{ x: -10, y: -15 }}
            className="absolute w-[45%] md:w-[40%] left-4 top-12 z-30 rounded-2xl overflow-hidden shadow-[0_30px_50px_-10px_rgba(3,28,54,0.8)]  bg-[#031c36]"
          >
            <img 
              src={WebAppShow2} 
              alt="Core Developers alternative app layout profile perspective view" 
              className="w-full h-auto object-cover animate-bounce-slow"
            />
          </motion.div>
          
        </div>

      </div>
    </section>
  );
};

export default ProductShowcase;