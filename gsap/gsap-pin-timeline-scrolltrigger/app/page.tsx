"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    const textWrappers = document.querySelectorAll(".text-wrapper-class");

    const pinTrigger = ScrollTrigger.create({
      trigger: ".content-wrapper",
      pin: true,
      start: "top top",
      end: "+=10%",
    });

    let tl = gsap.timeline();

    tl.to(textWrappers, {
      x: "-300%",
      scrollTrigger: {
        start: () => pinTrigger?.start,
        end: () => pinTrigger?.end,
        scrub: 2,
      },
    });

    return () => {
      pinTrigger?.kill();
      tl.kill();
    };
  });
  return (
    <div className="content-wrapper">
      <div className="text-wrapper-class flex-col flex justify-center items-center h-screen">
        <h1 className="text-vw font-bold  text-white whitespace-nowrap text-wrapper transform translate-x-[70%]">
          A new way of designing, discovering and sharing
        </h1>
        <h1 className="text-vw font-bold text-white whitespace-nowrap text-wrapper transform translate-x-[70%]">
          A new way of designing, discovering and sharing
        </h1>
      </div>
    </div>
  );
}
