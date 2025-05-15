import React from "react";
import { motion } from "framer-motion";

const Partnering = () => {
  return (
    <div className="flex justify-between lg:flex-row flex-col  bg-[#f7f7f7] ">
      <div className="lg:py-30 py-10 lg:px-8 px-6 lg:w-[50%] w-full border-e border-e-gray-300">
        <motion.p
        initial={{opacity:0,y:50}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.5,ease:'easeIn'}}
        className="text-[20px] lg:eading-[28px] font-normal">
          / Partnering in health
        </motion.p>
        <motion.h1
        initial={{opacity:0,y:50}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.5,delay:0.3,ease:'easeIn'}}
        className="lg:text-[72px] text-[26px] lg:leading-[85px] mt-5 relative  w-[112%] overflow-hidden  ">
          Intellec presentation
        </motion.h1>
        <motion.p
        initial={{opacity:0,y:50}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.5,delay:0.6,ease:'easeIn'}}
        className="text-[24px] leading-[34px] font-normal  ">
          Preventative & restorative dental treatments
        </motion.p>
      </div>
      <motion.div
      initial={{opacity:0,scale:0.5}}
      whileInView={{opacity:1,scale:1}}
      transition={{duration:0.5,delay:0.4, ease:'easeIn'}}
      className="lg:w-[55%] w-full flex items-center justify-center ">
        <motion.h1
          className="lg:text-[330px] text-[200px] lg:leading-[260px] text-[#EEE2D9] text-center  overflow-hidden "
          animate={{
            x: [0, -2, -1, 1, 0],
          }}
          transition={{
            duration: 5,
            delay:2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          1997
        </motion.h1>
        
      </motion.div>
    </div>
  );
};

export default Partnering;
