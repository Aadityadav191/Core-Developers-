import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Shield, Crown, Rocket, ArrowRight } from 'lucide-react';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('project'); // 'project' or 'service'

  const websitePlans = [
    {
      name: "Startup Core",
      price: "$150",
      desc: "Perfect for new brands needing a high-performance landing page.",
      icon: <Zap className="text-[#015aae]" />,
      features: ["5 Custom Sections", "Mobile Responsive", "Framer Motion Animations", "Basic SEO Setup", "1 Week Delivery"],
      buttonText: "Launch Project",
      highlight: false
    },
    {
      name: "Business Elite",
      price: "$250",
      desc: "Full-scale corporate websites with advanced integrations.",
      icon: <Shield className="text-[#de8f32]" />,
      features: ["Unlimited Pages", "CMS Integration", "E-commerce Ready", "Advanced Interaction Design", "30 Days Support"],
      buttonText: "Scale Business",
      highlight: true
    },
    {
      name: "Custom Enterprise",
      price: "Custom",
      desc: "Complex web ecosystems built for global scale.",
      icon: <Crown className="text-purple-400" />,
      features: ["Custom Web Apps", "API Development", "High-Security Architecture", "Dedicated Architect", "Priority Updates"],
      buttonText: "Contact Sales",
      highlight: false
    }
  ];

  const serviceRetainers = [
    {
      name: "Dev Maintenance",
      price: "$499",
      unit: "/mo",
      desc: "Keep your core infrastructure secure and updated.",
      features: ["Security Patches", "Performance Audits", "Monthly Backups", "Bug Fixes", "Priority Support"],
      buttonText: "Subscribe Now"
    },
    {
      name: "Dedicated Engineering",
      price: "$2,499",
      unit: "/mo",
      desc: "A dedicated developer team for your ongoing needs.",
      features: ["40 Dev Hours/Mo", "Full-Stack Support", "DevOps Management", "Slack Integration", "Weekly Sprints"],
      buttonText: "Hire Team"
    }
  ];

  return (
    <div className="min-h-screen bg-[#031c36] text-white pt-20 pb-20 px-6 selection:bg-[#de8f32] selection:text-[#031c36]">
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-[#015aae] blur-[150px] opacity-10"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-[#de8f32] blur-[150px] opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-6"
          >
            Transparent <span className="text-[#015aae]">Pricing</span>
          </motion.h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
            No hidden fees. Just elite engineering delivered with precision. Choose between one-time project builds or ongoing service retainers.
          </p>

          {/* Pricing Toggle */}
          <div className="flex items-center justify-center gap-4 bg-white/5 p-1.5 rounded-2xl w-fit mx-auto border border-white/10">
            <button 
              onClick={() => setBillingCycle('project')}
              className={`px-8 py-3 rounded-xl font-bold text-sm transition-all ${billingCycle === 'project' ? 'bg-[#de8f32] text-[#031c36]' : 'text-gray-400 hover:text-white'}`}
            >
              Websites
            </button>
            <button 
              onClick={() => setBillingCycle('service')}
              className={`px-8 py-3 rounded-xl font-bold text-sm transition-all ${billingCycle === 'service' ? 'bg-[#de8f32] text-[#031c36]' : 'text-gray-400 hover:text-white'}`}
            >
              Services
            </button>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {(billingCycle === 'project' ? websitePlans : serviceRetainers).map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-8 rounded-[2.5rem] border transition-all duration-500 ${
                plan.highlight 
                ? 'bg-gradient-to-b from-[#042545] to-[#031c36] border-[#de8f32] shadow-2xl shadow-[#de8f32]/10 scale-105 z-20' 
                : 'bg-white/[0.03] border-white/10 hover:border-white/20'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#de8f32] text-[#031c36] text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                  {plan.icon || <Rocket className="text-[#015aae]" />}
                </div>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{plan.desc}</p>
              </div>

              <div className="mb-8">
                <span className="text-5xl font-black">{plan.price}</span>
                {plan.unit && <span className="text-gray-500 font-bold ml-2">{plan.unit}</span>}
              </div>

              <ul className="space-y-4 mb-10 text-sm">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-300">
                    <div className="bg-[#015aae]/20 p-1 rounded-full">
                      <Check size={12} className="text-[#015aae]" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                plan.highlight 
                ? 'bg-[#de8f32] text-[#031c36] hover:bg-[#c97d28]' 
                : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
              }`}>
                {plan.buttonText}
                <ArrowRight size={18} />
              </button>
            </motion.div>
          ))}
        </div>

        {/* FAQ Preview */}
        <div className="mt-32 p-12 rounded-[3rem] bg-white/[0.02] border border-white/5 text-center">
          <h2 className="text-2xl font-bold mb-4">Have a custom requirement?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">We offer bespoke engineering solutions for complex enterprise needs. Let's discuss your project goals.</p>
          <button className="text-[#de8f32] font-black text-sm uppercase tracking-widest border-b-2 border-[#de8f32] pb-1 hover:text-white hover:border-white transition-all">
            Get a Custom Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;