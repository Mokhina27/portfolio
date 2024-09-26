import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ screenSize }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  let scale, position;
  if (screenSize < 400) {
    scale = 0.65;
    position = [0, -4.8, -2.5]; // Сцена ниже
  } else if (screenSize < 500) {
    scale = 0.70;
    position = [0, -4.8, -2.2]; // Сцена ниже
  } else if (screenSize < 600) {
    scale = 0.75;
    position = [0, -4.5, -1.8]; // Сцена ниже
  } else if (screenSize < 700) {
    scale = 0.80;
    position = [0, -4.2, -1.5]; // Сцена ниже
  } else if (screenSize < 900) {
    scale = 0.85;
    position = [0, -3.8, -1.2]; // Сцена ниже
  } else {
    scale = 0.90;
    position = [0, -3.5, -1]; // Сцена ниже
  }

  return (
    <mesh>
      <hemisphereLight intensity={0.5} groundColor="white" />
      <directionalLight
        position={[-10, 10, 5]}
        intensity={2}
        castShadow
        shadow-mapSize={1024}
      />
      <ambientLight intensity={0.3} />
      <spotLight
        position={[10, 20, 10]}
        angle={0.3}
        penumbra={0.5}
        intensity={1.5}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight position={[0, 10, 0]} intensity={1.2} />
      <primitive
        object={computer.scene}
        scale={scale}
        position={position}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); 
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enablePan={false}
        />
        <Computers screenSize={screenSize} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;








