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
        className=' text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
    I'm a dedicated and highly skilled Software Engineer with extensive experience in TypeScript, 
    JavaScript, and Java, complemented by expertise in cutting-edge frameworks such as React.js, 
    Next.js, Angular.js, Nest.js, Express.js, and the Spring Framework. With a passion for building
    efficient, scalable, and user-focused solutions, I thrive on turning complex problems into elegant,
    real-world applications.
      </motion.p>

 
    </>
  );
};

export default SectionWrapper(About, "about");
