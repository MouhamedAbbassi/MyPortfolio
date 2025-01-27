import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import '../index.css';

const Hero = () => {
  return (
    <section id="hero" className="relative w-full h-screen mx-auto">
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-6 h-6 rounded-full bg-green" />
          <div className="w-1 sm:h-60 h-30 xs:h-40 h-20 bg-green border border-green" style={{ borderRadius: '40% 40% 30% 30% / 100% 100% 0 0' }} />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} typing-demo text-white hi`}>
            Hi, I'm <span className="text-green">ABBASSI Mouhamed!</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 font-Geneva text-white-100`}>
          Computer Engineer<br />
            Specializing in Web Development.
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;