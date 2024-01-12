"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

// import LocomotiveScroll from "locomotive-scroll";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styled, { keyframes } from "styled-components";
import "@/assets/home/home.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";

import background0 from "@/public/background0.png";
import maskGroup from "@/public/maskGroup.png";
import section2img1 from "@/public/section2image1.png";
import section2img2 from "@/public/section2image2.png";
import section2img3 from "@/public/section2image3.png";
import section2img4 from "@/public/section2image4.png";
import bg_footer from "@/public/bg-footer.png";
import ScrollSection from "@/components/main/ScrollSection";
import Footer from "./main/Footer";

import section06_img1 from "@/public/section06-img1.png";
import section06_img2 from "@/public/section06-img2.png";
import section06_img3 from "@/public/section06-img3.png";
import section06_img4 from "@/public/section06-img4.png";
import section06_img5 from "@/public/section06-img5.png";
import section06_img6 from "@/public/section06-img6.png";
import section06_img7 from "@/public/section06-img7.png";

const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0,
  });
  const onScroll = () => {
    setState({ y: window.scrollY, x: window.screenX });
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return state;
};

export default function MainDOM() {
  const comp = useRef(null);
  let section2img1Ref = useRef(null);
  const [skip, setSkip] = useState(false);
  let cursorRef = useRef<any>(null);
  const hoverImages = [section2img1, section2img2, section2img3, section2img4];
  let section2Img1Ref = useRef(null);
  let section2Img2Ref = useRef(null);
  let section2Img3Ref = useRef(null);
  let section2Img4Ref = useRef(null);
  // const section04 = useRef(null);
  let text_collabo = useRef(null);
  let text_ration = useRef(null);
  let text_bridge = useRef(null);
  let text_bridge2 = useRef(null);
  let text_hub = useRef(null);
  let text_lorem = useRef(null);
  let section03 = useRef(null);
  let container = useRef(null);

  const section04_text_1 = useRef(null);
  const section04_text_2 = useRef(null);
  const section04_text_3 = useRef(null);
  const section04_ref = useRef(null);
  const section04_trigger = useRef(null);

  const section05_ref = useRef(null);

  let hoverImg = useRef(null);
  let imgBox = useRef(null);

  const { y } = useScroll();

  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  // const animate = () => {
  //   if (xPercent < -100) {
  //     xPercent = 0;
  //   } else if (xPercent > 0) {
  //     xPercent = -100;
  //   }
  //   gsap.set(firstText.current, { xPercent: xPercent });
  //   gsap.set(secondText.current, { xPercent: xPercent });
  //   requestAnimationFrame(animate);
  //   xPercent += 0.1 * direction;
  // };

  const [hasRendered, setHasRendered] = useState(false);

  useEffect(() => {
    setHasRendered(true);
  }, []);
  useEffect(() => {
    // GSAP ScrollTrigger, TextPlugin INIT
    gsap.registerPlugin(ScrollTrigger, TextPlugin);

    // SCROLL SMOOTH EFFECT - locomotive-scroll lib.
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();

    // ALL OF ANIMATIONS (ctx = context)
    if (hasRendered) {
      // // slider (text)
      // gsap.to(slider.current, {
      //   scrollTrigger: {
      //     trigger: document.documentElement,
      //     scrub: 0.25,
      //     start: 0,
      //     end: window.innerHeight,
      //     onUpdate: (e) => (direction = e.direction * -1),
      //   },
      //   x: "-500px",
      // });
      // requestAnimationFrame(animate);

      let tl = gsap.timeline();

      // INTRO - skip
      if (skip) {
        tl.from("#intro-logo", {
          opacity: 0,
          y: "+=30",
          duration: 0,
        })
          .to(
            "#intro-logo",
            {
              opacity: 0,
              y: "-=30",
              duration: 0,
            },
            "<"
          )
          .to(
            "#intro-slider",
            {
              // duration: 0,
              display: "none",
            },
            "<"
          )
          .to(
            "#intro-slider-2",
            {
              opacity: 0,
              duration: 0,
            },
            "<"
          );
        return;
      } else {
        // INTRO
        tl.from("#intro-logo", {
          opacity: 0,
          y: "+=30",
          duration: 1,
        })
          .to("#intro-logo", {
            opacity: 0,
            y: "-=30",
          })
          .to("#intro-slider", {
            duration: 1.3,
            display: "none",
          })
          .from(["#title-1", "#title-2"], {
            opacity: 0,
            duration: 1,
            // stagger: 0.6,
          })
          // .to(["#title-1", "#title-2"], {
          //   delay: 1,
          //   opacity: 0,
          //   duration: 0.5,
          // })
          // .to(".title-span-1", {
          //   xPercent: "-100",
          //   duration: 0.5,
          // })
          // .to(".title-span-2", {
          //   xPercent: "100",
          //   duration: 0.5,
          // })
          .from(["#section-1-bg", "#section-1-nav"], {
            delay: 0.5,
            opacity: 0,
            // display: "flex",
            duration: 1.2,
          })
          .fromTo(
            "#intro-slider-2",
            { opacity: 1 },
            {
              opacity: 0,
              duration: 1,
            }
          )
          .fromTo(
            "#mask-group",
            { scale: 1.6, opacity: 0 },
            { scale: 1, opacity: 100, duration: 1 },
            "<"
          );
      }

      // Section02
      gsap.set([text_collabo.current, text_ration.current], {
        x: -500,
      });
      gsap.to([text_collabo.current, text_ration.current], {
        scrollTrigger: {
          trigger: "#text_collabo",
          start: "top bottom",
          end: "bottom center",
          toggleActions: "restart none reverse none",
          scrub: 0.5,
          anticipatePin: 1,
        },
        x: 0,
        duration: 15,
        ease: "none",
      });

      gsap.set([text_bridge.current, text_bridge2.current, text_hub.current], {
        x: 500,
      });
      gsap.to([text_bridge.current, text_bridge2.current, text_hub.current], {
        scrollTrigger: {
          trigger: "#text_bridge",
          start: "top bottom",
          end: "center center",
          toggleActions: "restart none reverse none",
          scrub: 0.5,
        },
        x: 0,
        duration: 15,
        opacity: 100,
        ease: "none",
      });

      // gsap.set(text_lorem.current, {
      //   opacity: 0,
      // });
      // gsap.to(text_lorem.current, {
      //   scrollTrigger: {
      //     trigger: "#text_lorem",
      //     start: "center 70%",
      //     end: "center top",
      //     toggleActions: "restart none reverse none",
      //     scrub: 0.5,
      //   },
      //   duration: 3,
      //   opacity: 100,
      //   ease: "none",
      // });

      gsap.to("#text", {
        scrollTrigger: {
          trigger: "#text",
          scrub: 0.5,
          start: "bottom bottom",
          end: "top center",
        },
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quaerat, ipsam quibusdam nam ad repudiandae",
        ease: "none",
      });

      // Section03 (ScrollSection is in component)

      // SECTION 04
      const RowContentWrappers = document.querySelectorAll(
        ".content-row-wrapper-class"
      );
      const ColContentWrappers = document.querySelectorAll(
        ".content-col-wrapper-class"
      );
      const pinTrigger = ScrollTrigger.create({
        trigger: ".content-wrapper",
        anticipatePin: 1,
        pin: true,
        start: "top top",
        end: "+=200%",
        scrub: 1,
        markers: {
          startColor: "white",
          endColor: "orange",
          fontSize: "50px",
          indent: 10,
        },
      });

      tl.to(RowContentWrappers, {
        x: "100%",
        scrollTrigger: {
          start: () => pinTrigger?.start,
          end: () => pinTrigger?.end,
          scrub: 2,
        },
        stagger: 0.1,
      });
      tl.to(ColContentWrappers, {
        y: "-100%",
        scrollTrigger: {
          start: () => pinTrigger?.start,
          end: () => pinTrigger?.end,
          scrub: 2,
        },
        stagger: 0.1,
      });

      // SECTION 05

      gsap.fromTo(
        section04_text_1.current,
        { opacity: 0, y: 20 },
        {
          // duration: 2,
          opacity: 100,
          y: 0,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quaerat, ipsam quibusdam nam ad repudiandae",
          scrollTrigger: {
            start: "start center",
            end: "end top",
            trigger: section04_trigger.current,
            markers: true,
            toggleActions: "lorem",
            scrub: 0.3,
          },
        }
      );
      gsap.fromTo(
        section04_text_2.current,
        { opacity: 0, y: 20, delay: 1 },
        {
          opacity: 100,
          rotate: 3,
          y: 0,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing eliae",
          scrollTrigger: {
            start: "start center",
            end: "end top",
            trigger: section04_trigger.current,
            markers: true,
            toggleActions: "restart none reverse none",
            scrub: 0.3,
          },
        }
      );
      gsap.fromTo(
        section04_text_3.current,
        { opacity: 0, rotate: -10, y: 20, delay: 2 },
        {
          opacity: 100,
          rotate: 3,
          y: 0,
          text: "rotate text",
          scrollTrigger: {
            start: "start center",
            end: "end top",
            trigger: section04_trigger.current,
            markers: {
              startColor: "blue",
              endColor: "blue",
              fontSize: "32px",
              indent: 10,
            },
            toggleActions: "restart none reverse none",
            scrub: 0.3,
          },
        }
      );

      // SECTION 06 갤러리

      const gallery = document.querySelectorAll(".gallery");
      // console.log(gallery);
      // gallery.forEach((itm, idx) => {
      //   gsap.set(itm, {
      //     y: idx * -100,
      //     scale: 1.2,
      //     rotate: idx * 5,
      //   });
      //   gsap.from(itm, {
      //     scrollTrigger: {
      //       trigger: section05_ref.current,
      //       start: "top center",
      //       scrub: 0.5,
      //     },
      //     y: 10 * idx,
      //   });
      // });

      const pinTrigger2 = ScrollTrigger.create({
        trigger: section05_ref.current,
        anticipatePin: 1,
        pin: true,
        start: "top top",
        end: "+=200%",
        scrub: 1,
        markers: {
          startColor: "white",
          endColor: "orange",
          fontSize: "50px",
          indent: 10,
        },
      });

      // tl.to(RowContentWrappers, {
      //   x: "100%",
      //   scrollTrigger: {
      //     start: () => pinTrigger2?.start,
      //     end: () => pinTrigger2?.end,
      //     scrub: 2,
      //   },
      //   stagger: 0.1,
      // });

      const galleryItems = document.querySelectorAll(".gallery-item");
      console.log(galleryItems);
      gsap.utils.toArray(galleryItems).forEach((item: any, idx: number) => {
        // gsap.from(item, {
        //   stagger: 0.1,
        //   // x: 100 * idx,
        //   rotate: 10 * idx,
        //   scrollTrigger: {
        //     trigger: section05_ref.current,
        //     start: "top top",
        //     scrub: 0.5,
        //     markers: {
        //       startColor: "purple",
        //       endColor: "purple",
        //       fontSize: "50px",
        //       indent: 10,
        //     },
        //   },
        //   delay: 0.4,
        // });
        tl.from(item, {
          stagger: 0.1,
          x: 100 * idx,
          rotate: 10 * idx,
          scrollTrigger: {
            trigger: section05_ref.current,
            // start: "top top",
            // scrub: 0.5,
            start: () => pinTrigger2?.start,
            end: () => pinTrigger2?.end,
            scrub: 0.5,
            markers: {
              startColor: "purple",
              endColor: "purple",
              fontSize: "50px",
              indent: 10,
            },
          },
          delay: 0.4,
        });
        // tl.from(gallery, {
        //   x: "100%",
        //   scrollTrigger: {
        //     trigger: section05_ref.current,
        //     start: "center bottom",
        //     end: "bottom bottom",
        //     scrub: 0.5,
        //   },
        //   duration: 2,
        // });
      });
      tl.from(gallery, {
        x: "90%",
        opacity: 0,
        scrollTrigger: {
          trigger: section05_ref.current,
          // start: "top top",
          // scrub: 0.5,
          start: () => pinTrigger2?.start,
          end: () => pinTrigger2?.end,
          scrub: 0.5,
          markers: {
            startColor: "purple",
            endColor: "purple",
            fontSize: "50px",
            indent: 10,
          },
        },
        delay: 0.4,
      });

      // Footer is in Footer component
    }
  }, [skip, hasRendered]);

  return (
    <Main ref={comp}>
      <div className="scroller">
        <IntroSlider id="intro-slider">
          <svg
            id="intro-logo"
            className="w-[12vw]"
            width="843"
            height="180"
            viewBox="0 0 843 180"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M60 0L0 180H29L49.3311 121H109.266L116.5 143H146.664L100 0H60ZM99.7297 92L80 32L59.3243 92H99.7297Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M161 0V130H190V100H267V122H296V93.3109C310.945 84.6656 321 68.507 321 50C321 22.3858 298.614 0 271 0H161ZM271 29H190V71H271C282.598 71 292 61.598 292 50C292 38.402 282.598 29 271 29Z"
              fill="white"
            />
            <path d="M495 0H335V29H400V114.041H429V29H495V0Z" fill="white" />
            <path
              d="M683 143V0H712V65H814V0H843V180H814V94H712V143H683Z"
              fill="white"
            />
            <path
              d="M600.429 29H577.571C552.342 29 538 46.418 538 60.8054V122H509V60.8054C509 27.2235 539.7 0 577.571 0H600.429C638.3 0 669 27.2235 669 60.8054V80H640V60.8054C640 46.418 625.658 29 600.429 29Z"
              fill="white"
            />
          </svg>
          {!skip ? (
            <button
              className="bottom-5 right-5 fixed text-white"
              onClick={() => setSkip(true)}
            >
              skip
            </button>
          ) : null}
        </IntroSlider>
        <div
          id="intro-slider-2"
          className="relative flex flex-col h-screen z-10 bg-neutral-950 gap-2 justify-center place-items-center"
        >
          <p
            id="title-1"
            className=" text-center px-10 text-sm font-bold text-gray-100 font-spaceGrotesk"
          >
            <span className="title-span-1">
              Art moves the heart, and business moves the world.{" "}
            </span>
            <span className="title-span-2">
              Harmonizing both beautifully leads to innovation and success
            </span>
          </p>
          <p
            id="title-2"
            className=" text-center px-10 text-sm text-gray-100 font-spaceGrotesk"
          >
            <span className="title-span-1">
              예술은 마음을 움직이고, 비즈니스는 세상을 움직인다.{" "}
            </span>
            <span className="title-span-2">
              {" "}
              두 가지를 아름답게 조화시키면 혁신과 성공이 만난다.
            </span>
          </p>
        </div>
        <Nav id="section-1-nav">
          <div className="flex flex-row gap-10 items-center justify-center">
            <svg
              height="30"
              viewBox="0 0 843 180"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M60 0L0 180H29L49.3311 121H109.266L116.5 143H146.664L100 0H60ZM99.7297 92L80 32L59.3243 92H99.7297Z"
                fill="#9f735b"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M161 0V130H190V100H267V122H296V93.3109C310.945 84.6656 321 68.507 321 50C321 22.3858 298.614 0 271 0H161ZM271 29H190V71H271C282.598 71 292 61.598 292 50C292 38.402 282.598 29 271 29Z"
                fill="#9f735b"
              />
              <path
                d="M495 0H335V29H400V114.041H429V29H495V0Z"
                fill="#9f735b"
              />
              <path
                d="M683 143V0H712V65H814V0H843V180H814V94H712V143H683Z"
                fill="#9f735b"
              />
              <path
                d="M600.429 29H577.571C552.342 29 538 46.418 538 60.8054V122H509V60.8054C509 27.2235 539.7 0 577.571 0H600.429C638.3 0 669 27.2235 669 60.8054V80H640V60.8054C640 46.418 625.658 29 600.429 29Z"
                fill="#9f735b"
              />
            </svg>

            <NavCircle className="rounded-full aspect-square flex justify-center items-center p-2">
              CONTACT
            </NavCircle>
          </div>
          <div className="flex flex-row gap-12 lg:gap-24">
            <div className="flex justify-between gap-3">
              <NavBtn className="nav-btn" onClick={() => {}}>
                PROJECT
              </NavBtn>
              <NavBtn className="nav-btn" onClick={() => {}}>
                ARCHIVE
              </NavBtn>
              <NavBtn className="nav-btn" onClick={() => {}}>
                LIST
              </NavBtn>
            </div>
            <div className="flex justify-between gap-3">
              <NavBtn className="nav-btn" onClick={() => {}}>
                LOGIN
              </NavBtn>
            </div>
          </div>
        </Nav>
        <div id="section-1-bg" className="absolute top-0">
          <Image
            className="h-screen object-cover"
            src={background0}
            alt="background"
          />
          <MainText className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 ">
            <MainTextA>A</MainTextA>
            <MainTextMiddle>rtch</MainTextMiddle>
            <MainTextA>A</MainTextA>
          </MainText>
          <Image
            id="mask-group"
            className="absolute z-10 bottom-0 object-bottom w-[30vw] max-h-[80vh] max-lg:w-[50vw] duration-500 left-1/2 -translate-x-1/2 h-full object-contain"
            src={maskGroup}
            alt="mask group"
          />

          <div id="section-1-marquee" className="overflow-hidden w-screen">
            <MovingSpan className="-z-10 text-[34px]">
              Inspiring Create Visions Sparking Artistic Growth, Inspiring
              Create Visions Sparking Artistic Growth, Inspiring Create Visions
              Sparking Artistic Growth, Inspiring Create Visions Sparking
              Artistic Growth, Inspiring Create Visions Sparking Artistic
              Growth, Inspiring Create Visions Sparking Artistic Growth,
              Inspiring Create Visions Sparking Artistic Growth, Inspiring
              Create Visions Sparking Artistic Growth, Inspiring Create Visions
              Sparking Artistic Growth, Inspiring Create Visions Sparking
              Artistic Growth, Inspiring Create Visions Sparking Artistic
              Growth, Inspiring Create Visions Sparking Artistic Growth,
              Inspiring Create Visions Sparking Artistic Growth, Inspiring
              Create Visions Sparking Artistic Growth, Inspiring Create Visions
              Sparking Artistic Growth, Inspiring Create Visions Sparking
              Artistic Growth,
            </MovingSpan>
          </div>
        </div>

        {/* <main className={styles.main}>
          <Image src="/images/background.jpg" fill={true} alt="background" />
          <div className={styles.sliderContainer}>
            <div ref={slider} className={styles.slider}>
              <p ref={firstText}>
                COLLA<span className="font-thin">BO</span>RATION
              </p>
              <p ref={secondText}>
                COLLA<span className="font-thin">BO</span>RATION
              </p>
            </div>
          </div>
        </main> */}

        <Section02 className="text-neutral-600">
          <div className="mx-auto relative mix-blend-difference w-[70%] h-full flex justify-center items-center flex-col tracking-widest">
            <div className="flex flex-row text-[8vw]">
              <div
                id="text_collabo"
                ref={text_collabo}
                onMouseOver={() => {
                  hoverImg.src = `./section2image1.png`;
                  gsap.set(imgBox, { scale: 0.8, opacity: 0, duration: 0.5 });
                  gsap.to(imgBox, { scale: 1, opacity: 1, duration: 0.5 });
                }}
                onMouseMove={(e: any) => {
                  imgBox.style.left = e.pageX + 20 + "px";
                  imgBox.style.top = e.pageY - 20 + "px";
                }}
                onMouseOut={() => {
                  gsap.to(imgBox, { scale: 0.8, opacity: 0, duration: 0.5 });
                }}
              >
                COLLA<span className="font-thin">BO </span>
              </div>
              <a
                id="text_ration"
                ref={text_ration}
                onMouseOver={() => {
                  hoverImg.src = `./section2image2.png`;
                  gsap.set(imgBox, { scale: 0.8, opacity: 0, duration: 0.5 });
                  gsap.to(imgBox, { scale: 1, opacity: 1, duration: 0.5 });
                }}
                onMouseMove={(e: any) => {
                  imgBox.style.left = e.pageX + 20 + "px";
                  imgBox.style.top = e.pageY - 20 + "px";
                }}
                onMouseOut={() => {
                  gsap.to(imgBox, { scale: 0.8, opacity: 0, duration: 0.5 });
                }}
                data-cursor-image="https://cdn.pixabay.com/photo/2023/09/14/16/17/wave-8253292_1280.jpg"
              >
                RATION
              </a>
            </div>
            <div className="flex flex-row items-center text-[8vw] gap-5 justify-between">
              <div
                id="text_bridge"
                ref={text_bridge}
                onMouseOver={() => {
                  hoverImg.src = `./section2image3.png`;
                  gsap.set(imgBox, { scale: 0, opacity: 0, duration: 0.5 });
                  gsap.to(imgBox, { scale: 1, opacity: 1, duration: 0.5 });
                }}
                onMouseMove={(e: any) => {
                  imgBox.style.left = e.pageX + 20 + "px";
                  imgBox.style.top = e.pageY - 20 + "px";
                }}
                onMouseOut={() => {
                  gsap.to(imgBox, { scale: 0.8, opacity: 0, duration: 0.5 });
                }}
              >
                <span className="font-thin">B</span>RIDGE
              </div>
              <div
                id="text_bridge2"
                ref={text_bridge2}
                className="text-[1vw] shrink-0 font-light"
              >
                예술과 비즈니스, 연결의 다리
              </div>
              <div
                id="text_hub"
                ref={text_hub}
                onMouseOver={() => {
                  hoverImg.src = `./section2image4.png`;
                  gsap.set(imgBox, { scale: 0.8, opacity: 0, duration: 0.5 });
                  gsap.to(imgBox, { scale: 1, opacity: 1, duration: 0.5 });
                }}
                onMouseMove={(e: any) => {
                  imgBox.style.left = e.pageX + 20 + "px";
                  imgBox.style.top = e.pageY - 20 + "px";
                }}
                onMouseOut={() => {
                  gsap.to(imgBox, { scale: 0.8, opacity: 0, duration: 0.5 });
                }}
                className="text-gray-200"
              >
                HUB
              </div>
            </div>
            {/* <div
              id="text_lorem"
              ref={text_lorem}
              className="flex flex-col gap-1 text-[1vw] text-lg font-extralight justify-between text-start w-[90%] mx-auto"
            >
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
              <div>Laudantium quaerat, ipsam quibusdam nam ad repudiandae</div>
            </div> */}
            <div className="flex w-full" id="text"></div>
          </div>
          <div className="con5">
            <div ref={(el) => (imgBox = el)} className="imgBox box">
              <img
                ref={(el) => (hoverImg = el)}
                className="h-full w-full rounded-lg opacity-80 bg-white bg-blend-difference mix-blend-difference"
                src={hoverImages[0].src}
                alt=""
              />
            </div>
          </div>
        </Section02>

        <ScrollSection />

        {/* Section 04 */}
        <div className="content-wrapper h-screen w-full border">
          <div className="flex-col flex ralative justify-center items-center h-screen">
            <p className="content-row-wrapper-class text-[5vw]">asdfsfdsf</p>
            <Image
              className="content-row-wrapper-class h-24 w-24"
              src={section2img1.src}
              alt=""
              width={0}
              height={0}
            />
            <Image
              className="content-col-wrapper-class absolute top-1/2 left-1/2 w-[30vw] h-auto"
              src={section06_img1.src}
              alt=""
              width={1000}
              height={0}
            />
            <Image
              className="content-col-wrapper-class absolute top-1/3 left-1/3 w-[30vw] h-auto"
              src={section06_img2.src}
              alt=""
              width={1000}
              height={0}
            />
            <Image
              className="content-col-wrapper-class absolute top-1/4 left-0 w-[30vw] h-auto"
              src={section06_img3.src}
              alt=""
              width={1000}
              height={0}
            />
            <h1 className="content-row-wrapper-class text-[10vw] font-bold text-gray-50 whitespace-nowrap transform ">
              A new way of designing, discovering and sharing
            </h1>
            <Image
              className="content-col-wrapper-class absolute top-1/6 right-0 w-[30vw] h-auto"
              src={section06_img4.src}
              alt=""
              width={1000}
              height={0}
            />
          </div>
        </div>

        {/* Section 05 */}
        <PaperTexture image={bg_footer.src}>
          <Section05 ref={section04_ref}>
            <div className="" ref={section04_trigger}>
              <div className="h-screen w-full border flex justify-around items-start flex-col p-[10%]">
                <div ref={section04_text_1} className="text-2xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                  nesciunt omnis atque culpa explicabo ad, sed itaque corrupti
                  aliquid asperiores, quia necessitatibus assumenda, esse
                  expedita repudiandae possimus nemo dolorem iusto.
                </div>
                <div className="flex flex-col">
                  <div ref={section04_text_2}>b</div>
                  <div ref={section04_text_3} className="text-8xl">
                    SECTION04_TEXT03
                  </div>
                </div>
              </div>
            </div>
          </Section05>
          <Section06 ref={section05_ref}>
            <div className="gallery flex flex-row gap-4">
              <div className="gallery-item h-[20vh] w-[20vw] bg-red-50">
                asdf
              </div>
              <div className="gallery-item h-[20vh] w-[20vw] bg-red-50">
                asdf
              </div>
              <div className="gallery-item h-[20vh] w-[20vw] bg-red-50">
                asdf
              </div>
              <div className="gallery-item h-[20vh] w-[20vw] bg-red-50">
                asdf
              </div>
            </div>
          </Section06>

          <Footer comp={comp} />
        </PaperTexture>
      </div>
    </Main>
  );
}

