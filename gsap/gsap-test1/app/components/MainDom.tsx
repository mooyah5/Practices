"use client";
import "@/app/assets/css/home.css";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import styled, { keyframes } from "styled-components";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";
import maskGroup from "@/public/maskGroup.png";
import text_a from "@/public/text_a.png";
import text_c from "@/public/text_c.png";
import text_r from "@/public/text_r.png";
import text_h from "@/public/text_h.png";
import text_a_2 from "@/public/text_a_2.png";
import text_r_2 from "@/public/text_r_2.png";
import text_h_2 from "@/public/text_h_2.png";
import section01_bg from "@/public/section01_bg.png";
import section2img1 from "@/public/section2image1.png";
import section2img2 from "@/public/section2image2.png";
import section2img3 from "@/public/section2image3.png";
import section2img4 from "@/public/section2image4.png";
import bg_footer from "@/public/bg-footer.png";
import ScrollSection2 from "@/app/components/main/ScrollSection2";
import footer_img_1 from "@/public/footer_img_1.png";
import footer_img_2 from "@/public/footer_img_2.png";
import footerTop from "@/public/FooterTop.png";

import section06_img1 from "@/public/section06-img1.png";
import section06_img2 from "@/public/section06-img2.png";
import section06_img3 from "@/public/section06-img3.png";
import section06_img4 from "@/public/section06-img4.png";
import section06_img5 from "@/public/section06-img5.png";
import section06_img6 from "@/public/section06-img6.png";
import section06_img7 from "@/public/section06-img7.png";
import explosion from "@/public/explosion.png";
import { RecoilRoot } from "recoil";
import { useGSAP } from "@gsap/react";
import LoginPopup from "./main/LoginPopup";

