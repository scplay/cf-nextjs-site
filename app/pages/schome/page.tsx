"use client";

import "./page.css";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import Link from "next/link";

const ABOUT_ROUTE = '/pages/about';

async function initParticleJS() {
  if (process?.title === 'browser') {

    await import("particles.js")

    particlesJS("particles-js", {
      particles: {
        number: { value: 100, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: true },
        size: { value: 2, random: true },
        line_linked: {
          enable: false,
        },
        move: {
          enable: true,
          speed: 0.5,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "bubble" },
          onclick: { enable: true, mode: "repulse" },
          resize: true,
        },
        modes: {
          bubble: {
            distance: 250,
            size: 0,
            duration: 2,
            opacity: 0,
            speed: 3,
          },
          repulse: { distance: 400, duration: 0.4 },
        },
      },
      retina_detect: true,
    });
  }
}

const ScHome = () => {
  const termEl = useRef(null);

  useEffect(() => {
    const typed = new Typed(termEl.current, {
      strings: [
        `Greeting, commander! I'm Zeon Wang, a developer.`,
        `Greeting, commander! I'm Zeon Wang, a designer.`,
        `Greeting, commander! I'm Zeon Wang, a StarCraft fan.`,
        `Greeting, commander! I'm Zeon Wang, a developer.`,
      ],

      // cursorChar: '_',
      //  backSpeed: 0,
      typeSpeed: 50,
      loop: false,
    });

    initParticleJS()

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="home-body">
      <div id="particles-js"></div>
      <div className="nebula" id="nebula1"></div>
      <div className="nebula" id="nebula2"></div>

      <header>
        <h1>Zeon Wang</h1>
        <img
          src="https://s2.loli.net/2024/07/10/goU8AZFfwWOLVMq.png"
          alt="Zeon Wang's Avatar"
          className="profile-img"
          width="200"
          height="200"
        />
      </header>

      <main>
        <div className="typewriter">
          <span ref={termEl} id="intro"></span>
        </div>

        <div className="about">
          <h2>About Me</h2>
          <p>
            As an Expert Terran Developer in the digital cosmos, I've engaged
            countless cyber projects that have honed my skills and fueled my
            passion for cutting-edge technology.
          </p>
          <p>
            My journey began with a fascination for how code can transform
            concepts into reality, much like to see a simple command unleash a
            psionic storm.
          </p>
          <p>My armory includes:</p>
          <ul>
            <li>
              Barrack - Full-stack web development (js, php, node.js, mysql,
              linux)
            </li>
            <li>Fusion Core - Hybrid applications (ReactNative, Mini-app)</li>
            <li>
              Orbital Command Center - Familar with Cloud computing and
              serverless services
            </li>
            <li>
              Timing Attack - Expertised in project management and flow
              control
            </li>
          </ul>
          <p>
            Feel free to establish a neural link with me. I'm open to forming
            alliances and willing to support in the battlefield!
          </p>
        </div>
      </main>

      <div className="social-links">
        <a href="https://github.com/scplay">GitHub</a>
        <a href="https://twitter.com/zeon_wang">Twitter</a>
        <a href="https://www.linkedin.com/in/zeon-wang-3639aa2b/">LinkedIn</a>
        <Link href={ABOUT_ROUTE}>Contact</Link>
      </div>
    </div>
  );
};

export default ScHome;