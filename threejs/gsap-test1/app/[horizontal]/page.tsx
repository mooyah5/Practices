"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function IndexPage() {
  let container = useRef(null);
  useEffect(() => {
    const sections = gsap.utils.toArray(".panel");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".container",
        pin: true,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        scrub: 1.23,
        end: () => "+=" + container?.current?.offsetWidth,
      },
    });
  }, []);

  return (
    <div ref={(el) => (container = el)} className="container">
      <section className="panel">
        <h1>SCROLL DOWN</h1>
      </section>
      <section className="panel">
        <h2>ONE</h2>
      </section>
      <section className="panel">
        <h2>TWO</h2>
      </section>
      <section className="panel">
        <h2>THREE</h2>
      </section>
    </div>
  );
}
