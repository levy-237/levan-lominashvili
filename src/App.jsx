import { useState } from "react";
import Welcome from "./Welcome";
import Particle from "./Particle";
import Header from "./Header";
import { Analytics } from "@vercel/analytics/react";
import { BrowserRouter } from "react-router-dom";
import Carousel from "./Carousel";
import ProjectsSection from "./ProjectsSection";
export default function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Particle />
        <div className="welcome-container">
          <Header />
          <Welcome />
          <Carousel />
          <ProjectsSection />
        </div>
      </div>
      <Analytics />
    </BrowserRouter>
  );
}
