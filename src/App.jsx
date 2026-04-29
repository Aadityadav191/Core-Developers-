import AppRouter from "./router/AppRouter";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Hide loader after 1.5 seconds
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  // 1. Loading Screen
  if (isLoading) {
    return (
      <div className="grid h-screen place-items-center bg-[#031c36]">
        <div className=" animate-[pulse_2s_infinite] transition-transform duration-1000 scale-100">
          <img
            src="/Logo.jpeg"
            alt="Loading..."
            className="w-42 h-auto rounded-lg border-2 border-[#de8f32] shadow-lg"
          />
        </div>
      </div>
    );
  }

  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;
