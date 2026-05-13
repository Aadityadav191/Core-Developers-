// import React from "react";
import { Link } from "react-router-dom";
import {
  FaTwitter,
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
import { IoSendSharp } from "react-icons/io5";

const Footer = () => {
  const brandDark = "#031c36";
  const brandBlue = "#015aae";

  const socialLinks = [
    {
      icon: <FaFacebookF />,
      color: "#1877F2",
      href: "https://www.facebook.com/profile.php?id=61589272535302",
      label: "Facebook",
    },
    {
      icon: <FaInstagram />,
      color: "#E4405F",
      href: "https://www.instagram.com/coredevelopers_official/",
      label: "Instagram",
    },
    {
      icon: <FaTwitter />,
      color: "#1DA1F2",
      href: "https://twitter.com/coredevelopers",
      label: "Twitter",
    },
    {
      icon: <FaGithub />,
      color: "#ffffff",
      href: "https://github.com/coredevelopers",
      label: "GitHub",
    },
    {
      icon: <FaLinkedinIn />,
      color: "#0A66C2",
      href: "https://www.linkedin.com/company/coredevelopers",
      label: "LinkedIn",
    },
  ];

  const footerLinks = {
    Company: [
      {
        name: "About Us",
        href: "/about",
      },
      {
        name: "Services",
        href: "/services",
      },
      {
        name: "contact",
        href: "/contact",
      },
      {
        name: "Careers",
        href: "/career",
      },
    ],
    Services: [
      {
        name: "Web Development",
      },
      {
        name: "Mobile Apps",
      },
      {
        name: "UI/UX Design",
      },
      {
        name: "IT Consulting",
      },
    ],
    Support: [
      {
        name: "Help Center",
      },

      {
        name: "Contact Us",
      },
      {
        name: "Privacy Policy",
      },
      {
        name: "Terms of Service",
      },
    ],
  };

  return (
    <footer
      className="relative overflow-hidden border-t border-white/5"
      style={{ backgroundColor: brandDark }}
    >
      {/* Decorative Background Glows */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#015aae]/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-8 pt-20 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
          {/* --- BRAND COLUMN --- */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-6">
              <div className="text-2xl font-black italic tracking-tighter text-white">
                <img
                  src="/Logo.jpeg"
                  alt="Zeenopay"
                  className="h-15 sm:h-30 w-auto rounded-lg mb-5"
                />
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
              Engineering high-performance digital ecosystems for the next
              generation of business. We turn complex challenges into seamless
              user experiences.
            </p>

            {/* Colored Social Icons */}
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                  style={{ "--hover-color": social.color }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = social.color)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "inherit")
                  }
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* --- LINKS COLUMNS --- */}
          <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-6">
                  {title}
                </h4>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link}>
                      <Link
                        to={link.href}
                        className="text-gray-500 text-sm hover:text-[#de8f32] transition-colors flex items-center group"
                      >
                        <span className="w-0 group-hover:w-2 h-[2px] bg-[#de8f32] mr-0 group-hover:mr-2 transition-all duration-300"></span>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* --- NEWSLETTER COLUMN --- */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-6">
              Weekly Insight
            </h4>
            <p className="text-gray-500 text-xs mb-6">
              Get the latest tech trends and case studies delivered to your
              inbox.
            </p>
            <div className="relative group">
              <input
                type="email"
                placeholder="Enter email address"
                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 pl-5 pr-14 text-sm text-white focus:outline-none focus:border-[#015aae] transition-all"
              />
              <button
                className="absolute right-2 top-2 bottom-2 px-4 rounded-xl flex items-center justify-center transition-all hover:scale-105 active:scale-95"
                style={{ backgroundColor: brandBlue }}
              >
                <IoSendSharp className="text-white text-lg" />
              </button>
            </div>
            <p className="mt-4 text-[10px] text-gray-600 italic text-center lg:text-left">
              * No spam. Just engineering excellence.
            </p>
          </div>
        </div>

        {/* --- BOTTOM SECTION --- */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-8">
            <p className="text-[11px] font-medium text-gray-500 uppercase tracking-widest">
              © {new Date().getFullYear()} CORE DEVELOPERS INC.
            </p>
            <div className="flex gap-6">
              <Link
                to="/privacy"
                className="text-[11px] text-gray-600 hover:text-white transition-colors uppercase tracking-widest"
              >
                Privacy
              </Link>
              <Link
                to="/terms"
                className="text-[11px] text-gray-600 hover:text-white transition-colors uppercase tracking-widest"
              >
                Terms
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter">
              System Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
