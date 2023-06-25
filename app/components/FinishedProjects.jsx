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
          className={`${styles.paddingX} max-w-7xl mx-auto flex flex-row xs:flex-row-reverse items-end gap-5 mr-0`}
          variants={textVariant()}
          id="finishedprojects"
        >
          <h2 className={styles.sectionHeadText}>completed works</h2>
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
              className="rounded-lg bg-[#211e35] p-6 w-full h-full mx-auto"
              key={index}
            >
              <motion.div
                className="flex flex-row-reverse text-tertiary"
                variants={textVariant()}
              >
                <Link href={project.source_code_link}>
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
          {/* <motion.div
            variants={textVariant()}
            className="rounded-lg bg-[#211e35] p-6"
          >
            <motion.div
              className="flex flex-row-reverse text-tertiary"
              variants={textVariant()}
            >
              <h3>project name</h3>
            </motion.div>

            <img
              className="sm:object-cover object-scale-down rounded-lg w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] "
              src="vercel.svg"
            />

            <div className="flex mb-10 gap-10 sm:justify-start sm:flex-row flex-col select-none pointer-events-none">
              <motion.div className="mx-auto" variants={textVariant()}>
                <Image
                  className="sm:object-cover object-scale-down rounded-lg w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] "
                  width={300}
                  height={300}
                  src={"/vercel.svg"}
                  alt="project name"
                />
              </motion.div>

              <div className="self-center w-4/5">
                <motion.p variants={fadeIn("", "", 0.1, 1)}>
                  This is where i will talk about my project.This is where i
                  will talk about my projectThis is where i will talk about my
                  projectThis is where i will talk about my projectThis is where
                  i will talk about my project
                </motion.p>

                <motion.p
                  className="mt-10 mb-0"
                  variants={fadeIn("", "", 0.1, 1)}
                >
                  <span className="text-tertiary">#mongodb #java</span>
                </motion.p>
              </div>
            </div>
          </motion.div> */}
        </Carousel>
      </>
    </ComponentLayout>
  );
};

export default FinishedProjects;
