
import { Zap, Shield, Crown } from 'lucide-react';

export  const websitePlans = [
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

 export const serviceRetainers = [
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