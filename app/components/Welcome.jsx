"use client";

import { motion } from "framer-motion";
import { styles } from "../styles";
import CampCanvas from "./canvas/CampCanvas";
import { useInView } from "react-intersection-observer";
import { invalidate } from "@react-three/fiber";

const Welcome = () => {
  const [ref, inView] = useInView({
    /* Optional options */
    triggerOnce: false,
    rootMargin: "0px 0px",
  });

  let canvasDisplay;

  if (inView) {
    {
      canvasDisplay = <CampCanvas />;
      console.log(inView);
    }
  } else {
    canvasDisplay = "";
  }
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 bottom-[80px] max-w-7xl mx-auto flex flex-row items-end gap-5`}
      >
        {/* <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#FF3562]"></div>
          <div className="w-1 sm:h-80 h-40 bg-[#FF3562]"></div>
        </div> */}

        <div ref={ref} className="flex flex-col">
          <h1 className={`${styles.headText} text-white`}>
            hi, I'm <span className="text-[#FF3562]">Jakub</span>
          </h1>
          <p className={`${styles.subTextAlt2} pl-10`}>
            take a seat, get to know me
          </p>
        </div>
      </div>

      {/* <CampCanvas /> */}
      {canvasDisplay}

      <div className="absolute xs:bottom-3 bottom-3 w-full h-1/4 flex justify-center items-end">
        <a href="#about">
          <div className="w-[30px] h-[50px] rounded-3xl border-4 border-secondary flex justify-end items-end p-2">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-tertiary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Welcome;
