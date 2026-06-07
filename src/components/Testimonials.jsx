// import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import Client1 from '../assets/Client1.jpg';
import Client2 from '../assets/Client2.jpg';
import Client3 from '../assets/Client3.jpeg';


const testimonials = [
  {
    name: "Sujan Raut",
    role: "co-founder of  ad builders",
    content: "The website they developed for us is a masterpiece of modern web design. It’s fast, responsive, and has a sleek UI that our users love. The team’s attention to detail and commitment to quality is evident in every pixel.",
    stars: 5,
    image: Client1
  },
  {
    name: "Giriza prashad lamsal",
    role: "Product Manager at Visionary",
    content: "Core Developers transformed our online presence with a stunning, user-friendly website. Their expertise in React and Next.js resulted in a fast, responsive site that perfectly captures our brand’s essence. We couldn’t be happier with the results!",
    stars: 5,
    image: Client2
  },
  {
    name: "Rahul Prashad Gupta",
    role: "Sales Officer at DishHome",
    content: "Working with Core Developers was a game-changer for our business. They built us a sleek, modern website that’s not only visually stunning but also incredibly fast and responsive. Their professionalism and expertise made the entire process seamless. Highly recommend!",
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