import Image from "next/image";
import gsap from "gsap";
import { useEffect, useRef } from "react";

import section06_img1 from "@/public/section06-img1.png";
import section06_img2 from "@/public/section06-img2.png";
import section06_img3 from "@/public/section06-img3.png";
import section06_img4 from "@/public/section06-img4.png";
import section06_img5 from "@/public/section06-img5.png";
import section06_img6 from "@/public/section06-img6.png";
import section06_img7 from "@/public/section06-img7.png";
import explosion from "@/public/explosion.png";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Section04() {
  const section04_text_1 = useRef(null);
  const section04_text_2 = useRef(null);
  const section04_text_3 = useRef(null);
  const section04_ref = useRef(null);
  const section04_trigger = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let tl = gsap.timeline();

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
      // markers: {
      //   startColor: "white",
      //   endColor: "orange",
      //   fontSize: "50px",
      //   indent: 10,
      // },
    });

    const pin = gsap.fromTo(
      section04_ref.current,
      {
        translateX: 0,
      },
      {
        // translateX: "-200vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: section04_ref.current,
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

    tl.to(RowContentWrappers, {
      x: "100%",
      scrollTrigger: {
        start: () => pinTrigger?.start,
        end: () => pinTrigger?.end,
        scrub: 2,
      },
      stagger: 0.1,
    });
    tl.fromTo(
      ColContentWrappers,
      {
        y: "-200%",
        opacity: 0,
      },
      {
        y: "200%",
        opacity: 100,
        scrollTrigger: {
          start: () => pinTrigger?.start,
          end: () => pinTrigger?.end,
          scrub: 2,
        },
        stagger: 0.2,
      }
    );
  }, []);

  return (
    <>
      <div className="content-wrapper h-screen w-full border">
        <div className="flex-col flex ralative justify-center items-center h-screen">
          <p className="content-row-wrapper-class text-[5vw]">asdfsfdsf</p>
          <Image
            className="content-col-wrapper-class absolute top-1/2 left-1/2 w-[30vw] h-auto"
            src={section06_img1.src}
            alt=""
            width={300}
            height={0}
          />
          <Image
            className="content-col-wrapper-class absolute top-1/2 left-1/2 w-[30vw] h-auto"
            src={section06_img6.src}
            alt=""
            width={300}
            height={0}
          />
          <Image
            className="content-col-wrapper-class absolute top-1/3 left-1/3 w-[30vw] h-auto"
            src={section06_img2.src}
            alt=""
            width={300}
            height={0}
          />
          <Image
            className="content-col-wrapper-class absolute top-1/4 left-1/2 w-[30vw] h-auto"
            src={section06_img3.src}
            alt=""
            width={400}
            height={0}
          />
          <h5 className="content-row-wrapper-class text-[10vw] font-bold text-gray-50 whitespace-nowrap transform ">
            A new way of designing, discovering and sharing
          </h5>
          <h1 className="content-row-wrapper-class text-[10vw] font-bold text-gray-50 whitespace-nowrap transform ">
            2024 PROJECT
          </h1>
          <Image
            className="content-col-wrapper-class absolute top-1/6 right-0 w-[30vw] h-auto"
            src={section06_img4.src}
            alt=""
            width={1000}
            height={0}
          />
          <Image
            className="content-col-wrapper-class absolute top-1/6 right-0 w-[30vw] h-auto"
            src={section06_img5.src}
            alt=""
            width={200}
            height={0}
          />
          <Image
            className="content-col-wrapper-class absolute bottom-[73%] right-[35%]"
            src={explosion.src}
            alt=""
            width={200}
            height={0}
          />
        </div>
      </div>
    </>
  );
}