const Main = styled.div`
  padding: 0;
  margin: 0;
  box-sizing: 0;
  /* overflow-y: scroll; */
  height: 100%;
  overflow-y: visible;
  position: relative;
  height: unset;
  overflow-x: hidden;
  margin: 0;
`;
const PaperTexture = styled.div.withConfig({
  shouldForwardProp: (prop) => "image" !== prop,
})`
  background-image: url(${(props) => props?.image});
`;

const IntroSlider = styled.div`
  height: 100vh;
  width: 100%;
  padding: 2.5rem;
  background-color: rgb(10 10 10 / var(--tw-bg-opacity));
  color: white;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  top: 0;
  left: 0;
  z-index: 20;
`;
const Nav = styled.div`
  position: absolute;
  height: 5rem;
  font-size: 12px;
  top: 40px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  gap: 40px;
  font-weight: light;
  align-items: center;
  padding: 0 5rem;
  z-index: 20;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.2);
`;

const NavCircle = styled.button`
  display: inline-block;
  border-radius: 100%;
  color: #9f735b;
  font-weight: bold;
  font-size: 0.678rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;
  background: linear-gradient(
    to right,
    rgba(#9f735b, 0) 25%,
    rgba(#9f735b, 0.8) 75%
  );
  background-position: 1% 50%;
  background-size: 400% 300%;
  border: 1px solid #9f735b;
  transition: 700ms cubic-bezier(0.165, 0.84, 0.44, 1);
  &:hover {
    background: linear-gradient(
      to right,
      rgba(#beada4, 0) 25%,
      rgba(#a18170, 0.8) 75%
    );
    background-color: rgba(255, 255, 255, 0.2);
    color: #9f735b;
  }
`;
const NavBtn = styled.button`
  padding: 12px 0px;
  margin: 0px 12px;
  display: block;
  text-decoration: none;
  position: relative;
  text-align: center;
  color: #9f735b;
  mix-blend-mode: difference;
  transition-duration: 400ms;
  font-size: 18px;
  &:hover {
    color: #6d4936;
    transition: 400ms $ease_out;
    background-position: 99% 50%;
  }
  &:before {
    content: " ";
    position: absolute;
    left: 0%;
    bottom: 10px;
    height: 1px;
    width: 0%;
    background-color: #6d4936;
    transition: width 0.5s ease-in-out;
  }
  &:after {
    content: " ";
    position: absolute;
    right: 0%;
    bottom: 10px;
    height: 1px;
    width: 0%;
    background-color: #6d4936;
    transition: width 0.5s ease-in-out;
  }

  &:hover:before,
  &:focus:before {
    width: 50%;
  }

  &:hover:after,
  &:focus:after {
    width: 50%;
  }
`;

