"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import section03_bg1 from "@/public/section03-bg1.png";
import section03_bg1_layer from "@/public/section03-bg1-layer.png";
import section03_bg2 from "@/public/section03_bg2.png";
import section03_bg3 from "@/public/section03_bg3.png";
import Canvas1 from "./Canvas1";
import Canvas2 from "./Canvas2";

function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-200vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
          // markers: {
          //   startColor: "black",
          //   endColor: "black",
          //   fontSize: "32px",
          //   indent: 10,
          // },
        },
      }
    );

    return () => pin.revert();
  }, []);

  return (
    <section className="scroll-section-outer overflow-hidden">
      <div ref={triggerRef}>
        <div
          ref={sectionRef}
          className="scroll-section-inner h-screen w-[400vw] flex flex-row relative"
        >
          <div
            className="scroll-section h-screen w-screen grid grid-cols-3"
            style={{
              backgroundImage: `url(${section03_bg1.src})`,
              backgroundPosition: "center",
              objectFit: "contain",
            }}
          >
            <div
              style={{
                backgroundImage: `url(${section03_bg1_layer.src})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              className="w-full h-full flex flex-col gap-16 p-[5%] text-white col-span-2"
            >
              <div>
                <div className="uppercase">
                  Sparkling artistic growth, Inspiring creative visions
                </div>
                <div>성장과 비전을 함께 제시합니다.</div>
              </div>
              <div className="flex-grow">
                <Canvas1 />
              </div>
              <div className="flex flex-row it justify-between">
                <div className="flex flex-row gap-5">
                  <div>artch</div>
                  <div className="flex flex-col gap-1">
                    <div>Lorem ipsum</div>
                    <div>Lorem ipsum</div>
                  </div>
                </div>
                <div className="text-6xl">2024</div>
              </div>
            </div>
            <div className="w-full h-full pl-[10%] p-[20%]">
              <div className="bg-white bg-opacity-70 p-10 w-full h-full flex flex-col justify-between">
                <div
                  id="text-section04-1"
                  className="w-full font-light text-[1.5vw]"
                />
                <div className="flex flex-col gap-4">
                  <div
                    id="text-section04-2"
                    className="w-full font-light text-[0.9vw]"
                  />
                  <div
                    id="text-section04-3"
                    className="w-full font-light text-[0.9vw]"
                  />

                  <div
                    id="text-section04-4"
                    className="w-full font-bold text-[5vw]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${section03_bg2.src})`,
            }}
            className="scroll-section h-screen w-screen grid grid-cols-3"
          >
            <div className="h-full flex flex-col gap-16 w-auto p-[5%] col-span-2 text-white justify-between">
              <div>
                <div className="uppercase">
                  Sparkling artistic growth, Inspiring creative visions
                </div>
                <div>성장과 비전을 함께 제시합니다.</div>
              </div>
              <div className="flex-grow">
                <Canvas2 />
              </div>
              <div className="flex flex-row it justify-between">
                <div className="flex flex-row gap-5">
                  <div>artch</div>
                  <div className="flex flex-col gap-1">
                    <div>Lorem ipsum</div>
                    <div>Lorem ipsum</div>
                  </div>
                </div>
                <div className="text-6xl">2024</div>
              </div>
            </div>
            <div className="w-full h-full  pl-[10%] p-[20%]">
              <div className=" bg-white bg-opacity-70 p-10 w-full h-full flex flex-col justify-between">
                <div
                  id="text-section04-1"
                  className="w-full font-light text-[1.5vw]"
                />
                <div className="flex flex-col gap-4">
                  <div
                    id="text-section04-2"
                    className="w-full font-light text-[0.9vw]"
                  />
                  <div
                    id="text-section04-3"
                    className="w-full font-light text-[0.9vw]"
                  />
                  <div
                    id="text-section04-4"
                    className="w-full font-bold text-[5vw]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="scroll-section h-screen w-screen grid grid-cols-3"
            style={{
              backgroundImage: `url(${section03_bg3.src})`,
            }}
          >
            <div className="h-full flex flex-col gap-16 w-auto col-span-2  p-[5%] text-white justify-between">
              <div>
                <div className="uppercase">
                  Sparkling artistic growth, Inspiring creative visions
                </div>
                <div>성장과 비전을 함께 제시합니다.</div>
              </div>
              <div className="flex-grow">이미지</div>
              <div className="flex flex-row it justify-between">
                <div className="flex flex-row gap-5">
                  <div>artch</div>
                  <div className="flex flex-col gap-1">
                    <div>Lorem ipsum</div>
                    <div>Lorem ipsum</div>
                  </div>
                </div>
                <div className="text-6xl">2024</div>
              </div>
            </div>
            <div className="w-full h-full  pl-[10%] p-[20%]">
              <div className=" bg-white bg-opacity-70 p-10 w-full h-full flex flex-col justify-between">
                <div
                  id="text-section04-1"
                  className="w-full font-light text-[1.5vw]"
                />
                <div className="flex flex-col gap-4">
                  <div
                    id="text-section04-2"
                    className="w-full font-light text-[0.9vw]"
                  />
                  <div
                    id="text-section04-3"
                    className="w-full font-light text-[0.9vw]"
                  />
                  <div
                    id="text-section04-4"
                    className="w-full font-bold text-[5vw]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;
