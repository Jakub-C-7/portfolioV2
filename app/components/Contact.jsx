"use client";

import { styles } from "../styles";
import TreeSwingCanvas from "./canvas/TreeSwingCanvas";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative z-0 w-full h-screen mx-auto bg-background-contact"
    >
      <div
        className={`${styles.paddingX} max-w-7xl mx-auto flex flex-row items-end gap-5 justify-end pt-4`}
      >
        <div className="flex flex-col">
          <h1 className={`${styles.sectionHeadText} text-white`}>
            get in touch
          </h1>
          <h2 className={`${styles.subSmallText} pl-10 text-white`}>
            don't leave me hanging!
          </h2>
        </div>
      </div>

      <div className="h-full w-full bg-background-contact">
        <TreeSwingCanvas />
      </div>

      {/* <div className="flex sm:flex-row flex-col-reverse w-full h-full"> */}
      <div className="absolute bottom-10 left-10 ">
        <form className="sm:ml-20 mx-auto" id="contact-form" method="post">
          <div>
            <label htmlFor="Name">Your name</label>
            <div className="opacity-50">
              <input type="text" id="Name" name="Name" required />
            </div>
          </div>

          <div>
            <label htmlFor="Email">Your email address</label>
            <div className="opacity-50">
              <input type="email" id="Email" name="Email" required />
            </div>
          </div>

          <div>
            <label htmlFor="Message">Your message</label>
            <div className="opacity-50">
              <textarea
                id="Message"
                name="Message"
                rows="6"
                maxLength="2000"
                required
              ></textarea>
            </div>
          </div>

          <div className="hover:bg-[#E37A3E] rounded">
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
