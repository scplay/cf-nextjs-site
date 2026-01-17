"use client";

import "./page.css";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import Link from "next/link";
import { homeData } from "./home.data";
import type { Lang } from "../../i18n/config";

async function initParticleJS() {
  if (process?.title === 'browser') {
    console.log("initialize particleJS");

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

const ClientSideEffects = ({ strings }: { strings: string[] }) => {
  const termEl = useRef(null);

  useEffect(() => {
    const typed = new Typed(termEl.current, {
      strings,
      typeSpeed: 50,
      loop: false,
    });

    initParticleJS();

    return () => {
      typed.destroy();
    };
  }, [strings]);

  return <span ref={termEl} id="intro"></span>;
};

export function HomeContent({ lang = 'en' }: { lang?: Lang }) {
  const data = homeData[lang];
  const cvPath = lang === 'en' ? '/pages/cv' : '/zh-CN/pages/cv';

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
          <ClientSideEffects strings={data.greeting} />
        </div>

        <div className="about">
          <h2>{data.aboutTitle}</h2>
          {data.aboutContent.map((text, index) => (
            <p key={index} className={index > 0 ? "mt-4" : ""}>{text}</p>
          ))}
          <p className="mt-4">{data.armoryTitle}</p>
          <ul className="ml-2">
            {data.armory.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p className="mt-4">{data.contactText}</p>
        </div>
      </main>

      <div className="social-links">
        <a href="https://github.com/scplay">GitHub</a>
        {/* twitter 没内容，没必要展示 */}
        {/* <a href="https://twitter.com/zeon_wang">Twitter</a> */}
        <a href="https://www.linkedin.com/in/zeon-wang-3639aa2b/">LinkedIn</a>
        <Link href={cvPath}>{data.profile}</Link>
      </div>
    </div>
  );
}
