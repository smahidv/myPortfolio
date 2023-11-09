import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./contact.css";

const Contact = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (!inView) {
      controls.start("hidden");
    }
  }, [controls, inView]);
  const opacityVariants = {
    visible: { opacity: 1, transition: { duration: 1, delay: 0.2, bounce: 1 } },
    hidden: { opacity: 0 },
  };
  return (
    <motion.section
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={opacityVariants}
      id="contact"
      className="mt-[60px] bg-black dark:bg-gray-900 mx-auto max-w-60 md:max-w-custom"
    >
      <div className="contact-heading-wrap relative margin-block">
        <h2 className="text-center whitespace-nowrap text-[3.2rem] text-white font-oswald capitalize ">
          Get In Touch <span className="text-primary-1000 font-bold">!</span>
        </h2>
        <p className="whitespace-nowrap text-[13px] font-code tracking-[3px]  text-primary-1000 absolute bottom-[-7px] left-1/2 transform -translate-x-1/2 ">
          I'm looking for opportunities.
        </p>
      </div>

      <div className=" px-4 mx-auto max-w-screen-md">
        <form action="#" className="space-y-8 ">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium  text-white capitalize"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-white capitalize"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-white capitalize"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <div className="center-button grid">
            <button
              type="submit"
              className="mx-auto shared-style-red-botton capitalize bg-primary-1000 sm:w-auto block sm:inline-block"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </motion.section>
  );
};

export default Contact;
