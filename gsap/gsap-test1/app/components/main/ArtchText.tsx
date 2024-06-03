import { isEnteredAtom } from "@/app/stores";
import {
  useAnimations,
  useGLTF,
  useProgress,
  useScroll,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { useRecoilValue } from "recoil";
import * as THREE from "three";
import { Loader } from "./Loader";
import gsap from "gsap";

export default function ArtchText() {
  const three = useThree();
  const artchTextRef = useRef(null);
  const isEntered = useRecoilValue(isEnteredAtom);
  const { scene, animations } = useGLTF("/models/artch_text_3d.glb");
  const { actions } = useAnimations(animations, artchTextRef);
  const progress = useProgress();
  // const scroll = useScroll();
  let timeline;

  useEffect(() => {
    if (!isEntered) return;
    actions["Scene"]?.play();
    console.log("isEntered");
  }, []);

  useEffect(() => {
    if (!artchTextRef.current) {
      gsap.fromTo(
        three.camera.position,
        { x: -5, y: 5, z: 5 },
        {
          scrollTrigger: {
            trigger: artchTextRef.current,
            // start: "top center",
          },
          duration: 2.5,
          x: 0,
          y: 6,
          z: 12,
        }
      );
    }
    gsap.fromTo(three.camera.rotation, { z: Math.PI }, { duration: 13, z: 0 });
  }, [isEntered, three.camera.position, three.camera.rotation]);

  useEffect(() => {
    console.log();
    if (!artchTextRef.current) {
      timeline = gsap.timeline();
    }
  }, []);

  if (progress.progress === 100) {
    return (
      <>
        <ambientLight intensity={10} />
        <directionalLight />
        <primitive
          ref={artchTextRef}
          object={scene}
          scale={1}
          position={[-5, -2, -1]}
        ></primitive>
      </>
    );
  } else {
    return <Loader isCompleted />;
  }
}
