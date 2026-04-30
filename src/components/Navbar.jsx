// import React from 'react'

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Moon, Sun } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  const [theme, setTheme] = useState(false);

  const handleTheme = () => {
    setTheme(!theme);
  };

  return (
    <>
      <div className=" font-sans bg-[#0067c800] bg-opacity-30 backdrop-blur-sm shadow-md sticky top-3 z-50 rounded-xl mx-auto my-2 max-w-356 border-2 ">
        <nav className="flex items-center justify-between px-4 sm:px-8 py-4">
          <NavLink
            to="/"
            className="flex items-center hover:opacity-90 transition"
          >
            <img
              src="/Logo.jpeg"
              alt="Zeenopay"
              className="h-14 sm:h-14 w-auto rounded-lg"
            />
          </NavLink>

          <div className="hidden lg:flex  gap-0 items-center space-x-1 font-semibold text-[#ffffff]">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `rounded-lg px-3 py-1 transition ${
                  isActive
                    ? "text-[#dc8e34] font-bold"
                    : "text-[#ffffff] hover:text-[#dc8e34]"
                }`
              }
            >
              About
            </NavLink>

            <NavLink
              to="/Services"
              className={({ isActive }) =>
                `rounded-lg px-3 py-1 transition ${
                  isActive
                    ? "text-[#dc8e34] font-bold"
                    : "text-[#ffffff] hover:text-[#dc8e34]"
                }`
              }
            >
              Our Services
            </NavLink>

            <NavLink
              to="/tech-stack"
              className={({ isActive }) =>
                `rounded-lg px-3 py-1 transition ${
                  isActive
                    ? "text-[#dc8e34] font-bold"
                    : "text-[#ffffff] hover:text-[#dc8e34]"
                }`
              }
            >
              Our TechStack
            </NavLink>

            <NavLink
              to="/team"
              className={({ isActive }) =>
                `rounded-lg px-3 py-1 transition ${
                  isActive
                    ? "text-[#dc8e34] font-semibold"
                    : "text-[#ffffff] hover:text-[#dc8e34]"
                }`
              }
            >
              Our Team
            </NavLink>

            
            <NavLink
              to="/Pricing"
              className={({ isActive }) =>
                `rounded-lg px-3 py-1 transition ${
                  isActive
                    ? "text-[#dc8e34] font-bold"
                    : "text-[#ffffff] hover:text-[#dc8e34]"
                }`
              }
            >
              Pricing
            </NavLink>

            <NavLink
              to="/Contact"
              className={({ isActive }) =>
                `rounded-lg px-3 py-1 transition ${
                  isActive
                    ? "text-[#dc8e34] font-bold"
                    : "text-[#ffffff] hover:text-[#dc8e34] "
                }`
              }
            >
              Contact
            </NavLink>

            <NavLink
              to="/Career"
              className={({ isActive }) =>
                `rounded-lg px-3 py-1 transition ${
                  isActive
                    ? "text-[#dc8e34] font-bold"
                    : "text-[#ffffff] hover:text-[#dc8e34]"
                }`
              }
            >
              Career
            </NavLink>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <NavLink to="/auth/login">
              <button className="px-6 py-2.5 text-sm font-semibold text-[#ffffff] border border-[#ffffff] rounded-xl hover:border-[#dc8e34] hover:text-[#dc8e34] transition duration-300 bg-[#142941]">
                Login / Register
              </button>
            </NavLink>
            <button
              onClick={handleTheme}
              className="px-6 py-2.5 text-sm font-semibold text-[#ffffff] border border-[#ffffff] rounded-xl hover:border-green-600 hover:text-green-600 transition duration-300"
            >
              {theme ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          <button
            className="lg:hidden p-2.5 text-green-600 border border-[#ffffff] rounded-full hover:bg-green-50 transition duration-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        <div
          id="mobile-menu"
          className={`${
            isOpen ? "max-h-screen opacity-100 py-2" : "max-h-0 opacity-0"
          } lg:hidden overflow-hidden transition-all duration-300 ease-in-out`}
          aria-hidden={!isOpen}
        >
          <div className="flex flex-col space-y-3 px-4">
            <hr className="border-gray-200 mt-2 mb-2" />

            {/* Main Navigation NavLinks */}
            <NavLink
              to="/about"
              onClick={closeMenu}
              className="py-1.5 text-[#ffffff] hover:text-[#dc8e34] transition"
            >
              About
            </NavLink>

            <NavLink
              to="/Team"
              onClick={closeMenu}
              className="py-1.5 text-[#ffffff] hover:text-[#dc8e34] transition"
            >
              Our Team
            </NavLink>
            <NavLink
              to="/Services"
              onClick={closeMenu}
              className="py-1.5 text-[#ffffff] hover:text-[#dc8e34] transition"
            >
              Services
            </NavLink>
            <NavLink
              to="/Pricing"
              onClick={closeMenu}
              className="py-1.5 text-[#ffffff] hover:text-[#dc8e34] transition"
            >
              Pricing
            </NavLink>

            <NavLink
              to="/Contact"
              onClick={closeMenu}
              className="py-1.5 text-[#ffffff] hover:text-[#dc8e34] transition"
            >
              Contact
            </NavLink>

            <NavLink
              to="/Career"
              onClick={closeMenu}
              className="py-1.5 text-[#ffffff] hover:text-[#dc8e34] transition"
            >
              Career
            </NavLink>

            <hr className="border-gray-200 mt-2 mb-2" />

            {/* Login/Register Button */}
            <NavLink to="/auth/login" className="w-full" onClick={closeMenu}>
              <button className="w-full px-6 py-2.5 text-sm font-semibold text-[#ffffff] border border-[#ffffff] rounded-lg hover:border-green-600 hover:text-green-600 transition">
                Login / Register
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
