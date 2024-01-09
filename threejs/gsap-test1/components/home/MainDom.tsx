"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styled, { keyframes } from "styled-components";
import "@/assets/home/home.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import background0 from "@/public/background0.png";
import maskGroup from "@/public/maskGroup.png";
import section2img1 from "@/public/section2image1.png";
import section2img2 from "@/public/section2image2.png";
import section2img3 from "@/public/section2image3.png";
import section2img4 from "@/public/section2image4.png";
import section4_bg1 from "@/public/section4-bg1.png";

gsap.registerPlugin(ScrollTrigger);

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
  const section3 = useRef(null);
  let text_collabo = useRef(null);
  let text_ration = useRef(null);
  let text_bridge = useRef(null);
  let text_hub = useRef(null);

  let hoverImg = useRef(null);
  let imgBox = useRef(null);

  const scrollbar = useRef(null);

  const { y } = useScroll();

  useEffect(() => {
    gsap.to("#text_collabo", {
      scrollTrigger: {
        trigger: "#text_collabo",
        start: "top 50%",
      },
      x: -50,
      y: "0%",
      duration: 3,
      ease: "power4.inOut",
    });
  }, []);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#text_collabo",
          pin: true,
          start: "top bottom",
          end: "bottom top",
        },
      });
    });
    return ctx.revert();
  }, []);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      // INTRO - skip
      if (skip) {
        tl.from("#intro-logo", {
          opacity: 0,
          y: "+=30",
          duration: 0.1,
        })
          .to(
            "#intro-logo",
            {
              opacity: 0,
              y: "-=30",
              duration: 0.1,
            },
            "<"
          )
          .to(
            "#intro-slider",
            {
              duration: 0.1,
              display: "none",
            },
            "<"
          )
          .to(
            "#intro-slider-2",
            {
              opacity: 0,
              duration: 0.1,
            },
            "<"
          );
        return;
      }

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
          stagger: 0.6,
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
        .to("#intro-slider-2", {
          opacity: 0,
          duration: 0.1,
        })
        .fromTo(
          "#mask-group",
          { scale: 1.2 },
          { scale: 1, opacity: 100, duration: 1 }
        );
    }, comp);

    return () => ctx.revert();
  }, [skip]);

  return (
    <Main ref={comp}>
      <div
        id="intro-slider"
        className="h-screen p-10 bg-neutral-950 text-white absolute top-0 justify-center items-center left-0 z-20 w-full flex gap-10 tracking-tight"
      >
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
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M60 0L0 180H29L49.3311 121H109.266L116.5 143H146.664L100 0H60ZM99.7297 92L80 32L59.3243 92H99.7297Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
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

        <button
          className="absolute bottom-5 right-5 text-white"
          onClick={() => setSkip(true)}
        >
          skip
        </button>
      </div>
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
      <Nav
        id="section-1-nav"
        className="absolute h-20 text-sm top-10 w-full flex justify-between flex-row gap-10 font-light items-center px-20 z-10"
      >
        <div className="flex flex-row gap-10 items-center justify-center">
          <svg
            height="30"
            viewBox="0 0 843 180"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M60 0L0 180H29L49.3311 121H109.266L116.5 143H146.664L100 0H60ZM99.7297 92L80 32L59.3243 92H99.7297Z"
              fill="#9f735b"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M161 0V130H190V100H267V122H296V93.3109C310.945 84.6656 321 68.507 321 50C321 22.3858 298.614 0 271 0H161ZM271 29H190V71H271C282.598 71 292 61.598 292 50C292 38.402 282.598 29 271 29Z"
              fill="#9f735b"
            />
            <path d="M495 0H335V29H400V114.041H429V29H495V0Z" fill="#9f735b" />
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
            Inspiring Create Visions Sparking Artistic Growth, Inspiring Create
            Visions Sparking Artistic Growth, Inspiring Create Visions Sparking
            Artistic Growth, Inspiring Create Visions Sparking Artistic Growth,
            Inspiring Create Visions Sparking Artistic Growth, Inspiring Create
            Visions Sparking Artistic Growth, Inspiring Create Visions Sparking
            Artistic Growth,
          </MovingSpan>
        </div>
      </div>
      <GalleryWrapper>
        <Gallery>
          <div className="h-40 shrink-0 rounded-sm w-40 bg-blue-300"></div>
          <div className="h-40 shrink-0 rounded-sm w-40 bg-blue-300"></div>
          <div className="h-40 shrink-0 rounded-sm w-40 bg-blue-300"></div>
          <div className="h-40 shrink-0 rounded-sm w-40 bg-blue-300"></div>
          <div className="h-40 shrink-0 rounded-sm w-40 bg-blue-300"></div>
          <div className="h-40 shrink-0 rounded-sm w-40 bg-blue-300"></div>
          <div className="h-40 shrink-0 rounded-sm w-40 bg-blue-300"></div>
          <div className="h-40 shrink-0 rounded-sm w-40 bg-blue-300"></div>
          <div className="h-40 shrink-0 rounded-sm w-40 bg-blue-300"></div>
          <div className="h-40 shrink-0 rounded-sm w-40 bg-blue-300"></div>
          <div className="h-40 shrink-0 rounded-sm w-40 bg-blue-300"></div>
        </Gallery>
      </GalleryWrapper>
      <Section02>
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
              COLLA<span className="font-thin">BO</span>
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
            <div className="text-[1vw] shrink-0 font-light">
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
              className="text-gray-100"
            >
              HUB
            </div>
          </div>
          <div className="flex flex-col gap-1 text-[1vw] text-lg font-extralight justify-between text-start w-[90%] mx-auto">
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
            <div>Laudantium quaerat, ipsam quibusdam nam ad repudiandae</div>
          </div>
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
      <Section03 image={section4_bg1}>
        <div className="h-full flex flex-col gap-16 w-auto aspect-square  p-[5%] text-white justify-between">
          <div>
            <div className="uppercase">
              Sparkling artistic growth, Inspiring creative visions
            </div>
            <div>성장과 비전을 함께 제시합니다.</div>
          </div>
          <div className="aspect-square bg-gray-50">이미지</div>
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
          <div className=" bg-amber-50 w-full h-full"></div>
        </div>
      </Section03>
      <Section04 id="section-3" ref={section3}>
        asdf
      </Section04>
      <Section05>
        <div className="flex justify-start items-end w-full h-full">
          <div className="p-20">
            <div className="flex flex-col gap-1">
              <p className="font-semibold">E-MAIL</p>
              <p>artch@nitsoft.biz</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-semibold">E-MAIL</p>
              <p>artch@nitsoft.biz</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-semibold">E-MAIL</p>
              <p>artch@nitsoft.biz</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-semibold">E-MAIL</p>
              <p>artch@nitsoft.biz</p>
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
      </Section05>
    </Main>
  );
}

const Main = styled.div`
  overflow: hidden;
  position: relative;
`;
const Nav = styled.div`
  /* display: absolute;
  top: 0;
  width: 100%;
  height: 118px;
  background-color: white;
  opacity: 20%; */
  /* display: inline-block; */
  /* display: inline-block; */
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
    background-color: #fff;
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
  color: #fff;
  mix-blend-mode: difference;
  font-size: 18px;
  &:hover {
    color: #fff;
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
    background-color: #ffffff;
    transition: width 0.5s ease-in-out;
  }
  &:after {
    content: " ";
    position: absolute;
    right: 0%;
    bottom: 10px;
    height: 1px;
    width: 0%;
    background-color: #fff;
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
const GalleryWrapper = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Gallery = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  gap: 20px;
  overflow-x: scroll;
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
  &::-webkit-scrollbar {
    display: none;
  }
`;
const Section02 = styled.div`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;
const Section03 = styled.div`
  display: flex;
  flex-shrink: 0;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-image: url(${(props) => props.image.src});
`;
const Section04 = styled.div`
  display: flex;
  flex-shrink: 0;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;
const Section05 = styled.div`
  display: flex;
  flex-shrink: 0;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
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
