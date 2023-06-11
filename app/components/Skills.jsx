"use client";

import ComponentLayout from "./layout";
import FloppyCanvas from "./canvas/FloppyCanvas";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
// import Image from "next/image";

const Skills = () => {
  return (
    <ComponentLayout>
      <motion.div variants={textVariant()} id="tech">
        <p className={styles.sectionSubText}>Current tools in the workshop</p>
        <h2 className={styles.sectionHeadText}>Technologies</h2>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-1/4 h-1/4" key={technology.name}>
            <FloppyCanvas icon={technology.icon} />
            {technology.name}
          </div>
        ))}
      </div>
    </ComponentLayout>
  );
};

export default Skills;
