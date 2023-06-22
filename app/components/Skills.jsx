"use client";

import ComponentLayout from "./layout";
import FloppyCanvas from "./canvas/FloppyCanvas";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { Tooltip } from "@nextui-org/react";

const Skills = () => {
  return (
    <ComponentLayout>
      <motion.div variants={textVariant()} id="tech">
        <p className={styles.sectionSubText}>the tools in the workshop</p>
        <h2 className={styles.sectionHeadText}>technologies</h2>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-10 sm:mt-8">
        {technologies.map((technology) => (
          <div className="sm:w-1/4 sm:h-1/4 w-1/3 h-1/3" key={technology.name}>
            <Tooltip content={`${technology.name}`}>
              <FloppyCanvas icon={technology.icon} />
            </Tooltip>
            {/* {technology.name} */}
          </div>
        ))}
      </div>
    </ComponentLayout>
  );
};

export default Skills;
