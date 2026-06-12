import { useEffect ,useState} from 'react';

import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Whatsup from "../Components/Whatsup";
import CookieConsent from "../Components/CookieConsent";

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
