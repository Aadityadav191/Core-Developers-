// import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Aadit Yadav ",
    role: "Software Engineer at Zeenopay Nepal",
    content: "Core Developers transformed our legacy system into a high-speed cloud powerhouse. Their attention to detail in the 'Core' architecture is unmatched.",
    stars: 5,
    image: "https://lh3.googleusercontent.com/a/ACg8ocKAsPdf8uU2GJLzS8eMWidJR4tpzM2XS-8-EJT9pHF0DG6d8euh=s576-c-no"
  },
  {
    name: "Dipak Shrestha",
    role: "Product Manager at Visionary",
    content: "The mobile app they built for us saw a 40% increase in user engagement within the first month. Clean code and beautiful UI.",
    stars: 5,
    image: "https://media.licdn.com/dms/image/v2/D5603AQFSpqOaneZsYw/profile-displayphoto-scale_400_400/B56Z2aJM2uIIAk-/0/1776407601177?e=1779321600&v=beta&t=LYAT3yXiQSi-sIfHYKKCuQ75LflhGbWEc4SfdxntyLY"
  },
  {
    name: "Rahul Prashad Gupta",
    role: "Sales Officer at DishHome",
    content: "Fast, reliable, and technically superior. They are our go-to partners for complex React integrations and cybersecurity audits.",
    stars: 5,
    image: "https://media.licdn.com/dms/image/v2/D4E03AQGI3bEt1kMnew/profile-displayphoto-shrink_800_800/B4EZRPY9ndHEAc-/0/1736498732486?e=1779321600&v=beta&t=4dkWc_MjWXqbSaeixTjQAq_Kpo0o6UcTdav5KKECUwA"
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
            What our <span className="text-[#015aae]">Partners</span> say
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