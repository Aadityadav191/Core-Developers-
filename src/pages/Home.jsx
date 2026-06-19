import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Globe,
  ShieldCheck,
  Database,
  Terminal,
  Cpu,
} from "lucide-react";
import Testimonials from "../components/UI/Testimonials";
import { Link } from "react-router-dom";
import ProductShowcase from "../components/UI/ProductShowcase";
import CompanyMarquee from "../components/UI/CompanyMarquee";

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
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  return (
    <div className="bg-[#031c36] text-white font-sans selection:bg-[#de8f32] selection:text-[#031c36]">
      {/* --- SECTION 1: HERO  --- */}
      <section className="relative min-h-screen flex items-center justify-center  pb-16 overflow-hidden">
        {/* Techy background grids and abstract glowing ambient lights */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-[-10%] left-[-10%] w-[50rem] h-[50rem] bg-sky-500/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[40rem] h-[40rem] bg-[#de8f32]/5 rounded-full blur-[140px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Side: Copywriting Content */}
          <motion.div
            className="lg:col-span-7 space-y-6 text-left"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
            >
              <div className="text-3xl font-bold tracking-tighter italic ">
                {"<"} CORE <span className="text-[#de8f32]"> DEVELOPERS </span>{" "}
                {"/>"}
              </div>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl sm:text-6xl xl:text-7xl font-black tracking-tight text-white leading-[1.05]"
            >
              We engineer <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-[#de8f32]">
                high-impact software
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-slate-400 text-lg sm:text-xl max-w-xl font-normal leading-relaxed"
            >
              Architecting secure, highly-scalable ecosystem environments
              designed to drive modern business metrics and massive digital
              market advantages.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="pt-4 flex flex-wrap gap-4"
            >
              <button className="group flex items-center gap-2 bg-[#de8f32] text-[#020b14] px-7 py-3.5 rounded-xl font-semibold hover:bg-[#f09f3c] transition-all duration-200 shadow-lg shadow-[#de8f32]/10 hover:shadow-[#de8f32]/20">
                Start a Project
                <ChevronRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
              <button className="flex items-center gap-2 bg-white/5 border border-white/10 text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-white/10 hover:border-white/20 transition-all duration-200 backdrop-blur-sm">
                View Architecture
              </button>
            </motion.div>
          </motion.div>

          {/* Right Side: Professional Interactive Tech Preview Visual */}
          <motion.div
            className="lg:col-span-5 relative w-full flex items-center justify-center lg:justify-end"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative w-full max-w-[440px] aspect-square rounded-2xl bg-gradient-to-b from-white/10 to-transparent p-[1px] shadow-2xl backdrop-blur-3xl">
              <div className="absolute inset-0 rounded-2xl bg-[#031120]/80 -z-10" />

              {/* Fake Code Terminal Box Overlay */}
              <div className="p-6 h-full flex flex-col justify-between font-mono text-xs text-slate-400">
                <div className="space-y-4">
                  <div className="flex gap-1.5 border-b border-white/5 pb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500/40" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
                    <div className="w-3 h-3 rounded-full bg-green-500/40" />
                    <span className="text-[10px] text-slate-500 ml-2">
                      core-engine.config.ts
                    </span>
                  </div>
                  <div className="space-y-1.5 text-sky-400/90">
                    <p>
                      <span className="text-indigo-400">import</span> &#123;
                      Cluster &#125;{" "}
                      <span className="text-indigo-400">from</span>{" "}
                      <span className="text-amber-300">"core-systems"</span>;
                    </p>
                    <p className="text-slate-500">
                      // Initialize distributed network ecosystems
                    </p>
                    <p>
                      <span className="text-indigo-400">const</span> app ={" "}
                      <span className="text-emerald-400">new</span>{" "}
                      <span className="text-amber-200">Cluster</span>(&#123;
                    </p>
                    <p className="pl-4">
                      scaling:{" "}
                      <span className="text-amber-400">"auto-elastic"</span>,
                    </p>
                    <p className="pl-4">
                      redundancy:{" "}
                      <span className="text-amber-400">"multi-region"</span>,
                    </p>
                    <p className="pl-4 text-[#de8f32]">optimization: true</p>
                    <p>&#125;);</p>
                  </div>
                </div>

                {/* Micro Service Indicators inside Hero */}
                <div className="grid grid-cols-2 gap-3 pt-6 border-t border-white/5">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white/2 border border-white/5">
                    <Terminal size={18} className="text-[#de8f32]" />
                    <div className="font-sans text-left">
                      <p className="font-semibold text-white text-xs">
                        Web Engines
                      </p>
                      <p className="text-[10px] text-slate-500">
                        React & Next.js
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white/2 border border-white/5">
                    <Cpu size={18} className="text-sky-400" />
                    <div className="font-sans text-left">
                      <p className="font-semibold text-white text-xs">
                        Scalable Cloud
                      </p>
                      <p className="text-[10px] text-slate-500">
                        Go & Microservices
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 2: STATS BAR --- */}
      <section className="py-20 bg-white/5 border-y border-white/10 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: "Projects Completed", val: "15+" },
            { label: "Global Clients", val: "20+" },
            { label: "Experts", val: "10+" },
            { label: "Uptime Guaranteed", val: "99%" },
          ].map((stat, i) => (
            <ScrollReveal key={i}>
              <h3 className="text-4xl font-bold text-[#de8f32]">{stat.val}</h3>
              <p className="text-gray-400 text-sm uppercase tracking-widest mt-2">
                {stat.label}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* --- SECTION 3: DEEP SERVICES GRID --- */}
      <section className="py-15 px-8 relative">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-[#015aae] font-bold tracking-widest uppercase text-sm mb-4 text-center">
              Comprehensive Solutions
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-center mb-20">
              Everything you need to <br /> scale in the{" "}
              <span className="text-[#de8f32]">Digital Age</span>
            </h3>
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
        <ProductShowcase />
      </section>


      <section>
        <CompanyMarquee/>
      </section>

      <section>
        <Testimonials />
      </section>

      {/* --- SECTION 4: CALL TO ACTION (INTERACTIVE) --- */}
      <section className="py-10 px-8">
        <ScrollReveal>
          <div className="max-w-5xl mx-auto rounded-[3rem] bg-linear-to-br from-[#015aae] to-[#031c36] p-12 md:p-20 text-center border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#de8f32] blur-[120px] opacity-20 -mr-32 -mt-32"></div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Have a big idea? <br /> Let's build the{" "}
              <span className="text-[#de8f32]">Core</span> of it.
            </h2>
            <p className="text-xl text-blue-100/70 mb-10 max-w-2xl mx-auto">
              Our consultation is free. Our strategy is priceless. Join the 50+
              companies who have leveled up with us.
            </p>
            <Link
              to="/contact"
              className="bg-white text-[#031c36] px-12 py-5 rounded-full font-black text-lg hover:scale-110 transition-transform active:scale-95 shadow-2xl"
            >
              GET IN TOUCH
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

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
