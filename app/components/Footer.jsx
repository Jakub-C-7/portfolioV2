"use client";

import { styles } from "../styles";
import Image from "next/image";

const Footer = () => {
  function handleClick() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }

  return (
    <section
      id="footer"
      className="relative z-0 w-full h-1/5 mx-auto bg-background-contact pt-16"
    >
      <div className="self-center">
        <h2
          className={`${styles.sectionHeadText} text-white flex justify-center`}
        >
          thank you!
        </h2>
        <p className={"text-white flex justify-center text-center ml-2 mr-2"}>
          for stopping by my campsite, get in touch or find out even more about me below
        </p>
      </div>
      <div
        className={`${styles.paddingX} max-w-7xl flex justify-center mt-10 mb-10 gap-10 mx-auto`}
      >
        <a
          target="_blank"
          href="mailto:jakubchamera7@gmail.com"
          className="flex transition hover:scale-110"
        >
          <Image
            width={100}
            height={100}
            alt="mail icon"
            src="/socialsIcons/mail_main.png"
          />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/jakubchamera/"
          className="flex transition hover:scale-110"
        >
          <Image
            width={100}
            height={100}
            alt="linkedin icon"
            src="/socialsIcons/linkedin_main.png"
          />
        </a>
        <a
          target="_blank"
          href="https://github.com/Jakub-C-7"
          className="flex transition hover:scale-110"
        >
          <Image
            width={100}
            height={100}
            alt="github icon"
            src="/socialsIcons/github_main.png"
          />
        </a>
      </div>
      <div
        className={`${styles.paddingX} flex mx-auto max-w-[20%] mb-6 hover:bg-[#E37A3E] rounded justify-center text-center`}
      >
        <div className="popup text-white" onClick={handleClick}>
          Art Credits
          <span className="popuptext" id="myPopup">
              <p className="cursor-default">3D Models: {""} </p>
              <a
                href={"https://www.flaticon.com"}
                className="hover:bg-[#E37A3E]"
                target="_blank"
              >
                Icons{" "}
              </a>
              <a
                href={"https://skfb.ly/6V9Ru"}
                className="hover:bg-[#E37A3E]"
                target="_blank"
              >
                Campsite {""}
              </a>
              <a
                href={"https://skfb.ly/o9ytH"}
                className="hover:bg-[#E37A3E]"
                target="_blank"
              >
                Workbench {""}
              </a>
              <a
                href={"https://skfb.ly/6XnUu"}
                className="hover:bg-[#E37A3E]"
                target="_blank"
              >
                Floppy Disk {""}
              </a>
              <a
                href={"https://skfb.ly/LZLq"}
                className="hover:bg-[#E37A3E]"
                target="_blank"
              >
                Autumn Tree Swing{" "}
              </a>
            </span>
        </div>
      </div>

      <div
        className={`${styles.paddingX} max-w-7xl mx-auto flex justify-center gap-5 pt-4 opacity-40`}
      >
        <p className={`text-white text-sm`}>&copy;Jakub Chamera</p>
      </div>
    </section>
  );
};

export default Footer;
