"use client";

import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant, textVariants } from "../utils/motion";
import Image from "next/image";
import ComponentLayout from "./layout";

const FinishedProjects = () => {
  return (
    <ComponentLayout>
      <>
        <motion.div
          className="sm:mt-20 mt-10 mb-10 flex xs:flex-row-reverse self-center"
          variants={textVariant()}
          id="finishedprojects"
        >
          <h2 className={styles.sectionHeadText}>completed works</h2>
        </motion.div>

        <div className="rounded-lg bg-[#211e35] p-6">
          <motion.div
            className="flex flex-row-reverse text-tertiary"
            variants={textVariant()}
          >
            <h3>project name</h3>
          </motion.div>

          <div className="flex mb-10 gap-10 sm:justify-start sm:flex-row flex-col select-none pointer-events-none">
            <motion.div className="mx-auto" variants={textVariant()}>
              <Image
                className="sm:object-cover object-scale-down rounded-lg w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] "
                width={300}
                height={300}
                src={"/vercel.svg"}
                alt="project name"
              />
            </motion.div>

            <div className="self-center">
              <motion.p variants={fadeIn("", "", 0.1, 1)}>
                This is where i will talk about my project.This is where i will
                talk about my projectThis is where i will talk about my
                projectThis is where i will talk about my projectThis is where i
                will talk about my project
              </motion.p>

              <motion.p
                className="mt-10 mb-0"
                variants={fadeIn("", "", 0.1, 1)}
              >
                <span className="text-tertiary">#mongodb #java</span>
              </motion.p>
            </div>
          </div>
        </div>
      </>
    </ComponentLayout>
  );
};

export default FinishedProjects;
