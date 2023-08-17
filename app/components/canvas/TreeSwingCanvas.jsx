"use client";

import { Suspense, useEffect, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import { TreeSwing } from "../Tree_swing";

const TreeSwingCanvas = () => {
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
      className="cursor-pointer sm:pl-16 sm:pt-0 pt-6"
      // className="cursor-pointer sm:pl-16 sm:pt-0 pt-6 h-screen"
      frameloop="always"
      shadows
      camera={{
        position: [-51, 124, 273],
        fov: 55,
        rotation: [-22.64, -5.18, -2.16],
        near: 0.1,
      }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={true}
          autoRotateSpeed={0.3}
          maxPolarAngle={Math.PI / 2} // Stop users scrolling below
        />

        <TreeSwing isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default TreeSwingCanvas;
