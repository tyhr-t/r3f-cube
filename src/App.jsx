import { Canvas, useFrame } from "@react-three/fiber";
import "./App.css";
import { useRef } from "react";

const Cube = ({ position, size, color }) => {
  const ref = useRef();
  useFrame((state, delta) => {
    ref.current.rotation.x += delta;
    ref.current.rotation.y += delta;
  });
  return (
    <mesh position={position} ref={ref}>
      <boxGeometry args={size} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
};

function App() {
  return (
    <Canvas>
      <directionalLight position={[0, 0, 2]} />
      <Cube position={[1, 0, 0]} color={"green"} size={[1, 1, 1]} />
    </Canvas>
  );
}

export default App;
