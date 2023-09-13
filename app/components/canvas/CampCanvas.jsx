"use client";

import { Suspense, useEffect, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import { Camp } from "../Camp";

const CampCanvas = () => {
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
      frameloop="always"
      shadows
      camera={{
        position: [15.92, 6.04, -0.97],
        fov: 50,
        rotation: [-94.16, 69.2, 94.45],
        near: 0.1,
      }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={true}
          autoRotateSpeed={0.2}
          maxPolarAngle={Math.PI / 2 - 0.3} // Stop users scrolling below the camp
          // minAzimuthAngle={0.5}
          // minPolarAngle={Math.PI / 2 - 0.4}
        />
        <Camp className="w-1/2 h-1/2 " isMobile={isMobile} />
      </Suspense>
      <Preload />
    </Canvas>
  );
};

export default CampCanvas;
