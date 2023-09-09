import { Canvas } from "@react-three/fiber";
import { Stats, OrbitControls } from "@react-three/drei";

export default function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "absolute",
        top: 0,
        left: 0,
      }}
    >
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <mesh rotation={[10, 15, 6]}>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial color="hotpink" />
        </mesh>

        <OrbitControls />
        <Stats />
      </Canvas>
    </div>
  );
}
