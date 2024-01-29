import React from "react";
import Projects from "./Projects";

export default function ProjectsSection() {
  return (
    <div className="projects-section">
      <h1>PROJECTS</h1>
      <p>
        Simply click on an image to access its live demo. Hover over each image
        to reveal descriptions of the corresponding projects. As you scroll
        down, you will find live links and GitHub repository URLs.
      </p>
      <Projects />
    </div>
  );
}
