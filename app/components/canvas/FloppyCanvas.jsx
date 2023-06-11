"use client";

import { Suspense, useEffect, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  useGLTF,
  Decal,
  Float,
  useTexture,
} from "@react-three/drei";
import CanvasLoader from "../Loader";
import { Floppy } from "../Floppy";

const FloppyCanvas = ({ icon }) => {
  const [isMobile, setIsMobile] = useState(false);

  // Check if the user is on a mobile device dependent on screen width
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the mediaQuery variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      // Remove the listener when the component unmounts
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      className="cursor-pointer"
      frameloop="demand"
      shadows
      camera={{
        position: [0.2, 2.5, 5],
        fov: 50,
        rotation: [0, 0, 0],
        near: 0.1,
      }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2 - 0.3} // Stop users scrolling below the camp
          // minAzimuthAngle={0.5}
          // minPolarAngle={Math.PI / 2 - 0.4}
        />
        <ambientLight intensity={0.25} />
        <directionalLight position={[0, 0, 0.05]} />
        <Floppy imgUrl={icon} isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default FloppyCanvas;
