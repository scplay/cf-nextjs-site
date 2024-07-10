"use client"

import "./style/global.css";

import Link from "next/link";
import ScHome from "./pages/schome/page";
import { useEffect, useRef } from "react";
import Typed from 'typed.js';

const Home = () => {
  const termEl = useRef(null);
  useEffect(() => {
    const typed = new Typed(termEl.current, {
      strings: [
        'Hi! this is ZeonWang, a developer.',
        'Hi! this is ZeonWang, a designer.',
        'Hi! this is ZeonWang, a starcraft player.',
      ],
      
      // cursorChar: '_',
      backSpeed: 0,
      typeSpeed: 40,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <h1 style={{height: '45px'}} ><span ref={termEl} /></h1>
      <p>
        Visit the <Link href="/about">About</Link> page.
      </p>
    </div>
  );
};

export default ScHome;
