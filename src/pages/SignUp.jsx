import { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import {
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#031c36] flex items-center justify-center p-6 selection:bg-[#de8f32] selection:text-[#031c36]">
      {/* Background Decorative Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#015aae] blur-[120px] opacity-20"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#de8f32] blur-[120px] opacity-10"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-5xl grid lg:grid-cols-2 bg-[#042545]/50 backdrop-blur-xl border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl"
      >
        {/* --- Left Side: Brand Visual --- */}
        <div className="hidden lg:flex flex-col justify-center p-12 bg-gradient-to-br from-[#015aae] to-[#031c36] relative overflow-hidden">
          {/* Abstract Grid Overlay */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
              backgroundSize: "30px 30px",
            }}
          ></div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative z-10"
          >
            <div className="text-3xl font-black italic tracking-tighter text-white mb-6">
              {"<"}CORE{" "}
              <span className="text-[#de8f32]">DEVELOPERS {"/>"}</span>
            </div>
            <h2 className="text-4xl font-bold text-white leading-tight mb-4">
              Begin your <span className="text-[#de8f32]">Digital </span>{" "}
              journey.
            </h2>
            <p className="text-blue-100/60 leading-relaxed text-sm mb-8">
              Create an account to join our ecosystem. Experience seamless
              project management, rapid deployments, and elite technical
              support.
            </p>

            {/* Feature List for Signup */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-xs font-bold text-white/80">
                <ShieldCheck size={16} className="text-[#de8f32]" />
                <span>Enterprise-grade Security</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-bold text-white/80">
                <ShieldCheck size={16} className="text-[#de8f32]" />
                <span>Real-time Build Updates</span>
              </div>
            </div>
          </motion.div>

          {/* Decorative Element */}
          <div className="absolute -bottom-10 -left-10 w-64 h-64 border border-white/5 rounded-full"></div>
        </div>

        {/* --- Right Side: Signup Form --- */}
        <div className="p-10 lg:p-16 flex flex-col justify-center">
          <div className="mb-10 text-center lg:text-left">
            <h1 className="text-3xl font-bold text-white mb-2">
              Create Account
            </h1>
            <p className="text-gray-400 text-sm">
              Already have an account?{" "}
              <NavLink
                to="/auth/login"
                className="text-[#de8f32] hover:underline font-semibold"
              >
                Sign in
              </NavLink>
            </p>
          </div>

          <form className="space-y-4">
            {/* Full Name Input */}
            <div className="group space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 ml-1">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500 group-focus-within:text-[#de8f32] transition-colors">
                  <User size={18} />
                </div>
                <input
                  type="text"
                  placeholder="Your name "
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#de8f32]/50 focus:bg-white/[0.08] transition-all"
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="group space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 ml-1">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500 group-focus-within:text-[#de8f32] transition-colors">
                  <Mail size={18} />
                </div>
                <input
                  type="email"
                  placeholder="name@company.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#de8f32]/50 focus:bg-white/[0.08] transition-all"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="group space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 ml-1">
                Create Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500 group-focus-within:text-[#de8f32] transition-colors">
                  <Lock size={18} />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-12 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#de8f32]/50 focus:bg-white/[0.08] transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-500 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-center gap-3 px-1 py-2">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-white/10 bg-white/5 checked:bg-[#de8f32] focus:ring-0 transition-all cursor-pointer"
              />
              <label className="text-[10px] text-gray-500 font-medium">
                I agree to the{" "}
                <span className="text-[#de8f32] cursor-pointer">
                  Terms of Service
                </span>{" "}
                and{" "}
                <span className="text-[#de8f32] cursor-pointer">
                  Privacy Policy
                </span>
                .
              </label>
            </div>

            {/* Submit Button */}
            <button className="group w-full bg-[#de8f32] text-[#031c36] font-black py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#c97d28] transition-all transform active:scale-95 shadow-xl shadow-[#de8f32]/10 mt-2">
              INITIALIZE ACCOUNT
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>

            {/* Divider */}
            <div className="flex items-center gap-4 my-6">
              <div className="h-px bg-white/5 flex-1"></div>
              <span className="text-[10px] text-gray-600 font-bold uppercase tracking-widest">
                
              </span>
              <div className="h-px bg-white/5 flex-1"></div>
            </div>

            {/* Social Logins */}
            <section className="text-center relative z-10">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-md transition-all duration-300 hover:bg-white/[0.05] hover:border-white/10 group">
                <NavLink
                  to="/"
                  className="flex items-center gap-1 text-[#dcdcdc] hover:text-[#de8f32] text-sm font-bold tracking-tight transition-colors"
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
          </form>
        </div>
      </motion.div>
    </div>
  );
}
