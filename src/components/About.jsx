import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

 
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionIntro}  >Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a skilled software developer with experience in TypeScript,
        JavaScript and Java, also expertise in frameworks like React.js, Angular.js, Nest.js, Express.js and
        Spring Framework. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

 
    </>
  );
};

export default SectionWrapper(About, "about");
