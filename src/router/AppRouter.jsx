// import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AuthLayout from "../layout/AuthLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Team from "../pages/Team";
import TechStack from "../pages/TechStack";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Career from "../pages/Career";
import Pricing from "../pages/Pricing";
export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="services" element={<Services />} />
          <Route path="team" element={<Team />} />
          <Route path="tech-stack" element={<TechStack />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="career" element={<Career />} />
        </Route>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="sign-up" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
