import { Canvas } from "@react-three/fiber";
import ThreeFlower from "./ThreeFlower";
import {
  Box,
  GradientTexture,
  OrbitControls,
  ScrollControls,
} from "@react-three/drei";
import { Suspense } from "react";
import { Loader } from "./Loader";
import * as THREE from "three";
import { useRecoilValue } from "recoil";
import { isEnteredAtom } from "@/app/stores";
import ArtchText from "./ArtchText";

export default function Canvas1() {
  const aspectRatio = 1;
  return (
    <>
      <Canvas
        id="canvas2"
        gl={{ antialias: true }}
        shadows="soft"
        camera={{
          fov: 30,
          aspect: aspectRatio,
          near: 0.01,
          far: 1000,
          position: [0, 6, 12],
        }}
        // scene={{ background: new THREE.Color(0xffffff) }}
      >
        {/* <ScrollControls pages={3} damping={0.25}> */}
        <Suspense fallback={<Loader />}></Suspense>
        <ArtchText />
        {/* </ScrollControls> */}
      </Canvas>
    </>
  );
}
