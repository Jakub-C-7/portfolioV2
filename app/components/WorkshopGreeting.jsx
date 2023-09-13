"use client";

import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import WorkbenchCanvas from "./canvas/WorkbenchCanvas";

const WorkshopGreeting = () => {
  return (
    <section
      id="workshop"
      className="relative w-3/4 h-70v lg:h-80v mx-auto mb-16"
    >
      <motion.div
        variants={textVariant()}
        className={`${styles.paddingX} max-w-7xl mx-auto flex flex-row items-end gap-5 mb-2 md:mb-8`}
      >
        <motion.div variants={fadeIn("", "", 0.1, 1)} className="flex flex-col">
          <h1 className={`${styles.headText} `}>the workshop</h1>
          <h2 className={`${styles.subTextAlt2} pl-10 text-white`}>
            where projects are born
          </h2>
        </motion.div>
      </motion.div>

      <WorkbenchCanvas />
    </section>
  );
};

export default WorkshopGreeting;
