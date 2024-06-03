import { Canvas } from "@react-three/fiber";
import ThreeFlower from "./ThreeFlower";
import { Box, ScrollControls } from "@react-three/drei";
import { Suspense } from "react";
import { Loader } from "./Loader";
import * as THREE from "three";
import { useRecoilValue } from "recoil";
import { isEnteredAtom } from "@/app/stores";

export default function Canvas1() {
  const aspectRatio = 1;
  return (
    <>
      <Canvas
        id="canvas1"
        gl={{ antialias: true }}
        shadows="soft"
        camera={{
          fov: 30,
          aspect: aspectRatio,
          near: 0.01,
          far: 1000,
          position: [0, 6, 12],
        }}
        // scene={{ background: new THREE.Color(0x000000) }}
      >
        {/* <ScrollControls pages={3} damping={0.25}> */}
        <Suspense fallback={<Loader />}></Suspense>
        <ThreeFlower />
        {/* </ScrollControls> */}
        {/* <OrbitControls /> */}
        {/* <Box /> */}
      </Canvas>
    </>
  );
}
