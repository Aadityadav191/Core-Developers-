// import React from "react";
// import Logo from "./../assets/Logo.jpeg";
const Footer = () => {
  const brandDark = "#031c36";
  const brandBlue = "#015aae";
  // const brandOrange = "#de8f32";

  return (
    <footer
      style={{ backgroundColor: brandDark }}
      className="text-gray-300 border-t-4"
      style={{ backgroundColor: brandDark, borderTopColor: brandBlue }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          {/* Brand & About - Spans 5 columns */}
          <div className="md:col-span-5">
            <img
              src="/Logo.jpeg"
              alt="Zeenopay"
              className="h-14 sm:h-30 w-auto rounded-lg mb-5"
            />
            <p className="text-gray-400 leading-relaxed max-w-sm mb-6">
              Building simple and clean web experiences using modern tools. We
              focus on performance, accessibility, and high-end design.
            </p>
            {/* Social Links for Desktop */}
            <div className="hidden md:flex gap-5">
              {["Twitter", "GitHub", "LinkedIn"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="transition-colors duration-300 hover:text-white"
                  style={{ color: brandBlue }}
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links - Spans 4 columns */}
          <div className="md:col-span-4 grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-white font-semibold uppercase tracking-wider text-xs mb-5">
                Company
              </h3>
              <ul className="space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:translate-x-1 transition-transform inline-block hover:text-white"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:translate-x-1 transition-transform inline-block hover:text-white"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:translate-x-1 transition-transform inline-block hover:text-white"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold uppercase tracking-wider text-xs mb-5">
                Support
              </h3>
              <ul className="space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:translate-x-1 transition-transform inline-block hover:text-white"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:translate-x-1 transition-transform inline-block hover:text-white"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:translate-x-1 transition-transform inline-block hover:text-white"
                  >
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter - Spans 3 columns */}
          <div className="md:col-span-3">
            <h3 className="text-white font-semibold uppercase tracking-wider text-xs mb-5">
              Stay Updated
            </h3>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="email@address.com"
                className="bg-gray-800/50 border border-gray-700 rounded px-4 py-2 text-sm focus:outline-none focus:ring-1"
                style={{ focusRingColor: brandBlue }}
              />
              <button
                className="py-2 px-4 rounded text-white text-sm font-bold transition-opacity hover:opacity-90"
                style={{ backgroundColor: brandBlue }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8"></div>

        {/* Copyright Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Web Developers . Built with precision.
          </p>

          {/* Mobile Social Links */}
          <div className="flex md:hidden gap-6 mb-4">
            <a href="#" className="text-sm hover:text-white">
              Twitter
            </a>
            <a href="#" className="text-sm hover:text-white">
              GitHub
            </a>
            <a href="#" className="text-sm hover:text-white">
              LinkedIn
            </a>
          </div>

          <div className="flex gap-8 text-xs text-gray-500">
            <a href="#" className="hover:text-gray-300">
              Terms of Service
            </a>
            <a href="#" className="hover:text-gray-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
