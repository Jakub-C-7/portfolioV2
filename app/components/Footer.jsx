"use client";

import { styles } from "../styles";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <section
      id="footer"
      className="relative z-0 w-full h-1/5 mx-auto bg-background-contact"
    >
      <div
        className={`${styles.paddingX} max-w-7xl mx-auto flex justify-around gap-5 pt-4`}
      >
        <div className="flex">
          <p className={`${styles.subSmallText} text-white`}>Art Credits</p>
        </div>
      </div>

      <div
        className={`${styles.paddingX} max-w-7xl mx-auto flex justify-around gap-5 pt-4`}
      >
        <div className="flex">
          <p className={`${styles.subSmallText} text-white`}>
            jakubchamera7@gmail.com
          </p>
        </div>

        <div className="flex">
          <a href="https://www.linkedin.com" className="flex">
            <Image width={100} height={100} src="next.svg" />
          </a>
          <a href="https://www.linkedin.com" className="flex">
            <Image width={100} height={100} src="next.svg" />
          </a>
          <a href="https://www.linkedin.com" className="flex">
            <Image width={100} height={100} src="next.svg" />
          </a>
        </div>
      </div>

      <div
        className={`${styles.paddingX} max-w-7xl mx-auto flex justify-around gap-5 pt-4`}
      >
        <div className="flex">
          <p className={`${styles.subSmallText} text-white`}>
            &copy;Jakub Chamera
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
