import  { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, Send, Briefcase, User, Mail, Link as LinkIcon, FileText, X } from 'lucide-react';

const CareerForm = ({  onClose }) => {
  const [dragActive, setDragActive] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFileName(e.dataTransfer.files[0].name);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose} // Closes modal if clicking outside on the backdrop
      className="fixed inset-0 z-50 bg-[#031c36]/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", duration: 0.5 }}
        onClick={(e) => e.stopPropagation()} // Prevents closing modal when clicking inside form fields
        className="relative w-full max-w-3xl bg-[#031c36] border border-white/10 p-6 md:p-10 rounded-[2.5rem] shadow-2xl my-auto"
      >
        {/* Close Button Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-2">
            Join the <span className="text-[#de8f32]">Core</span> Team
          </h2>
          <p className="text-gray-400 text-sm">
            We’re looking for innovators, thinkers, and digital architects.
          </p>
        </div>

        <form className="space-y-6" onSubmit={(e) => {alert("Form submitted!"); e.preventDefault(); }} method='post'>
          {/* Personal Details Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#de8f32]">
                <User size={14} /> Full Name
              </label>
              <input 
                type="text" 
                placeholder="John Doe"
                className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-5 py-3.5 text-white focus:outline-none focus:border-[#015aae] transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#de8f32]">
                <Mail size={14} /> Email Address
              </label>
              <input 
                type="email" 
                placeholder="john@example.com"
                className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-5 py-3.5 text-white focus:outline-none focus:border-[#015aae] transition-all"
              />
            </div>
          </div>

          {/* Role & Links */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#de8f32]">
                <Briefcase size={14} /> Applying For
              </label>
              <select className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-5 py-3.5 text-white focus:outline-none focus:border-[#015aae] transition-all appearance-none">
                <option className="bg-[#031c36]">Frontend Developer</option>
                <option className="bg-[#031c36]">Backend Engineer</option>
                <option className="bg-[#031c36]">Full Stack Developer</option>
                <option className="bg-[#031c36]">UI/UX Designer</option>
                <option className="bg-[#031c36]">Mobile App Developer</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#de8f32]">
                <LinkIcon size={14} /> Portfolio/LinkedIn
              </label>
              <input 
                type="url" 
                placeholder="https://"
                className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-5 py-3.5 text-white focus:outline-none focus:border-[#015aae] transition-all"
              />
            </div>
          </div>

          {/* Resume Upload Area */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#de8f32]">
              <FileText size={14} /> Upload CV / Resume
            </label>
            <div 
              className={`relative border-2 border-dashed rounded-2xl p-6 transition-all flex flex-col items-center justify-center text-center ${
                dragActive ? "border-[#de8f32] bg-[#de8f32]/5" : "border-white/10 bg-white/[0.02]"
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <Upload className={`mb-2 ${dragActive ? "text-[#de8f32]" : "text-gray-500"}`} size={24} />
              <p className="text-gray-300 text-sm font-medium mb-1">
                {fileName ? fileName : "Drag and drop your CV here"}
              </p>
              <p className="text-gray-500 text-xs mb-3">Supported formats: PDF, DOCX (Max 5MB)</p>
              <input 
                type="file" 
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                onChange={(e) => e.target.files[0] && setFileName(e.target.files[0].name)}
              />
              <span className="bg-[#015aae] text-white px-4 py-1.5 rounded-lg text-xs font-bold">
                Browse Files
              </span>
            </div>
          </div>

          {/* Summary */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-[#de8f32]">Why Core Developers?</label>
            <textarea 
              rows="3"
              placeholder="Tell us about your superpower..."
              className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-5 py-3.5 text-white focus:outline-none focus:border-[#015aae] transition-all resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button 
            type="submit"
            className="w-full group flex items-center justify-center gap-3 bg-[#de8f32] text-[#031c36] py-4 rounded-2xl font-black text-base hover:bg-[#015aae] hover:text-white transition-all transform hover:scale-[1.01] active:scale-[0.99]"
          >
            SUBMIT APPLICATION <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default CareerForm;