import { useEffect ,useState} from 'react';

import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Whatsup from "../components/Whatsup";
import CookieConsent from "../components/CookieConsent";

export default function Mainlayout() {
       const [showCookie, setShowCookie] = useState(false);
    useEffect(() => {
      // Show cookie after 5 seconds
       setTimeout(() => setShowCookie(true), 5000);
    }, []);

  return (
    <>
      <Navbar />
      <Whatsup />
      <Outlet />
       {showCookie && <CookieConsent />}
      <Footer />
    </>
  );
}
