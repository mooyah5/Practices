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

    gsap.to("#text-section04-1", {
      scrollTrigger: {
        trigger: "#text-section04-1",
        scrub: 0.5,
        end: "center center",
        start: "bottom bottom",
      },
      text: "/ PROJECT ART:CH",
      ease: "none",
    });
    gsap.to("#text-section04-2", {
      scrollTrigger: {
        trigger: "#text-section04-2",
        scrub: 0.5,
        end: "center center",
        start: "top bottom",
      },
      text: "아치 프로젝트는 창의적인 예술가들을 위한 공간으로 여정을 시작했습니다. 예술을 사랑하는 사람들이 모여 개인의 역량을 발할 수 있는 기회를 제공합니다.",
      ease: "none",
    });
    gsap.to("#text-section04-3", {
      scrollTrigger: {
        trigger: "#text-section04-3",
        scrub: 0.5,
        end: "center center",
        start: "top bottom",
      },
      text: "뿐만 아니라 아치 안에서 다양한 예술층을 위한 기회의 장을 만들어냅니다. 아치를 통해 예술과 기업이 만나 새로운 가치를 창출하며, 더욱 풍요로운 예술 경험을 선사합니다. 아치와 함께 새로운 여정을 함께해보세요.",
      ease: "none",
    });
    gsap.to("#text-section04-4", {
      scrollTrigger: {
        trigger: "#text-section04-4",
        scrub: 0.5,
        end: "center center",
        start: "bottom bottom",
      },
      text: "EXPERIENCE",
      ease: "none",
    });

    return () => pin.revert();
  }, []);

  return (
    <section className="scroll-section-outer overflow-hidden">
      <div ref={triggerRef}>
        <div
          ref={sectionRef}
          className="scroll-section-inner h-screen w-[400vw] relative"
        >
          <div
            className="scroll-section h-screen w-screen grid grid-cols-3 grid-flow-row-dense"
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
              className="w-full h-full flex flex-col gap-16 col-span-2 p-[5%] text-white"
            >
              <div>
                <div className="uppercase">
                  Sparkling artistic growth, Inspiring creative visions
                </div>
                <div>성장과 비전을 함께 제시합니다.</div>
              </div>

              <div className="flex-grow bg-gray-50 bg-opacity-30">
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
            <div className="w-full h-full p-[5%] py-[10%]">
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
            className="scroll-section h-screen w-screen grid grid-cols-3 grid-flow-row-dense"
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
              className="w-full h-full flex flex-col gap-16 col-span-2 p-[5%] text-white"
            >
              <div>
                <div className="uppercase">
                  Sparkling artistic growth, Inspiring creative visions
                </div>
                <div>성장과 비전을 함께 제시합니다.</div>
              </div>

              <div className="flex-grow bg-gray-50 bg-opacity-30">
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
            <div className="w-full h-full p-[5%] py-[10%]">
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

          {/* <div
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
              <div className="bg-gray-50 bg-opacity-30">
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
            <div className="w-full h-full  px-[5%] py-[10%]">
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
          </div> */}
          {/* <div
            className="scroll-section h-screen w-screen flex justify-center items-center"
            style={{
              backgroundImage: `url(${section03_bg3.src})`,
            }}
          >
            <div className="h-full flex flex-col gap-16 w-auto  p-[5%] text-white justify-between">
              <div>
                <div className="uppercase">
                  Sparkling artistic growth, Inspiring creative visions
                </div>
                <div>성장과 비전을 함께 제시합니다.</div>
              </div>
              <div className="bg-gray-50 bg-opacity-30">이미지</div>
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
            <div className="w-full h-full  px-[5%] py-[10%]">
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
          </div> */}
          {/* <div className="scroll-section h-screen w-screen flex justify-center items-center">
            <div className="h-full flex flex-col gap-16 w-auto  p-[5%] text-white justify-between">
              <div>
                <div className="uppercase">
                  Sparkling artistic growth, Inspiring creative visions
                </div>
                <div>성장과 비전을 함께 제시합니다.</div>
              </div>
              <div className="bg-gray-50 bg-opacity-30">이미지</div>
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
            <div className="w-full h-full  px-[5%] py-[10%]">
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
                  ></div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;
