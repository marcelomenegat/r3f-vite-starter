import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { useControls } from "leva";
import { useMemo } from "react";
import { OrbitControls } from "@react-three/drei";

function App() {
  const options = useMemo(() => {
    return {
      x: { value: 1, min: 0, max: Math.PI * 2, step: 0.01 },
      y: { value: 2, min: 0, max: Math.PI * 2, step: 0.01 },
      z: { value: 3, min: 0, max: Math.PI * 2, step: 0.01 },
      visible: true,
      color: { value: "lime" },
    };
  }, []);

  const cameraControls = useControls("Camera Controls", options);
  // target={[cameraControls.x, cameraControls.y, cameraControls.z]}
  return (
    <Canvas
      shadows
      camera={{
        type: "perspective",
        position: [cameraControls.x, cameraControls.y, cameraControls.z],
        fov: 35,
      }}
    >
      <OrbitControls />
      <gridHelper args={[100, 100, "red", "teal"]} />
      <color attach="background" args={["#ececec"]} />
      <Experience />
    </Canvas>
  );
}

export default App;
