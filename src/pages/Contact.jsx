import { useEffect } from "react";
import { motion } from 'framer-motion';
import { MapPin, Send, MessageSquare, Globe } from 'lucide-react';

const Contact = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-[#031c36] text-white pt-32 pb-20 px-6 selection:bg-[#de8f32] selection:text-[#031c36]">
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[-5%] w-[30%] h-[30%] rounded-full bg-[#015aae] blur-[120px] opacity-20"></div>
        <div className="absolute bottom-[10%] left-[-5%] w-[30%] h-[30%] rounded-full bg-[#de8f32] blur-[120px] opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={fadeInUp} 
          className="text-center mb-20"
        >
          <h2 className="text-[#de8f32] font-bold tracking-[0.3em] uppercase text-sm mb-4">Get In Touch</h2>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">Let's Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#015aae] to-[#de8f32]">Next Big Idea</span></h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a question or a project in mind? Reach out to our core team and let's start engineering your digital future.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Column 1 & 2: The Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl"
          >
            <form className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[#015aae]">Full Name</label>
                <input type="text" placeholder="Your Name " className="w-full bg-[#031c36]/50 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-[#de8f32] transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[#015aae]">Email Address</label>
                <input type="email" placeholder="your.email@company.com" className="w-full bg-[#031c36]/50 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-[#de8f32] transition-all" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[#015aae]">Subject</label>
                <select className="w-full bg-[#031c36]/50 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-[#de8f32] transition-all appearance-none">
                  <option>Web Development</option>
                  <option>Mobile App Development</option>
                  <option>Cloud Services</option>
                  <option>General Inquiry</option>
                </select>
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[#015aae]">Message</label>
                <textarea rows="5" placeholder="Tell us about your project..." className="w-full bg-[#031c36]/50 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-[#de8f32] transition-all resize-none"></textarea>
              </div>
              <div className="md:col-span-2">
                <button className="group w-full md:w-auto bg-[#de8f32] text-[#031c36] font-black px-12 py-5 rounded-full flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-xl shadow-[#de8f32]/20">
                  SEND MESSAGE
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </form>
          </motion.div>

          {/* Column 3: Contact Details */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <ContactCard 
              icon={<MessageSquare className="text-[#de8f32]" />} 
              title="Chat with us" 
              detail="info.coredevelopers@gmail.com" 
              sub="Online 24/7"
            />
            <ContactCard 
              icon={<MapPin className="text-[#015aae]" />} 
              title="Visit our Lab" 
              detail="New Baneshwor ,Kathmandu, Nepal" 
              sub="Monday - Friday, 9am - 6pm"
            />
            <ContactCard 
              icon={<Globe className="text-purple-400" />} 
              title="Global Support" 
              detail="info.coredevelopers@gmail.com" 
              sub="For urgent technical help"
            />

            {/* Quick Status Box */}
            <div className="bg-gradient-to-br from-[#015aae] to-[#031c36] p-8 rounded-[2rem] border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-bold uppercase tracking-tighter">System Status: All Green</span>
              </div>
              <p className="text-sm text-blue-100/60 leading-relaxed">
                Our developers are currently active and responding to inquiries within **2 hours**.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

// Sub-component for Info Cards
const ContactCard = ({ icon, title, detail, sub }) => (
  <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:border-[#de8f32]/50 transition-all group">
    <div className="bg-[#031c36] w-12 h-12 rounded-xl flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-2">{title}</h3>
    <p className="text-xl font-bold mb-1">{detail}</p>
    <p className="text-xs text-gray-400">{sub}</p>
  </div>
);

export default Contact;