// import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import Client1 from '../assets/client1.jpg';
import Client2 from '../assets/client2.jpg';
import Client3 from '../assets/client3.jpeg';


const testimonials = [
  {
    name: "Sujan Raut",
    role: "co-founder of  ad builders",
    content: "Core's expertise in React and cybersecurity transformed our digital presence. The website they built for us is not only visually stunning but also incredibly secure, giving our users peace of mind.",
    stars: 5,
    image: Client1
  },
  {
    name: "Giriza prashad lamsal",
    role: "Product Manager at Visionary",
    content: "The mobile app they built for us saw a 40% increase in user engagement within the first month. Clean code and beautiful UI.",
    stars: 5,
    image: Client2
  },
  {
    name: "Rahul Prashad Gupta",
    role: "Sales Officer at DishHome",
    content: "Fast, reliable, and technically superior. They are our go-to partners for complex React integrations and cybersecurity audits.",
    stars: 5,
    image: Client3
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#de8f32] font-bold tracking-[0.2em] uppercase text-sm mb-4"
          >
            Client Success
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            What our <span className="text-[#015aae]">Clients</span> say
          </motion.h3>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="relative p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-sm group transition-all"
            >
              {/* Quote Icon Overlay */}
              <Quote className="absolute top-6 right-8 text-white/5 group-hover:text-[#de8f32]/10 transition-colors" size={60} />
              
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(item.stars)].map((_, i) => (
                  <Star key={i} size={16} className="fill-[#de8f32] text-[#de8f32]" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-400 italic leading-relaxed mb-8 relative z-10">
                "{item.content}"
              </p>

              {/* User Profile */}
              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-12 h-12 rounded-full border-2 border-[#015aae]"
                />
                <div>
                  <h4 className="text-white font-bold text-sm">{item.name}</h4>
                  <p className="text-[#015aae] text-xs font-medium uppercase tracking-wider">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;