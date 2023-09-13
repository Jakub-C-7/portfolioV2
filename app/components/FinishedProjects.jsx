"use client";

import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import Image from "next/image";
import ComponentLayout from "./layout";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { finishedProjects } from "../constants";
import Link from "next/link";

const FinishedProjects = () => {
  return (
    <ComponentLayout>
      <>
        <motion.div
          // className="sm:mt-20 mt-10 mb-10 flex xs:flex-row-reverse self-center h-3/4"
          // variants={textVariant()}
          className={`${styles.paddingX} max-w-7xl mx-auto flex flex-row xs:flex-row-reverse items-end gap-5 mb-8 mt-12 z-50`}
          variants={textVariant()}
          id="finishedprojects"
        >
          <h2 className={styles.sectionHeadText}>works and projects</h2>
        </motion.div>

        <Carousel
          showArrows={true}
          className="xl:w-1/2 w-full mx-auto"
          // onChange={onChange}
          // onClickItem={onClickItem}
          // onClickThumb={onClickThumb}
        >
          {finishedProjects.map((project, index) => (
            <motion.div
              variants={textVariant()}
              className="rounded-lg bg-[#211e35] p-6 w-full h-full mx-auto text-white"
              key={index}
            >
              <motion.div
                className="flex flex-row-reverse text-tertiary"
                variants={textVariant()}
              >
                <Link href={project.source_code_link} target="_blank">
                  <h3 className="hover:underline mb-6">{project.name}</h3>
                </Link>
              </motion.div>

              <img
                src={project.image}
                // width="300"
                // height="300"
                loading="lazy"
                alt={`${project.name} image`}
                className="max-h-[300px] sm:max-w-[500px] max-w-[300px] aspect-auto"
              />

              <motion.p className="mt-6">{project.description}</motion.p>

              <motion.div
                className="mt-10 mb-0 flex gap-5 flex-wrap justify-items-center"
                variants={fadeIn("", "", 0.1, 1)}
              >
                {project.tags.map((tech, techIndex) => (
                  <p key={`${index}-${techIndex}`} className={`${tech.color}`}>
                    #{tech.name}
                  </p>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </Carousel>
      </>
    </ComponentLayout>
  );
};

export default FinishedProjects;
