"use client";

import {
  Scroll,
  ScrollControls,
  Sky,
  OrbitControls,
  Environment,
  Clone,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useLayoutEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
// import { useControls } from "leva";
import gsap from "gsap";
import Experience from "@/components/Experience";

const Models = [{ name: "kim", url: "/models/tree/christmas_tree_1.glb" }];

const Model = ({ url }: any) => {
  const { scene }: any = useGLTF(url);
  return <Clone object={scene} />;
};

const Box2 = (props: JSX.IntrinsicElements["mesh"]) => {
  const mesh = useRef<THREE.Mesh>(null!);
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.05;
  });
  return (
    <mesh {...props} ref={mesh}>
      <boxGeometry args={[1, 1, 1]} />
      <meshLambertMaterial attach="material" color="royalblue" />
    </mesh>
  );
};

export default function Page() {
  return (
    <div className="w-screen h-screen m-0 p-0">
      <Canvas
        camera={{
          fov: 64,
          position: [2.3, 1.5, 2.3],
        }}
      >
        <OrbitControls enableZoom={false} />
        <Experience />
        <Environment preset="city" />
        <ScrollControls>
          <Suspense>
            {/* <Model url={Models[0].url} /> */}
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            {/* <Box2 position={[-1.2, 0, 0]} />
              <Box2 position={[1.2, 0, 0]} /> */}
          </Suspense>
          <Scroll html>
            <section>
              <h1>about1</h1>
            </section>
            <section>
              <h1>about2</h1>
            </section>
          </Scroll>
          <Sky sunPosition={[100, 110, 50]} />
        </ScrollControls>
      </Canvas>
    </div>
  );
}
