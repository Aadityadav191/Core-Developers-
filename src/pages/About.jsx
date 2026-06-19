import { useEffect } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, Cpu } from "lucide-react";
import Testimonials from "../components/UI/Testimonials";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Globe2, Layers, CheckCircle2 } from "lucide-react";
import CompanyMarquee from "../components/UI/CompanyMarquee";
import {stats,pillars} from "../data/AboutData"

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Helmet>
        <title>Core Developers - About Us</title>
      </Helmet>
      <div className="bg-[#031c36] text-white py-20 px-8">
        <div className="max-w-7xl mx-auto">
          {/* --- Header Section --- */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-[#de8f32] font-bold tracking-[0.2em] uppercase text-sm mb-4">
              Our Identity
            </h2>
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
              <h3 className="text-3xl font-bold mb-6">
                We don't just write code. <br />
                <span className="text-[#de8f32]">We build legacies.</span>
              </h3>
              <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                At Core Developers, we believe that the best software isn't just
                functional—it's transformative. Founded on the principles of
                high-performance architecture and user-centric design, we bridge
                the gap between complex ideas and seamless digital experiences.
              </p>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Our team consists of senior developers, creative designers, and
                strategic thinkers who are obsessed with "Clean Code" and
                "Scalable Systems."
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-4xl font-bold text-[#015aae]">99%</h4>
                  <p className="text-sm text-gray-500 uppercase tracking-widest mt-1">
                    Client Satisfaction
                  </p>
                </div>
                <div>
                  <h4 className="text-4xl font-bold text-[#de8f32]">150+</h4>
                  <p className="text-sm text-gray-500 uppercase tracking-widest mt-1">
                    Projects Delivered
                  </p>
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

          <section className=" text-white py-15 px-6 relative overflow-hidden">
            {/* Structural Tech Grid Layer */}
            <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>

            {/* Futuristic Background Glows */}
            <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-[#015aae]/10 blur-[140px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-[#de8f32]/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
              {/* --- TOP ROW: SECTION INTRO --- */}
              <div className="grid lg:grid-cols-12 gap-12 items-start mb-24">
                <div className="lg:col-span-5 space-y-4">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#de8f32] text-xs font-bold uppercase tracking-widest">
                    <Globe2 size={12} /> Who We Are
                  </div>
                  <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-none text-white">
                    The Blueprint of <br />
                    <span className="text-[#015aae]">Core Innovation</span>
                  </h2>
                </div>

                <div className="lg:col-span-7 lg:pt-6">
                  <p className="text-gray-400 text-lg md:text-xl font-normal leading-relaxed max-w-3xl">
                    At Core Developers, we believe that software shouldn't just
                    run—it should dominate. Born out of a necessity for flawless
                    code and unyielding speed, we help modern enterprises and
                    visionary startups engineer systems that turn abstract ideas
                    into bulletproof, revenue-driving digital engines.
                  </p>
                </div>
              </div>

              {/* --- MIDDLE ROW: INTERACTIVE VALUE PILLARS --- */}
              <div className="grid md:grid-cols-3 gap-8 mb-24">
                {pillars.map((pillar, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -6 }}
                    className="p-8 rounded-[2rem] bg-white/[0.01] border border-white/5 hover:border-[#015aae]/30 hover:bg-white/[0.03] transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#de8f32] group-hover:bg-[#015aae] group-hover:text-white transition-colors mb-8">
                        {pillar.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-white group-hover:text-[#de8f32] transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>

                    <div className="mt-8 flex items-center gap-2 text-xs font-black tracking-wider uppercase opacity-0 group-hover:opacity-100 text-[#015aae] transition-all">
                      <CheckCircle2 size={14} className="text-[#de8f32]" /> Core
                      Verified
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* --- BOTTOM ROW: METRICS GRID & AGENT STATEMENT --- */}
              <div className="grid lg:grid-cols-12 gap-12 items-center pt-12 border-t border-white/5">
                {/* Engineering Manifesto Statement */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500">
                    <Layers size={14} /> Our Engineering Manifesto
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold text-gray-200 leading-snug">
                    "We measure our success by the absolute simplicity of our
                    architecture and the unstoppable scalability of your
                    business."
                  </h4>
                </div>

                {/* Core Analytics Showcase */}
                <div className="lg:col-span-6 grid grid-cols-3 gap-6 w-full">
                  {stats.map((stat, idx) => (
                    <div
                      key={idx}
                      className="text-center p-6 bg-white/[0.01] border border-white/5 rounded-2xl"
                    >
                      <div className="text-2xl md:text-4xl font-black text-[#de8f32] tracking-tight mb-1">
                        {stat.value}
                      </div>
                      <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-500">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section>
            <CompanyMarquee />
          </section>

          <section>
            <Testimonials />
          </section>

          {/* --- Bottom CTA --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="mt-32 p-12 rounded-3xl bg-linear-to-r from-[#015aae] to-[#031c36] border border-white/10 text-center"
          >
            <h2 className="text-3xl font-bold mb-6">
              Ready to see the "Core" difference?
            </h2>
            <Link
              to="/team"
              className="bg-[#de8f32] text-[#031c36] px-10 py-4 rounded-full font-bold hover:shadow-[0_0_20px_rgba(222,143,50,0.4)] transition-all"
            >
              Meet the Team
            </Link>
          </motion.div>
        </div>
      </div>
    </>
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
