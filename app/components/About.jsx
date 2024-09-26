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
    <Tilt className="sm:w-[175px] w-full cursor-move">
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
          <motion.div className="mx-auto 2xl:mr-0" variants={textVariant()}>
            <Image
              className="sm:object-cover object-scale-down rounded-lg w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] "
              width={300}
              height={300}
              src="/me-full-square-colour.jpg"
              alt="Picture of the author"
            />
          </motion.div>

          <div className="self-center mx-auto ml-0 text-white">
            <motion.p variants={fadeIn("", "", 0.1, 1)}>
              I'm a <span className="text-primary">Software Engineer</span> with
              over{" "}
              <span className="text-primary">6 years of coding experience</span>
              , working remotely from (rarely) sunny 16°C Newtown, Wales.
            </motion.p>

            <motion.p className="mt-10 mb-0" variants={fadeIn("", "", 0.1, 1)}>
              I'm an avid programmer with a{" "}
              <span className="text-tertiary">passion for tech</span> and an
              even bigger passion for{" "}
              <span className="text-tertiary">making a meaningful impact</span> with
              it!
            </motion.p>
          </div>
        </div>
        <motion.div
          className="mt-20 mb-12 flex flex-wrap gap-10 justify-center mx-auto max-w-[70%]"
          variants={fadeIn("", "", 0.1, 1)}
        >
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </motion.div>
        <a className="bg-white hover:font-extrabold" href="/files/cv.pdf" download>
             <motion.p
                // className="mt-4 mb-0 select-none pointer-events-none"
                className={`${styles.paddingX} max-w-7xl mx-auto text-center select-none mt-8 mb-4 text-white`}
                variants={fadeIn("", "", 0.1, 1)}
             >
                click <span className="text-tertiary">below</span> to download my cv
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
        <a className="hover:font-extrabold" href="#workshop">
          <motion.p
            // className="mt-4 mb-0 select-none pointer-events-none"
            className={`${styles.paddingX} max-w-7xl mx-auto text-center select-none mt-16 mb-8 text-white`}
            variants={fadeIn("", "", 0.1, 1)}
          >
            come on down, <span className="text-tertiary">find out more</span>{" "}
            about me!
          </motion.p>
          <Image
                width={50}
                height={50}
                alt="arrow down icon"
                src="/generalIcons/arrow-down.png"
                className={`max-w-7xl mx-auto invert`}
          />
        </a>
      </>
    </ComponentLayout>
  );
};

export default About;
