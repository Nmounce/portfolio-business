import React from 'react';
import Particles from "react-tsparticles";

const particle = () => {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
    return (
      <Particles
        id='tsparticles'
        init={particlesInit}
        loaded={particlesLoaded}
            style={{
                position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: '#0d47a1',
        backgroundImage: 'url("")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: '50% 50%'}}
            options={{
                background: {
                    color: {
                    value: '#0d47a1',
                },
            },
                fps_limit :60,
                interactivity: {
                    detectsOn: "canvas",
                    events: {
                      onClick: {
                        enable: true,
                        mode: "push",
                      },
                      onHover: {
                        enable: true,
                        mode: "repulse",
                      },
                      resize: true,
                    },
                    modes: {
                      push: {
                        "particles_nb:4",
                      },
                      repulse: {
                        distance: 200,
                        duration: 0.4,
                      },
                    },
                  },
                  particles: {
                    color: {
                      value: "#ffffff",
                    },
                    links: {
                      color: "#ffffff",
                      distance: 150,
                      enable: true,
                      opacity: 0.4,
                      width: 1,
                    },
                      move: {
                    bounce: false,
                      direction: "none",
                      enable: true,
                      outMode: "out",
                      random: false,
                      speed: 2,
                      straight: false,
                    },
                    number: {
                      density: {
                        enable: true,
                        value_area: 800,
                      },
                      value: 80,
                    },
                    opacity: {
                      value: 0.5,
                    },
                    shape: {
                      type: "circle",
                    },
                    size: {
                      random: true,
                      value: 5,
                    },
                  },
                  detectRetina: true,
                }}
              />
            );
};

export default particle;