// import React from 'react'
import { Outlet, NavLink } from "react-router-dom";

export default function AuthLayout() {
  return (
    <>
      <Outlet />
      <section className="mb-20 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-md transition-all duration-300 hover:bg-white/[0.05] hover:border-white/10 group">
          <NavLink
            to="/"
            className="flex items-center gap-1 text-[#015aae] hover:text-[#de8f32] text-sm font-bold tracking-tight transition-colors"
          >
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              stroke="currentColor"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:-translate-x-1 transition-transform"
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Return to Home
          </NavLink>
        </div>
      </section>
    </>
  );
}
