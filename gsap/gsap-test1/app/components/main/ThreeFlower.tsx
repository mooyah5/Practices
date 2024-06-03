import { isEnteredAtom } from "@/app/stores";
import {
  useAnimations,
  useGLTF,
  useProgress,
  useScroll,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { useRecoilValue } from "recoil";
import * as THREE from "three";
import { Loader } from "./Loader";

export default function ThreeFlower() {
  const flowerRef = useRef(null);
  const isEntered = useRecoilValue(isEnteredAtom);
  const { scene, animations } = useGLTF("/models/hibiscus/scene.gltf");
  const { actions } = useAnimations(animations, flowerRef);
  const progress = useProgress();

  const scroll = useScroll();
  // useFrame(() => {
  //   console.log(scroll.offset);
  // });

  useEffect(() => {
    if (!isEntered) return;
    actions["Scene"]?.play();
    console.log("isEntered");
  }, []);

  if (progress.progress === 100) {
    return (
      <>
        <ambientLight intensity={2} />
        <primitive ref={flowerRef} object={scene} scale={10}></primitive>
      </>
    );
  } else {
    return <Loader isCompleted />;
  }
}