export default function MainDOM() {
  const [skip, setSkip] = useState(false);
  const [onSearch, setOnSearch] = useState(false);
  const [isPopped, setIsPopped] = useState(false);
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [hasRendered, setHasRendered] = useState(false);
  const hoverImages = [section2img1, section2img2, section2img3, section2img4];

  const comp = useRef(null);
  let text_collabo = useRef(null);
  let text_ration = useRef(null);
  let text_bridge = useRef(null);
  let text_bridge2 = useRef(null);
  const section02_text01 = useRef(null);
  const section05_text_1 = useRef(null);
  const section05_text_2 = useRef(null);
  const section05_text_3 = useRef(null);
  const section05_ref = useRef(null);

  const section06_ref = useRef(null);
  const footerRef = useRef(null);
  const footer_img_1_ref = useRef(null);
  const footer_img_2_ref = useRef(null);

  let hoverImg = useRef(null);
  let imgBox = useRef(null);

  let introTimeline = gsap.timeline();
  let tl = gsap.timeline();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, TextPlugin);
    setHasRendered(true);
    // SCROLL SMOOTH EFFECT - locomotive-scroll lib.
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  useGSAP(
    () => {
      if (hasRendered) {
        if (skip) {
          introTimeline.pause();
          introTimeline.progress(1);
          introTimeline
            .to(["#section-1-bg", "#section-1-nav"], { opacity: 0 })
            .to("#intro-logo", { opacity: 0 })
            .to("#intro-slider", { display: "none" })
            // .add('test1', '<')
            .to("#intro-slider-2", { opacity: 0 });
          // .add('test2', '<')

          setSkip(true);
          return;
        } else {
          introTimeline
            .from("#intro-logo", {
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
            })
            .from(["#section-1-bg", "#section-1-nav"], {
              delay: 0.5,
              opacity: 0,
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
            .add("testLabel")
            .fromTo(
              "#mask-group",
              { scale: 1.6, opacity: 0 },
              {
                scale: 1,
                opacity: 1,
                duration: 1,
                onComplete: () => setSkip(true),
              },
              "<"
            )
            .add("testLabel2");
        }

        // Section02
        gsap.set(
          [section02_text01.current, text_collabo.current, text_ration.current],
          {
            x: -500,
          }
        );
        gsap.to(
          [section02_text01.current, text_collabo.current, text_ration.current],
          {
            scrollTrigger: {
              trigger: "#text_collabo",
              start: "top bottom",
              end: "bottom center",
              toggleActions: "restart none reverse none",
              scrub: 0.5,
              anticipatePin: 1,
              // pinSpacing: false,
            },
            x: 0,
            duration: 15,
            ease: "none",
          }
        );

        gsap.set([text_bridge.current, text_bridge2.current], {
          x: 500,
        });
        gsap.to([text_bridge.current, text_bridge2.current], {
          scrollTrigger: {
            trigger: "#text_bridge",
            start: "top bottom",
            end: "center center",
            toggleActions: "restart none reverse none",
            scrub: 0.5,
          },
          x: 0,
          duration: 15,
          opacity: 1,
          ease: "none",
        });

        gsap.to("#section02_text_bottom", {
          scrollTrigger: {
            trigger: "#section02_text_bottom",
            scrub: 0.5,
            start: "bottom bottom",
            end: "top center",
          },
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quaerat, ipsam quibusdam nam ad repudiandae",
          ease: "none",
        });

        // Section03 (ScrollSection is in component)

        // SECTION 04
        const RowContentWrappersToRight = document.querySelectorAll(
          ".content-row-wrapper-to-right-class"
        );
        const RowContentWrappersToLeft = document.querySelectorAll(
          ".content-row-wrapper-to-left-class"
        );
        const ColContentWrappers = document.querySelectorAll(
          ".content-col-wrapper-class"
        );
        const TextWrappers = document.querySelectorAll(
          ".section2_sm_texts_class"
        );
        const pinTrigger = ScrollTrigger.create({
          trigger: ".content-wrapper",
          anticipatePin: 1,
          pin: true,
          start: "top top",
          end: "+=300%",
          scrub: 1,
        });

        tl.from(RowContentWrappersToRight, {
          x: "-100%",
          scrollTrigger: {
            start: () => pinTrigger?.start,
            end: () =>
              pinTrigger?.end - (pinTrigger?.end - pinTrigger?.start) / 3,
            scrub: 2,
          },
          stagger: 0.1,
        });
        tl.to(RowContentWrappersToLeft, {
          x: "-100%",
          scrollTrigger: {
            start: () => pinTrigger?.start,
            end: () =>
              pinTrigger?.end - (pinTrigger?.end - pinTrigger?.start) / 3,
            scrub: 2,
          },
          stagger: 0.1,
        });
        tl.fromTo(
          TextWrappers,
          {
            yPercent: 10,
            opacity: 0,
          },
          {
            yPercent: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              start: () => pinTrigger?.start,
              end: () =>
                pinTrigger?.end - (pinTrigger?.end - pinTrigger?.start) / 3,
              scrub: 2,
            },
            stagger: 0.1,
          },
          "<"
        );
        tl.fromTo(
          ColContentWrappers,
          {
            y: "300%",
            opacity: 0,
          },
          {
            y: "0",
            opacity: 50,
            scrollTrigger: {
              start: () => pinTrigger?.start,
              end: () =>
                pinTrigger?.end - (pinTrigger?.end - pinTrigger?.start) / 3,
              scrub: 2,
            },
            stagger: 0.1,
          }
        );

        // SECTION 05
        gsap.fromTo(
          section05_text_1.current,
          { opacity: 0, y: 20 },
          {
            // duration: 2,
            opacity: 1,
            y: 0,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quaerat, ipsam quibusdam nam ad repudiandae",
            scrollTrigger: {
              start: "start center",
              end: "end top",
              trigger: section05_ref.current,
              // markers: true,
              toggleActions: "lorem",
              scrub: 0.3,
            },
          }
        );
        gsap.fromTo(
          section05_text_2.current,
          { opacity: 0, y: 20, delay: 1 },
          {
            opacity: 1,
            rotate: 3,
            y: 0,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing eliae",
            scrollTrigger: {
              start: "start center",
              end: "end top",
              trigger: section05_ref.current,
              // markers: true,
              toggleActions: "restart none reverse none",
              scrub: 0.3,
            },
          }
        );
        gsap.fromTo(
          section05_text_3.current,
          { opacity: 0, rotate: -10, y: 20, delay: 2 },
          {
            opacity: 1,
            rotate: 3,
            y: 0,
            text: "rotate text",
            scrollTrigger: {
              start: "start center",
              end: "end top",
              trigger: section05_ref.current,
              toggleActions: "restart none reverse none",
              scrub: 0.3,
            },
          }
        );

        // SECTION 06 갤러리
        const gallery = document.querySelectorAll(".gallery");

        const pinTrigger2 = ScrollTrigger.create({
          trigger: section06_ref.current,
          anticipatePin: 1,
          pin: true,
          start: "top top",
          end: "+=200%",
          scrub: 1,
        });

        const galleryItems = document.querySelectorAll(".gallery-item");
        const galleryItemTexts =
          document.querySelectorAll(".gallery-item-text");
        gsap.utils.toArray(galleryItems).forEach((item: any, idx: number) => {
          tl.fromTo(
            item,
            {
              stagger: 0.1,
              x: 300 - 100 * idx,
              rotate: 20 * (idx % 2 ? -idx : idx),
              scale: 2,
            },
            {
              delay: 0.4,
              rotate: 20 * (idx % 2 ? -idx : idx),
              scale: 1.5,
              x: 100 - 100 * idx,
              scrollTrigger: {
                trigger: section06_ref.current,
                start: () => pinTrigger2?.start,
                end: () =>
                  (pinTrigger2?.end - pinTrigger2?.start) / 2 +
                  pinTrigger2.start,
                scrub: 0.5,
                // markers: {
                //   startColor: "green",
                //   endColor: "green",
                //   fontSize: "50px",
                //   indent: 10,
                // },
              },
            }
          );
          tl.fromTo(
            item,
            {
              delay: 0.4,
              rotate: 20 * (idx % 2 ? -idx : idx),
              scale: 1.5,
              x: 100 - 100 * idx,
            },
            {
              // delay: 0.4,
              rotate: 0,
              scale: 1,
              x: 0,
              scrollTrigger: {
                trigger: section06_ref.current,
                start: () =>
                  (pinTrigger2?.end - pinTrigger2?.start) / 2 +
                  pinTrigger2.start,
                end: () => pinTrigger2?.end,
                scrub: 0.5,
                // markers: {
                //   startColor: "purple",
                //   endColor: "purple",
                //   fontSize: "50px",
                //   indent: 10,
                // },
              },
            }
          );
        });
        gsap.utils
          .toArray(galleryItemTexts)
          .forEach((item: any, idx: number) => {
            tl.fromTo(
              item,
              {
                opacity: 0,
              },
              {
                opacity: 1,
                scrollTrigger: {
                  trigger: section06_ref.current,
                  start: () =>
                    ((pinTrigger2?.end - pinTrigger2?.start) / 3) * 2 +
                    pinTrigger2.start,
                  end: () => pinTrigger2?.end,
                  scrub: 0.5,
                  // markers: {
                  //   startColor: "purple",
                  //   endColor: "purple",
                  //   fontSize: "50px",
                  //   indent: 10,
                  // },
                },
              }
            );
          });
        tl.fromTo(
          gallery,
          {
            opacity: 0,
            xPercent: 90,
          },
          {
            xPercent: 30,
            opacity: 1,
            scrollTrigger: {
              trigger: section06_ref.current,
              // start: "top top",
              // scrub: 0.5,
              start: () => pinTrigger2?.start,
              end: () =>
                (pinTrigger2?.end - pinTrigger2?.start) / 2 + pinTrigger2.start,
              scrub: 0.5,
              // markers: {
              //   startColor: "purple",
              //   endColor: "purple",
              //   fontSize: "50px",
              //   indent: 10,
              // },
            },
            delay: 0.4,
          }
        );
        tl.fromTo(
          gallery,
          {
            // opacity: 0,
            xPercent: 30,
          },
          {
            xPercent: 0,
            // opacity: 1,
            scrollTrigger: {
              trigger: section06_ref.current,
              // start: "top top",
              // scrub: 0.5,
              start: () =>
                (pinTrigger2?.end - pinTrigger2?.start) / 2 + pinTrigger2.start,
              end: () => pinTrigger2?.end,
              scrub: 0.5,
              // markers: {
              //   startColor: "purple",
              //   endColor: "purple",
              //   fontSize: "50px",
              //   indent: 10,
              // },
            },
            delay: 0.4,
          }
        );

        tl.from(".gallery-title", {
          xPercent: -50,
          opaciyt: 0,
          scrollTrigger: {
            scrub: 1,
            start: () => pinTrigger2?.start,
            end: () => pinTrigger2?.end,
            trigger: section06_ref.current,
          },
        });

        // Footer
        gsap.fromTo(
          footer_img_2_ref.current,
          {
            opacity: 0,
            y: 200,
          },
          {
            opacity: 1,
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: footerRef.current,
              start: "center bottom",
              end: "90% bottom",
              scrub: 0.6,
            },
          }
        );
        gsap.fromTo(
          footer_img_1_ref.current,
          {
            opacity: 0,
            y: 200,
          },
          {
            opacity: 1,
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: footerRef.current,
              start: "center 90%",
              end: "90% bottom",
              scrub: 0.6,
            },
          }
        );
      }
    },
    { scope: comp, dependencies: [skip, hasRendered] }
  );

  return (
    <RecoilRoot>
      <Main ref={comp}>
        <div className="scroller">
          <div className="relative">
            {!skip ? (
              <button
                className="absolute bottom-10 right-10 z-30 text-white"
                onClick={() => {
                  introTimeline.play("addLabel1");
                  setSkip(true);
                }}
              >
                skip
              </button>
            ) : null}
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
                <path
                  d="M495 0H335V29H400V114.041H429V29H495V0Z"
                  fill="white"
                />
                <path
                  d="M683 143V0H712V65H814V0H843V180H814V94H712V143H683Z"
                  fill="white"
                />
                <path
                  d="M600.429 29H577.571C552.342 29 538 46.418 538 60.8054V122H509V60.8054C509 27.2235 539.7 0 577.571 0H600.429C638.3 0 669 27.2235 669 60.8054V80H640V60.8054C640 46.418 625.658 29 600.429 29Z"
                  fill="white"
                />
              </svg>
            </IntroSlider>
            <div
              id="intro-slider-2"
              className="relative font-nexon flex flex-col h-screen z-10 bg-neutral-950 gap-2 justify-center place-items-center"
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
              <div className="flex flex-row gap-4 items-center lg:gap-8">
                <div className="flex justify-between gap-3">
                  <NavBtn className="nav-btn" onClick={() => {}}>
                    PROJECT
                  </NavBtn>
                  <NavBtn className="nav-btn" onClick={() => {}}>
                    HISTORY
                  </NavBtn>
                  <NavBtn className="nav-btn" onClick={() => {}}>
                    ARTIST
                  </NavBtn>
                </div>
                <div className="search-bar flex items-center flex-row justify-center gap-2 w-[113px] h-full">
                  <button
                    className="search-btn"
                    onClick={() => setOnSearch(!onSearch)}
                  >
                    <svg
                      // width="30"
                      height="25"
                      viewBox="0 0 46 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="21.5555"
                        cy="21.5553"
                        r="19.9074"
                        stroke="#9f735b"
                        strokeWidth="1.59259"
                      />
                      <path
                        d="M34.2964 36.6855L44.6482 48.63"
                        stroke="#9f735b"
                        strokeWidth="1.59259"
                      />
                    </svg>
                  </button>
                  <input
                    type="text"
                    className={`border-b  duration-300 border-[#9f735b] bg-transparent ease-linear h-7 text-sm ${
                      onSearch ? "w-[80px] px-2" : "w-0"
                    }`}
                  />
                </div>
                <div className="flex justify-between gap-3">
                  <NavBtn className="nav-btn" onClick={() => setIsPopped(true)}>
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 90 90"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_1630_59)">
                        <path
                          opacity="0.9"
                          d="M23.1428 29.5714C23.1428 13.7919 35.9347 1 51.7143 1C67.4938 1 80.2857 13.7919 80.2857 29.5714L80.2856 89.5713M6 50.8574L56 50.8574M56 50.8574L46 40.8574M56 50.8574L46 60.8574"
                          stroke="#9f735b"
                          strokeLinecap="round"
                          strokeWidth="3"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1630_59">
                          <rect width="90" height="90" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </NavBtn>
                </div>
              </div>
            </Nav>
            {isPopped && (
              <LoginPopup
                id={id}
                password={password}
                onConfirm={() => {
                  console.log("login!");
                }}
                onClose={() => setIsPopped(false)}
              />
            )}
            <div
              id="section-1-bg"
              className="absolute top-0 left-1/2 -translate-x-1/2"
            >
              <Image
                className="h-screen object-cover object-top"
                src={section01_bg}
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
                <MovingSpan className="-z-10 text-[34px] font-nexon">
                  Inspiring Create Visions Sparking Artistic Growth, Inspiring
                  Create Visions Sparking Artistic Growth, Inspiring Create
                  Visions Sparking Artistic Growth, Inspiring Create Visions
                  Sparking Artistic Growth, Inspiring Create Visions Sparking
                  Artistic Growth, Inspiring Create Visions Sparking Artistic
                  Growth, Inspiring Create Visions Sparking Artistic Growth,
                  Inspiring Create Visions Sparking Artistic Growth, Inspiring
                  Create Visions Sparking Artistic Growth, Inspiring Create
                  Visions Sparking Artistic Growth, Inspiring Create Visions
                  Sparking Artistic Growth, Inspiring Create Visions Sparking
                  Artistic Growth, Inspiring Create Visions Sparking Artistic
                  Growth, Inspiring Create Visions Sparking Artistic Growth,
                  Inspiring Create Visions Sparking Artistic Growth, Inspiring
                  Create Visions Sparking Artistic Growth,
                </MovingSpan>
              </div>
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

          <Section02 className="text-neutral-900">
            <div className="mx-auto relative mix-blend-soft-light w-full md:w-[70%] h-full flex justify-center items-center flex-col tracking-widest">
              <div className="flex flex-row text-[11vw] items-center justify-between w-full">
                <div
                  id="section02_text01"
                  ref={section02_text01}
                  className="text-base break-keep"
                >
                  ¹HOME - ²CHAIRS - ³TABLES -
                </div>
                <div
                  id="text_collabo"
                  className="font-light"
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
                  COLLA<span className="font-waterfall">BO </span>
                </div>
              </div>
              <div className="flex flex-row w-full items-center text-[11vw] gap-5 justify-start">
                <div
                  id="text_bridge"
                  className="text-[#DCDCDC]"
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
                  ARTHUB
                </div>
                <div
                  id="text_bridge2"
                  ref={text_bridge2}
                  className="text-[1vw] shrink-0 font-light"
                  onMouseOver={() => {
                    hoverImg.src = `./section2image4.png`;
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
                  예술과 비즈니스, 연결의 다리
                </div>
              </div>
              {/* <div
                className="flex w-[90%] max-md:text-center"
                id="section02_text_bottom"
              ></div> */}
            </div>
            <div className="con5">
              <div ref={(el) => (imgBox = el)} className="imgBox box">
                <img
                  ref={(el) => (hoverImg = el)}
                  className="h-full w-full rounded-lg opacity-80 bg-white bg-blend-difference mix-blend-soft-light"
                  src={hoverImages[0].src}
                  alt=""
                />
              </div>
            </div>
          </Section02>

          {/* <ScrollSection /> */}
          <ScrollSection2 />

          {/* Section 04 */}
          <PaperTexture image={bg_footer.src}>
            <div className="content-wrapper font-spoqa h-screen w-full border">
              <div className="absolute top-[10%] left-[5%] w-[20%]">
                <div className="flex flex-col gap-2">
                  <div className="accordian-menu flex flex-row items-center border-b border-black justify-between">
                    <div>PROJECTS</div>
                    <div className="text-xs">VIEW ALL</div>
                  </div>
                  <div className="accordian-menu flex flex-row items-center border-b border-black justify-between">
                    <div>Maatila</div>
                    <div>+</div>
                  </div>
                  <div className="accordian-menu flex flex-row items-center border-b border-black justify-between">
                    <div>Maatila</div>
                    <div>+</div>
                  </div>
                  <div className="accordian-menu flex flex-row items-center border-b border-black justify-between">
                    <div>Maatila</div>
                    <div>+</div>
                  </div>
                  <div className="accordian-menu flex flex-row items-center justify-between">
                    <div>Maatila</div>
                    <div>+</div>
                  </div>
                </div>
              </div>
              <div className="flex-col flex mix-blend-soft-light justify-end items-center h-screen pb-[3%]">
                <div className="w-full px-[5%] font-spoqa mx-auto flex flex-col leading-none font-bold whitespace-nowrap transform h-1/2">
                  <div className="pl-[5%]">
                    <p className=" text-left text-xl font-normal">
                      / our latest
                    </p>
                    <p className="text-neutral-900 font-normal drop-shadow-lg text-left text-[13vw]">
                      2024
                    </p>
                  </div>
                  <div className="flex flex-row justify-between items-end">
                    <div className="text-[1vw] font-light flex flex-col gap-4 mb-[3%]">
                      <div className="flex flex-row gap-4">
                        <span className="section2_sm_texts_class">Maatila</span>
                        <span className="section2_sm_texts_class">
                          Interior
                        </span>
                      </div>
                      <div className="flex flex-row gap-4">
                        <span className="section2_sm_texts_class">Clothes</span>
                        <span className="section2_sm_texts_class">Package</span>
                        <span className="section2_sm_texts_class">Lor</span>
                      </div>
                    </div>
                    <p className="text-neutral-900 font-medium drop-shadow-lg text-left text-[15vw] left-[20%]">
                      PROJECT
                    </p>
                  </div>
                </div>
                <Image
                  className="mix-blend-soft-light content-col-wrapper-class absolute top-1/2 right-10 w-[30vw] h-auto"
                  src={section06_img1.src}
                  alt=""
                  width={350}
                  height={0}
                />

                <Image
                  className=" mix-blend-soft-light content-col-wrapper-class absolute top-1/2 -translate-y-1/2 left-1/2 h-auto"
                  src={section06_img3.src}
                  alt=""
                  width={400}
                  height={0}
                />

                <Image
                  className=" mix-blend-soft-light content-col-wrapper-class absolute bottom-0 left-1/2 -translate-x-1/2 h-auto"
                  src={section06_img4.src}
                  alt=""
                  width={200}
                  height={0}
                />
                <Image
                  className=" mix-blend-soft-light content-col-wrapper-class absolute top-10 right-0 h-auto"
                  src={section06_img5.src}
                  alt=""
                  width={180}
                  height={0}
                />
                <Image
                  className=" mix-blend-soft-light content-col-wrapper-class absolute top-3/4 right-1/4 h-auto"
                  src={section06_img2.src}
                  alt=""
                  width={200}
                  height={0}
                />
                <Image
                  className=" mix-blend-soft-light content-col-wrapper-class absolute top-1/4 right-1/2 h-auto"
                  src={section06_img6.src}
                  alt=""
                  width={250}
                  height={0}
                />
                <Image
                  className=" mix-blend-soft-light content-col-wrapper-class absolute top-5 left-1/2 -translate-x-1/2 h-auto"
                  src={section06_img7.src}
                  alt=""
                  width={250}
                  height={0}
                />
                <Image
                  className=" mix-blend-soft-light content-col-wrapper-class absolute bottom-[73%] right-[40%]"
                  src={explosion.src}
                  alt=""
                  width={150}
                  height={0}
                />
              </div>
            </div>

            {/* Section 05 */}
            {/* <Section05 ref={section05_ref}>
              <div ref={section05_text_1} className="text-2xl" />
              <div className="flex flex-col">
                <div ref={section05_text_2} />
                <div ref={section05_text_3} className="text-8xl" />
              </div>
            </Section05> */}

            {/* Section 06 */}
            <Section06 ref={section06_ref}>
              <div className="flex relative justify-center font-nexon items-end w-full h-full flex-col gap-10">
                <p className="absolute gallery-title font-semibold bottom-10 left-10 text-start w-[90%] mx-auto text-[15vw]">
                  GALLERY
                </p>
                <div className="gallery z-10 flex flex-row gap-5 w-[90%] bg-neutral-50 bg-opacity-70 rounded-sm p-10 pr-0">
                  <div className="gallery-item w-[20vw] flex flex-col gap-1">
                    <p className="gallery-item-text text-2xl font-thin">01</p>
                    <div className="h-[40vh] bg-[#d9d9d9]" />
                    <p className="gallery-item-text text-4xl">lorem</p>
                    <p className="gallery-item-text text-2xl">lorem</p>
                  </div>
                  <div className="gallery-item w-[20vw] flex flex-col gap-1">
                    <p className="gallery-item-text text-2xl font-thin">01</p>
                    <div className="h-[40vh] bg-[#e78383]" />
                    <p className="gallery-item-text text-4xl">lorem</p>
                    <p className="gallery-item-text text-2xl">lorem</p>
                  </div>
                  <div className="gallery-item w-[20vw] flex flex-col gap-1">
                    <p className="gallery-item-text text-2xl font-thin">01</p>
                    <div className="h-[40vh] bg-[#FFAB5E]" />
                    <p className="gallery-item-text text-4xl">lorem</p>
                    <p className="gallery-item-text text-2xl">lorem</p>
                  </div>
                  <div className="gallery-item w-[20vw] flex flex-col gap-1">
                    <p className="gallery-item-text text-2xl font-thin">01</p>
                    <div className="h-[40vh] bg-[#7B8D73]" />
                    <p className="gallery-item-text text-4xl">lorem</p>
                    <p className="gallery-item-text text-2xl">lorem</p>
                  </div>
                  <div className="gallery-item w-[20vw] flex flex-col gap-1">
                    <p className="gallery-item-text text-2xl font-thin">01</p>
                    <div className="h-[40vh] bg-[#4B5944]" />
                    <p className="gallery-item-text text-4xl">lorem</p>
                    <p className="gallery-item-text text-2xl">lorem</p>
                  </div>
                </div>
              </div>
            </Section06>

            <Footer ref={footerRef}>
              <div
                className="w-full h-[40vh] bg-red-50 object-contain object-center"
                style={{ backgroundImage: `url(${footerTop.src})` }}
              >
                <div className="flex h-full w-[80%] mx-auto flex-row justify-between items-center">
                  <p>
                    <span className="font-thin text-[4vw]">WE'RE HERE TO </span>
                    <span className="font-waterfall text-[8vw]">TALK</span>
                  </p>
                  <div>asdf</div>
                </div>
              </div>
              <div className="p-[5%] w-full h-[60vh] flex flex-row">
                <div className="flex justify-start items-end w-full h-full">
                  <div className="font-pret flex flex-col gap-3">
                    <div className="flex flex-col gap-1">
                      <p className="font-semibold">E-MAIL</p>
                      <p className="font-light">artch@nitsoft.biz</p>
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="font-semibold">TEL</p>
                      <p className="font-light">010-0000-0000</p>
                    </div>
                    <div className="flex flex-col gap-1 mt-10">
                      <p className="font-semibold">LOCATION</p>
                      <p className="font-light">서울 강남구 선릉로 624</p>
                    </div>
                  </div>
                </div>
                <div className="gap-4 ml-72 w-full h-full flex justify-end flex-col">
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 72 72"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="36"
                      cy="36"
                      r="35.75"
                      stroke="black"
                      strokeWidth="0.5"
                    />
                    <path
                      d="M17 26.5L36 17L54.5 26.5V54.5H17V26.5Z"
                      stroke="black"
                      strokeWidth="0.5"
                    />
                    <path
                      d="M17 26.5L36 41L54.5 26.5"
                      stroke="black"
                      strokeWidth="0.5"
                    />
                  </svg>

                  <div className="font-extralight font-nexon text-xs">
                    아치의 새로운 콜라보 프로젝트와 다양한 정보가 담긴
                    뉴스레터를 통해 최신 소식을 받아보세요!
                  </div>
                  <div className="text-xs font-nexon">
                    예술가들을 위한 공간 ARTCH
                  </div>
                  <div className="flex flex-col mt-10 text-7xl">
                    <div className=" font-spoqa">JOIN</div>
                    <div className="flex flex-row items-end gap-4">
                      <div className="font-spoqa">US</div>
                      <div>
                        <input
                          className="text-base font-nexon border-b border-black bg-transparent font-extralight pr-12 pl-2"
                          type="text"
                          placeholder="ENTER YOUR EMAIL"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Image
                ref={footer_img_1_ref}
                width={600}
                height={600}
                className="absolute -bottom-36 left-1/3 scale-50 object-bottom -translate-x-1/2"
                src={footer_img_1.src}
                alt=""
              />
              <Image
                ref={footer_img_2_ref}
                width={700}
                height={700}
                className="absolute -bottom-32 left-[calc(50%-20px)] scale-50 object-bottom -translate-x-1/2"
                src={footer_img_2.src}
                alt=""
              />
            </Footer>
          </PaperTexture>
        </div>
      </Main>
    </RecoilRoot>
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
  background-image: url(${(props: any) => props?.image});
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
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  font-weight: light;
  padding: 0 5rem;
  z-index: 20;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.2);
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  @media screen and (min-width: 769px) {
    flex-direction: row;
  }
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

const Section05 = styled.div`
  height: 100vh;
  width: 100%;
  justify-content: end;
  align-items: start;
  flex-direction: column;
  display: flex;
  padding: 10%;
  gap: 30%;
`;

const Section06 = styled.div`
  height: 100vh;
  display: flex;
  justify-content: end;
  align-items: center;
  flex-direction: column;
`;

const Footer = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* padding: 5%; */
`;
