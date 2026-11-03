import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 50, opacity: 0, scale: 0.95 }} 
          animate={{ y: 0, opacity: 1, scale: 1 }}   
          exit={{ y: 50, opacity: 0, scale: 0.95 }}    
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-xl z-50 bg-linear-to-r from-[#0157a8b6] to-[#013565] text-white p-4 sm:p-5 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-white/15"
        >
          <div className="flex items-center gap-3">
            <div className="hidden sm:block bg-white/20 p-2 rounded-xl text-lg">
               🍪
            </div>
            <p className="text-xs sm:text-sm text-blue-50 leading-relaxed">
              We use cookies to enhance your experience. By continuing to visit this
              site you agree to our use of cookies.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0 w-full sm:w-auto justify-end">
            <button
              onClick={declineCookies}
              className="text-xs sm:text-sm font-medium text-white/80 hover:text-white transition-colors px-2 py-1.5 cursor-pointer"
            >
              Decline
            </button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={acceptCookies}
              className="bg-white text-[#de8f32] px-5 py-2 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
            >
              Accept All
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}