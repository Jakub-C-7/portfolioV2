"use client";

import { styles } from "../styles";
import Image from "next/image";

const Footer = () => {
  return (
    <section
      id="footer"
      className="relative z-0 w-full h-1/5 mx-auto bg-background-contact"
    >
      <div
        className={`${styles.paddingX} max-w-7xl mx-auto flex justify-center gap-5 pt-4`}
      >
        <div className="flex">
          <p className={`text-l text-white mt-10`}>Art Credits</p>
        </div>
      </div>

      <div
        className={`${styles.paddingX} max-w-7xl flex justify-center mt-10 mb-10 gap-10`}
      >
        <a
          target="_blank"
          href="mailto:jakubchamera7@gmail.com"
          className="flex"
        >
          <Image width={100} height={100} src="/socialsIcons/mail_main.png" />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/jakubchamera/"
          className="flex"
        >
          <Image
            width={100}
            height={100}
            src="/socialsIcons/linkedin_main.png"
          />
        </a>
        <a target="_blank" href="https://github.com/Jakub-C-7" className="flex">
          <Image width={100} height={100} src="/socialsIcons/github_main.png" />
        </a>
      </div>

      <div
        className={`${styles.paddingX} max-w-7xl mx-auto flex justify-around gap-5 pt-4 opacity-40`}
      >
        <div className="flex">
          <p className={`text-white text-sm`}>&copy;Jakub Chamera</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
