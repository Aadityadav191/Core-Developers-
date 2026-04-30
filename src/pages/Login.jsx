import { useState } from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, ArrowRight, Code } from 'lucide-react';export default function Login() {
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
          <div className="absolute inset-0 opacity-10 pointer-events-none" 
               style={{ backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`, backgroundSize: '30px 30px' }}>
          </div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative z-10"
          >
            <div className="text-3xl font-black italic tracking-tighter text-white mb-6">
               {"<"} CORE <span className="text-[#de8f32]">DEVELOPERS {"/>"}</span>
            </div>
            <h2 className="text-4xl font-bold text-white leading-tight mb-4">
              Access the <span className="text-[#de8f32]">Core</span> of your projects.
            </h2>
            <p className="text-blue-100/60 leading-relaxed text-sm">
              Log in to manage your infrastructure, view project milestones, and collaborate with your dedicated engineering team.
            </p>
          </motion.div>

          {/* Decorative Circle */}
          <div className="absolute -bottom-20 -right-20 w-80 h-80 border-t border-l border-white/10 rounded-full animate-spin-slow"></div>
        </div>

        {/* --- Right Side: Login Form --- */}
        <div className="p-10 lg:p-16 flex flex-col justify-center">
          <div className="mb-10 text-center lg:text-left">
            <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
            <p className="text-gray-400 text-sm">
              Don't have an account? <NavLink to="/auth/sign-up" className="text-[#de8f32] hover:underline font-semibold">Join the team</NavLink>
            </p>
          </div>

          <form className="space-y-5">
            {/* Email Input */}
            <div className="group space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 ml-1">Work Email</label>
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
              <div className="flex justify-between items-center px-1">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">Security Key</label>
                <button type="button" className="text-[10px] text-[#015aae] hover:text-[#de8f32] transition-colors font-bold uppercase tracking-widest">Forgot?</button>
              </div>
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

            {/* Submit Button */}
            <button className="group w-full bg-[#de8f32] text-[#031c36] font-black py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#c97d28] transition-all transform active:scale-95 shadow-xl shadow-[#de8f32]/10 mt-4">
              AUTHENTICATE
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Divider */}
            <div className="flex items-center gap-4 my-8">
              <div className="h-px bg-white/5 flex-1"></div>
              <span className="text-[10px] text-gray-600 font-bold uppercase tracking-widest">Digital ID</span>
              <div className="h-px bg-white/5 flex-1"></div>
            </div>

            {/* Social Logins */}
            <div className="grid grid-cols-2 gap-4">
              <button type="button" className="w-full bg-white/5 border border-white/10 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-3 hover:bg-white/10 transition-all text-xs">
                <Code size={16} /> GitHub
              </button>
              <button type="button" className="w-full bg-white/5 border border-white/10 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-3 hover:bg-white/10 transition-all text-xs">
                {/* <Chrome size={16} /> Google */}
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
}