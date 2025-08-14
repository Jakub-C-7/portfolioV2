"use client";

import ComponentLayout from "./layout";
import FloppyCanvas from "./canvas/FloppyCanvas";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { Canvas, useLoader } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import React from "react";
import { useInView } from "react-intersection-observer";

const Skills = () => {
  const [ref, inView] = useInView({
    /* Optional options */
    triggerOnce: false,
    rootMargin: "0px 0px",
  });

  let canvasDisplay;

  if (inView) {
    {
      canvasDisplay = technologies.map((technology) => (
        <div className="relative w-[20vw] h-[20vh]" key={technology.name}>
          <FloppyCanvas icon={technology.icon} />
          <motion.div className="absolute select-none active:pointer-events-none text-tertiary top-0 left-0 w-full h-2/3 text-center opacity-0 transition duration-300 hover:opacity-100 hover:scale-110">
            {technology.name}
          </motion.div>
        </div>
      ));
    }
  } else {
    canvasDisplay = "";
  }

  return (
    <ComponentLayout>
      <motion.div
        className={`${styles.paddingX} max-w-7xl mx-auto flex items-end gap-5 ml-0 mt-8`}
        variants={textVariant()}
        id="tech"
      >
        <div className="self-center">
          <p className={styles.sectionSubText}>a few of my favourite tools</p>
          <h2 className={styles.sectionHeadText}>technologies</h2>
        </div>
      </motion.div>

      {/* <div className="flex flex-wrap justify-center gap-5 mt-8 w-3/4 mx-auto">
        {technologies.map((technology) => (
          <div
            className="relative sm:w-1/4 sm:h-1/4 w-1/3 h-1/3"
            key={technology.name}
          >
            <FloppyCanvas icon={technology.icon} />
            <motion.div className="absolute select-none active:pointer-events-none text-tertiary top-0 left-0 w-full h-2/3 text-center opacity-0 transition duration-700 hover:opacity-100 hover:scale-110">
              {technology.name}
            </motion.div>
          </div>
        ))}
      </div> */}

      <div
        ref={ref}
        className="flex flex-wrap justify-center mt-8 w-full lg:w-3/4 mx-auto min-h-fit h-[50vh]"
      >
        {canvasDisplay}
      </div>
    </ComponentLayout>
  );
};

export default Skills;
