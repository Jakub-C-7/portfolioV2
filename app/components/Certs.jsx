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
  console.log(icon);

  return (
    <Tilt className="sm:w-[175px] w-full cursor-pointer">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        // className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-transparent rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col select-none pointer-events-none"
        >
          <Image
            width={200}
            height={200}
            src={icon}
            alt={title}
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

const Certs = () => {
  return (
    <ComponentLayout>
      <motion.div variants={textVariant()} id="tech">
        <p className={styles.sectionSubText}>
          a little more credibility enforcement
        </p>
        <h2 className={styles.sectionHeadText}>certifications</h2>
      </motion.div>
      <motion.div className="mt-10 flex flex-wrap gap-10 justify-center">
        {certifications.map((cert, index) => (
          <Link href={cert.link} target="_blank">
            <CertCard key={cert.title} index={index} {...cert} />
          </Link>
        ))}
      </motion.div>
    </ComponentLayout>
  );
};

export default Certs;
