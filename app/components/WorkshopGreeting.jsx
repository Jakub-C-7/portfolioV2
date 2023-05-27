"use client";

import { motion } from "framer-motion";
import { styles } from "../styles";
import WorkbenchCanvas from "./canvas/WorkbenchCanvas";

const WorkshopGreeting = () => {
  return (
    <section id="workshop" className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} max-w-7xl mx-auto flex flex-row items-end gap-5`}
      >
        <div className="flex flex-col">
          <h1 className={`${styles.headText} `}>the workshop</h1>
          <h2 className={`${styles.subTextAlt2} pl-10 text-white`}>
            where projects are born
          </h2>
        </div>
      </div>

      <WorkbenchCanvas />
    </section>
  );
};

export default WorkshopGreeting;
