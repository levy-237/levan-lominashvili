import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function App() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // Optional: You can perform any actions once particles are loaded
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#000000", // Black background for night sky
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: false, // Disable click events
            },
            onHover: {
              enable: false, // Disable hover events
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 200,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff", // White stars
          },
          links: {
            enable: false,
          },
          move: {
            enable: false, // Disable particle movement
          },
          number: {
            density: {
              enable: true,
              value_area: 800, // Adjust density to control number of stars
            },
            value: 200, // Total number of stars
          },
          opacity: {
            value: 0.6, // Adjust opacity for subtle visibility
            random: true, // Randomize opacity
            anim: {
              enable: true,
              speed: 0.5, // Adjust speed of opacity change
              opacity_min: 0.4, // Minimum opacity
              sync: false,
            },
          },
          shape: {
            type: "circle",
          },
          size: {
            value: 2, // Adjust size of stars
          },
        },
        detectRetina: true,
      }}
    />
  );
}
