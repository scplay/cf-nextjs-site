
"use client"

import Link from "next/link";
import { useEffect } from "react";
import { useRef } from "react";
import Typed from "typed.js";

const Debug = () => {
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
        Visit the <Link href="/pages/about">About</Link> page.
      </p>
    </div>
  );
};

export default Debug;