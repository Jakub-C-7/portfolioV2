"use client";

import React from "react";
import Tilt from "react-parallax-tilt";
import Link from "next/link";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant, textVariants } from "../utils/motion";
import Image from "next/image";
import ComponentLayout from "./layout";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="h-[35vh] md:h-full md:w-[175px] w-full cursor-move">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-secondary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col select-none pointer-events-none"
        >
          <img
            src={icon}
            alt={title}
            loading="lazy"
            className="w-16 h-16 object-contain"
          />
          <h3 className="text-primary text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <ComponentLayout>
      <>
        <motion.div
          // className="sm:mt-20 mt-10 mb-10 flex xs:flex-row flex-row mx-auto"
          className={`${styles.paddingX} max-w-7xl mx-auto flex justify-center xs:justify-start xs:flex-row-reverse items-end gap-5`}
          variants={textVariant()}
          id="about"
        >
          <div className="self-center">
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>Overview</h2>
          </div>
        </motion.div>
        <div className="flex mb-10 gap-10 sm:justify-start sm:flex-row flex-col select-none pointer-events-none">
          <motion.div
            className="mx-auto 2xl:mr-0 min-w-fit md:mr-0"
            variants={textVariant()}
          >
            <Image
              className="sm:object-cover object-scale-down rounded-lg w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] lg:w-[300px] lg:h-[300px]"
              width={300}
              height={300}
              src="/me-full-square-colour.jpg"
              alt="Picture of the author"
            />
          </motion.div>

          <div className="self-center mx-auto ml-0 max-w-sm mt-2 text-white">
            <motion.p variants={fadeIn("", "", 0.1, 1)}>
              I'm a <span className="text-primary">Software Engineer</span> with
              over<span className="text-primary"> 3 years </span>
              of professional engineering experience and
              <span className="text-primary"> 8+ years </span>
              of coding experience, working from (rarely) sunny Newtown, Wales
            </motion.p>

            <motion.p className="mt-4 mb-0" variants={fadeIn("", "", 0.1, 1)}>
              I have{" "}
              <span className="text-tertiary">
                {" "}
                led and delivered projects{" "}
              </span>{" "}
              ranging from microservices and legacy code modernisations to
              innovative LLM proof of concepts. I hold a deep passion for clean,
              sustainable, and efficient code, and a love for tech. I don't shy
              away from a challenge and thrive in environments where I can work
              with others to deliver
              <span className="text-tertiary"> customer-centric </span>
              experiences of the highest quality.
            </motion.p>
          </div>
        </div>
        <motion.div
          className="mt-20 mb-28 md:mb-10 flex flex-wrap gap-10 justify-center mx-auto max-w-[70%]"
          variants={fadeIn("", "", 0.1, 1)}
        >
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </motion.div>
        <a
          className="bg-white hover:font-extrabold"
          href="/files/cv.pdf"
          download
        >
          <motion.p
            // className="mt-4 mb-0 select-none pointer-events-none"
            className={`${styles.paddingX} max-w-7xl mx-auto text-center select-none mt-8 mb-4 text-white`}
            variants={fadeIn("", "", 0.1, 1)}
          >
            learn more by <span className="text-tertiary">downloading</span> my
            cv
          </motion.p>
          <Image
            id="downloadImage"
            width={100}
            height={100}
            alt="cv download icon"
            src="/generalIcons/download.gif"
            className={`max-w-7xl mx-auto rounded-md`}
          />
        </a>
      </>
    </ComponentLayout>
  );
};

export default About;