const marquee = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const MovingSpan = styled.span`
  float: left;
  width: 200%;
  font-size: 4vw;
  white-space: nowrap;
  font-size: 16px;
  animation: ${marquee} 30s linear infinite;
  font-weight: 100;
`;
const MainText = styled.p`
  font-family: "Pretendard";
  opacity: 20%;
`;
const MainTextA = styled.span`
  font-size: 45rem;
  font-weight: 800;
  color: white;
`;
const MainTextMiddle = styled.span`
  font-size: 500px;
  font-weight: 800;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
  color: transparent;
`;
//
const Section02 = styled.div`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 70vh;
  overflow: hidden;
`;

const Section05 = styled.div``;

const Section06 = styled.div`
  /* width: 100vw; */
  height: 100vh;
  background-color: #aba4a4d7;
  display: flex;
  justify-content: end;
  align-items: center;
`;

// const CursorFollow1 = styled.div`
//   position: absolute;
//   background: url("https://cdn.pixabay.com/photo/2023/09/14/16/17/wave-8253292_1280.jpg")
//     no-repeat 50% 50%;
//   background-size: cover;
//   width: 300px;
//   mix-blend-mode: difference;
//   height: 400px;
//   z-index: 2;
//   user-select: none;
//   pointer-events: none;
//   transform: translate(5px, 5px);
// `;
