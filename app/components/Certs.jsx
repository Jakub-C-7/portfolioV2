"use client";

import React from "react";
import Tilt from "react-parallax-tilt";
import Link from "next/link";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { certifications } from "../constants";
import { fadeIn, textVariant, textVariants } from "../utils/motion";
import Image from "next/image";
import ComponentLayout from "./layout";

const CertCard = ({ index, title, icon }) => {
  return (
    <Tilt
      className="w-[30vw] h-[30vh] sm:w-[175px] sm:h-[175px] cursor-pointer ml-2 mr-2 md:ml-4 md:mr-4 md:mt-4 lg:mt-8 xl:mt-16"
      tiltMaxAngleX={40}
      tiltMaxAngleY={40}
      perspective={1000}
      transitionSpeed={1000}
      scale={1.1}
      gyroscope={true}
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        // className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        // className="w-full shadow-card"
        className="h-full w-full"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-transparent rounded-[20px] py-8 px-4 sm:py-7 sm:px-12 flex justify-center items-center flex-col select-none pointer-events-none"
        >
          <Image
            width={200}
            height={200}
            src={icon}
            alt={title}
            className="w-12 h-12 xs:w-12 xs:h-12 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-24 lg:w-24 object-contain"
          />
          <h3 className="text-primary text-[12px] font-bold text-center mt-2 xs:text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const Certs = () => {
  return (
    <ComponentLayout>
      <motion.div
        className={`${styles.paddingX} max-w-7xl mx-auto flex flex-row-reverse items-end gap-5`}
        variants={textVariant()}
        id="certs"
      >
        <div className="self-center mt-8">
          <p className={styles.sectionSubText}>specialties</p>
          <h2 className={styles.sectionHeadText}>certifications</h2>
        </div>
      </motion.div>
      <motion.div className="mt-0 lg:mb-4 flex flex-wrap gap-4 sm:gap-10 justify-center w-full lg:w-4/5 sm:mx-auto">
        {certifications.map((cert, index) => (
          <Link key={cert.title + "_link"} href={cert.link} target="_blank">
            <CertCard key={cert.title} index={index} {...cert} />
          </Link>
        ))}
      </motion.div>
    </ComponentLayout>
  );
};

export default Certs;
