import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Office } from "./Office";

export default function Experience() {
  return (
    <>
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={1} />
      <pointLight position={[10, 10, 10]} />
      {/* <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh> */}
      <ScrollControls pages={3} damping={0.25}>
        <Office />
      </ScrollControls>
    </>
  );
}
