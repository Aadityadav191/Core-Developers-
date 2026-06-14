import  { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Home, ArrowLeft, } from "lucide-react"; // optional icons

export default function NotFound() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(7);

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      navigate("/");
    }, 7000);

    const interval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => {
      clearTimeout(redirectTimer);
      clearInterval(interval);
    };
  }, [navigate]);

  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-[#051f3a] px-6">
      <div className="text-center">
        {/* Animated 404 Header */}
        <p className="text-sm font-bold text-[#015aae] uppercase tracking-widest">
          Lost in Space?
        </p>

        <p className="mt-6 text-xl leading-7 text-gray-600 max-w-lg mx-auto">
          Redirecting to Home Page in{" "}
          <span className="font-bold text-[#015aae] text-3xl">{countdown}</span> seconds...
        </p>
        <h1 className="mt-4 text-6xl font-extrabold tracking-tight text-[#015aae] sm:text-7xl">
          404 - Page Not Found
        </h1>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 px-6 py-3 text-sm font-semibold text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-all"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>

          <Link
            to="/"
            className="flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#015aae] rounded-lg shadow-lg hover:bg-green-700 hover:shadow-none transition-all"
          >
            <Home size={18} />
            Back to Homepage
          </Link>
        </div>

        {/* Helpful Links Section */}
        <div className="mt-16 border-t border-gray-100 pt-10">
          <p className="text-sm text-gray-500 font-medium mb-4">
            Try checking these out instead:
          </p>
          <div className="flex justify-center gap-6 text-sm">
            <Link
              to="/shop"
              className="text-[#015aae] hover:underline font-semibold"
            >
              Our Shop
            </Link>
            <Link
              to="/contact"
              className="text-[#015aae] hover:underline font-semibold"
            >
              Contact Support
            </Link>
            <Link
              to="/faq"
              className="text-[#015aae] hover:underline font-semibold"
            >
              FAQs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
