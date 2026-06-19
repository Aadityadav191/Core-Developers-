import {
  Coffee,
  Monitor,
  Users,
  Rocket,
} from "lucide-react";

export const openRoles = [
    {
      title: "Senior Full-Stack Engineer",
      type: "Full-Time",
      location: "Remote / Hybrid",
      stack: ["React", "Node.js", "AWS"],
    },
    {
      title: "UI/UX Designer",
      type: "Contract",
      location: "Remote",
      stack: ["Figma", "Prototyping", "Branding"],
    },
    {
      title: "SEO Specialist",
      type: "Remote",
      location: "Silicon Sector",
      stack: ["SEO Audits", "Content Strategy", "Google Analytics"]
    }
  ];

  export const perks = [
    {
      icon: <Monitor size={24} />,
      title: "High-End Gear",
      desc: "Top-tier MacBooks and ergonomic setups for every dev.",
    },
    {
      icon: <Coffee size={24} />,
      title: "Work-Life Balance",
      desc: "Flexible hours because we care about output, not clock-ins.",
    },
    {
      icon: <Users size={24} />,
      title: "Core Culture",
      desc: "Collaborative sprints and monthly developer meetups.",
    },
    {
      icon: <Rocket size={24} />,
      title: "Growth Fund",
      desc: "Annual budget for courses, certifications, and conferences.",
    },
  ];