"use client";

import { styles } from "../styles";
import TreeSwingCanvas from "./canvas/TreeSwingCanvas";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const [ref, inView] = useInView({
    /* Optional options */
    triggerOnce: false,
    rootMargin: "0px 0px",
  });

  let canvasDisplay;

  if (inView) {
    {
      canvasDisplay = <TreeSwingCanvas />;
    }
  } else {
    canvasDisplay = "";
  }

  return (
    <section
      id="contact"
      className="relative z-0 w-full h-screen mx-auto bg-background-contact text-white"
    >
      <div
        className={`${styles.paddingX} max-w-7xl mx-auto flex flex-row items-end gap-5 justify-end pt-4 w-full`}
      >
        <div className="flex flex-col z-50">
          <h1 className={`${styles.sectionHeadText} text-white`}>
            get in touch
          </h1>
          <h2 className={`${styles.subSmallText} pl-10 text-white`}>
            don't leave me hanging!
          </h2>
        </div>
      </div>

      <div
        ref={ref}
        className="absolute top-0 left-0 h-full w-full bg-background-contact"
      >
        {/* <TreeSwingCanvas /> */}
        {canvasDisplay}
      </div>

      <div className="absolute sm:bottom-30 bottom-10 left-10 w-4/5 ">
        <form
          className="sm:ml-28 xl:ml-52 mx-auto"
          id="contact"
          name="contact"
          method="POST"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div>
            <label htmlFor="myName">Your name</label>
            <div className="opacity-50">
              <input id="myName" type="text" name="name" required />
            </div>
          </div>

          <div>
            <label htmlFor="myEmail">Your email address</label>
            <div className="opacity-50">
              <input id="myEmail" type="email" name="email" required />
            </div>
          </div>

          <div>
            <label htmlFor="myMessage">Your message</label>
            <div className="opacity-50">
              <textarea
                id="myMessage"
                name="body"
                rows="6"
                maxLength="2000"
                required
              ></textarea>
            </div>
          </div>

          <div className="hover:bg-[#E37A3E] rounded max-w-fit">
            <button type="submit" id="submit_button">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
