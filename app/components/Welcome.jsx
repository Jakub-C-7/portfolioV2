"use client";

import { motion } from "framer-motion";
import { styles } from "../styles";
import CampCanvas from "./canvas/CampCanvas";

const Welcome = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 bottom-[60px] max-w-7xl mx-auto flex flex-row items-end gap-5`}
      >
        {/* <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#FF3562]"></div>
          <div className="w-1 sm:h-80 h-40 bg-[#FF3562]"></div>
        </div> */}

        <div className="flex flex-col">
          <h1 className={`${styles.headText} text-white`}>
            hi, I'm <span className="text-[#FF3562]">Jakub</span>
          </h1>
          <p className={`${styles.subTextAlt2}`}>welcome to my base-camp</p>
        </div>
      </div>

      <CampCanvas />

      <div className="absolute xs:bottom-3 bottom-1 w-full flex justify-center items-center">
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
